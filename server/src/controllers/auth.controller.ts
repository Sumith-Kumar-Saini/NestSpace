import { Request, Response, NextFunction } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const data = await registerUser(email, password);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const data = await loginUser(email, password);
    res.json(data);
  } catch (error) {
    next(error);
  }
};