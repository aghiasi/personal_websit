import { main as MotionMain } from "motion/react-client";
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
    <MotionMain className=" w-full dark:bg-slate-200">
      <TopSection />
      <section className="container grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 w-screen   justify-items-center pb-9 dark:bg-slate-300">
        <h3 className="text-[100px] font-mono text-gray-800 col-span-full text-right w-[90%]  ">My Skills</h3>
        {skill.map((item, index) => (
          <Card img={item} key={index}  />
        ))}
      </section>
    </MotionMain>
  );
}
