import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import type { Role } from "@prisma/client";

// Routes that require a specific minimum role
const ROLE_PROTECTED: { pattern: RegExp; roles: Role[] }[] = [
  { pattern: /^\/users(\/.*)?$/, roles: ["ADMIN"] },
];

// Routes that require any authenticated session
const AUTH_REQUIRED = [
  /^\/dashboard(\/.*)?$/,
  /^\/orders(\/.*)?$/,
  /^\/products(\/.*)?$/,
  /^\/customers(\/.*)?$/,
  /^\/users(\/.*)?$/,
  /^\/settings(\/.*)?$/,
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const requiresAuth = AUTH_REQUIRED.some((r) => r.test(pathname));
  if (!requiresAuth) return NextResponse.next();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Not authenticated → redirect to login
  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Check role-restricted routes
  const roleGuard = ROLE_PROTECTED.find((r) => r.pattern.test(pathname));
  if (roleGuard && !roleGuard.roles.includes(token.role as Role)) {
    // Redirect unauthorised users to dashboard with a message
    const dashboardUrl = new URL("/dashboard", req.url);
    dashboardUrl.searchParams.set("error", "forbidden");
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/orders/:path*",
    "/products/:path*",
    "/customers/:path*",
    "/users/:path*",
    "/settings/:path*",
  ],
};
