import React from "react";

export default function BlobTop() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[260px] overflow-hidden">
      {/* Soft blue glow */}
      <div
        className="
          absolute
          left-1/2
          top-[-180px]
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/[0.06]
          blur-3xl
        "
      />

      <svg
        className="absolute left-0 top-0 h-full w-full opacity-60"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="blobTopGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.10" />

            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.04" />

            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <path
          fill="url(#blobTopGradient)"
          d="
            M0,80
            C120,120 220,35 350,75
            C470,112 560,150 690,105
            C820,60 900,45 1020,80
            C1140,115 1250,150 1440,70
            L1440,0
            L0,0
            Z
          "
        />

        <path
          d="
            M0,125
            C130,165 230,90 360,120
            C490,150 580,175 700,135
            C820,95 930,80 1040,115
            C1160,150 1290,175 1440,105
          "
          fill="none"
          stroke="#38bdf8"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        <path
          d="
            M0,155
            C140,195 250,125 380,150
            C510,175 610,205 730,160
            C850,115 950,110 1070,145
            C1190,180 1320,200 1440,135
          "
          fill="none"
          stroke="#38bdf8"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      </svg>

      {/* Fade into the page background */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-b
          from-transparent
          to-[#070b12]
        "
      />
    </div>
  );
}
