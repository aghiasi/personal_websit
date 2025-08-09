import { NextRequest } from "next/server";
export const GET = async (req: NextRequest) => {
  try {
    return new Response(JSON.stringify(""), { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const newData = await req.json();
    return new Response(JSON.stringify({s:""}), { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
