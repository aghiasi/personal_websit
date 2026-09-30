import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { filename = "resume.pdf", content } = body;
    if (!content)
      return new Response(JSON.stringify({ ok: false, error: "no content" }), {
        status: 400,
      });

    const buffer = Buffer.from(content, "base64");
    const outPath = path.join(process.cwd(), "public", filename);
    fs.writeFileSync(outPath, buffer);

    return new Response(JSON.stringify({ ok: true, url: `/${filename}` }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: String(err) }), {
      status: 500,
    });
  }
}
