import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const filePath = path.join(process.cwd(), "data", "messages.json");

type ContactMessage = {
  id: string;
  email: string;
  subject: string;
  message: string;
  unseen: boolean;
  createdAt: string;
};

async function getMessages(): Promise<ContactMessage[]> {
  try {
    const file = await fs.readFile(filePath, "utf8");

    if (!file.trim()) {
      return [];
    }

    return JSON.parse(file);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await fs.mkdir(path.dirname(filePath), {
        recursive: true,
      });

      await fs.writeFile(filePath, "[]", "utf8");

      return [];
    }

    throw error;
  }
}

async function saveMessages(messages: ContactMessage[]) {
  await fs.writeFile(filePath, JSON.stringify(messages, null, 2), "utf8");
}

export async function GET() {
  try {
    const messages = await getMessages();

    return NextResponse.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to read messages",
      },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Email, subject and message are required.",
        },
        { status: 400 },
      );
    }

    const messages = await getMessages();

    const newMessage: ContactMessage = {
      id: crypto.randomUUID(),
      email: String(email).trim(),
      subject: String(subject).trim(),
      message: String(message).trim(),
      unseen: true,
      createdAt: new Date().toISOString(),
    };

    messages.unshift(newMessage);

    await saveMessages(messages);

    return NextResponse.json(
      {
        success: true,
        data: newMessage,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save message",
      },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    const { id, unseen } = body;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Message ID is required.",
        },
        { status: 400 },
      );
    }

    const messages = await getMessages();

    const index = messages.findIndex((item) => item.id === id);

    if (index === -1) {
      return NextResponse.json(
        {
          success: false,
          error: "Message not found.",
        },
        { status: 404 },
      );
    }

    messages[index].unseen = unseen !== undefined ? Boolean(unseen) : false;

    await saveMessages(messages);

    return NextResponse.json({
      success: true,
      data: messages[index],
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to update message",
      },
      { status: 500 },
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Message ID is required.",
        },
        { status: 400 },
      );
    }

    const messages = await getMessages();

    const filtered = messages.filter((item) => item.id !== id);

    if (filtered.length === messages.length) {
      return NextResponse.json(
        {
          success: false,
          error: "Message not found.",
        },
        { status: 404 },
      );
    }

    await saveMessages(filtered);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to delete message",
      },
      { status: 500 },
    );
  }
}
