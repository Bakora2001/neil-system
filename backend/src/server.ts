

import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./common/utils/logger";
import { prisma } from "./config/database";

async function main() {
  const app = createApp();

  const server = app.listen(env.PORT, () => {
    logger.info(`NDIP API listening on port ${env.PORT} (${env.NODE_ENV})`);
  });

  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}, shutting down gracefully…`);
    server.close(async () => {
      await prisma.$disconnect().catch(() => {});
      process.exit(0);
    });
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

main().catch((err) => {
  console.error("Failed to start NDIP API:", err);
  process.exit(1);
});
