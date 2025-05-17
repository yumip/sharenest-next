import { bypass, http, HttpResponse } from "msw";
import { mockUsers } from "../data/users";
import { User } from "@/shared/types/user";

const users = mockUsers;
export const userHandlers = [
  // GET /api/users
  http.get("/api/:groupId/users/", ({ params }) => {
    const { groupId } = params;

    const usersByGroup = users.filter((user) => user.groupId === groupId);

    return HttpResponse.json(usersByGroup);
  }),

  // POST /api/users
  http.post("/api/:groupId/users/", async ({ request }) => {
    const newUser = (await request.json()) as Partial<User>;

    if (!newUser.email) {
      return HttpResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const user: User = {
      id: `user-${Date.now()}`,
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
  http.patch("/api/:groupId/users/:id", async ({ params, request }) => {
    const { id } = params;
    const patchUser = (await request.json()) as Partial<User>;
    console.log(id, "id")
    const index = users.findIndex((i) => i.id === id);
    if (index === -1) {
      return HttpResponse.json({ error: "Item not found" }, { status: 404 });
    }

    users[index] ={
      ...users[index], 
      firstName: patchUser.firstName ?? users[index].firstName,
      lastName: patchUser.lastName ?? users[index].lastName,
      email: patchUser.email ?? users[index].email,
      mobile: patchUser.mobile ?? users[index].mobile,
      status: patchUser.status ?? users[index].status,
      role: patchUser.role ?? users[index].role,
    };

    users[index] = { ...users, ...users[index] };
    return HttpResponse.json(users[index]);
  }),
];
