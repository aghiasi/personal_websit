"use client";

import React, { useEffect, useMemo, useState } from "react";

import MailOutlineIcon from "@mui/icons-material/MailOutline";

import MessageList, {
  ContactMessage,
} from "@/app/components/admin/messages/MessageList";

import MessageViewer from "@/app/components/admin/messages/MessageViewer";

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  const selectedMessage = useMemo(
    () => messages.find((item) => item.id === selectedId) ?? null,
    [messages, selectedId],
  );

  const unseenCount = useMemo(
    () => messages.filter((item) => item.unseen).length,
    [messages],
  );

  const loadMessages = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/mail", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to load messages");
      }

      const result = await response.json();

      setMessages(result.messages || []);
    } catch (error) {
      console.error("Failed to load messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const selectMessage = async (message: ContactMessage) => {
    setSelectedId(message.id);

    // Already read
    if (!message.unseen) {
      return;
    }

    try {
      await fetch("/api/mail", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: message.id,
          unseen: false,
        }),
      });

      setMessages((current) =>
        current.map((item) =>
          item.id === message.id
            ? {
                ...item,
                unseen: false,
              }
            : item,
        ),
      );
    } catch (error) {
      console.error("Failed to mark message as read:", error);
    }
  };

  const toggleUnseen = async (message: ContactMessage) => {
    const newValue = !message.unseen;

    try {
      const response = await fetch("/api/mail", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: message.id,
          unseen: newValue,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update message");
      }

      setMessages((current) =>
        current.map((item) =>
          item.id === message.id
            ? {
                ...item,
                unseen: newValue,
              }
            : item,
        ),
      );
    } catch (error) {
      console.error("Failed to update message:", error);
    }
  };

  const deleteMessage = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch("/api/mail", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete message");
      }

      setMessages((current) => current.filter((item) => item.id !== id));

      setSelectedId(null);
    } catch (error) {
      console.error("Failed to delete message:", error);
    }
  };

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070b12]
        py-10
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[450px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/[0.04]
          blur-3xl
        "
      />

      <div className="site-container relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-sky-400
                shadow-[0_0_12px_rgba(56,189,248,0.8)]
              "
            />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              Admin
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="flex items-center gap-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <MailOutlineIcon
                  sx={{
                    fontSize: 34,
                    color: "#7dd3fc",
                  }}
                />
                Messages
              </h1>

              <p className="mt-3 text-sm text-gray-500">
                Manage messages sent through your contact form.
              </p>
            </div>

            {unseenCount > 0 && (
              <div
                className="
                  rounded-xl
                  border
                  border-sky-400/20
                  bg-sky-400/10
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-sky-300
                "
              >
                {unseenCount} unread
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-12
              text-center
            "
          >
            <div
              className="
                mx-auto
                h-6
                w-6
                animate-spin
                rounded-full
                border-2
                border-white/10
                border-t-sky-400
              "
            />

            <p className="mt-4 text-xs text-gray-600">Loading messages...</p>
          </div>
        ) : (
          <div
            className="
              grid
              gap-5
              lg:grid-cols-[360px_minmax(0,1fr)]
            "
          >
            <MessageList
              messages={messages}
              selectedId={selectedId}
              onSelect={selectMessage}
            />

            <MessageViewer
              message={selectedMessage}
              onDelete={deleteMessage}
              onToggleUnseen={toggleUnseen}
            />
          </div>
        )}
      </div>
    </main>
  );
}
