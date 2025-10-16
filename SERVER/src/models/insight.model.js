import mongoose from "mongoose";

const insightSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true,
            unique: true, 
            index: true
        },
        insightText: {
            type: String,
            required: true,
            trim: true,
        },
        severity: {
            type: String,
            required: true,
            enum: ['NORMAL', 'ALERT'], 
            default: 'NORMAL'
        }
    },
    {
        timestamps: true
    }
);

export const Insight = mongoose.model("Insight", insightSchema);