"use client";

import React, { FormEvent, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully.",
      });

      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t border-white/10
        bg-[#070b12]
        py-20
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/[0.05]
          blur-3xl
        "
      />

      <div className="site-container relative z-10 max-w-3xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              Contact
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s <span className="text-sky-300">talk</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
            Have a project, question, or idea? Send me a message and I&apos;ll
            get back to you.
          </p>
        </div>

        {/* Contact information */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <a
            href="tel:09904282582"
            className="
              group
              flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-sky-400/30
              hover:bg-white/[0.05]
            "
          >
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                border border-sky-400/20
                bg-sky-400/10
                text-sky-300
              "
            >
              <PhoneIcon fontSize="small" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Phone</p>

              <p className="mt-1 text-sm font-medium text-gray-200 transition-colors group-hover:text-sky-300">
                09904282582
              </p>
            </div>
          </a>

          <a
            href="https://github.com/aghiasi"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex items-center gap-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-5
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-sky-400/30
              hover:bg-white/[0.05]
            "
          >
            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                border border-sky-400/20
                bg-sky-400/10
                text-sky-300
              "
            >
              <GitHubIcon fontSize="small" />
            </div>

            <div>
              <p className="text-xs text-gray-500">GitHub</p>

              <p className="mt-1 text-sm font-medium text-gray-200 transition-colors group-hover:text-sky-300">
                github.com/aghiasi
              </p>
            </div>
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-6
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            backdrop-blur-sm
            sm:p-8
          "
        >
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="
                  block w-full
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-all duration-200
                  focus:border-sky-400/40
                  focus:bg-white/[0.04]
                  focus:ring-2
                  focus:ring-sky-400/10
                "
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="How can I help you?"
                required
                className="
                  block w-full
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-all duration-200
                  focus:border-sky-400/40
                  focus:bg-white/[0.04]
                  focus:ring-2
                  focus:ring-sky-400/10
                "
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your message
              </label>

              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={6}
                className="
                  block w-full
                  resize-y
                  rounded-xl
                  border border-white/10
                  bg-black/20
                  px-4 py-3
                  text-sm text-white
                  outline-none
                  placeholder:text-gray-600
                  transition-all duration-200
                  focus:border-sky-400/40
                  focus:bg-white/[0.04]
                  focus:ring-2
                  focus:ring-sky-400/10
                "
              />
            </div>

            {/* Status */}
            {status.type && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                    : "border-red-400/20 bg-red-400/5 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border border-sky-400/20
                bg-sky-400/10
                px-5 py-3
                text-sm
                font-medium
                text-sky-300
                transition-all duration-300
                hover:border-sky-400/40
                hover:bg-sky-400/15
                hover:shadow-[0_0_30px_rgba(56,189,248,0.08)]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <SendIcon fontSize="small" />

              {loading ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
