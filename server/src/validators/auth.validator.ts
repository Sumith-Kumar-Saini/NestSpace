import { body } from 'express-validator';

export const validateSignup = [
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be 6+ chars')
];

export const validateLogin = [
  body('email').isEmail(),
  body('password').notEmpty()
];