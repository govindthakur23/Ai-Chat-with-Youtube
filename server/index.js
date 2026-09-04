import "dotenv/config";
import express from "express";
import cors from "cors";

import { createVideoAgent } from "./agent.js";
import { scrapeYouTubeVideo } from "./youtube.js";
import {
  addVideoToVectorStore,
  getStoredVideo,
} from "./embeddings.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const extractYouTubeVideoId = (url) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.split("/").filter(Boolean)[0];
    }

    if (parsedUrl.searchParams.has("v")) {
      return parsedUrl.searchParams.get("v");
    }

    const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
    const videoPathIndex = pathParts.findIndex((part) =>
      ["embed", "shorts", "live"].includes(part)
    );

    if (videoPathIndex >= 0) {
      return pathParts[videoPathIndex + 1];
    }

    return null;
  } catch {
    return null;
  }
};

const formatSourcesForResponse = (sources) =>
  sources.map(({ text, ...source }) => source);


// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});


// Scrape + store a YouTube video
app.post("/api/video", async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        error: "YouTube URL is required",
      });
    }

    const requestedVideoId = extractYouTubeVideoId(url);

    if (!requestedVideoId) {
      return res.status(400).json({
        error: "Valid YouTube video URL is required",
      });
    }

    const storedVideo = await getStoredVideo(requestedVideoId);

    if (storedVideo) {
      return res.json({
        video_id: storedVideo.video_id,
        title: storedVideo.title,
        chunks_added: 0,
        already_exists: true,
      });
    }

    // Get video data from Bright Data
    const video = await scrapeYouTubeVideo(url);
    const videoToStore = {
      ...video,
      video_id: video.video_id || requestedVideoId,
    };

    // Check which fields Bright Data returned
    console.log(
      "Bright Data video fields:",
      Object.keys(videoToStore)
    );

    // Store transcript in pgvector
    const stored = await addVideoToVectorStore(videoToStore);

    res.json({
      video_id: videoToStore.video_id,
      title: videoToStore.title,
      chunks_added: stored.chunks_added,
      already_exists: stored.already_exists,
      timestamps_available: stored.timestamps_available,
    });

  } catch (error) {
    console.error(
      "YouTube processing failed:",
      error.message
    );

    res.status(500).json({
      error: error.message,
    });
  }
});

// Chat with currently selected video
app.post("/api/chat", async (req, res) => {
  try {
    const {
      message,
      videoId,
      threadId = "1",
    } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    if (!videoId) {
      return res.status(400).json({
        error: "videoId is required",
      });
    }

 // Create agent for the currently selected video
const agent = createVideoAgent(videoId);

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


    const finalMessage =
      result.messages[result.messages.length - 1];


    res.json({
      answer: finalMessage.content,
      sources:
        typeof agent.getSources === "function"
          ? formatSourcesForResponse(agent.getSources())
          : [],
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
