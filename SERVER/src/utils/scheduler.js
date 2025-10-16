import cron from "node-cron";
import { Verification } from "../models/verification.model.js";
import { Insight } from "../models/insight.model.js";

const mockGeminiAnalysisCall = async (dailyDataSummary) => {
    const prompt = `
        Analyze the following data summary for the DBT Sahayak platform.
        Data: ${JSON.stringify(dailyDataSummary, null, 2)}
        Generate a concise, actionable insight for a government official.
    `;
    
    console.log("Mock AI Prompt:", prompt); 

    // In a real app, you'd have your Gemini API call logic here.
    return new Promise(resolve => {
        setTimeout(() => {
            const { totalChecks, failureRate, topFailureRegion } = dailyDataSummary;
            if (failureRate > 15) {
                resolve(`⚠️ Alert: High failure rate of ${failureRate.toFixed(1)}% detected. The primary hotspot is ${topFailureRegion.name}, which saw ${topFailureRegion.count} failures. Recommend immediate review of bank operations in that district.`);
            } else {
                resolve(`✅ Analysis: System performance is stable. The overall failure rate was ${failureRate.toFixed(1)}% out of ${totalChecks} total verifications. No critical anomalies detected.`);
            }
        }, 1500);
    });
};

const generateDailyInsight = async () => {
    console.log("Running daily insight generation job...");

    const endDate = new Date();
    endDate.setHours(0, 0, 0, 0);
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 1);

    const verifications = await Verification.find({
        createdAt: {
            $gte: startDate,
            $lt: endDate
        }
    });

    if (verifications.length === 0) {
        console.log("No verifications found for the previous day. Skipping insight generation.");
        return;
    }

    const totalChecks = verifications.length;
    const failures = verifications.filter(v => v.status === "RED" || v.status === "YELLOW");
    const failureRate = (failures.length / totalChecks) * 100;

    const regionCounts = failures.reduce((acc, v) => {
        acc[v.region] = (acc[v.region] || 0) + 1;
        return acc;
    }, {});

    let topFailureRegion = { name: "N/A", count: 0 };
    if (Object.keys(regionCounts).length > 0) {
        const topRegionName = Object.keys(regionCounts).reduce((a, b) => regionCounts[a] > regionCounts[b] ? a : b);
        topFailureRegion = { name: topRegionName, count: regionCounts[topRegionName] };
    }

    const dailyDataSummary = {
        date: startDate.toISOString().split('T')[0],
        totalChecks,
        failureRate,
        topFailureRegion
    };

    const insightText = await mockGeminiAnalysisCall(dailyDataSummary);

    await Insight.create({
        date: startDate,
        insightText: insightText,
        severity: failureRate > 15 ? 'ALERT' : 'NORMAL'
    });

    console.log("Successfully generated and saved daily insight.");
};

const initializeScheduler = () => {
    
    cron.schedule('1 0 * * *', () => {
        generateDailyInsight().catch(err => {
            console.error("Error during daily insight generation:", err);
        });
    }, {
        scheduled: true,
        timezone: "Asia/Kolkata"
    });

    console.log("✅ Daily AI insight scheduler initialized.");
};

export { initializeScheduler };