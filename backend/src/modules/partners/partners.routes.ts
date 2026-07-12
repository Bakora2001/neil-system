import { Router } from "express";
import { partnersController } from "./partners.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";

export const partnersRouter = Router();

partnersRouter.get("/", asyncHandler(partnersController.list));
