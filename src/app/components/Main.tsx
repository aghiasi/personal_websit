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
import { fetchGit } from "@/libs/fetchGit";
export default async function Main() {
  const data  = await fetchGit()
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
    <MotionMain className=" w-screen overflow-hidden dark:bg-slate-200">
      <TopSection />
      <section className=" relative z-[2] grid items-center grid-cols-1 sm:grid-cols-2 gap-9 pb-9 dark:bg-slate-300 ">
        <BlobTop />
        <h1 className=" sm:col-span-2 text-xl pl-5 text-white mt-5"> my skills and git repos</h1>
        <CardContainer skill={skill} />
        <div>
          <GitSlider some={data} />
        </div>
        <Blob />
      </section>
    </MotionMain>
  );
}
