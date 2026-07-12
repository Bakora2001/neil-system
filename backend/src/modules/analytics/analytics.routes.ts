import { Router } from "express";
import { analyticsController } from "./analytics.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";
import { optionalAuth } from "../../common/middleware/auth.middleware";

export const analyticsRouter = Router();

analyticsRouter.post("/events", optionalAuth, asyncHandler(analyticsController.trackEvent));
