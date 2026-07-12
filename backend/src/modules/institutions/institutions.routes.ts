import { Router } from "express";
import { institutionsController } from "./institutions.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";
import { requireAuth } from "../../common/middleware/auth.middleware";

export const institutionsRouter = Router();

institutionsRouter.get("/", requireAuth, asyncHandler(institutionsController.list));
institutionsRouter.post("/register", asyncHandler(institutionsController.registerInstitution));
institutionsRouter.get("/:id", requireAuth, asyncHandler(institutionsController.getById));

