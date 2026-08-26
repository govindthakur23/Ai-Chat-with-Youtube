import "dotenv/config";

import { tool } from "@langchain/core/tools";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import { z } from "zod";

import { searchVideoTranscript } from "./embeddings.js";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  temperature: 0,
  apiKey: process.env.GEMINI_API_KEY,
});

const memorySaver = new MemorySaver();


// Create an agent locked to one video
export const createVideoAgent = (videoId) => {

  // Tool already knows the current videoId
  const retrieveTool = tool(
    async ({ query }) => {

      const retrievedDocs = await searchVideoTranscript(
        query,
        videoId,
        5
      );

      if (!retrievedDocs.length) {
        return "No relevant transcript chunks were found.";
      }

      return retrievedDocs
        .map((doc) => doc.pageContent)
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
            "The information to search for in the video transcript."
          ),
      }),
    }
  );


  return createAgent({
    model: llm,

    tools: [retrieveTool],

    systemPrompt: `
You are a YouTube video assistant.

You answer questions only using the currently selected video's transcript.

IMPORTANT:
- Always call the retrieve tool for questions about the video.
- Base your answer on the transcript returned by the tool.
- For broad questions such as "key points", summarize the important topics found across the retrieved transcript chunks.
- Do not claim you watched the video.
- If the transcript truly does not contain enough information, clearly say so.
`,

    checkpointer: memorySaver,
  });
};
