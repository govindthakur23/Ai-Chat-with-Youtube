import "dotenv/config";

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { GoogleGenAI } from "@google/genai";

import data from "./data.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

class GeminiEmbeddings {
  async embedDocuments(texts) {
    const response = await ai.models.embedContent({
      model: "gemini-embedding-2",
      contents: texts,
    });

    return response.embeddings.map(
      (embedding) => embedding.values
    );
  }

  async embedQuery(text) {
    const response = await ai.models.embedContent({
      model: "gemini-embedding-2",
      contents: text,
    });

    return response.embeddings[0].values;
  }
}

const createVectorStore = async () => {
  const video = data[0];

  const docs = [
    new Document({
      pageContent: video.transcript,
      metadata: {
        video_id: video.video_id,
      },
    }),
  ];

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunks = await splitter.splitDocuments(docs);

  const embeddings = new GeminiEmbeddings();

  const vectorStore = await PGVectorStore.initialize(embeddings, {
    postgresConnectionOptions: {
      connectionString: process.env.DB_URL, 
    },
    tableName: "transcripts",
    columns: {
      idColumnName: "id",
      vectorColumnName: "embedding",
      contentColumnName: "content",
      metadataColumnName: "metadata"
    },
    distanceStrategy: "cosine",
  });

  await vectorStore.addDocuments(chunks);

  return vectorStore;
};

export const vectorStore = await createVectorStore();

