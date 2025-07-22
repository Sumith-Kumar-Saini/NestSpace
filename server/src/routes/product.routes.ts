import { Router } from 'express';
import { getAllProducts, getProductById } from '../controllers/product.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware);
router.get('/', getAllProducts);
router.get('/:id', getProductById);

export default router;