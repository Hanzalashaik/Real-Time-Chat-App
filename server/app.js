import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { app, server } from "./socket/socket.js";

const PORT = config.get("PORT");
const URL = config.get("URL");

app.use(express.json()); // Body parser
app.use(cookieParser()); // Cookie parser
app.use(
  cors({
    credentials: true,
    origin: `${URL}`,
    exposedHeaders: ["set-cookie"], // This tells the browser to expose the Set-Cookie header to the client
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT} 🚀`);
});
