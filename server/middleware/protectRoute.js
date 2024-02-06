import jwt from "jsonwebtoken";
import config from "config";
import User from "../models/User.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }
    const verify = jwt.verify(token, config.get("JWT_TOKEN"));
    if (!verify) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(verify.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Invalid user" });
    }
    req.user = user;
    // console.log(req.user);
    next();
  } catch (error) {
    console.log("Error from protectRoute Middleware", error);
    res.status(500).json({ sucess: "Internal server error" });
  }
};

export default protectRoute;
