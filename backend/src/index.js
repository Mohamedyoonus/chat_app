import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

// Load environment variables
dotenv.config();

// Properly resolve __dirname in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set PORT from env or default to 5000
const PORT = process.env.PORT || 5000;

// Connect to MongoDB before starting the server
const startServer = async () => {
  try {
    await connectDB();
    // Middleware
    app.use(express.json());
    app.use(cookieParser());
    app.use(
      cors({
        origin: process.env.CORS_ORIGIN || "http://localhost:5173", // Default to local dev
        credentials: true,
      })
    );

    // Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/messages", messageRoutes);

    // Serve frontend in production
    if (process.env.NODE_ENV === "production") {
      app.use(express.static(path.join(__dirname, "../frontend/dist")));

      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
      });
    }

    // Start server
    server.listen(PORT, () => {
      console.log(`🚀 Server is running on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error);
    process.exit(1); // Exit if server fails to start
  }
};

startServer();
