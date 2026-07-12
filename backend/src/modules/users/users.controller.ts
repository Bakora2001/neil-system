import type { Request, Response } from "express";
import { z } from "zod";
import { usersService } from "./users.service";
import { AppError } from "../../common/errors/AppError";

const updateProfileSchema = z.object({ fullName: z.string().min(2).optional() });

export const usersController = {
  async getSelf(req: Request, res: Response) {
    if (!req.user) throw AppError.unauthorized();
    const user = await usersService.getById(req.user.sub);
    res.status(200).json({ user });
  },

  async updateSelf(req: Request, res: Response) {
    if (!req.user) throw AppError.unauthorized();
    const input = updateProfileSchema.parse(req.body);
    const user = await usersService.updateProfile(req.user.sub, input);
    res.status(200).json({ user });
  },
};
