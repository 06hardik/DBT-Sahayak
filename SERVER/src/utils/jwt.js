import jwt from "jsonwebtoken";
const generateAccessToken = (user) => {
    const token = jwt.sign(
        {
            _id: user._id,
            username: user.username,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY || '1d'
        }
    );
    return token;
};

export { generateAccessToken };