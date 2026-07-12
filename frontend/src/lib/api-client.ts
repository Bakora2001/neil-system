import type { LoginRequest, LoginResponse } from "@ndip/shared/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api/v1";

class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("neil_token");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    credentials: "include",
    headers: {
      ...headers,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: res.statusText }));
    throw new ApiError(body.message ?? "Request failed", res.status);
  }

  // Handle 204 No Content
  if (res.status === 204) {
    return {} as T;
  }

  return res.json() as Promise<T>;
}

export function login(payload: LoginRequest) {
  return request<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function register(payload: any) {
  return request<LoginResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function logout() {
  localStorage.removeItem("neil_token");
  localStorage.removeItem("neil_user");
  return request<void>("/auth/logout", { method: "POST" });
}

export function getMe() {
  return request<{ user: any }>("/auth/me");
}

export function getInstitution(id: string) {
  return request<{ institution: any }>(`/institutions/${id}`);
}
