import type { AuthToken } from "@/models/authModel";

export const mockAuthToken: AuthToken = {
  sub: "u1",
  email: "admin@cassiegroup.com",
  role: "admin",
  exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour expiry
};
