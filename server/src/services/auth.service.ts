import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { AppError } from "../utils/error";
import winston from "winston";
import logger from "../config/winston";

interface AuthResponse {
  user: { email: string; id: string };
  token: string;
}

export const registerUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const existing = await User.findOne({ email });
    if (existing) {
      throw AppError.badRequest("User already exists", "USER_EXISTS");
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = (await User.create({
      email,
      password: hashed,
    })) as typeof User.prototype;

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    logger.info("User registered successfully", { email });

    return {
      user: { email: user.email, id: user._id.toString() },
      token,
    };
  } catch (error) {
    if (error instanceof AppError) throw error;
    logger.error("Error registering user", { error, email });
    throw AppError.internal("Failed to register user", "REGISTER_FAILED");
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const user = (await User.findOne({ email })) as typeof User.prototype;
    if (!user) {
      throw AppError.unauthorized(
        "Invalid email or password",
        "INVALID_CREDENTIALS"
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw AppError.unauthorized(
        "Invalid email or password",
        "INVALID_CREDENTIALS"
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    logger.info("User logged in successfully", { email });

    return {
      user: { email: user.email, id: user._id.toString() },
      token,
    };
  } catch (error) {
    if (error instanceof AppError) throw error;
    logger.error("Error logging in user", { error, email });
    throw AppError.internal("Failed to login user", "LOGIN_FAILED");
  }
};
