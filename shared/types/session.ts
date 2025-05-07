export interface Session {
  id: string;
  userId: string;
  createdAt: string; // ISO 8601
  expiresAt: string; // ISO 8601
  isRevoked: boolean;
}
