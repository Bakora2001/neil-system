import type { Request, Response } from "express";
import { institutionsService } from "./institutions.service";

export const institutionsController = {
  async list(req: Request, res: Response) {
    const result = await institutionsService.list(req.query);
    res.status(200).json(result);
  },

  async getById(req: Request, res: Response) {
    const institution = await institutionsService.getById(req.params.id || "");
    res.status(200).json({ institution });
  },

  async registerInstitution(req: Request, res: Response) {
    const result = await institutionsService.register(req.body);
    res.status(201).json(result);
  }
};

