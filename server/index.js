import "dotenv/config";
import express from "express";
import cors from "cors";

import { createVideoAgent } from "./agent.js";
import { scrapeYouTubeVideo } from "./youtube.js";
import { addVideoToVectorStore } from "./embeddings.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


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

    // Get video data from Bright Data
    const video = await scrapeYouTubeVideo(url);

    // Check which fields Bright Data returned
    console.log(
      "Bright Data video fields:",
      Object.keys(video)
    );

    // Store transcript in pgvector
    const stored = await addVideoToVectorStore(video);

    res.json({
      video_id: video.video_id,
      title: video.title,
      chunks_added: stored.chunks_added,
      already_exists: stored.already_exists,
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