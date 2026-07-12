import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { logger } from "../utils/logger";

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}`, code: "ROUTE_NOT_FOUND" });
}

// Express identifies error-handling middleware by arity — keep all 4 params.
export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message, code: err.code, details: err.details });
  }

  if (err instanceof ZodError) {
    return res.status(422).json({
      message: "Validation failed",
      code: "VALIDATION_ERROR",
      details: err.flatten().fieldErrors,
    });
  }

  logger.error({ err, path: req.originalUrl }, "Unhandled error");
  return res.status(500).json({ message: "Internal server error", code: "INTERNAL_ERROR" });
}
