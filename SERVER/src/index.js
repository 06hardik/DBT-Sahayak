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


// routes declare


connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("SERVER ERROR: ", error);
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`🚀 Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });