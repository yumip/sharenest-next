import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: UserRole;
  }

  interface Session extends DefaultSession {
    user: {
      id: string;
      role?: UserRole;
    } & DefaultSession["user"];
  }

  interface JWT extends DefaultJWT {
    id: string;
    role?: UserRole;
  }
}
