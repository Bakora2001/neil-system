import { Router } from "express";
import { newsController } from "./news.controller";
import { asyncHandler } from "../../common/utils/asyncHandler";

export const newsRouter = Router();

newsRouter.get("/", asyncHandler(newsController.list));
newsRouter.get("/:slug", asyncHandler(newsController.getBySlug));
