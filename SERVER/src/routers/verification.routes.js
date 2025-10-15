import { Router } from "express";
import { verifyStudentStatus } from "../controllers/verification.controller.js";

const router = Router();

router.route("/verify").post(verifyStudentStatus);

export default router;