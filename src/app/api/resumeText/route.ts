import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const p = path.join(process.cwd(), "src", "data", "resume.txt");
    if (!fs.existsSync(p)) return new Response(null, { status: 204 });
    const txt = fs.readFileSync(p, "utf8");
    return new Response(txt, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    return new Response(null, { status: 500 });
  }
}
