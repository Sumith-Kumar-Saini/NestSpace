import winston from 'winston';
import Newsletter from '../models/newsletter.model';
import { AppError } from '../utils/error';
import logger from '../config/winston';

interface SubscribeResponse {
  email: string;
  message: string;
}

export const subscribeUser = async (email: string): Promise<SubscribeResponse> => {
  try {
    const existing = await Newsletter.findOne({ email });
    if (existing) {
      throw AppError.badRequest('Email already subscribed', 'EMAIL_ALREADY_SUBSCRIBED');
    }

    const subscriber = await Newsletter.create({ email });
    logger.info('User subscribed to newsletter', { email });

    // Placeholder for confirmation email logic
    const confirmationMessage = `Thank you for subscribing, ${email}! You'll receive updates soon.`;

    return {
      email: subscriber.email,
      message: confirmationMessage,
    };
  } catch (error) {
    if (error instanceof AppError) throw error;
    logger.error('Error subscribing user to newsletter', { error, email });
    throw AppError.internal('Failed to subscribe to newsletter', 'SUBSCRIBE_FAILED');
  }
};