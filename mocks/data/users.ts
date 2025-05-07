import { User } from "@/shared/types/user";

export const mockUsers: User[] = [
  {
    id: "u1",
    groupId: "cassiegroup",
    firstName: "Cassie",
    lastName: "Admin",
    email: "admin@cassiegroup.com",
    mobile: "0412345678",
    status: "active",
    role: "admin",
    borrowedItems: 0,
  },
  {
    id: "u2",
    groupId: "cassiegroup",
    firstName: "Mimi",
    lastName: "Tan",
    email: "mimi@cassiegroup.com",
    mobile: "0499888777",
    status: "active",
    role: "user",
    borrowedItems: 3,
  },
];
