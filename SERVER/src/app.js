import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();

app.set('trust proxy', 1);

app.use(cors({
    origin: "*",
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import verifyRouter from "./routers/verification.routes.js";
import chatRouter from "./routers/chat.routes.js";
import ivrRouter from "./routers/ivr.routes.js";
import authRouter from "./routers/auth.routes.js";
import dashboardRouter from "./routers/dashboard.routes.js";

// routes declaration
app.use("/api/v1", verifyRouter);
app.use("/api/v1", chatRouter);
app.use("/api/v1", ivrRouter);
app.use("/api/v1/gov", authRouter); 
app.use("/api/v1/gov", dashboardRouter);

app.use(errorHandler);

export { app };