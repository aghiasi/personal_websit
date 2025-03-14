"use server";
import { cookies } from "next/headers";
import * as jose from "jose";
export const POST = async (req: any) => {
  const { password } = await req.json();
  if (process.env.SEKRET) {
    const sekret = jose.base64url.decode(process.env.SEKRET);
    if (process.env.PASSWORD && password === process.env.PASSWORD) {
      const token = await new jose.SignJWT({ username: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .sign(sekret);
      const cookie = await cookies();
      cookie.set("jwt", token);
      return new Response(null, { status: 200 });
    } else {
      return new Response(null, { status: 403 });
    }
  }
};
