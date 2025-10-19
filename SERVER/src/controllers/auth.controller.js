import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { generateAccessToken } from "../utils/jwt.js";

const loginOfficial = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (!username?.trim() || !password?.trim()) {
        throw new ApiError(400, "Username and password are required");
    }

    const user = await User.findOne({ username: username.toLowerCase().trim() });

    if (!user) {
        throw new ApiError(404, "Invalid credentials. User does not exist.");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid credentials. Incorrect password.");
    }

    const accessToken = generateAccessToken(user);
    const loggedInUser = await User.findById(user._id).select("-password");

    return res.status(200).json(
        new ApiResponse(
            200,
            { user: loggedInUser, accessToken },
            "User logged in successfully"
        )
    );
});

export { loginOfficial };