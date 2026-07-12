import { Router } from "express";
import { authController } from "./auth.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";
import { authRateLimiter } from "../../common/middleware/rateLimiter";
import { requireAuth } from "../../common/middleware/auth.middleware";

export const authRouter = Router();

authRouter.post("/register", authRateLimiter, asyncHandler(authController.register));
authRouter.post("/login", authRateLimiter, asyncHandler(authController.login));
authRouter.post("/refresh", asyncHandler(authController.refresh));
authRouter.post("/logout", asyncHandler(authController.logout));
authRouter.get("/me", requireAuth, asyncHandler(authController.me));
