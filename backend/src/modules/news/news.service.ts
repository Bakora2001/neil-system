import { prisma } from "../../config/database";
import { AppError } from "../../common/errors/AppError";
import { buildPrismaCursorArgs, parseCursorParams, toPaginatedResult } from "../../common/utils/pagination";

export const newsService = {
  async list(query: Record<string, unknown>) {
    const params = parseCursorParams(query);
    const rows = await prisma.newsPost.findMany({
      where: { publishedAt: { not: null } },
      orderBy: { publishedAt: "desc" },
      ...buildPrismaCursorArgs(params),
    });
    const { items, nextCursor } = toPaginatedResult(rows, params.limit);
    const total = await prisma.newsPost.count({ where: { publishedAt: { not: null } } });
    return { items, nextCursor, total };
  },

  async getBySlug(slug: string) {
    const post = await prisma.newsPost.findUnique({ where: { slug } });
    if (!post || !post.publishedAt) throw AppError.notFound("News post not found");
    return post;
  },
};
