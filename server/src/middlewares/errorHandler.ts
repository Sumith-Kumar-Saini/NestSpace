import { Request, Response, NextFunction } from "express";
import { MongoError } from "mongodb";
import { Error as MongooseError } from "mongoose";
import jwt from "jsonwebtoken";
import { AppError } from "../utils/error";
import winston from "winston";
import logger from "../config/winston";

interface ErrorResponse {
  success: boolean;
  error: {
    message: string;
    code?: string;
  };
}

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let error: AppError;

  // Handle specific error types
  if (err instanceof AppError) {
    error = err;
  } else if (err instanceof MongoError) {
    error = AppError.internal(`Database error: ${err.message}`, "DB_ERROR");
  } else if (err instanceof MongooseError) {
    error = AppError.internal(
      `Mongoose error: ${err.message}`,
      "MONGOOSE_ERROR"
    );
  } else if (err instanceof jwt.JsonWebTokenError) {
    error = AppError.unauthorized(
      `Invalid token: ${err.message}`,
      "INVALID_TOKEN"
    );
  } else if (err instanceof jwt.TokenExpiredError) {
    error = AppError.unauthorized("Token expired", "TOKEN_EXPIRED");
  } else {
    // Handle unexpected errors
    error = AppError.internal("Internal Server Error", "INTERNAL_SERVER_ERROR");
  }

  // Log the error
  logger.error("Request error", {
    error: error.message,
    code: error.errorCode,
    path: req.path,
    method: req.method,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });

  // Prepare response
  const response: ErrorResponse = {
    success: false,
    error: {
      message: error.message,
      code: error.errorCode,
    },
  };

  res.status(error.statusCode).json(response);
}
