"use client";

import { Button, IconButton, TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { useEffect, useRef, useState } from "react";

import { io, Socket } from "socket.io-client";

interface Message {
  name: string;
  text: string;
  time: string;
}

interface User {
  name: string;
  room: string;
}

interface MessageBoxProps {
  some: boolean;
  onClose: () => void;
}

const socket: Socket = io("https://websitsocket.onrender.com/", {
  transports: ["websocket"],
});

export default function MessageBox({ some, onClose }: MessageBoxProps) {
  const [user, setUser] = useState<User>({
    name: "",
    room: "",
  });

  const [roomId, setRoomId] = useState("");

  const [show, setShow] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const name = useRef<HTMLInputElement | null>(null);

  const familyName = useRef<HTMLInputElement | null>(null);

  const message = useRef<HTMLInputElement | null>(null);

  const ul = useRef<HTMLUListElement | null>(null);

  /*
   * Get room + chat history
   * from chat.json through API.
   */
  useEffect(() => {
    const getChat = async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (data.success && data.roomId) {
          setRoomId(data.roomId);

          /*
           * Restore old messages.
           */
          if (Array.isArray(data.messages)) {
            setMessages(data.messages);
          }
        }
      } catch (error) {
        console.error("Failed to load chat:", error);
      }
    };

    getChat();
  }, []);

  /*
   * Receive Socket.IO messages.
   */
  useEffect(() => {
    const handleMessage = async ({
      name,
      text,
      time,
    }: {
      name: string;
      text: string;
      time: string;
    }) => {
      /*
       * Ignore system messages.
       */
      if (
        text === "Admin has left the room" ||
        text === "Admin joined the room"
      ) {
        return;
      }

      const newMessage: Message = {
        name,
        text,
        time,
      };

      /*
       * Show message immediately.
       */
      setMessages((previousMessages) => [...previousMessages, newMessage]);

      /*
       * Save message
       * into chat.json.
       */
      if (roomId) {
        try {
          await fetch("/api/chat", {
            method: "PUT",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              roomId,
              name,
              text,
              time,
            }),
          });
        } catch (error) {
          console.error("Failed to save message:", error);
        }
      }
    };

    socket.on("message", handleMessage);

    return () => {
      socket.off("message", handleMessage);
    };
  }, [roomId]);

  /*
   * Auto scroll.
   */
  useEffect(() => {
    if (!ul.current) {
      return;
    }

    ul.current.scrollTo({
      top: ul.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  /*
   * Start chat.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputName = name.current?.value.trim();

    const inputFamilyName = familyName.current?.value.trim();

    if (!inputName || !inputFamilyName) {
      return;
    }

    try {
      let currentRoomId = roomId;

      /*
       * Create room if
       * there isn't one.
       */
      if (!currentRoomId) {
        const response = await fetch("/api/chat", {
          method: "POST",
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        if (!data.success || !data.roomId) {
          return;
        }

        currentRoomId = data.roomId;

        setRoomId(currentRoomId);
      }

      /*
       * Save user.
       */
      setUser({
        name: inputName,
        room: currentRoomId,
      });

      /*
       * Join Socket.IO room.
       */
      socket.emit("enterRoom", {
        name: inputName,
        room: currentRoomId,
      });

      /*
       * IMPORTANT:
       * Don't clear messages.
       *
       * Existing history stays.
       */
      setShow(true);
    } catch (error) {
      console.error("Failed to start chat:", error);
    }
  };

  /*
   * Send message.
   */
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputMessage = message.current?.value.trim();

    if (!inputMessage || !user.name || !roomId) {
      return;
    }

    const time = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    socket.emit("message", {
      name: user.name,
      text: inputMessage,
      time,
    });

    if (message.current) {
      message.current.value = "";

      message.current.focus();
    }
  };

  /*
   * Close chat.
   *
   * Cookie stays.
   * chat.json stays.
   */
  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`
        fixed
        bottom-4
        right-4
        z-50
        flex
        h-[min(600px,calc(100vh-6rem))]
        w-[min(420px,calc(100vw-2rem))]
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#070b12]/95
        shadow-2xl
        backdrop-blur-xl
        transition-all
        duration-300

        ${
          some
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-[110%] opacity-0"
        }
      `}
    >
      {/* Header */}

      <div
        className="
          flex
          shrink-0
          items-center
          justify-between
          border-b
          border-white/10
          bg-white/[0.03]
          px-5
          py-4
        "
      >
        <div>
          <h3 className="text-sm font-semibold text-white">Live Chat</h3>

          <p className="mt-1 text-xs text-gray-500">
            {show
              ? `Chatting as ${user.name}`
              : "Enter your information to start"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Online */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-sky-400/20
              bg-sky-400/10
              px-3
              py-1
              text-[10px]
              uppercase
              tracking-wider
              text-sky-300
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-sky-400
                shadow-[0_0_8px_rgba(56,189,248,0.8)]
              "
            />
            Online
          </div>

          {/* Close */}

          <IconButton
            onClick={handleClose}
            aria-label="Close chat"
            size="small"
            sx={{
              width: 32,
              height: 32,
              color: "#9ca3af",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.03)",

              "&:hover": {
                color: "#f87171",
                backgroundColor: "rgba(248,113,113,0.08)",
                borderColor: "rgba(248,113,113,0.2)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      {/* Messages */}

      <ul
        ref={ul}
        className="
          message-box
          min-h-0
          flex-1
          space-y-3
          overflow-y-auto
          p-4
          scrollbar-thin
        "
      >
        {!show && messages.length === 0 && (
          <li
            className="
                mx-auto
                max-w-[90%]
                rounded-2xl
                border
                border-sky-400/10
                bg-sky-400/5
                p-4
                text-center
              "
          >
            <div
              className="
                  mx-auto
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-sky-400/20
                  bg-sky-400/10
                  text-sky-300
                "
            >
              💬
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              To start the chat, enter your first name and family name below.
            </p>
          </li>
        )}

        {messages.map((item, index) => {
          const isAdmin = item.name === "Admin";

          const isCurrentUser = item.name === user.name;

          return (
            <li
              key={`${item.time}-${index}`}
              className={`
                  relative
                  max-w-[85%]
                  rounded-2xl
                  border
                  px-4
                  pb-5
                  pt-7
                  text-sm
                  leading-6

                  ${
                    isAdmin
                      ? "mx-auto w-[90%] border-sky-400/20 bg-sky-400/10 text-sky-100"
                      : isCurrentUser
                        ? "ml-auto border-sky-400/20 bg-sky-400/10 text-gray-200"
                        : "mr-auto border-white/10 bg-white/[0.04] text-gray-300"
                  }
                `}
            >
              <span
                className={`
                    absolute
                    left-3
                    top-2
                    text-[10px]
                    font-medium

                    ${
                      isAdmin || isCurrentUser
                        ? "text-sky-300"
                        : "text-gray-500"
                    }
                  `}
              >
                {item.name}
              </span>

              <span className="block break-words">{item.text}</span>

              <span
                className="
                    absolute
                    bottom-1.5
                    right-3
                    text-[10px]
                    text-gray-600
                  "
              >
                {item.time}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Join form */}

      {!show && (
        <form
          onSubmit={handleSubmit}
          id="form-join"
          className="
            grid
            shrink-0
            grid-cols-1
            gap-2
            border-t
            border-white/10
            bg-white/[0.02]
            p-3
            sm:grid-cols-2
          "
        >
          <TextField
            inputRef={name}
            label="First Name"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.03)",
              },

              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.1)",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(56,189,248,0.4)",
              },
            }}
          />

          <TextField
            inputRef={familyName}
            label="Family Name"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.03)",
              },

              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.1)",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(56,189,248,0.4)",
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            className="sm:col-span-2"
            sx={{
              minHeight: "42px",
              borderRadius: "10px",
              backgroundColor: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.2)",
              color: "#7dd3fc",
              boxShadow: "none",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "rgba(56,189,248,0.18)",
                borderColor: "rgba(56,189,248,0.4)",
                boxShadow: "none",
              },
            }}
          >
            Start Chat
          </Button>
        </form>
      )}

      {/* Message form */}

      {show && (
        <form
          onSubmit={handleMessage}
          id="form-ms"
          className="
            flex
            shrink-0
            gap-2
            border-t
            border-white/10
            bg-white/[0.02]
            p-3
          "
        >
          <TextField
            inputRef={message}
            label="Message"
            variant="outlined"
            size="small"
            fullWidth
            autoComplete="off"
            sx={{
              "& .MuiInputBase-root": {
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.03)",
              },

              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.1)",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(56,189,248,0.4)",
              },

              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "#38bdf8",
                },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              minWidth: "75px",
              borderRadius: "10px",
              backgroundColor: "rgba(56,189,248,0.12)",
              border: "1px solid rgba(56,189,248,0.2)",
              color: "#7dd3fc",
              boxShadow: "none",
              textTransform: "none",

              "&:hover": {
                backgroundColor: "rgba(56,189,248,0.18)",
                borderColor: "rgba(56,189,248,0.4)",
                boxShadow: "none",
              },
            }}
          >
            Send
          </Button>
        </form>
      )}
    </div>
  );
}
