"use server";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import * as jose from "jose";
import { cookies } from "next/headers";
export const middleware = async (request: NextRequest) => {
  if (process.env.SEKRET) {
    const sekret = jose.base64url.decode(process.env.SEKRET);
    const cookie = await cookies();
    const token = cookie.get("jwt")?.value;
    if (token) {
      const isvalid = await jose.jwtVerify(token, sekret);
      if (isvalid.payload.username == "admin") {
        if (request.nextUrl.pathname.startsWith("/admin")) {
          return NextResponse.next();
        } else {
          return NextResponse.redirect(new URL("/admin", request.url));
        }
      }
    } else {
      if (request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/login", request.url));
      } else {
        return NextResponse.next();
      }
    }
  }
};
export const config = {
  matcher: ["/login/:path*", "/admin/:path*"],
};
