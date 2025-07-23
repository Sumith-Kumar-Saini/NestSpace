import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import productRoutes from './routes/product.routes';
import authRoutes from './routes/auth.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Error Handling
app.use(errorHandler);

export default app;