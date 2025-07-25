import { body } from "express-validator";

export const validateSubscribe = [
  body("email")
    .isEmail()
    .withMessage("Must be a valid email")
    .trim()
    .normalizeEmail(),
];
