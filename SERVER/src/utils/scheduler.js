import cron from "node-cron";
import { Verification } from "../models/verification.model.js";
import { Insight } from "../models/insight.model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getAIGeneratedInsight = async (dailyDataSummary) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });
        
        const prompt = `
            You are an expert data analyst for the Indian government. Analyze the following daily data summary from the DBT Sahayak platform and write a concise, one-paragraph insight for a senior official.
            1. Start with the most critical finding.
            2. Use the data to explain the finding, highlighting any outlier regions.
            3. Conclude with one clear, data-driven recommendation.

            Data for analysis: ${JSON.stringify(dailyDataSummary, null, 2)}
        `;

        const result = await model.generateContent(prompt);
        return result.response.text();

    } catch (error) {
        console.error("Error calling Gemini API for daily insight:", error);
        return "Automated analysis failed due to an API error.";
    }
};

const generateDailyInsight = async () => {
    console.log("Running daily insight generation job...");
    // ... (Your existing logic for aggregating data remains the same)
    const endDate = new Date();
    endDate.setHours(0, 0, 0, 0);
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 1);
    const verifications = await Verification.find({ createdAt: { $gte: startDate, $lt: endDate } });
    if (verifications.length === 0) {
        console.log("No verifications found. Skipping insight generation.");
        return;
    }
    const totalChecks = verifications.length;
    // ... (rest of your data summary logic)

    const dailyDataSummary = { /* ... your summary object ... */ };

    // Call the REAL AI service to get an insight
    const insightText = await getAIGeneratedInsight(dailyDataSummary);

    // Save the new insight to the database
    await Insight.create({
        date: startDate,
        insightText: insightText,
        severity: dailyDataSummary.failureRate > 15 ? 'ALERT' : 'NORMAL'
    });

    console.log("Successfully generated and saved daily insight using Gemini API.");
};

const initializeScheduler = () => {
    cron.schedule('1 0 * * *', () => {
        generateDailyInsight().catch(err => console.error("Error in scheduled job:", err));
    }, { timezone: "Asia/Kolkata" });
    console.log("✅ Daily AI insight scheduler initialized.");
};

export { initializeScheduler };