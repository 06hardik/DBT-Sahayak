import dotenv from "dotenv";
dotenv.config({
    path: './.env'
});

import connectDB from "./db/index.js";
import { app } from "./app.js"; 
import { initializeScheduler } from "./utils/scheduler.js";

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