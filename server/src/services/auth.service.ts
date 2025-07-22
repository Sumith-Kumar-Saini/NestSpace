import bcrypt from "bcryptjs";
import User from "../models/user.model";
import { signToken } from "../utils/jwt";

export const registerUser = async (email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hashed });
  const token = signToken({ id: user._id, email: user.email });
  return { user: { email: user.email }, token };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");
  const token = signToken({ id: user._id, email: user.email });
  return { user: { email: user.email }, token };
};
