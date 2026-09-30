import React from "react";

export default function Blob() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[280px] overflow-hidden">
      {/* Soft blue glow */}
      <div
        className="
          absolute
          bottom-[-180px]
          left-1/2
          h-[420px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/[0.06]
          blur-3xl
        "
      />

      <svg
        className="absolute bottom-0 left-0 h-full w-full opacity-60"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="blobBottomGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.03" />

            <stop offset="45%" stopColor="#0ea5e9" stopOpacity="0.07" />

            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Main wave */}
        <path
          fill="url(#blobBottomGradient)"
          d="
            M0,150
            C120,115 220,180 350,145
            C480,110 570,95 700,140
            C830,185 930,195 1040,150
            C1160,105 1290,100 1440,155
            L1440,320
            L0,320
            Z
          "
        />

        {/* Wave line */}
        <path
          d="
            M0,150
            C120,115 220,180 350,145
            C480,110 570,95 700,140
            C830,185 930,195 1040,150
            C1160,105 1290,100 1440,155
          "
          fill="none"
          stroke="#38bdf8"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Secondary wave */}
        <path
          d="
            M0,190
            C130,160 240,205 370,180
            C500,155 590,140 720,175
            C850,210 950,220 1070,180
            C1190,140 1310,145 1440,185
            L1440,320
            L0,320
            Z
          "
          fill="#38bdf8"
          fillOpacity="0.025"
        />

        {/* Subtle lower line */}
        <path
          d="
            M0,215
            C140,185 260,230 390,205
            C520,180 620,170 750,200
            C880,230 980,235 1090,205
            C1210,175 1320,180 1440,210
          "
          fill="none"
          stroke="#38bdf8"
          strokeOpacity="0.06"
          strokeWidth="1"
        />
      </svg>

      {/* Fade into the page */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-[#070b12]
          to-transparent
        "
      />
    </div>
  );
}
