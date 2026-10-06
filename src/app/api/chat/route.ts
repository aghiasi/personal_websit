import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ChatMessage {
  name: string;
  text: string;
  time: string;
}

interface ChatRoom {
  messages: ChatMessage[];
}

interface ChatData {
  [roomId: string]: ChatRoom;
}

const filePath = path.join(process.cwd(), "data", "chat.json");

/*
 * Read chat.json
 */
async function readChat(): Promise<ChatData> {
  try {
    await fs.mkdir(path.dirname(filePath), {
      recursive: true,
    });

    try {
      const file = await fs.readFile(filePath, "utf8");

      if (!file.trim()) {
        return {};
      }

      return JSON.parse(file);
    } catch {
      await fs.writeFile(filePath, JSON.stringify({}, null, 2), "utf8");

      return {};
    }
  } catch (error) {
    console.error("Failed to read chat.json:", error);

    throw error;
  }
}

/*
 * Write chat.json
 */
async function writeChat(data: ChatData) {
  await fs.mkdir(path.dirname(filePath), {
    recursive: true,
  });

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
}

/*
 * GET
 *
 * Get room ID from cookie.
 *
 * If room exists, also return its messages.
 */
export async function GET(req: NextRequest) {
  try {
    const roomId = req.cookies.get("chatRoomId")?.value;

    if (!roomId) {
      return NextResponse.json({
        success: true,
        roomId: null,
        messages: [],
      });
    }

    const chat = await readChat();

    return NextResponse.json({
      success: true,
      roomId,
      messages: chat[roomId]?.messages || [],
    });
  } catch (error) {
    console.error("GET /api/chat error:", error);

    return NextResponse.json(
      {
        success: false,
        roomId: null,
        messages: [],
      },
      {
        status: 500,
      },
    );
  }
}

/*
 * POST
 *
 * Create a new room.
 */
export async function POST() {
  try {
    const roomId = crypto.randomUUID();

    const chat = await readChat();

    /*
     * Create room in chat.json
     */
    chat[roomId] = {
      messages: [],
    };

    await writeChat(chat);

    const response = NextResponse.json({
      success: true,
      roomId,
      messages: [],
    });

    response.cookies.set("chatRoomId", roomId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",

      /*
       * Keep room for 30 days.
       */
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error("POST /api/chat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create chat room",
      },
      {
        status: 500,
      },
    );
  }
}

/*
 * PUT
 *
 * Save a message into the room.
 */
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();

    const roomId = body.roomId;
    const name = body.name;
    const text = body.text;
    const time = body.time;

    if (!roomId) {
      return NextResponse.json(
        {
          success: false,
          message: "roomId is required",
        },
        {
          status: 400,
        },
      );
    }

    if (!name || !text) {
      return NextResponse.json(
        {
          success: false,
          message: "name and text are required",
        },
        {
          status: 400,
        },
      );
    }

    const chat = await readChat();

    /*
     * Create room if it doesn't exist.
     */
    if (!chat[roomId]) {
      chat[roomId] = {
        messages: [],
      };
    }

    const newMessage: ChatMessage = {
      name: String(name),
      text: String(text),
      time:
        typeof time === "string"
          ? time
          : new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            }),
    };

    chat[roomId].messages.push(newMessage);

    await writeChat(chat);

    return NextResponse.json({
      success: true,
      message: newMessage,
    });
  } catch (error) {
    console.error("PUT /api/chat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save message",
      },
      {
        status: 500,
      },
    );
  }
}

/*
 * DELETE
 *
 * Delete the room cookie.
 *
 * The chat.json data is NOT deleted.
 */
export async function DELETE() {
  try {
    const response = NextResponse.json({
      success: true,
    });

    response.cookies.delete("chatRoomId");

    return response;
  } catch (error) {
    console.error("DELETE /api/chat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete chat room",
      },
      {
        status: 500,
      },
    );
  }
}
