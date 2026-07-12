import rateLimit from "express-rate-limit";
import { env } from "../../config/env";

// General API rate limit — generous, just a backstop against abuse/bots.
export const apiRateLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  limit: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
});

// Tighter limit specifically for login/auth endpoints to blunt credential
// stuffing and brute-force attempts.
export const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many attempts. Please try again later.", code: "RATE_LIMITED" },
});
