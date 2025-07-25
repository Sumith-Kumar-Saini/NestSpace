import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { subscribe } from "../controllers/newsletter.controller";
import { validateSubscribe } from "../validators/newsletter.validator";
import { validationResult } from "express-validator";
import { AppError } from "../utils/error";

const router = Router();

const runValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw AppError.badRequest(
      "Validation failed: " + JSON.stringify(errors.array()),
      "VALIDATION_ERROR"
    );
  }
  next();
};

router.post("/subscribe", validateSubscribe, runValidation, subscribe);

export default router;
