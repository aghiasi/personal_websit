"use client";

import Card from "./Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface CardContainerProps {
  skill: any[];
}

export default function CardContainer({ skill }: CardContainerProps) {
  if (!skill || skill.length === 0) {
    return (
      <div className="flex min-h-[250px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
        <p className="text-sm text-gray-500">No technologies available.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[500px] px-2 sm:px-4">
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-48 w-48
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-sky-400/10
          blur-3xl
        "
      />

      <div className="relative">
        <Slide
          canSwipe
          infinite
          autoplay
          transitionDuration={400}
          duration={4000}
          arrows
        >
          {skill.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[280px] items-center justify-center px-2 py-4"
            >
              <Card img={item} />
            </div>
          ))}
        </Slide>
      </div>

      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        <span className="text-xs text-gray-600">Technologies & tools</span>
      </div>
    </div>
  );
}
