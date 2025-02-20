"use server"
import { main as MotionMain } from "motion/react-client";
import TopSection from "./TopSection";
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
import Blob from "./Blob";
import BlobTop from "./BlobTop";
import CardContainer from "./CardContainer";
import GitSlider from "./GitSlider";
export default async function Main() {
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
    <MotionMain className=" w-screen dark:bg-slate-200">
      <TopSection />
      <section className=" relative z-[2]  pb-9 dark:bg-slate-300 ">
        <BlobTop />
        <h3 className="text-[50px] xl:text-[80px] font-mono text-gray-800 col-span-full text-right w-[90%]  ">
          My Skills
        </h3>
        <CardContainer skill={skill} />
        <div className="mt-16 h-1 bg-slate-400  xl:col-span-3 w-5/6 rounded-sm  mb-6 m-auto"></div>
        <h3 className="text-[30px] xl:text-[60px] font-mono text-gray-800 col-span-full text-right w-[90%]  ">
          My Git Repos
        </h3>
        <div>
          <GitSlider />
        </div>
        <Blob />
      </section>
    </MotionMain>
  );
}
