import { http, HttpResponse } from "msw";

interface LoginRequestBody {
  email: string;
  password: string;
}

export const authHandlers = [
  http.post("/api/login", async ({ request }) => {
    const body = (await request.json()) as LoginRequestBody;
    const { email, password } = body;
    if (email === "admin@cassiegroup.com" && password === "password") {
      return HttpResponse.json({
        id: "1",
        email,
        role: "admin",
        name: "Admin User",
        token: "mock-jwt-token",
      });
    }

    return HttpResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }),
];
