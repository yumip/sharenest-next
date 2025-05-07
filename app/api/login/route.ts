import { NextRequest, NextResponse } from "next/server";

type LoginRequestBody = {
  email: string;
  password: string;
};

export async function POST(req: NextRequest) {
  try {
    const { email, password }: LoginRequestBody = await req.json();
    console.log("here");
    // Simulate login here instead of fetch
    if (email === "admin@cassiegroup.com" && password === "password") {
      return NextResponse.json({
        id: "1",
        email,
        name: "Admin User",
        role: "admin",
        token: "mock-jwt-token",
      });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ message: "Login error" }, { status: 500 });
  }
}
