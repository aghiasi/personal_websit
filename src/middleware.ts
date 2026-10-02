import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const secret = process.env.SEKRET;

  // If no secret is configured, don't allow admin access.
  if (!secret) {
    console.error("SEKRET environment variable is not configured.");

    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  const token = request.cookies.get("jwt")?.value;

  // No JWT
  if (!token) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  try {
    // If SEKRET is a normal string:
    const secretKey = new TextEncoder().encode(secret);

    const { payload } = await jose.jwtVerify(token, secretKey);

    // Only admin can access /admin
    if (payload.username !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Logged-in admin visiting /login -> send to admin
    if (pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    // Admin accessing /admin
    if (pathname.startsWith("/admin")) {
      return NextResponse.next();
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Invalid JWT:", error);

    // Invalid/expired token
    const response = NextResponse.redirect(
      new URL("/login", request.url),
    );

    // Remove invalid JWT
    response.cookies.delete("jwt");

    return response;
  }
}

export const config = {
  matcher: ["/login/:path*", "/admin/:path*"],
};
