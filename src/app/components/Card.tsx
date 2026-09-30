"use client";

import WrapedCard from "./WrapedCard";

interface CardProps {
  img: any;
  data?: any;
}

export default function Card({ img, data }: CardProps) {
  return (
    <div className="group relative flex w-full items-center justify-center">
      {/* Background glow */}
      <div
        className="
          pointer-events-none absolute
          h-56 w-56
          rounded-full
          bg-sky-400/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-sky-400/20
          group-hover:scale-110
        "
      />

      {/* Card container */}
      <div
        className="
          relative
          flex
          w-[300px]
          items-center
          justify-center
          sm:w-[340px]
          lg:w-[370px]
        "
      >
        <div
          className="
            absolute
            -inset-3
            rounded-[28px]
            border border-sky-400/10
            bg-sky-400/[0.02]
            opacity-0
            blur-sm
            transition-all duration-500
            group-hover:opacity-100
          "
        />

        <div className="relative z-10">
          <WrapedCard img={img} />
        </div>
      </div>
    </div>
  );
}
