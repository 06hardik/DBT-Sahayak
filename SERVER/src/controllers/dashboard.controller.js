import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Verification } from "../models/verification.model.js";
import { Insight } from "../models/insight.model.js";

// Controller to get the main KPI stats
const getDashboardStats = asyncHandler(async (req, res) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalVerificationsToday = await Verification.countDocuments({ createdAt: { $gte: today } });
    
    const totalVerificationsOverall = await Verification.countDocuments();
    
    const successfulVerifications = await Verification.countDocuments({ status: 'GREEN' });

    const successRate = totalVerificationsOverall > 0 ? (successfulVerifications / totalVerificationsOverall) * 100 : 0;

    const stats = {
        totalVerificationsToday,
        totalVerificationsOverall,
        successRate: parseFloat(successRate.toFixed(1))
    };

    return res.status(200).json(new ApiResponse(200, stats, "Dashboard stats fetched successfully"));
});

// Controller to get the latest AI-generated insights
const getAIInsights = asyncHandler(async (req, res) => {
    // Fetch the 5 most recent insights, sorted by date
    const insights = await Insight.find().sort({ date: -1 }).limit(5);
    
    return res.status(200).json(new ApiResponse(200, insights, "AI insights fetched successfully"));
});

// Controller for more detailed, filterable analytics (Example)
const getDetailedAnalytics = asyncHandler(async (req, res) => {
    // In a real app, you would get filters from req.query (e.g., date, state)
    // For this example, we'll get a simple breakdown by status
    const analytics = await Verification.aggregate([
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            }
        },
        {
            $project: {
                status: "$_id",
                count: 1,
                _id: 0
            }
        }
    ]);
    
    return res.status(200).json(new ApiResponse(200, analytics, "Detailed analytics fetched successfully"));
});


export { getDashboardStats, getAIInsights, getDetailedAnalytics };