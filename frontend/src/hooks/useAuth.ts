import { useEffect, useState } from "react";
import type { User } from "@ndip/shared/types";
import { getMe, login, register, logout } from "../lib/api-client";

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("neil_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sync = async () => {
      const token = localStorage.getItem("neil_token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const data = await getMe();
        if (data && data.user) {
          const u: User = {
            id: data.user.sub || data.user.id,
            email: data.user.email || "",
            fullName: data.user.fullName || data.user.name || "",
            role: data.user.role,
            institutionId: data.user.institutionId || null,
            createdAt: data.user.createdAt || new Date().toISOString(),
          };
          setUser(u);
          localStorage.setItem("neil_user", JSON.stringify(u));
        } else {
          throw new Error("Invalid user");
        }
      } catch (err) {
        console.error("Auth validation failed:", err);
        // Clear invalid session
        localStorage.removeItem("neil_token");
        localStorage.removeItem("neil_user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    sync();
  }, []);

  const loginUser = async (email: string, pw: string) => {
    const data = await login({ email, password: pw });
    if (data && data.user) {
      localStorage.setItem("neil_token", data.accessToken);
      localStorage.setItem("neil_user", JSON.stringify(data.user));
      setUser(data.user);
      return data.user;
    }
    throw new Error("Login failed");
  };

  const registerUser = async (payload: any) => {
    const data = await register(payload);
    if (data && data.user) {
      localStorage.setItem("neil_token", data.accessToken);
      localStorage.setItem("neil_user", JSON.stringify(data.user));
      setUser(data.user);
      return data.user;
    }
    throw new Error("Registration failed");
  };

  const logoutUser = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      localStorage.removeItem("neil_token");
      localStorage.removeItem("neil_user");
      setUser(null);
    }
  };

  return {
    user,
    loading,
    isAuthenticated: Boolean(user),
    loginUser,
    registerUser,
    logoutUser,
  };
}
