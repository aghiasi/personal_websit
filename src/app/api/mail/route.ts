import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";
export const GET = async (req: NextRequest) => {
  try {
    const filePath = path.join(process.cwd(), "database", "database.json");
    const allJson = await fs.readFile(filePath, "utf8");
    return new Response(allJson, { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const filePath = path.join(process.cwd(), "database", "database.json");
    const allJson = await fs.readFile(filePath, "utf8");
    let allMessage = JSON.parse(allJson);
    allMessage.message = [...allMessage.message, data];
    console.log(allMessage.message);
    const jsonData = await fs.writeFile(filePath, JSON.stringify(allMessage));
    return new Response(JSON.stringify({}), { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
