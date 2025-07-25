import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";
import productRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";
import newsletterRoutes from "./routes/newsletter.routes";
import errorHandler from "./middlewares/errorHandler";
import logger from "./config/winston";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Security headers with Helmet
app.use(helmet());

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:3000", "http://localhost:5173"]; // Default to common dev origins

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., non-browser clients like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // Support cookies or auth headers
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly allow methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow headers used by Axios
  })
);

// Middlewares
app.use(
  morgan("dev", {
    stream: { write: (message: string) => logger.info(message.trim()) },
  })
);
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ success: true, data: { message: "Welcome to NestSpace backend" } });
});

// Health check route
app.get("/health", async (req, res) => {
  try {
    const dbStatus =
      mongoose.connection.readyState === 1 ? "connected" : "disconnected";
    logger.info("Health check requested", { dbStatus });
    res.status(200).json({
      success: true,
      data: {
        status: "healthy",
        uptime: process.uptime(),
        database: dbStatus,
      },
    });
  } catch (error) {
    logger.error("Health check failed", { error });
    res.status(500).json({
      success: false,
      error: { message: "Health check failed", code: "HEALTH_CHECK_FAILED" },
    });
  }
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/newsletter", newsletterRoutes);

// Error Handling
app.use(errorHandler);

export default app;
