import winston from "winston";

const isProduction = process.env.NODE_ENV === "production";

const logger = winston.createLogger({
  level: isProduction ? "info" : "debug", // More verbose in development
  format: winston.format.combine(
    winston.format.timestamp(),
    isProduction
      ? winston.format.json() // JSON format for production (better for log aggregation)
      : winston.format.combine(
          winston.format.colorize(), // Colorized logs for development
          winston.format.simple() // Simpler format for development
        )
  ),
  transports: [
    // Console transport
    new winston.transports.Console({
      silent: isProduction, // Disable console logging in production
    }),
    // File transports for errors and combined logs
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

// In production, you might want to add a transport for a remote logging service
if (isProduction) {
  // Example: Add additional transports (e.g., to a remote logging service)
  // logger.add(new winston.transports.Http({ host: 'log-service.example.com', port: 443 }));
}

export default logger;
