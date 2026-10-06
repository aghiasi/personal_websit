"use client";

import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://websitsocket.onrender.com/");

type ChatMessage = {
  name: string;
  text: string;
  time: string;
};

const enterRoom = (room: string, setUser: (room: string) => void) => {
  setUser(room);

  socket.emit("enterRoom", {
    name: "Admin",
    room,
  });
};

const sendMessage = (text: string) => {
  socket.emit("message", {
    name: "Admin",
    text,
  });
};

export default function ActiveRooms() {
  const [rooms, setRooms] = useState<string[]>([]);
  const [user, setUser] = useState("");
  const [ms, setMs] = useState<ChatMessage[]>([]);

  const ul = useRef<HTMLUListElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);

  /* ========================================
     Get active rooms
  ======================================== */
  useEffect(() => {
    const handleRoomList = (allrooms: { rooms: string[] }) => {
      setRooms(allrooms.rooms);
    };

    socket.emit("roomList");
    socket.on("roomList", handleRoomList);

    return () => {
      socket.off("roomList", handleRoomList);
    };
  }, []);

  /* ========================================
     Receive messages from users
  ======================================== */
  useEffect(() => {
    const handleMessage = ({ name, text, time }: ChatMessage) => {
      // Ignore welcome message
      if (text === "wellcome to chat app") {
        return;
      }

      setMs((previousMessages) => [
        ...previousMessages,
        {
          name,
          text,
          time,
        },
      ]);
    };

    socket.on("toAdmin", handleMessage);

    return () => {
      socket.off("toAdmin", handleMessage);
    };
  }, []);

  /* ========================================
     Scroll to newest message
  ======================================== */
  useEffect(() => {
    if (ul.current) {
      ul.current.scrollTop = ul.current.scrollHeight;
    }
  }, [ms]);

  /* ========================================
     Send message
  ======================================== */
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = message.current?.value.trim();

    if (!text) {
      return;
    }

    sendMessage(text);

    if (message.current) {
      message.current.value = "";
    }
  };

  return (
    <div
      className="
        col-span-4
        mt-10
        block
        rounded-2xl
        border
        border-white/10
        bg-[#070b12]
        p-6
        shadow-lg
        shadow-black/20
      "
    >
      {/* Header */}
      <div className="mb-5">
        <p className="mb-1 text-xs uppercase tracking-[0.2em] text-sky-400">
          Live Chat
        </p>

        <h5 className="text-2xl font-bold tracking-tight text-white">
          Active chat:
          <span className="ml-2 text-sky-300">
            {user || "No room selected"}
          </span>
        </h5>
      </div>

      {/* Rooms */}
      <div className="mb-5 flex flex-wrap gap-2">
        {rooms.length === 0 ? (
          <p className="text-sm text-gray-500">No active rooms.</p>
        ) : (
          rooms.map((room, index) => (
            <Button
              variant="outlined"
              key={room}
              onClick={() => enterRoom(room, setUser)}
              sx={{
                color: user === room ? "#38bdf8" : "#9ca3af",
                borderColor:
                  user === room
                    ? "rgba(56,189,248,0.4)"
                    : "rgba(255,255,255,0.1)",
                textTransform: "none",
                borderRadius: "10px",
                "&:hover": {
                  borderColor: "rgba(56,189,248,0.4)",
                  backgroundColor: "rgba(56,189,248,0.05)",
                },
              }}
            >
              {index + 1}: {room}
            </Button>
          ))
        )}
      </div>

      {/* Messages */}
      <ul
        ref={ul}
        className="
          message-box
          h-[300px]
          overflow-y-auto
          rounded-xl
          border
          border-white/5
          bg-black/20
          p-3
        "
      >
        {ms.length === 0 ? (
          <li className="flex h-full items-center justify-center text-sm text-gray-600">
            No messages yet.
          </li>
        ) : (
          ms.map((item, index) => {
            const isAdmin = item.name === "Admin";
            const isCurrentUser = item.name === user;

            return (
              <li
                key={`${item.time}-${index}`}
                className={`
                  relative
                  mb-3
                  max-w-[85%]
                  rounded-xl
                  px-4
                  pb-5
                  pt-6
                  text-sm
                  ${
                    isAdmin
                      ? "ml-auto bg-sky-400/10 text-sky-100 border border-sky-400/10"
                      : isCurrentUser
                        ? "mr-auto bg-white/[0.05] text-gray-200 border border-white/10"
                        : "mr-auto bg-white/[0.03] text-gray-300 border border-white/5"
                  }
                `}
              >
                <span className="absolute left-3 top-1.5 text-[10px] text-gray-500">
                  {item.name}
                </span>

                <span className="block break-words">{item.text}</span>

                <span className="absolute bottom-1.5 right-3 text-[10px] text-gray-600">
                  {item.time}
                </span>
              </li>
            );
          })
        )}
      </ul>

      {/* Send message */}
      <form
        onSubmit={handleMessage}
        id="form-ms"
        className="mt-3 grid h-fit grid-cols-3 gap-2"
      >
        <textarea
          ref={message}
          placeholder="Write a message..."
          className="
            col-span-2
            min-h-[44px]
            resize-none
            rounded-xl
            border
            border-white/10
            bg-white/[0.03]
            p-3
            text-sm
            text-white
            outline-none
            placeholder:text-gray-600
            focus:border-sky-400/30
            focus:ring-1
            focus:ring-sky-400/10
          "
        />

        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: "#38bdf8",
            border: "1px solid rgba(56,189,248,0.25)",
            borderRadius: "12px",
            textTransform: "none",
            "&:hover": {
              borderColor: "rgba(56,189,248,0.5)",
              backgroundColor: "rgba(56,189,248,0.05)",
            },
          }}
        >
          Send
        </Button>
      </form>
    </div>
  );
}
