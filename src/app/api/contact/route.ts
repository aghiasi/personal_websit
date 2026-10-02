import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "messages.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Make sure the data directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    let messages: unknown[] = [];

    try {
      const file = await fs.readFile(filePath, "utf8");
      messages = JSON.parse(file);

      if (!Array.isArray(messages)) {
        messages = [];
      }
    } catch {
      // File doesn't exist yet, so start with an empty array
      messages = [];
    }

    // Add timestamp
    const newMessage = {
      ...body,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);

    // Write updated JSON
    await fs.writeFile(
      filePath,
      JSON.stringify(messages, null, 2),
      "utf8",
    );

    return NextResponse.json({
      ok: true,
      received: newMessage,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 400 },
    );
  }
}
