import type { Request, Response } from "express";
import { partnersService } from "./partners.service";

export const partnersController = {
  async list(req: Request, res: Response) {
    const featuredOnly = req.query.featured === "true";
    const partners = await partnersService.list({ featuredOnly });
    res.status(200).json({ items: partners });
  },
};
