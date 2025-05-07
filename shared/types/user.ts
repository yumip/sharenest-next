import { UserRole, UserStatus } from "./roles";

export interface User {
  id: string;
  groupId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  status: UserStatus;
  role: UserRole;
  readonly borrowedItems: number;
}
