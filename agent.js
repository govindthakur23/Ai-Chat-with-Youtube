import "dotenv/config";

import { tool } from "@langchain/core/tools";
import { ChatOpenRouter } from "@langchain/openrouter";
import { createAgent } from "langchain";
import { MemorySaver } from "@langchain/langgraph";
import { z } from "zod";

import { vectorStore } from "./embeddings.js";

const retrieveTool = tool(
  async ({ query }) => {
    const retrievedDocs = await vectorStore.similaritySearch(
      query,
      3
    );

    return retrievedDocs
      .map((doc) => doc.pageContent)
      .join("\n\n");
  },
  {
    name: "retrieve",

    description:
      "Search the YouTube video transcript for information. ALWAYS use this tool when the user asks a question about the video, its content, topics, explanations, or what will be understood from it.",

    schema: z.object({
      query: z
        .string()
        .describe("The question or information to search for in the video transcript."),
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

You answer questions using the provided YouTube video transcript.

IMPORTANT:
- For any question about the video, ALWAYS call the retrieve tool first.
- Do not guess or say you don't know which video is being referenced.
- Use the information returned by the retrieve tool to answer.
- If the retrieved transcript does not contain enough information, say that the transcript does not provide enough information.
`,
  
  checkpointer: memorySaver,
});

export { agent };