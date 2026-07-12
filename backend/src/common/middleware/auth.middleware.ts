import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { AppError } from "../errors/AppError";
import type { UserRole } from "@ndip/shared/types";

export interface AccessTokenPayload {
  sub: string;
  role: UserRole;
  institutionId: string | null;
}

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : req.cookies?.accessToken;

  if (!token) {
    return next(AppError.unauthorized());
  }

  try {
    const payload = jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload;
    req.user = payload;
    next();
  } catch {
    next(AppError.unauthorized("Invalid or expired session"));
  }
}

export function optionalAuth(req: Request, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : req.cookies?.accessToken;

  if (!token) return next();

  try {
    req.user = jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload;
  } catch {
    // Ignore invalid/expired tokens on optional routes — treat as anonymous.
  }
  next();
}

export function requireRole(...roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.user) return next(AppError.unauthorized());
    if (!roles.includes(req.user.role)) return next(AppError.forbidden());
    next();
  };
}
