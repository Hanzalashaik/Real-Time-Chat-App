import jwt from "jsonwebtoken";
import config from "config";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, config.get("JWT_TOKEN"), {
    expiresIn: "2d",
  });

  // Set cookie options
  const cookieOptions = {
    maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days in milliseconds
    httpOnly: true, // Prevent XSS attacks
    sameSite: "Strict", // Mitigate CSRF attacks
  };

  // Set cookie
  res.cookie("jwt", token, cookieOptions);
};

export default generateTokenAndSetCookie;
