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
    const allMessage = JSON.parse(allJson);
    const other = [...allMessage , data]
    const savedData = await fs.writeFile(filePath, JSON.stringify(other))
    const newones = await fs.readFile(filePath, "utf8");
      return new Response(JSON.stringify(other), { status: 200 });
  } catch (e) {
    console.log(e);
  }
};
