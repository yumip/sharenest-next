import { UserRole } from "../shared/types/roles";

export type AuthToken = {
  sub: string; // subject = user ID
  email: string;
  role: UserRole;
  exp: number;
  jti?: string; // optional token ID
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type AccessTokenPayload = AuthToken;

export type RefreshTokenPayload = {
  sub: string; // user ID
  jti: string; // session or token ID (optional)
  exp: number; // expiration
};
