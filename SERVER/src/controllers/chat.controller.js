import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google AI client with the API key from your environment
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const handleChatMessage = asyncHandler(async (req, res) => {
    const { message, status, history } = req.body;

    if (!message) {
        throw new ApiError(400, "Message is required");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

    // --- Professional Prompt Engineering ---
    let systemInstruction = "";

    if (status) {
        // Context: The user has a specific problem (e.g., status is "RED")
        systemInstruction = `You are 'DBT Sahayak', a friendly and empathetic AI assistant for Indian students. A student's scholarship DBT status is '${status}'. Their question is: "${message}". Your task is to provide a simple, step-by-step answer to help them solve their specific problem. Your primary goal is to guide them on how to visit their bank.`;
    } else {
        // Context: The user has a general question from the FAQ page
        systemInstruction = `You are 'DBT Sahayak', a friendly AI assistant. A user is asking a general question: "${message}". Your task is to answer clearly. If their question is about their personal status, gently guide them to use the main verification tool on the homepage.`;
    }

    const prompt = `${systemInstruction} Previous conversation history: ${JSON.stringify(history)}`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const aiReply = response.text();

        return res.status(200).json(
            new ApiResponse(200, { reply: aiReply }, "AI response generated successfully")
        );

    } catch (error) {
        console.error("GEMINI API ERROR:", error);
        throw new ApiError(500, "The AI assistant is currently unavailable.");
    }
});

export { handleChatMessage };