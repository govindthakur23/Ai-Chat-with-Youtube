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

const SPECIFIC_CANDIDATE_LIMIT = 15;
const SPECIFIC_SELECTED_LIMIT = 8;
const BROAD_SIMILARITY_LIMIT = 36;
const BROAD_COVERAGE_LIMIT = 12;
const BROAD_SELECTED_LIMIT = 18;

const broadQueryPattern =
  /\b(summarize|summary|overview|key points|main points|important points|topics covered|what.*discuss|what.*about|overall|high level|takeaways)\b/i;

const stopWords = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "by",
  "for",
  "from",
  "give",
  "how",
  "in",
  "is",
  "it",
  "me",
  "of",
  "on",
  "or",
  "the",
  "this",
  "to",
  "video",
  "what",
  "with",
]);

const isBroadQuery = (query) => broadQueryPattern.test(query);

const tokenize = (text) =>
  String(text || "")
    .toLowerCase()
    .match(/[a-z0-9]+/g)
    ?.filter((token) => token.length > 2 && !stopWords.has(token)) || [];

const toNumber = (value) => {
  const number = Number(value);

  return Number.isFinite(number) ? number : undefined;
};

const getTimestampScale = (segments, videoLength) => {
  const maxEndTime = Math.max(
    ...segments.map((segment) => Number(segment.end_time || 0))
  );

  if (videoLength && maxEndTime > videoLength + 60) {
    return 1000;
  }

  return maxEndTime > 10000 ? 1000 : 1;
};

const normalizeTimestamp = (value, scale) => {
  const number = toNumber(value);

  if (number === undefined) {
    return undefined;
  }

  return Math.max(0, Math.floor(number / scale));
};

const getTimestampedSegments = (video) => {
  if (!Array.isArray(video?.formatted_transcript)) {
    return [];
  }

  return video.formatted_transcript.filter(
    (segment) =>
      typeof segment?.text === "string" &&
      segment.text.trim() &&
      segment.start_time !== undefined &&
      segment.end_time !== undefined
  );
};

const createTimestampedTranscriptChunks = (video, segments) => {
  const chunkSize = 1000;
  const scale = getTimestampScale(
    segments,
    Number(video.video_length || 0)
  );
  const chunks = [];
  let currentSegments = [];
  let currentLength = 0;

  const pushChunk = () => {
    if (!currentSegments.length) {
      return;
    }

    const firstSegment = currentSegments[0];
    const lastSegment = currentSegments[currentSegments.length - 1];
    const pageContent = currentSegments
      .map((segment) => segment.text.trim())
      .join(" ");

    chunks.push(
      new Document({
        pageContent,
        metadata: {
          video_id: video.video_id,
          title: video.title,
          chunk_index: chunks.length,
          start_time: normalizeTimestamp(
            firstSegment.start_time,
            scale
          ),
          end_time: normalizeTimestamp(
            lastSegment.end_time,
            scale
          ),
          source: "formatted_transcript",
        },
      })
    );

    currentSegments = [];
    currentLength = 0;
  };

  for (const segment of segments) {
    const text = segment.text.trim();

    if (currentSegments.length && currentLength + text.length > chunkSize) {
      pushChunk();
    }

    currentSegments.push(segment);
    currentLength += text.length + 1;
  }

  pushChunk();

  return chunks;
};

const createPlainTranscriptChunks = async (video) => {
  const docs = [
    new Document({
      pageContent: video.transcript,
      metadata: {
        video_id: video.video_id,
        title: video.title,
        source: "transcript",
      },
    }),
  ];

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const chunks = await splitter.splitDocuments(docs);

  return chunks.map((chunk, index) => {
    chunk.metadata = {
      ...chunk.metadata,
      chunk_index: index,
    };

    return chunk;
  });
};

export const videoExists = async (videoId) => {
  const result = await vectorStore.pool.query(
    `
      SELECT 1
      FROM ${vectorStore.computedTableName}
      WHERE "${vectorStore.metadataColumnName}"->>'video_id' = $1
      LIMIT 1;
    `,
    [videoId]
  );

  return result.rowCount > 0;
};

export const getStoredVideo = async (videoId) => {
  const result = await vectorStore.pool.query(
    `
      SELECT "${vectorStore.metadataColumnName}" AS metadata
      FROM ${vectorStore.computedTableName}
      WHERE "${vectorStore.metadataColumnName}"->>'video_id' = $1
      LIMIT 1;
    `,
    [videoId]
  );

  const metadata = result.rows[0]?.metadata;

  if (!metadata) {
    return null;
  }

  return {
    video_id: metadata.video_id || videoId,
    title: metadata.title || videoId,
  };
};

