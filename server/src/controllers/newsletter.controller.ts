import { Request, Response } from "express";
import { subscribeUser } from "../services/newsletter.service";

interface SuccessResponse {
  success: boolean;
  data: any;
}

export const subscribe = async (req: Request, res: Response) => {
  const { email } = req.body;
  const data = await subscribeUser(email);
  const response: SuccessResponse = { success: true, data };
  res.status(201).json(response);
};
