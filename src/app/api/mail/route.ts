import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import db from "../../../../database/database.json";
import path from "path";
export const GET = async (req: NextRequest) => {
  const request = req;
  console.log(db, req);
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
    const newallMessage = [...allMessage.message, data];
    fs.writeFile(filePath, JSON.stringify(newallMessage)).then((result) => {
      console.log(result)
      return new Response(JSON.stringify({}), { status: 200 });
    });
  } catch (e) {
    console.log(e);
  }
};
