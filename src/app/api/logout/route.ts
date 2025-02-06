import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  const cookie = await cookies();
  cookie.delete("jwt");
  return NextResponse.json({ status: 200 });
};
