import { Router } from 'express';
import { signup, login } from '../controllers/auth.controller';
import { validateSignup, validateLogin } from '../validators/auth.validator';
import { validationResult } from 'express-validator';

const router = Router();

const runValidation = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post('/login', validateLogin, runValidation, login);
router.post('/register', validateSignup, runValidation, signup);

export default router;