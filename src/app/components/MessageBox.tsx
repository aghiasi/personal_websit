"use client";
import { div as Div } from "motion/react-client";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
const socket = io("https://seb-sit-socket.vercel.app");

const sendMessage = (name: string, text: string) => {
  socket.emit("message", {
    name,
    text,
  });
};
const enterRoom = (name: string, room: string) => {
  socket.emit("enterRoom", {
    name,
    room,
  });
};
export default function MessageBox(prop: any) {
  const [user, setUser] = useState({ name: "", room: "" });
  const [show, setShow] = useState<boolean>(false);
  const [scrollH, setScrollH] = useState<number | undefined>(0);
  const [ms, setMs] = useState<any>([]);
  const name = useRef<HTMLInputElement | null>(null);
  const ul = useRef<HTMLUListElement | null>(null);
  const familyName = useRef<HTMLInputElement | null>(null);
  const message = useRef<HTMLInputElement | null>(null);
  socket.on(
    "message",
    ({ name, text, time }: { name: string; text: string; time: string }) => {
      if (ul.current) {
        if (text != "Admin has left the room") {
          if (text != "Admin joined the room") {
            setMs([...ms, { name, text, time }]);
            setScrollH(document.querySelector(".message-box")?.scrollHeight);
          }
        }
      }
    }
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMs([]);
    const inputName = name.current?.value;
    const inputFamilyName = familyName.current?.value;
    if (inputName && inputFamilyName) {
      setUser({ name: inputName, room: inputFamilyName });
      enterRoom(inputName, inputFamilyName);
      setShow(!show);
    }
  };
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.current?.value) {
      sendMessage(user.name, message.current.value);
      message.current.value = "";
    }
  };
  useEffect(() => {
    if (scrollH) ul.current?.scrollTo(0, scrollH);
  }, [scrollH]);
  return (
    <>
      <Div
        animate={{ opacity: [0, 1], x: [1000, 0] }}
        exit={{ opacity: [1, 0], x: [1000, 299] }}
        className={`${!prop.some ? "hidden" : ""} message_modal items-end `}
      >
        <ul ref={ul} className="message-box overflow-auto h-full scroll-m-0">
          {!show && (
            <li className="admin_message">
              <p>to start the chat inter your name and familyname </p>
              <p></p>
            </li>
          )}
          {ms.map((ms: any, index: number) => (
            <li
              key={index}
              className={`${ms.name === "Admin" && "admin_message"} ${
                ms.name === user.name ? "user_message" : "otheruser_message"
              } relative pt-6 `}
            >
              <span>{ms.text}</span>
              <span className=" absolute top-1 left-1 text-[12px] text-gray-600">
                {ms.name}
              </span>
              <span className=" absolute bottom-1 right-1 text-[12px] text-gray-400">
                {ms.time}
              </span>
            </li>
          ))}
        </ul>
        {!show && (
          <form
            onSubmit={handleSubmit}
            id="form-join"
            className="coll-12 my-2 bg-slate-50 h-fit p-1 grid grid-cols-3 gap-2"
          >
            <TextField inputRef={name} label="FirstName" variant="outlined" />
            <TextField
              inputRef={familyName}
              label="FamilyName"
              variant="outlined"
            />
            <Button
              className="text-[10px] md:text-lg"
              type="submit"
              variant="contained"
            >
              Start The Chat
            </Button>
          </form>
        )}
        {show && (
          <form
            onSubmit={handleMessage}
            id="form-ms"
            className="coll-12 my-2 bg-slate-50 h-fit p-1 grid grid-cols-3 gap-2"
          >
            <TextField
              className="col-span-2"
              inputRef={message}
              label="message"
              variant="outlined"
            />
            <Button type="submit" variant="contained">
              send
            </Button>
          </form>
        )}
      </Div>
    </>
  );
}
