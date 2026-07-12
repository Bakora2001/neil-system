import { Router } from "express";
import { programsController } from "./programs.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";

export const programsRouter = Router();

programsRouter.get("/", asyncHandler(programsController.list));
programsRouter.get("/:slug", asyncHandler(programsController.getBySlug));

// Admin/Secretariat-only create/update/delete routes belong here too, guarded
// with `requireAuth` + `requireRole("SECRETARIAT", "ADMIN")`, once the CMS
// write-side is built.
