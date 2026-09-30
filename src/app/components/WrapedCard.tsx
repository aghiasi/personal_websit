"use client";

import { useState } from "react";
import Image from "next/image";

interface WrappedCardProps {
  img: string | any;
}

export default function WrapedCard({ img }: WrappedCardProps) {
  const [change, setChange] = useState(false);

  return (
    <div
      onClick={() => setChange((prev) => !prev)}
      className="
        group
        relative
        z-[4]
        flex
        h-[250px]
        w-[200px]
        cursor-pointer
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-4
        shadow-xl
        backdrop-blur-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-2
        hover:rotate-3
        hover:scale-105
        hover:border-sky-400/30
        hover:bg-white/[0.06]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
        active:translate-y-2
        active:scale-95
      "
    >
      {!change ? (
        <>
          {/* Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-10
              rounded-full
              bg-sky-400/10
              opacity-0
              blur-3xl
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {/* Image */}
          <div
            className="
              relative
              z-10
              h-full
              w-full
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-[#070b12]
            "
          >
            <Image
              src={img}
              alt="Card image"
              fill
              sizes="200px"
              className="
                select-none
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
              draggable={false}
            />
          </div>
        </>
      ) : (
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-xl
              border
              border-sky-400/20
              bg-sky-400/10
              text-2xl
              text-sky-300
            "
          >
            ↺
          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            Click to return
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Click the card again to show the image.
          </p>
        </div>
      )}

      {/* Border highlight */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-2xl
          border
          border-transparent
          transition-colors
          duration-300
          group-hover:border-sky-400/10
        "
      />
    </div>
  );
}
