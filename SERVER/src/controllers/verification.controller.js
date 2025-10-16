import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Verification } from "../models/verification.model.js";

const mockNpcApiCall = (aadhaarNumber) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const statuses = [
                { status: "GREEN", bankName: "State Bank of India" },
                { status: "YELLOW", bankName: "Punjab National Bank" },
                { status: "RED", bankName: null }
            ];

            const randomResult = statuses[Math.floor(Math.random() * statuses.length)];
            resolve(randomResult);

        }, 1000 + Math.random() * 1000);
    });
};


const verifyStudentStatus = asyncHandler(async (req, res) => {
    const { aadhaarNumber } = req.body;

    if (!aadhaarNumber) {
        throw new ApiError(400, "Aadhaar number is required");
    }

    if (!/^\d{12}$/.test(aadhaarNumber)) {
        throw new ApiError(400, "Invalid Aadhaar number format. It must be 12 digits.");
    }

    const verificationResult = await mockNpcApiCall(aadhaarNumber);

    if (!verificationResult) {
        throw new ApiError(500, "Could not get verification status at this time.");
    }

    await Verification.create({
        status: verificationResult.status,
        bankName: verificationResult.bankName,
        region: "delhi" 
    });

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                status: verificationResult.status,
                bankName: verificationResult.bankName
            },
            "Verification successful"
        )
    );
});

export { verifyStudentStatus };