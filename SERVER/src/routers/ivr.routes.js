import { Router } from "express";
import { handleIVRWebhook } from "../controllers/ivr.controller.js";

const router = Router();

router.route("/ivr/webhook").post(handleIVRWebhook);

export default router;