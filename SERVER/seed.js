import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { User } from "./src/models/user.model.js";

dotenv.config({ path: './.env' });

const createDemoUser = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected for seeding.");

        const username = "demo-official";
        const email = "demo@sih.gov.in";
        const password = "admin@1234"; 
        const role = "ADMIN";

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            console.log("Demo user already exists.");
            return;
        }

        await User.create({
            username,
            email,
            password,
            role,
        });

        console.log("✅ Demo user created successfully!");
        console.log(`Username: ${username}`);
        console.log(`Password: ${password}`);

    } catch (error) {
        console.error("Error creating demo user:", error);
    } finally {
        await mongoose.disconnect();
        console.log("Database connection closed.");
    }
};

createDemoUser();