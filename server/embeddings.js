import "dotenv/config";

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { GoogleGenAI } from "@google/genai";

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

// Initialize vector store only
const createVectorStore = async () => {
  const embeddings = new GeminiEmbeddings();

  return await PGVectorStore.initialize(embeddings, {
    postgresConnectionOptions: {
      connectionString: process.env.DB_URL,
    },
    tableName: "transcripts",
    columns: {
      idColumnName: "id",
      vectorColumnName: "embedding",
      contentColumnName: "content",
      metadataColumnName: "metadata",
    },
    distanceStrategy: "cosine",
  });
};

export const vectorStore = await createVectorStore();

// Add scraped YouTube transcript to pgvector
export const addVideoToVectorStore = async (video) => {
  if (!video?.transcript) {
    throw new Error("Video transcript is missing");
  }

  // Check whether this video is already stored
  const existingDocs = await vectorStore.similaritySearch(
    video.title || video.video_id,
    1,
    {
      video_id: video.video_id,
    }
  );

  // Don't insert duplicate transcript chunks
  if (existingDocs.length > 0) {
    return {
      video_id: video.video_id,
      chunks_added: 0,
      already_exists: true,
    };
  }

  const docs = [
    new Document({
      pageContent: video.transcript,
      metadata: {
        video_id: video.video_id,
        title: video.title,
      },
    }),
  ];

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunks = await splitter.splitDocuments(docs);

  await vectorStore.addDocuments(chunks);

  return {
    video_id: video.video_id,
    chunks_added: chunks.length,
    already_exists: false,
  };
};

// Search only inside one video's transcript
export const searchVideoTranscript = async (
  query,
  videoId,
  limit = 3
) => {
  const docs = await vectorStore.similaritySearch(
    query,
    limit,
    {
      video_id: videoId,
    }
  );

  return docs;
};