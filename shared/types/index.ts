// Shared domain types — imported by both frontend and backend so the two
// never silently drift apart on shape.

export type MembershipType = "FOUNDATIONAL" | "ASSOCIATE" | "FULL" | "CORPORATE";

export type UserRole = "STUDENT" | "FACULTY" | "INSTITUTION" | "SECRETARIAT" | "ADMIN";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  institutionId: string | null;
  createdAt: string;
}

export interface Institution {
  id: string;
  name: string;
  logoUrl: string | null;
  membershipType: MembershipType;
  country: string;
  joinedAt: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  summary: string;
  body: string;
  heroImageUrl: string | null;
  publishedAt: string | null;
}

export interface NewsPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  authorName: string;
  coverImageUrl: string | null;
  category: string | null;
  publishedAt: string | null;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string | null;
  featured: boolean;
}

export interface KnowledgeResource {
  id: string;
  title: string;
  summary: string;
  fileUrl: string;
  tags: string[];
  category: string;
  isFullMemberOnly: boolean;
  publishedAt: string | null;
}

export interface HomeStats {
  memberInstitutions: number;
  countriesReached: number;
  partnersCollaborators: number;
  completedProjects: number;
  activePrograms: number;
}

export interface PaginatedResult<T> {
  items: T[];
  nextCursor: string | null;
  total: number;
}

export interface ApiError {
  message: string;
  code: string;
  details?: Record<string, unknown>;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}
