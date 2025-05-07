import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "sharenest.app";
const vercelSuffix = process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_SUFFIX;
const RESERVED_ROUTES = ["/api", "/about", "/how-it-works", "/platform"]; //"platform is just temporary for UI development"

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const path = `${url.pathname}${searchParams ? `?${searchParams}` : ""}`;
  console.log("✅ Middleware triggered:", req.url);
  let hostname = req.headers.get("host") || "";

  // Handle dev env rewrite
  if (hostname.includes("localhost")) {
    hostname = hostname.replace(".localhost:3000", `.${rootDomain}`);
  }

  // Handle Vercel preview URLs: demo---slug.vercel.app
  if (
    vercelSuffix &&
    hostname.includes("---") &&
    hostname.endsWith(`.${vercelSuffix}`)
  ) {
    hostname = `${hostname.split("---")[0]}.${rootDomain}`;
  }

  // Bypass reserved paths
  if (RESERVED_ROUTES.some((r) => url.pathname.startsWith(r))) {
    return NextResponse.next();
  }

  // ✨ Handle app.sharenest.app (login + admin/user routing)
  if (hostname === `app.${rootDomain}`) {
    const token = await getToken({ req });
    console.log(token);
    const role = token?.role;

    if (!token && path !== "/") {
      return NextResponse.redirect(new URL("/", req.url));
    } else if (token && path === "/") {
      // Redirect logged-in users to role-based root
      const target = role === "admin" ? "/platform" : "/library";
      return NextResponse.redirect(new URL(target, req.url));
    }

    // Rewrite based on role
    if (role === "admin") {
      return NextResponse.rewrite(
        new URL(`/platform${path === "/" ? "" : path}`, req.url),
      );
    } else if (role === "user") {
      return NextResponse.rewrite(
        new URL(`/library${path === "/" ? "" : path}`, req.url),
      );
    } else {
      // Unknown role
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  // ✨ Special redirect for vercel.pub (demo content)
  if (hostname === "vercel.pub") {
    return NextResponse.redirect(
      "https://vercel.com/blog/platforms-starter-kit",
    );
  }

  // ✨ Rewrite root (localhost or root domain) to /home
  if (hostname === "localhost:3000" || hostname === rootDomain) {
    return NextResponse.rewrite(
      new URL(`/home${path === "/" ? "" : path}`, req.url),
    );
  }

  // ✨ Rewrite tenant subdomain requests to /[domain]/[slug]
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
// export function middleware(request: NextRequest) {
//   console.log("✅ Middleware triggered:", request.url);
//   return NextResponse.next();
// }
