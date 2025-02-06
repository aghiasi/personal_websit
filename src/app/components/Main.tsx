import {  main as MotionMain } from "motion/react-client";
import TopSection from "./TopSection";
import Card from "./Card";
import Js from "../../../public/assets/icons/logo-javascript.svg";
import Ts from "../../../public/assets/icons/typescript-icon-svgrepo-com.svg";
import Axios from "../../../public/assets/icons/axios.svg";
import Bot from "../../../public/assets/icons/bootstrap-4.svg";
import Css from "../../../public/assets/icons/css-3.svg";
import Ex from "../../../public/assets/icons/express-109.svg";
import Git from "../../../public/assets/icons/git-icon.svg";
import Graph from "../../../public/assets/icons/graphql-logo-2.svg";
import Html from "../../../public/assets/icons/html-1.svg";
import Jwt from "../../../public/assets/icons/icons8-json-web-token.svg";
import Jq from "../../../public/assets/icons/jquery-1.svg";
import Mui from "../../../public/assets/icons/material-ui-1.svg";
import Next from "../../../public/assets/icons/nextjs-icon-svgrepo-com.svg";
import Node from "../../../public/assets/icons/nodejs-logo-svgrepo-com.svg";
import React from "../../../public/assets/icons/react-2.svg";
import Redux from "../../../public/assets/icons/redux.svg";
import Tailwind from "../../../public/assets/icons/tailwind-css-2.svg";
import Kanda from "../../../public/assets/icons/KandaLogo.png";
import { fetchGit } from "@/libs/fetchGit";
import { Box } from "@mui/material";
import Blob from "./Blob";
import BlobTop from "./BlobTop";
import GitHubIcon from "@mui/icons-material/GitHub";
export default async function Main() {
  const data = await fetchGit();
  console.log(data)
  const skill: any[] = [
    Js,
    Ts,
    Html,
    Css,
    Bot,
    Jq,
    React,
    Next,
    Redux,
    Axios,
    Node,
    Ex,
    Graph,
    Jwt,
    Mui,
    Tailwind,
    Git,
    Kanda,
  ];
  return (
    <MotionMain className=" w-full dark:bg-slate-200">
      <TopSection />
      <section className="container grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 w-full relative z-[2]   justify-items-center pb-9 dark:bg-slate-300">
        <BlobTop />
        <h3 className="text-[80px] font-mono text-gray-800 col-span-full text-right w-[90%]  ">
          My Skills
        </h3>
        {skill.map((item, index) => (
          <Card img={item} key={index} />
        ))}
        <div className="mt-16 h-1 bg-slate-400  col-span-3 w-5/6 rounded-sm  mb-6"></div>

        <h3 className="text-[60px] font-mono text-gray-800 col-span-full text-right w-[90%]  ">
          My Git Repos
        </h3>
        {data.map(async(item, index) => (
          <Box
            key={index}
            className="bg-white rounded-md p-4 shadow-gray-400 shadow-md m-5 min-w-80"
          >
            <div className="flex mb-5 items-center">
              <GitHubIcon />
              <h3 className="text-xl ml-2">{item.name}</h3>
            </div>
            <div className="pl-3">
            <p>Main language :  {item.language}</p>
            <p>date :  {item.date}</p>
            </div>
          </Box>
        ))}
        <Blob />
      </section>
    </MotionMain>
  );
}
