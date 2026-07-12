import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import pinoHttp from "pino-http";
import { env } from "./config/env";
import { logger } from "./common/utils/logger";
import { apiRateLimiter } from "./common/middleware/rateLimiter";
import { errorHandler, notFoundHandler } from "./common/middleware/errorHandler";

import { authRouter } from "./modules/auth/auth.routes";
import { usersRouter } from "./modules/users/users.routes";
import { institutionsRouter } from "./modules/institutions/institutions.routes";
import { programsRouter } from "./modules/programs/programs.routes";
import { newsRouter } from "./modules/news/news.routes";
import { partnersRouter } from "./modules/partners/partners.routes";
import { knowledgeHubRouter } from "./modules/knowledge-hub/knowledge-hub.routes";
import { cmsRouter } from "./modules/cms/cms.routes";
import { analyticsRouter } from "./modules/analytics/analytics.routes";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:") || origin === env.CORS_ORIGIN) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true,
    })
  );
  app.use(compression());
  app.use(express.json());
  app.use(cookieParser());
  app.use(pinoHttp({ logger }));
  app.use(apiRateLimiter);

  app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));

  const v1 = express.Router();
  v1.use("/auth", authRouter);
  v1.use("/users", usersRouter);
  v1.use("/institutions", institutionsRouter);
  v1.use("/programs", programsRouter);
  v1.use("/news", newsRouter);
  v1.use("/partners", partnersRouter);
  v1.use("/knowledge-hub", knowledgeHubRouter);
  v1.use("/cms", cmsRouter);
  v1.use("/analytics", analyticsRouter);

  app.use("/api/v1", v1);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
