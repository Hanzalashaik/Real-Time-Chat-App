import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = config.get("PORT");
const app = express();

app.use(express.json()); // Body parser
app.use(cookieParser()); // Cookie parser
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running at port ${PORT} 🚀`);
});
