import { describe, expect, it } from "vitest";
import { loginSchema } from "../src/modules/auth/auth.types";

describe("auth validation", () => {
  it("rejects an invalid email", () => {
    const result = loginSchema.safeParse({ email: "not-an-email", password: "password123" });
    expect(result.success).toBe(false);
  });

  it("accepts a valid login payload", () => {
    const result = loginSchema.safeParse({ email: "admin@kneil.org", password: "password123" });
    expect(result.success).toBe(true);
  });
});
