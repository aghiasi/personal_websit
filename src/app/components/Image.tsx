"use client";
import Image from "next/image";
import Img from "../../../public/assets/images/93682279.jpg";
import Love from "../../../public/assets/images/WhatsApp Image 2025-02-22 at 09.49.22_30b2187b.jpg"
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "@mui/material";
import { useCookies } from 'next-client-cookies';
export default function HeaderImg() {
  const [top, setTop] = useState<number>();
  const coookie = useCookies()
  const token = coookie.get("jwt")
  const matches = useMediaQuery("(max-width:765px");
  useEffect(() => {
    const element = document.getElementById("id");
    
    window.addEventListener("scroll", () => {
      const y: number = window.scrollY;
      setTop(y);
    });
    if (top) {
      if (matches) {
        if (top >= 330) {
          element?.classList.add(
            "fixed",
            "top-3",
            "left-4",
            "w-[60px]",
            "h-[60px]",
            "z-10",
            "md:w-[50px]",
            "md:h-[50px]"
          );
        } else {
          element?.classList.remove(
            "fixed",
            "top-3",
            "left-4",
            "w-[60px]",
            "h-[60px]",
            "z-10",
            "md:w-[50px]",
            "md:h-[50px]"
          );
        }
      } else {
        if (top >= 200) {
          element?.classList.add(
            "fixed",
            "top-1",
            "left-4",
            "w-[30px]",
            "h-[30px]",
            "z-10",
            "md:w-[50px]",
            "md:h-[50px]"
          );
        } else {
          return () => {
            element?.classList.remove(
              "fixed",
              "top-1",
              "left-4",
              "w-[30px]",
              "h-[30px]",
              "z-10",
              "md:w-[50px]",
              "md:h-[50px]"
            );
          };
        }
      }
    } else {
      return () => {
        element?.classList.remove(
          "fixed",
          "top-1",
          "left-4",
          "w-[30px]",
          "h-[30px]",
          "z-10",
          "md:w-[50px]",
          "md:h-[50px]"
        );
      };
    }
  }, [top]);
  return (
    <motion.div>
      <Image
        id="id"
        className="header_img"
        src={!token  ? Img : Love}
        alt=""
        width={200}
        height={200}
        
      />
    </motion.div>
  );
}
