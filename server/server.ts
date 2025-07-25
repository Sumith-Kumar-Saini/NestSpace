import app from './src/app';
import dotenv from 'dotenv';
import { cleanEnv, port, str } from 'envalid';
import connectDB from './src/config/db';
import logger from './src/config/winston';

// Load and validate environment variables
dotenv.config({ override: true });

const env = cleanEnv(process.env, {
  PORT: port({ default: 8080 }),
  MONGO_URI: str({ desc: 'MongoDB connection URI' }),
  JWT_SECRET: str({ desc: 'JWT secret key' })
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(env.PORT, () => {
      logger.info(`Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server', { error });
    process.exit(1);
  }
};

startServer();