import { NextRequest } from "next/server";
let data = {
  message: [{ email: "ssakdf", subject: "slhdaf", message: "ksadj;f" }],
};
export const GET = async (req: NextRequest) => {
  try {
    const message = data.message;
    return new Response(JSON.stringify(message), { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const newData = await req.json();
    data.message.push(newData);
    return new Response(JSON.stringify(data.message), { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
