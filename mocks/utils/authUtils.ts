export function getGroupIdFromToken(req: Request): string | null {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return null;

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = atob(token); // Format: "userId:groupId"
    const [, groupId] = decoded.split(":");
    return groupId;
  } catch {
    return null;
  }
}

export function getUserFromToken(req: Request, users: any[]): any | null {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return null;

  const token = authHeader.replace("Bearer ", "");

  try {
    const decoded = atob(token); // "userId:groupId"
    const [userId] = decoded.split(":");
    return users.find((u) => u.id === userId) || null;
  } catch {
    return null;
  }
}
