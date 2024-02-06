import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messageRoutes.js";

const PORT = config.get("PORT");
const app = express();

app.use(express.json()); //It parse the incoming requests to the JSON payload (from req.body).
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT} 🚀`);
});
