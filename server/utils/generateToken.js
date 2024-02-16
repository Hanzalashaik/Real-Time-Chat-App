import jwt from "jsonwebtoken";
import config from "config";

// Utility function to generate JWT token and set it in a cookie
const generateTokenAndSetCookie = (userId, res) => {
  // Assuming you have a JWT_SECRET in your config
  const token = jwt.sign({ userId: userId }, config.get("JWT_TOKEN"), {
    expiresIn: "1d", // Token expires in 1 day
  });
  if (!token) {
    return res
        .status(500)
        .json({ success: false, msg: "Token generation error" });
  }
  // console.log(`Token generated and cookie set for user ID: ${userId}`);
  return token;
};

export default generateTokenAndSetCookie;
