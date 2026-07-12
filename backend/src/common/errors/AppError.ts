export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400,
    public code: string = "BAD_REQUEST",
    public details?: Record<string, unknown>
  ) {
    super(message);
    this.name = "AppError";
  }

  static unauthorized(message = "Authentication required") {
    return new AppError(message, 401, "UNAUTHORIZED");
  }

  static forbidden(message = "You do not have access to this resource") {
    return new AppError(message, 403, "FORBIDDEN");
  }

  static notFound(message = "Resource not found") {
    return new AppError(message, 404, "NOT_FOUND");
  }

  static conflict(message = "Resource already exists") {
    return new AppError(message, 409, "CONFLICT");
  }
}
