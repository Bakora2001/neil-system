import { prisma } from "../../config/database";
import { AppError } from "../../common/errors/AppError";
import { buildPrismaCursorArgs, parseCursorParams, toPaginatedResult } from "../../common/utils/pagination";

export const programsService = {
  async list(query: Record<string, unknown>) {
    const params = parseCursorParams(query);
    const rows = await prisma.program.findMany({
      where: { publishedAt: { not: null } },
      orderBy: { publishedAt: "desc" },
      ...buildPrismaCursorArgs(params),
    });
    const { items, nextCursor } = toPaginatedResult(rows, params.limit);
    const total = await prisma.program.count({ where: { publishedAt: { not: null } } });
    return { items, nextCursor, total };
  },

  async getBySlug(slug: string) {
    const program = await prisma.program.findUnique({ where: { slug } });
    if (!program || !program.publishedAt) throw AppError.notFound("Program not found");
    return program;
  },
};
