import type { Request, Response } from "express";
import { z } from "zod";
import { analyticsService } from "./analytics.service";

const eventSchema = z.object({
  eventName: z.string().min(1),
  path: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
});

export const analyticsController = {
  async trackEvent(req: Request, res: Response) {
    const input = eventSchema.parse(req.body);
    await analyticsService.recordEvent({ ...input, userId: req.user?.sub });
    res.status(202).json({ received: true });
  },
};
