import { Router } from "express";
import { usersController } from "./users.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";
import { requireAuth } from "../../common/middleware/auth.middleware";

export const usersRouter = Router();

usersRouter.get("/me", requireAuth, asyncHandler(usersController.getSelf));
usersRouter.patch("/me", requireAuth, asyncHandler(usersController.updateSelf));
