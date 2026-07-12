import type { Request, Response } from "express";
import { knowledgeHubService } from "./knowledge-hub.service";

export const knowledgeHubController = {
  async list(req: Request, res: Response) {
    const result = await knowledgeHubService.list(req.query, req.user);
    res.status(200).json(result);
  },

  async getById(req: Request, res: Response) {
    const resource = await knowledgeHubService.getById(req.params.id || "", req.user);
    res.status(200).json({ resource });
  },
};
