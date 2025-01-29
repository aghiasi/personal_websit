"use client";
import React, { useState } from "react";
import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { div as Div } from "motion/react-client";
import MessageBox from "./MessageBox";
export default function ChatBtn() {
  const [change, setChange] = useState<boolean>(false);
  return (
    <>
      <Button
        className="fixed bottom-3  right-5 z-50 bg-indigo-500 overflow-hidden"
        sx={{ borderRadius: "100%", width: "65px", height: "65px" }}
        variant="contained"
        onClick={() => setChange(!change)}
      >
        {!change && (
          <Div
            animate={{ opacity: 1,x:[-100,0] }}
            exit={{ opacity: 0,x:[0,-100] }}
            transition={{delay:0.01}}
            key="box"
          >
            <ChatIcon />
          </Div>
        ) } {change && (
          <Div
            animate={{ opacity: 1,x:[100,0] }}
            exit={{ opacity: 0,x:[0,100] }}
            transition={{delay:0.01}}
            key="box"
          >
            <CloseIcon />
          </Div>
        )}
      </Button>
       <MessageBox some={change} />
    </>
  );
}
