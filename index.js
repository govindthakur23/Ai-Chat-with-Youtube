import "dotenv/config";
import express from "express";
import cors from "cors";
import { agent } from "./agent.js";

const app = express();

app.use(cors());
app.use(express.json());

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

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});