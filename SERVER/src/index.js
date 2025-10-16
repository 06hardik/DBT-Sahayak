import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env' 
});
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.set('trust proxy', 1);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import verifyRouter from "./routers/verification.routes.js"
import chatRouter from "./routers/chat.routes.js"
import ivrRouter from "./routers/ivr.routes.js"
import authRouter from "./routers/auth.routes.js"
import dashboardRouter from "./routers/dashboard.routes.js"
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import { initializeScheduler } from "./utils/scheduler.js";

// routes declare
app.use("/api/v1", verifyRouter);
app.use("/api/v1", chatRouter);
app.use("/api/v1", ivrRouter);
app.use("/api/v1/gov", authRouter);
app.use("/api/v1/gov", dashboardRouter);

app.use(errorHandler);

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("SERVER ERROR: ", error);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`🚀 Server is running at port: ${process.env.PORT || 8000}`);
            initializeScheduler();
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });