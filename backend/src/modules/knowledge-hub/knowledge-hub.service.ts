import { prisma } from "../../config/database";
import { AppError } from "../../common/errors/AppError";
import { buildPrismaCursorArgs, parseCursorParams, toPaginatedResult } from "../../common/utils/pagination";
import type { AccessTokenPayload } from "../../common/middleware/auth.middleware";

export const knowledgeHubService = {
  async list(query: Record<string, unknown>, requester?: AccessTokenPayload) {
    const params = parseCursorParams(query);
    const category = typeof query.category === "string" ? query.category : undefined;
    const isFullMember = requester?.role === "INSTITUTION" || requester?.role === "ADMIN" || requester?.role === "SECRETARIAT";

    const rows = await prisma.knowledgeResource.findMany({
      where: {
        publishedAt: { not: null },
        ...(category ? { category } : {}),
        // Non Full-Members only ever see resources that aren't gated.
        ...(isFullMember ? {} : { isFullMemberOnly: false }),
      },
      orderBy: { publishedAt: "desc" },
      ...buildPrismaCursorArgs(params),
    });

    return toPaginatedResult(rows, params.limit);
  },

  async getById(id: string, requester?: AccessTokenPayload) {
    const resource = await prisma.knowledgeResource.findUnique({ where: { id } });
    if (!resource || !resource.publishedAt) throw AppError.notFound("Resource not found");

    if (resource.isFullMemberOnly) {
      const isFullMember = requester?.role === "INSTITUTION" || requester?.role === "ADMIN" || requester?.role === "SECRETARIAT";
      if (!isFullMember) {
        throw AppError.forbidden("This resource is available to Full Member Institutions only");
      }
    }

    return resource;
  },
};
