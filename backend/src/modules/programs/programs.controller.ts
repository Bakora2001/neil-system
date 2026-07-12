import type { Request, Response } from "express";
import { programsService } from "./programs.service";

export const programsController = {
  async list(req: Request, res: Response) {
    const result = await programsService.list(req.query);
    res.status(200).json(result);
  },

  async getBySlug(req: Request, res: Response) {
    const program = await programsService.getBySlug(req.params.slug || "");
    res.status(200).json({ program });
  },
};
