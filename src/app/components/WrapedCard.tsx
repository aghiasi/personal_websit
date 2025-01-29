"use client";
import { useEffect, useState } from "react";
import { div as Div, object } from "motion/react-client";
import Image from "next/image";
import type { Variants } from "motion/react";
import { CardClickHandle } from "@/libs/cardClick";
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
export default function WrapedCard(prop: any) {
  const [change, setChange] = useState<boolean>(false);
  return (
    <>
      {!change ? (
        <Div
          variants={cardVariants}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ y: 300 }}
          className="card z-[4] hover:rotate-6 dark:bg-slate-400"
          onClick={() => CardClickHandle(change, setChange)}
        >
          <Image
            className="select-none"
            src={prop.img}
            alt=""
            width={200}
            height={200}
          />
        </Div>
      ) : (
        <Div
          variants={cardVariants}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ y: 300 }}
          className="card z-[4] hover:rotate-6 dark:bg-slate-400"
          onClick={() => CardClickHandle(change, setChange)}
        >
        </Div>
      )}
    </>
  );
}
