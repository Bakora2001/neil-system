import bcrypt from "bcryptjs";
import { prisma } from "../../config/database";
import { AppError } from "../../common/errors/AppError";
import { buildPrismaCursorArgs, parseCursorParams, toPaginatedResult } from "../../common/utils/pagination";

export const institutionsService = {
  async list(query: Record<string, unknown>) {
    const params = parseCursorParams(query);
    const rows = await prisma.institution.findMany({
      orderBy: { joinedAt: "desc" },
      ...buildPrismaCursorArgs(params),
    });
    return toPaginatedResult(rows, params.limit);
  },

  async getById(id: string) {
    const institution = await prisma.institution.findUnique({ where: { id } });
    if (!institution) throw AppError.notFound("Institution not found");
    return institution;
  },

  async register(data: any) {
    const existingUser = await prisma.user.findUnique({ where: { email: data.email } });
    if (existingUser) {
      throw AppError.conflict("User with this email already exists");
    }

    let membershipType: "FOUNDATIONAL" | "ASSOCIATE" | "FULL" = "FOUNDATIONAL";
    if (data.applyingCategory?.includes("Associate")) {
      membershipType = "ASSOCIATE";
    } else if (data.applyingCategory?.includes("Full")) {
      membershipType = "FULL";
    }

    const institution = await prisma.institution.create({
      data: {
        name: data.institutionName,
        country: data.country || "Kenya",
        logoUrl: data.logoUrl || null,
        membershipType,
        metadata: data,
      }
    });

    const passwordHash = await bcrypt.hash(data.password, 12);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        passwordHash,
        fullName: data.headName || "Representative",
        role: "INSTITUTION",
        institutionId: institution.id,
      }
    });

    return { institution, user };
  }
};

