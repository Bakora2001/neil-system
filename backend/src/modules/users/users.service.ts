import { prisma } from "../../config/database";
import { AppError } from "../../common/errors/AppError";

export const usersService = {
  async getById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { institution: true },
    });
    if (!user) throw AppError.notFound("User not found");
    return user;
  },

  async updateProfile(id: string, data: { fullName?: string }) {
    return prisma.user.update({ where: { id }, data });
  },

  // TODO: list() for Secretariat/Admin user management, with cursor
  // pagination and search-by-name/email, following the pattern in
  // modules/programs/programs.service.ts.
};
