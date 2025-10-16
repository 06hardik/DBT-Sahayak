import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema(
    {
        status: {
            type: String,
            required: true,
            enum: ['GREEN', 'YELLOW', 'RED'],
            index: true
        },
        bankName: {
            type: String,
            trim: true,
            default: null
        },
        region: {
            type: String,
            required: true,
            trim: true,
            default: "Unknown"
        },
        channel: {
            type: String,
            required: true,
            enum: ['WEB', 'IVR'], 
            default: 'WEB'
        }
    },
    {
        timestamps: true
    }
);

export const Verification = mongoose.model("Verification", verificationSchema);