const getVideoTranscriptDocuments = async (videoId, limit = 1000) => {
  const result = await vectorStore.pool.query(
    `
      SELECT
        "${vectorStore.idColumnName}" AS id,
        "${vectorStore.contentColumnName}" AS content,
        "${vectorStore.metadataColumnName}" AS metadata
      FROM ${vectorStore.computedTableName}
      WHERE "${vectorStore.metadataColumnName}"->>'video_id' = $1
      ORDER BY
        CASE
          WHEN "${vectorStore.metadataColumnName}"->>'chunk_index' ~ '^[0-9]+$'
          THEN ("${vectorStore.metadataColumnName}"->>'chunk_index')::int
        END NULLS LAST,
        CASE
          WHEN "${vectorStore.metadataColumnName}"->>'start_time' ~ '^[0-9]+(\\.[0-9]+)?$'
          THEN ("${vectorStore.metadataColumnName}"->>'start_time')::numeric
        END NULLS LAST
      LIMIT $2;
    `,
    [videoId, limit]
  );

  return result.rows.map(
    (row) =>
      new Document({
        id: row.id,
        pageContent: row.content,
        metadata: row.metadata || {},
      })
  );
};

const dedupeDocuments = (docs) => {
  const seen = new Set();
  const deduped = [];

  for (const doc of docs) {
    const key =
      doc.id ||
      `${doc.metadata?.video_id}:${doc.metadata?.chunk_index}:${doc.pageContent.slice(0, 120)}`;

    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(doc);
    }
  }

  return deduped;
};

const sampleEvenly = (docs, limit) => {
  if (docs.length <= limit) {
    return docs;
  }

  const sampled = [];

  for (let index = 0; index < limit; index += 1) {
    const docIndex = Math.round(
      (index * (docs.length - 1)) / (limit - 1)
    );

    sampled.push(docs[docIndex]);
  }

  return dedupeDocuments(sampled);
};

const sortByTranscriptPosition = (docs) =>
  [...docs].sort((a, b) => {
    const aIndex = toNumber(a.metadata?.chunk_index);
    const bIndex = toNumber(b.metadata?.chunk_index);
    const aStart = toNumber(a.metadata?.start_time);
    const bStart = toNumber(b.metadata?.start_time);

    return (
      (aIndex ?? Number.MAX_SAFE_INTEGER) -
        (bIndex ?? Number.MAX_SAFE_INTEGER) ||
      (aStart ?? Number.MAX_SAFE_INTEGER) -
        (bStart ?? Number.MAX_SAFE_INTEGER)
    );
  });

const rankSpecificCandidates = (docs, query, limit) => {
  const queryTokens = new Set(tokenize(query));

  return dedupeDocuments(docs)
    .map((doc, index) => {
      const docTokens = new Set(tokenize(doc.pageContent));
      const keywordMatches = [...queryTokens].filter((token) =>
        docTokens.has(token)
      ).length;

      return {
        doc,
        score: keywordMatches * 2 + 1 / (index + 1),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ doc }) => doc);
};

// Add scraped YouTube transcript to pgvector
export const addVideoToVectorStore = async (video) => {
  const timestampedSegments = getTimestampedSegments(video);

  if (!video?.video_id) {
    throw new Error("Video ID is missing");
  }

  if (!video?.transcript && !timestampedSegments.length) {
    throw new Error("Video transcript is missing");
  }

  // Don't insert duplicate transcript chunks
  if (await videoExists(video.video_id)) {
    return {
      video_id: video.video_id,
      chunks_added: 0,
      already_exists: true,
    };
  }

  const chunks = timestampedSegments.length
    ? createTimestampedTranscriptChunks(video, timestampedSegments)
    : await createPlainTranscriptChunks(video);

  await vectorStore.addDocuments(chunks);

  return {
    video_id: video.video_id,
    chunks_added: chunks.length,
    already_exists: false,
    timestamps_available: timestampedSegments.length > 0,
  };
};

// Search only inside one video's transcript
export const searchVideoTranscript = async (
  query,
  videoId,
  limit = 3
) => {
  const strategy = isBroadQuery(query) ? "broad" : "specific";
  let candidates = [];
  let selected = [];

  if (strategy === "broad") {
    const orderedDocs = await getVideoTranscriptDocuments(videoId);
    const coverageDocs = sampleEvenly(
      orderedDocs,
      BROAD_COVERAGE_LIMIT
    );
    const similarDocs = await vectorStore.similaritySearch(
      query,
      BROAD_SIMILARITY_LIMIT,
      {
        video_id: videoId,
      }
    );
    const rankedSimilarDocs = rankSpecificCandidates(
      similarDocs,
      query,
      BROAD_SELECTED_LIMIT - coverageDocs.length
    );

    candidates = dedupeDocuments([...orderedDocs, ...similarDocs]);
    selected = sortByTranscriptPosition(
      dedupeDocuments([...coverageDocs, ...rankedSimilarDocs]).slice(
        0,
        BROAD_SELECTED_LIMIT
      )
    );
  } else {
    candidates = await vectorStore.similaritySearch(
      query,
      Math.max(SPECIFIC_CANDIDATE_LIMIT, limit * 3),
      {
        video_id: videoId,
      }
    );
    selected = rankSpecificCandidates(
      candidates,
      query,
      Math.max(SPECIFIC_SELECTED_LIMIT, limit)
    );
  }

  console.log("[Retrieval]");
  console.log("video_id:", videoId);
  console.log("query:", query);
  console.log("strategy:", strategy);
  console.log("candidates:", candidates.length);
  console.log("selected:", selected.length);

  return {
    docs: selected,
    strategy,
    candidates: candidates.length,
  };
};
