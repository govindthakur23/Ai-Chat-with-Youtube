import "dotenv/config";
import express from "express";
import cors from "cors";
import { agent } from "./agent.js";
import { scrapeYouTubeVideo } from "./youtube.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple endpoint to verify Render deployment
app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

// Temporary endpoint to test Bright Data YouTube scraping
app.post("/api/test-youtube", async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                error: "YouTube URL is required",
            });
        }

        const video = await scrapeYouTubeVideo(url);

        res.json({
            video_id: video.video_id,
            title: video.title,
            description: video.description,
            transcript: video.transcript,
        });

    } catch (error) {
        console.error("YouTube scraping failed:", error.message);

        res.status(500).json({
            error: "Failed to scrape YouTube video",
        });
    }
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message, threadId = "1" } = req.body;

        if (!message) {
            return res.status(400).json({
                error: "Message is required",
            });
        }

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
            error: "Something went wrong",
        });
    }
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});