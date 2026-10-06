import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    const secret = process.env.SEKRET;
    const correctPassword = process.env.PASSWORD;

    // Environment variables are required
    if (!secret || !correctPassword) {
      console.error("PASSWORD or SEKRET is not configured.");

      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 },
      );
    }

    // Check password
    if (password !== correctPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid password" },
        { status: 403 },
      );
    }

    // Use the SAME encoding as middleware
    const secretKey = new TextEncoder().encode(secret);

    // Create JWT
    const token = await new jose.SignJWT({
      username: "admin",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secretKey);

    // Set cookie
    const cookieStore = await cookies();

    cookieStore.set("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      { status: 400 },
    );
  }
}
