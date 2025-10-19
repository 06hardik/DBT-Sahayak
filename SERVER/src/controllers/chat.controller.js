import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const handleChatMessage = asyncHandler(async (req, res) => {
    // The 'status' field will be "RED" or "YELLOW" from the results page,
    // but it will be undefined/null from the general chat modal.
    const { message, status, history } = req.body;

    if (!message) {
        throw new ApiError(400, "Message is required");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });

    // --- Dynamic Prompt Engineering ---
    let systemInstruction = "";

    if (status) {
        // SCENARIO 1: The user has a specific problem (from the results page)
        systemInstruction = `
            You are 'DBT Sahayak', a friendly and empathetic AI assistant for Indian students.
            A student has just checked their scholarship DBT status and it is '${status}'.
            Their question is: "${message}"

            Your task is to provide a simple, reassuring, and step-by-step answer in plain language.
            Your primary goal is to guide them on how to visit their bank and fill the 'Aadhaar Seeding Consent Form'.
            If they ask for a draft application, provide a simple template.
            Keep your response concise and easy to understand.
        `;
    } else {
        // SCENARIO 2: The user has a general question (from the FAQ page modal)
        systemInstruction = `
            You are 'DBT Sahayak', a friendly and helpful AI assistant for Indian students.
            A user is asking a general question about the DBT-Aadhaar scholarship process.
            Their question is: "${message}"

            Your task is to answer their question clearly and concisely.
            If their question seems related to their own status, your primary goal is to gently guide them to use the main verification tool on the homepage by entering their Aadhaar number.
            Do not ask them for their Aadhaar number yourself.
        `;
    }

    const prompt = `
        ${systemInstruction}
        Here is the previous conversation history for context: ${JSON.stringify(history)}
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const aiReply = response.text();

        return res.status(200).json(
            new ApiResponse(200, { reply: aiReply }, "AI response generated successfully")
        );

    } catch (error) {
        console.error("GEMINI API ERROR: ", error);
        throw new ApiError(500, "The AI assistant is currently unavailable. Please try again later.");
    }
});

export { handleChatMessage };