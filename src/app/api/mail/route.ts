import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  const data = await req.json()
  console.log(data)

  return NextResponse.json({ status: 200 });
};

