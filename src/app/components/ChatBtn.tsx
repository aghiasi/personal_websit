"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

import MessageBox from "./MessageBox";

export default function ChatBtn() {
  const [change, setChange] = useState(false);

  return (
    <>
      <Button
        aria-label={change ? "Close chat" : "Open chat"}
        variant="contained"
        onClick={() => setChange((prev) => !prev)}
        sx={{
          position: "fixed",
          zIndex: 60,
          right: 20,
          bottom: 24,

          width: 58,
          height: 58,
          minWidth: 58,

          borderRadius: "50%",

          color: "#7dd3fc",
          backgroundColor: "rgba(7, 11, 18, 0.9)",

          border: "1px solid rgba(56, 189, 248, 0.25)",

          boxShadow:
            "0 10px 30px rgba(0, 0, 0, 0.35), 0 0 25px rgba(56, 189, 248, 0.08)",

          backdropFilter: "blur(12px)",

          transition:
            "transform 200ms ease, background-color 200ms ease, border-color 200ms ease, box-shadow 200ms ease",

          "&:hover": {
            backgroundColor: "rgba(56, 189, 248, 0.1)",
            borderColor: "rgba(56, 189, 248, 0.45)",
            boxShadow:
              "0 12px 35px rgba(0, 0, 0, 0.4), 0 0 30px rgba(56, 189, 248, 0.15)",
            transform: "translateY(-2px)",
          },

          "&:active": {
            transform: "scale(0.94)",
          },

          "&:focus-visible": {
            outline: "2px solid rgba(125, 211, 252, 0.7)",
            outlineOffset: "3px",
          },
        }}
      >
        <span
          className="
            flex h-full w-full
            items-center justify-center
            transition-transform duration-200
          "
        >
          {change ? (
            <CloseIcon sx={{ fontSize: 25 }} />
          ) : (
            <ChatIcon sx={{ fontSize: 25 }} />
          )}
        </span>
      </Button>

      <MessageBox some={change} />
    </>
  );
}
