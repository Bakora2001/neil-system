import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/database";
import { env } from "../../config/env";
import { AppError } from "../../common/errors/AppError";
import type { LoginInput, RegisterInput } from "./auth.types";

const ACCESS_TOKEN_TTL = env.JWT_ACCESS_EXPIRY;
const REFRESH_TOKEN_TTL = env.JWT_REFRESH_EXPIRY;

function toPublicUser(user: { id: string; email: string; fullName: string; role: string; institutionId: string | null; createdAt: Date }) {
  return {
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    role: user.role,
    institutionId: user.institutionId,
    createdAt: user.createdAt.toISOString(),
  };
}

function issueTokens(user: { id: string; role: string; institutionId: string | null }) {
  const accessToken = jwt.sign(
    { sub: user.id, role: user.role, institutionId: user.institutionId },
    env.JWT_ACCESS_SECRET,
    { expiresIn: ACCESS_TOKEN_TTL }
  );
  const refreshToken = jwt.sign({ sub: user.id }, env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_TTL,
  });
  return { accessToken, refreshToken };
}

export const authService = {
  async register(input: RegisterInput) {
    const existing = await prisma.user.findUnique({ where: { email: input.email } });
    if (existing) throw AppError.conflict("An account with this email already exists");

    const passwordHash = await bcrypt.hash(input.password, 12);
    let institutionId = input.institutionId;

    if (input.role === "INSTITUTION" && input.institutionProfile) {
      const instName = input.institutionProfile.legalName || "Pending Institution";
      const newInst = await prisma.institution.create({
        data: {
          name: instName,
          country: input.institutionProfile.county || "Kenya",
          membershipType: input.institutionProfile.membershipCategory || "FOUNDATIONAL",
          logoUrl: input.institutionProfile.logoUrl || null,
          metadata: input.institutionProfile,
        }
      });
      institutionId = newInst.id;
    }

    const user = await prisma.user.create({
      data: {
        email: input.email,
        passwordHash,
        fullName: input.fullName,
        institutionId,
        role: input.role,
      },
    });

    return { user: toPublicUser(user), ...issueTokens(user) };
  },

  async login(input: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: input.email } });
    if (!user) throw AppError.unauthorized("Invalid email or password");

    const passwordMatches = await bcrypt.compare(input.password, user.passwordHash);
    if (!passwordMatches) throw AppError.unauthorized("Invalid email or password");

    return { user: toPublicUser(user), ...issueTokens(user) };
  },

  async refresh(refreshToken: string) {
    let payload: { sub: string };
    try {
      payload = jwt.verify(refreshToken, env.JWT_REFRESH_SECRET) as { sub: string };
    } catch {
      throw AppError.unauthorized("Invalid or expired refresh token");
    }

    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) throw AppError.unauthorized();

    return { user: toPublicUser(user), ...issueTokens(user) };
  },
};
