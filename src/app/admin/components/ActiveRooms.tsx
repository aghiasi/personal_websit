"use client";
import { Button  } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
const socket = io(process.env.SOCKET);
const enterRoom = (e: any, room: string, setUser: any) => {
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
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState("");
  const [scrollH, setScrollH] = useState<number | undefined>(0);
  const [ms, setMs] = useState<any>([]);
  const ul = useRef<HTMLUListElement | null>(null);
  const message = useRef<HTMLTextAreaElement | null>(null);
  useEffect(() => {
    socket.emit("roomList");
    socket.on("roomList", (allrooms) => {
      setRooms(allrooms.rooms);
    });
  }, []);
  useEffect(() => {
    if (scrollH) ul.current?.scrollTo(0, scrollH);
  }, [scrollH]);
  const handleMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.current?.value) {
      sendMessage(message.current.value);
      message.current.value = "";
    }
  };
  socket.on(
    "toAdmin",
    ({ name, text, time }: { name: string; text: string; time: string }) => {
      if (ul.current) {
        console.log(text);
        if (text != "wellcome to chat app") {
          setMs([...ms, { name, text, time }]);
          setScrollH(document.querySelector(".message-box")?.scrollHeight);
        }
      }
    }
  );
  return (
    <div className="col-span-4  sm:mr-4 mt-10 block  p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Active chat :{user}
      </h5>
      {rooms.map((room, index) => (
        <>
          <p className="text-white inline"> {index + 1} : </p>
          <Button
            variant="outlined"
            key={room}
            className="font-normal text-gray-700 dark:text-gray-400"
            onClick={(e) => enterRoom(e, room,setUser)}
          >
            {room}
          </Button>
        </>
      ))}
      <ul ref={ul} className="message-box overflow-y-scroll h-[300px] ">
        {ms.map((ms: any, index: number) => (
          <li
            key={index}
            className={`${ms.name === "Admin" && "admin_message"} ${
              ms.name === user ? "user_message" : "otheruser_message"
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
      <form
        onSubmit={handleMessage}
        id="form-ms"
        className="coll-12 my-2  h-fit p-1 grid grid-cols-3 gap-2"
      >
        <textarea
          className="col-span-2 text-white bg-inherit border"
          ref={message}
        />
        <Button type="submit" variant="outlined" sx={{color:"white", border:"1px solid white"}}>
          send
        </Button>
      </form>
    </div>
  );
}
