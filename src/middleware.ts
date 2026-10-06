import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Middleware only runs for /admin and /login because of the matcher,
  // but this also makes the intention explicit.
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  const secret = process.env.SEKRET;

  // No secret = cannot authenticate
  if (!secret) {
    console.error("SEKRET environment variable is not configured.");

    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  const token = request.cookies.get("jwt")?.value;

  // -----------------------------
  // /admin
  // -----------------------------
  if (pathname.startsWith("/admin")) {
    // No token
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secretKey = new TextEncoder().encode(secret);

      const { payload } = await jose.jwtVerify(token, secretKey);

      // Must be admin
      if (payload.username !== "admin") {
        const response = NextResponse.redirect(new URL("/login", request.url));

        response.cookies.delete("jwt");

        return response;
      }

      // Valid admin token
      return NextResponse.next();
    } catch (error) {
      console.error("Invalid or expired JWT:", error);

      const response = NextResponse.redirect(new URL("/login", request.url));

      response.cookies.delete("jwt");

      return response;
    }
  }

  // -----------------------------
  // /login
  // -----------------------------
  if (pathname.startsWith("/login")) {
    // If there is no token, allow login page
    if (!token) {
      return NextResponse.next();
    }

    try {
      const secretKey = new TextEncoder().encode(secret);

      const { payload } = await jose.jwtVerify(token, secretKey);

      // Already logged in as admin
      if (payload.username === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      }

      // Invalid user token
      const response = NextResponse.next();
      response.cookies.delete("jwt");

      return response;
    } catch {
      // Invalid/expired token.
      // Delete it but still allow the login page.
      const response = NextResponse.next();

      response.cookies.delete("jwt");

      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login/:path*"],
};
