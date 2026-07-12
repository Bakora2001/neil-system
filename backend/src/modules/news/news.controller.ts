import type { Request, Response } from "express";
import { newsService } from "./news.service";

export const newsController = {
  async list(req: Request, res: Response) {
    const result = await newsService.list(req.query);
    res.status(200).json(result);
  },

  async getBySlug(req: Request, res: Response) {
    const post = await newsService.getBySlug(req.params.slug || "");
    res.status(200).json({ post });
  },
};
