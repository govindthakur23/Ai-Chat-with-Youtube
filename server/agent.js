import "dotenv/config";

import { tool } from "@langchain/core/tools";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import { z } from "zod";

import { searchVideoTranscript } from "./embeddings.js";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-3.5-flash-lite",
  temperature: 0,
  apiKey: process.env.GEMINI_API_KEY,
});

const memorySaver = new MemorySaver();

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


// Create an agent locked to one video
export const createVideoAgent = (videoId) => {
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
    model: llm,

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
