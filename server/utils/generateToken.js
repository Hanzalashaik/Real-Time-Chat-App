import jwt from "jsonwebtoken";
import config from "config";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, config.get("JWT_TOKEN"), {
    expiresIn: "2d",
  });

  res.cookie("jwt", token, {
    maxAge: 2 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks cross-site Scripting attacks
    sameSite: "Strict", //CSRF attacks cross-site request forgery attacks
    // secure: config.get("NODE_ENV"),
  });
};

export default generateTokenAndSetCookie;
