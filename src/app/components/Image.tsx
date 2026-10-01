"use client";

import Image from "next/image";
import Img from "../../../public/assets/images/93682279.png";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function HeaderImg() {
  const [scrolled, setScrolled] = useState(false);

  const matches = useMediaQuery("(max-width:765px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (matches) {
        setScrolled(scrollY >= 330);
      } else {
        setScrolled(scrollY >= 200);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [matches]);

  return (
    <div
      className={`
        transition-all
        duration-300
        ease-out
        ${
          scrolled
            ? matches
              ? `
                fixed
                left-4
                top-3
                z-50
                h-[60px]
                w-[60px]
              `
              : `
                fixed
                left-4
                top-2
                z-50
                h-[50px]
                w-[50px]
              `
            : `
              relative
              h-64
              w-64
              sm:h-72
              sm:w-72
            `
        }
      `}
    >
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-full
          border
          border-sky-400/30
          bg-[#070b12]
          shadow-[0_0_30px_rgba(56,189,248,0.12)]
        "
      >
        <Image
          src={Img}
          alt="Ali Ghiasi"
          fill
          priority
          sizes="
            (max-width: 765px) 60px,
            50px
          "
          className="
            select-none
            object-cover
            object-center
          "
          draggable={false}
        />
      </div>
    </div>
  );
}
