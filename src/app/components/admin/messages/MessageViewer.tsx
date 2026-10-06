"use client";

import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import ReplyIcon from "@mui/icons-material/Reply";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { ContactMessage } from "./MessageList";

type Props = {
  message: ContactMessage | null;
  onDelete: (id: string) => void;
  onToggleUnseen: (message: ContactMessage) => void;
};

export default function MessageViewer({
  message,
  onDelete,
  onToggleUnseen,
}: Props) {
  if (!message) {
    return (
      <div
        className="
          flex
          min-h-[500px]
          items-center
          justify-center
          rounded-2xl
          border border-white/10
          bg-white/[0.03]
          p-8
          text-center
          backdrop-blur-sm
        "
      >
        <div>
          <div
            className="
              mx-auto
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-sky-400/10
              bg-sky-400/5
              text-sky-400/50
            "
          >
            <MailOutlineIcon />
          </div>

          <h3 className="mt-5 text-sm font-medium text-gray-300">
            Select a message
          </h3>

          <p className="mt-2 text-xs text-gray-600">
            Choose a message from the list to read it.
          </p>
        </div>
      </div>
    );
  }

  const date = new Date(message.createdAt);

  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-sm
      "
    >
      {/* Header */}
      <div
        className="
          border-b
          border-white/10
          px-6
          py-5
          sm:px-8
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-sky-400
                  shadow-[0_0_12px_rgba(56,189,248,0.8)]
                "
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-sky-300">
                Message
              </span>
            </div>

            <h1 className="break-words text-xl font-semibold text-white sm:text-2xl">
              {message.subject}
            </h1>
          </div>

          <button
            type="button"
            onClick={() => onToggleUnseen(message)}
            title={message.unseen ? "Mark as read" : "Mark as unread"}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              text-gray-500
              transition-all
              hover:border-sky-400/30
              hover:bg-sky-400/10
              hover:text-sky-300
            "
          >
            <MarkEmailUnreadIcon fontSize="small" />
          </button>
        </div>

        {/* Sender */}
        <div className="mt-6 flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-sky-400/20
              bg-sky-400/10
              text-sm
              font-semibold
              text-sky-300
            "
          >
            {message.email.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-200">
              {message.email}
            </p>

            <p className="mt-1 text-xs text-gray-600">
              {date.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="px-6 py-7 sm:px-8">
        <div className="whitespace-pre-wrap break-words text-sm leading-8 text-gray-300">
          {message.message}
        </div>
      </div>

      {/* Actions */}
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
          border-t
          border-white/10
          px-6
          py-4
          sm:px-8
        "
      >
        <a
          href={`mailto:${message.email}?subject=${encodeURIComponent(
            `Re: ${message.subject}`,
          )}`}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-sky-400/20
            bg-sky-400/10
            px-4
            py-2.5
            text-xs
            font-medium
            text-sky-300
            transition-all
            hover:border-sky-400/40
            hover:bg-sky-400/15
          "
        >
          <ReplyIcon fontSize="small" />
          Reply
        </a>

        <button
          type="button"
          onClick={() => onDelete(message.id)}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-red-400/10
            bg-red-400/[0.04]
            px-4
            py-2.5
            text-xs
            font-medium
            text-red-300
            transition-all
            hover:border-red-400/30
            hover:bg-red-400/10
          "
        >
          <DeleteOutlineIcon fontSize="small" />
          Delete
        </button>
      </div>
    </div>
  );
}
