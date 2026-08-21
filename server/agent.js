import "dotenv/config";

import { tool } from "@langchain/core/tools";
import { ChatOpenRouter } from "@langchain/openrouter";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import { z } from "zod";

import { searchVideoTranscript } from "./embeddings.js";


// Retrieve transcript chunks for one specific video
const retrieveTool = tool(
  async ({ query, videoId }) => {
    const retrievedDocs = await searchVideoTranscript(
      query,
      videoId,
      3
    );

    if (!retrievedDocs.length) {
      return "No transcript information was found for this video.";
    }

    return retrievedDocs
      .map((doc) => doc.pageContent)
      .join("\n\n");
  },
  {
    name: "retrieve",

    description:
      "Search the transcript of the currently selected YouTube video. Always use this tool before answering questions about the video.",

    schema: z.object({
      query: z
        .string()
        .describe(
          "The question or information to search for in the transcript."
        ),

      videoId: z
        .string()
        .describe(
          "The YouTube video ID whose transcript should be searched."
        ),
    }),
  }
);


const llm = new ChatOpenRouter({
  model: "openai/gpt-oss-20b:free",
  temperature: 0,
  apiKey: process.env.OPEN_API_KEY,
});


const memorySaver = new MemorySaver();


const agent = createAgent({
  model: llm,

  tools: [retrieveTool],

  systemPrompt: `
You are a YouTube video assistant.

You answer questions using the transcript of the selected YouTube video.

IMPORTANT:

- Always use the retrieve tool before answering questions about a video.
- The retrieve tool requires both query and videoId.
- Only use information returned by the retrieve tool.
- Do not claim you watched or directly accessed a YouTube video.
- If the transcript does not contain enough information, say so.
`,

  checkpointer: memorySaver,
});


export { agent };