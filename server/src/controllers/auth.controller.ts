import { Request, Response, NextFunction } from "express";
import { registerUser, loginUser } from "../services/auth.service";

interface SuccessResponse {
  success: boolean;
  data: any;
}

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const data = await registerUser(email, password);
  const response: SuccessResponse = { success: true, data };
  res.status(201).json(response);
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  const data = await loginUser(email, password);
  const response: SuccessResponse = { success: true, data };
  res.status(200).json(response);
};
