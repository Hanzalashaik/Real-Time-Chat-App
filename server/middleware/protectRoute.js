import jwt from "jsonwebtoken";
import config from "config";
import User from "../models/User.js";

const protectRoute = async (req, res, next) => {
  try {
    let token = req.headers["access-token"] || req.headers["authorization"];
    // console.log("from protected route", token);

    if (!token) {
      return res.status(401).json({ msg: "Please Token diyo" });
    }
    // console.log(config.get("JWTKEY"));
    const decoded = jwt.verify(token, config.get("JWT_TOKEN")); // Make sure you use "JWT_SECRET" or the actual secret key used to sign the JWT
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Invalid user" });
    }
    // console.log(user);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "JWT Token ka time hogaya" });
  }
};

export default protectRoute;

// try {
//   // Extract the token from cookies
//   let token = req.headers["access-token"] || req.headers["authorization"];
//   // console.log(req.cookies);
//   console.log("protected route", token);
//   if (!token) {
//     return res
//       .status(401)
//       .json({ error: "Unauthorized - No Token Provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, config.get("JWT_TOKEN")); // Make sure you use "JWT_SECRET" or the actual secret key used to sign the JWT
//     const user = await User.findById(decoded.userId).select("-password");
//     if (!user) {
//       return res.status(401).json({ error: "Invalid user" });
//     }
//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ error: "Unauthorized - Invalid Token" });
//   }
// } catch (error) {
//   console.error("Error from protectRoute Middleware", error);
//   res.status(500).json({ error: "Internal server error" });
// }
