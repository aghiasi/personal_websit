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
  const data = await fetchGit();

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
    <main className="relative w-full overflow-hidden bg-[#070b12]">
      {/* Top section */}
      <TopSection />

      {/* Skills & GitHub */}
      <section
        className="
          relative
          z-[2]
          overflow-hidden
          border-t
          border-white/10
          bg-[#070b12]
          py-16
        "
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-sky-500/5
            blur-3xl
          "
        />

        <BlobTop />

        <div className="site-container relative">
          {/* Section header */}
          <div className="mb-10">
            <div className="mb-3 flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-sky-400
                  shadow-[0_0_12px_rgba(56,189,248,0.8)]
                "
              />

              <span
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-sky-300
                "
              >
                Development
              </span>
            </div>

            <h2
              className="
                text-3xl
                font-semibold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              Skills & <span className="text-sky-300">GitHub</span>
            </h2>

            <p
              className="
                mt-3
                max-w-2xl
                text-sm
                leading-7
                text-gray-400
              "
            >
              Technologies I work with and selected repositories from my GitHub
              profile.
            </p>
          </div>

          {/* Content */}
          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[1.2fr_0.8fr]
              lg:items-start
            "
          >
            {/* Skills */}
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-sm
              "
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Technologies
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Tools and technologies I use in development.
                </p>
              </div>

              <CardContainer skill={skill} />
            </div>

            {/* GitHub */}
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-sm
              "
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white">
                  GitHub Repositories
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Recent projects and open-source work.
                </p>
              </div>

              <GitSlider some={data} />
            </div>
          </div>
        </div>

        <Blob />
      </section>
    </main>
  );
}
