import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const sessionToken = request.cookies.get("better-auth.session_token");
  const { pathname } = request.nextUrl;

  const isLoginRoute = pathname === "/login";
  const isRootRoute = pathname === "/";
  const isAuthApiRoute = pathname.startsWith("/api/auth");

  if (isRootRoute) {
    if (sessionToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (!sessionToken && !isLoginRoute && !isAuthApiRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (sessionToken && isLoginRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
