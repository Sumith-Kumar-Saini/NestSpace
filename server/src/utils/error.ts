export class AppError extends Error {
  public readonly statusCode: number;
  public readonly errorCode?: string;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number, errorCode?: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.isOperational = true; // Indicates trusted, operational errors
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message: string, errorCode?: string): AppError {
    return new AppError(message, 400, errorCode);
  }

  static unauthorized(message: string, errorCode?: string): AppError {
    return new AppError(message, 401, errorCode);
  }

  static forbidden(message: string, errorCode?: string): AppError {
    return new AppError(message, 403, errorCode);
  }

  static notFound(message: string, errorCode?: string): AppError {
    return new AppError(message, 404, errorCode);
  }

  static internal(message: string, errorCode?: string): AppError {
    return new AppError(message, 500, errorCode);
  }
}
