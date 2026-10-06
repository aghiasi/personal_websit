"use client";

import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

export type ContactMessage = {
  id: string;
  email: string;
  subject: string;
  message: string;
  unseen: boolean;
  createdAt: string;
};

type Props = {
  messages: ContactMessage[];
  selectedId: string | null;
  onSelect: (message: ContactMessage) => void;
};

export default function MessageList({ messages, selectedId, onSelect }: Props) {
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
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-white">Messages</h2>

            <p className="mt-1 text-xs text-gray-500">
              {messages.length} {messages.length === 1 ? "message" : "messages"}
            </p>
          </div>

          <MailOutlineIcon
            sx={{
              fontSize: 20,
              color: "#38bdf8",
            }}
          />
        </div>
      </div>

      <div className="max-h-[650px] overflow-y-auto">
        {messages.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <MailOutlineIcon
              sx={{
                fontSize: 36,
                color: "#4b5563",
              }}
            />

            <p className="mt-3 text-sm text-gray-500">No messages yet.</p>
          </div>
        ) : (
          messages.map((item) => {
            const selected = selectedId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item)}
                className={`
                  group
                  relative
                  block
                  w-full
                  border-b
                  border-white/5
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-200
                  ${selected ? "bg-sky-400/[0.08]" : "hover:bg-white/[0.04]"}
                `}
              >
                {item.unseen && (
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[2px]
                      bg-sky-400
                      shadow-[0_0_12px_rgba(56,189,248,0.8)]
                    "
                  />
                )}

                <div className="flex items-start gap-3">
                  <div
                    className={`
                      mt-1
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      ${
                        item.unseen
                          ? "border-sky-400/20 bg-sky-400/10 text-sky-300"
                          : "border-white/10 bg-white/[0.03] text-gray-500"
                      }
                    `}
                  >
                    {item.unseen ? (
                      <MailOutlineIcon fontSize="small" />
                    ) : (
                      <MarkEmailReadIcon fontSize="small" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p
                        className={`
                          truncate
                          text-sm
                          ${
                            item.unseen
                              ? "font-semibold text-white"
                              : "font-medium text-gray-300"
                          }
                        `}
                      >
                        {item.subject}
                      </p>

                      {item.unseen && (
                        <span
                          className="
                            shrink-0
                            rounded-full
                            border
                            border-sky-400/20
                            bg-sky-400/10
                            px-2
                            py-0.5
                            text-[10px]
                            font-medium
                            text-sky-300
                          "
                        >
                          NEW
                        </span>
                      )}
                    </div>

                    <p className="mt-1 truncate text-xs text-gray-500">
                      {item.email}
                    </p>

                    <p className="mt-2 truncate text-xs text-gray-600">
                      {item.message}
                    </p>
                  </div>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
