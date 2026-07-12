import { Router } from "express";
import { knowledgeHubController } from "./knowledge-hub.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";
import { optionalAuth } from "../../common/middleware/auth.middleware";

export const knowledgeHubRouter = Router();

// optionalAuth: anonymous visitors get public resources only; a Full Member
// (or Secretariat/Admin) token unlocks gated resources in the same response.
knowledgeHubRouter.get("/", optionalAuth, asyncHandler(knowledgeHubController.list));
knowledgeHubRouter.get("/:id", optionalAuth, asyncHandler(knowledgeHubController.getById));
