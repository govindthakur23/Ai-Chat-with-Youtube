import "dotenv/config";

import { tool } from "@langchain/core/tools";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import { z } from "zod";

import { searchVideoTranscript } from "./embeddings.js";

export const GEMINI_PRIMARY_MODEL =
  process.env.GEMINI_PRIMARY_MODEL || "gemini-3.5-flash-lite";
export const GEMINI_FALLBACK_MODEL =
  process.env.GEMINI_FALLBACK_MODEL || "gemini-3.5-flash";

const PRIMARY_RETRY_DELAYS = [2000, 4000];

const createLLM = (modelName) =>
  new ChatGoogleGenerativeAI({
    model: modelName,
    temperature: 0,
    apiKey: process.env.GEMINI_API_KEY,
  });

const memorySaver = new MemorySaver();

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const toNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : undefined;
};

const formatSeconds = (seconds) => {
  const value = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const remainingSeconds = value % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
};

const documentToSource = (doc) => {
  const startTime = toNumber(doc.metadata?.start_time);
  const endTime = toNumber(doc.metadata?.end_time);
  const source = {
    video_id: doc.metadata?.video_id,
    title: doc.metadata?.title,
    text: doc.pageContent,
  };

  if (startTime !== undefined) {
    source.start_time = startTime;
  }

  if (endTime !== undefined) {
    source.end_time = endTime;
  }

  return source;
};

const dedupeSources = (sources) => {
  const seen = new Set();
  const deduped = [];

  for (const source of sources) {
    const key = `${source.video_id}:${source.start_time ?? "none"}:${source.text.slice(0, 120)}`;

    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(source);
    }
  }

  return deduped;
};

const formatSourceForTool = (source, index) => {
  const timestamp =
    source.start_time !== undefined
      ? source.end_time !== undefined
        ? `${formatSeconds(source.start_time)}-${formatSeconds(source.end_time)}`
        : formatSeconds(source.start_time)
      : "unavailable";

  return `SOURCE ${index + 1}
Title: ${source.title || "Untitled video"}
Timestamp: ${timestamp}
Transcript: ${source.text}`;
};

const getErrorStatus = (error) =>
  error?.status ||
  error?.statusCode ||
  error?.response?.status ||
  error?.error?.code ||
  error?.code;

const getSafeErrorMessage = (error) =>
  String(error?.message || error || "").slice(0, 240);

const isRetryableGeminiError = (error) => {
  const status = Number(getErrorStatus(error));
  const message = getSafeErrorMessage(error);

  if (
    /\b(400|401|403|404)\b/.test(message) ||
    /api key|permission|unauthorized|forbidden|not found|invalid argument/i.test(
      message
    )
  ) {
    return false;
  }

  return (
    status === 429 ||
    status === 503 ||
    /429|503|too many requests|service unavailable|high demand|temporar/i.test(
      message
    ) ||
    /resource_exhausted|unavailable/i.test(message)
  );
};

const createTemporaryAIServiceError = () => {
  const error = new Error(
    "AI service is temporarily unavailable. Please try again shortly."
  );

  error.code = "AI_SERVICE_TEMPORARILY_UNAVAILABLE";
  error.status = 503;

  return error;
};

const logTemporaryFailure = (label, error) => {
  console.warn(
    `[LLM] ${label} temporary failure:`,
    getErrorStatus(error) || "unknown",
    getSafeErrorMessage(error)
  );
};


// Create an agent locked to one video
export const createVideoAgent = (videoId, modelName = GEMINI_PRIMARY_MODEL) => {
  let retrievedSources = [];

  // Tool already knows the current videoId
  const retrieveTool = tool(
    async ({ query }) => {

      const retrieval = await searchVideoTranscript(
        query,
        videoId,
        5
      );
      const retrievedDocs = retrieval.docs;

      if (!retrievedDocs.length) {
        return "No relevant transcript chunks were found.";
      }

      const sources = retrievedDocs.map(documentToSource);
      retrievedSources = dedupeSources([
        ...retrievedSources,
        ...sources,
      ]);

      return sources
        .map(formatSourceForTool)
        .join("\n\n");
    },
    {
      name: "retrieve",

      description:
        "Search the transcript of the currently selected YouTube video. Always use this tool for questions about the video.",

      schema: z.object({
        query: z
          .string()
          .describe(
            "The information to search for in the current video transcript. Use a broad query for summaries, overviews, key points, or topics covered."
          ),
      }),
    }
  );


  const agent = createAgent({
    model: createLLM(modelName),

    tools: [retrieveTool],

    systemPrompt: `
You are a YouTube video assistant.

You answer questions only using the currently selected video's transcript.

IMPORTANT:
- Always call the retrieve tool for questions about the video.
- Answer only from the transcript sources returned by the retrieve tool.
- Never use general knowledge to fill missing transcript information.
- Do not claim you watched the video.
- Never invent names, numbers, examples, timestamps, or claims.
- If the sources support only part of the answer, answer that part and say what could not be verified from the retrieved transcript.
- Do not say the video does not contain something just because retrieval was insufficient. Say you could not find enough evidence in the retrieved transcript to answer confidently.
- For broad questions such as "key points", summarize the important topics found across the retrieved transcript sources.
`,

    checkpointer: memorySaver,
  });

  agent.getSources = () => dedupeSources(retrievedSources);

  return agent;
};

const invokeAgent = async ({
  videoId,
  message,
  threadId,
  modelName,
}) => {
  const agent = createVideoAgent(videoId, modelName);
  const result = await agent.invoke(
    {
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    },
    {
      configurable: {
        thread_id: threadId,
      },
    }
  );

  return {
    result,
    sources:
      typeof agent.getSources === "function"
        ? agent.getSources()
        : [],
  };
};

export const invokeVideoAgentWithFallback = async ({
  videoId,
  message,
  threadId,
}) => {
  console.log("[LLM] primary:", GEMINI_PRIMARY_MODEL);

  let lastRetryableError;

  for (
    let attempt = 0;
    attempt <= PRIMARY_RETRY_DELAYS.length;
    attempt += 1
  ) {
    try {
      const response = await invokeAgent({
        videoId,
        message,
        threadId,
        modelName: GEMINI_PRIMARY_MODEL,
      });

      return {
        ...response,
        model: GEMINI_PRIMARY_MODEL,
      };
    } catch (error) {
      if (!isRetryableGeminiError(error)) {
        throw error;
      }

      lastRetryableError = error;
      logTemporaryFailure("primary", error);

      const retryDelay = PRIMARY_RETRY_DELAYS[attempt];

      if (retryDelay === undefined) {
        break;
      }

      console.log("[LLM] retrying primary: attempt", attempt + 2);
      await sleep(retryDelay);
    }
  }

  if (GEMINI_FALLBACK_MODEL === GEMINI_PRIMARY_MODEL) {
    throw createTemporaryAIServiceError();
  }

  console.log("[LLM] switching to fallback:", GEMINI_FALLBACK_MODEL);

  try {
    const response = await invokeAgent({
      videoId,
      message,
      threadId,
      modelName: GEMINI_FALLBACK_MODEL,
    });

    console.log("[LLM] fallback succeeded");

    return {
      ...response,
      model: GEMINI_FALLBACK_MODEL,
    };
  } catch (error) {
    if (isRetryableGeminiError(error)) {
      logTemporaryFailure("fallback", error);
      throw createTemporaryAIServiceError();
    }

    throw error || lastRetryableError;
  }
};
