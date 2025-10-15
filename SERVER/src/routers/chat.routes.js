import { Router } from "express";
import { handleChatMessage } from "../controllers/chat.controller.js";

const router = Router();

router.route("/chat").post(handleChatMessage);

export default router;