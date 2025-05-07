import { http, HttpResponse } from "msw";
import { mockUsers } from "../data/users";
import { User } from "@/shared/types/user";

const users = mockUsers;
export const userHandlers = [
  // GET /api/users
  http.get("/api/users/:groupId", ({ params }) => {
    const { groupId } = params;

    const usersByGroup = users.filter((user) => user.groupId === groupId);

    return HttpResponse.json(usersByGroup);
  }),

  // POST /api/users
  http.post("/api/users/:groupId", async ({ request }) => {
    const newUser = (await request.json()) as Partial<User>;

    if (!newUser.email) {
      return HttpResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const user: User = {
      id: newUser.id ?? `user-${Date.now()}`,
      groupId: newUser.groupId ?? "group-123",
      firstName: newUser.firstName ?? "Cassie",
      lastName: newUser.lastName ?? "Admin",
      email: newUser.email ?? "admin@cassiegroup.com",
      mobile: newUser.mobile ?? "0412345678",
      status: newUser.status ?? "active",
      role: newUser.role ?? "admin",
      borrowedItems: 0, // initialisaton
    };

    users.push(user);
    return HttpResponse.json(user, { status: 201 });
  }),

  // PATCH /api/items/:id
  http.patch("/api/users/:groupId/:id", async ({ params, request }) => {
    const { id } = params;
    const updates = (await request.json()) as Partial<User>;

    if (!updates || typeof updates !== "object") {
      return HttpResponse.json(
        { error: "Invalid request body" },
        { status: 400 },
      );
    }

    const index = users.findIndex((i) => i.id === id);
    if (index === -1) {
      return HttpResponse.json({ error: "Item not found" }, { status: 404 });
    }

    users[index] = { ...users[index], ...updates };
    return HttpResponse.json(users[index]);
  }),
];
