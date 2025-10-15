import { Router } from "express";
import { 
    getDashboardStats, 
    getAIInsights, 
    getDetailedAnalytics 
} from "../controllers/dashboard.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT);

router.route("/gov/stats").get(getDashboardStats);
router.route("/gov/insights").get(getAIInsights);
router.route("/gov/analytics").get(getDetailedAnalytics);

export default router;