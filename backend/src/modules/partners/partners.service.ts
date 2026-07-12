import { prisma } from "../../config/database";

export const partnersService = {
  async list({ featuredOnly }: { featuredOnly?: boolean } = {}) {
    return prisma.partner.findMany({
      where: featuredOnly ? { featured: true } : undefined,
      orderBy: { name: "asc" },
    });
  },
};
