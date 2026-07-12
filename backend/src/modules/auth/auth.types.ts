import { z } from "zod";
import { UserRole } from "@prisma/client";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(2),
  institutionId: z.string().optional().nullable(),
  role: z.nativeEnum(UserRole).default(UserRole.STUDENT),
  schoolName: z.string().optional().nullable(),
  department: z.string().optional().nullable(),
  institutionProfile: z.any().optional(),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
