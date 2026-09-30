"use client";
import { useState, useEffect } from "react";

export default function ResumePage() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/resumeText")
      .then((r) => {
        if (r.status === 200) return r.text();
        return "";
      })
      .then((t) => {
        if (t) setText(t);
      })
      .catch(() => {});
  }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return setStatus("Select a PDF first.");
    setStatus("Uploading...");
    const ab = await file.arrayBuffer();
    const b64 = btoa(String.fromCharCode(...new Uint8Array(ab)));
    try {
      const res = await fetch("/api/uploadResume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: "resume.pdf", content: b64 }),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("Uploaded — view below.");
        // try refresh text
        const rt = await fetch("/api/resumeText");
        if (rt.ok) setText(await rt.text());
      } else {
        setStatus("Upload failed");
      }
    } catch (err) {
      setStatus("Upload error");
    }
  }

  return (
    <section className="section">
      <div className="site-container">
        <h2 className="section-title">Resume</h2>

        <form className="mb-6" onSubmit={handleUpload}>
          <label className="block mb-2 text-sm text-gray-400">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
          />
          <div className="mt-3">
            <button
              className="px-4 py-2 bg-sky-600 text-white rounded"
              type="submit"
            >
              Upload
            </button>
            <span className="ml-3 text-sm text-gray-400">{status}</span>
          </div>
        </form>

        <div className="mb-6">
          <h3 className="font-medium">PDF Preview</h3>
          <div className="mt-2 border rounded overflow-hidden">
            <iframe src="/resume.pdf" className="w-full h-[600px]" />
          </div>
        </div>

        <div>
          <h3 className="font-medium">Extracted Text (if available)</h3>
          <pre className="mt-2 p-4 bg-black/5 rounded text-sm whitespace-pre-wrap">
            {text || "No extracted text available."}
          </pre>
        </div>
      </div>
    </section>
  );
}
