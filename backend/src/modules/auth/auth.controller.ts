import type { Request, Response } from "express";
import { authService } from "./auth.service";
import { loginSchema, registerSchema } from "./auth.types";
import { env } from "../../config/env";

const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/api/v1/auth",
};

export const authController = {
  async register(req: Request, res: Response) {
    const input = registerSchema.parse(req.body);
    const { user, accessToken, refreshToken } = await authService.register(input);
    res.cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTIONS);
    res.status(201).json({ user, accessToken });
  },

  async login(req: Request, res: Response) {
    const input = loginSchema.parse(req.body);
    const { user, accessToken, refreshToken } = await authService.login(input);
    res.cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTIONS);
    res.status(200).json({ user, accessToken });
  },

  async refresh(req: Request, res: Response) {
    const token = req.cookies?.refreshToken;
    const { user, accessToken, refreshToken } = await authService.refresh(token);
    res.cookie("refreshToken", refreshToken, REFRESH_COOKIE_OPTIONS);
    res.status(200).json({ user, accessToken });
  },

  async logout(_req: Request, res: Response) {
    res.clearCookie("refreshToken", REFRESH_COOKIE_OPTIONS);
    res.status(204).send();
  },

  async me(req: Request, res: Response) {
    res.status(200).json({ user: req.user });
  },
};
