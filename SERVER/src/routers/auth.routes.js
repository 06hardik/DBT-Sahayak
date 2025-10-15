import { Router } from "express";
import { loginOfficial } from "../controllers/auth.controller.js";

const router = Router();

router.route("/gov/login").post(loginOfficial);

export default router;