"use client";

import { useEffect } from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { AllLang } from "./AllLang";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getData } from "@/store/git/gitReducer";

interface GitRepository {
  name: string;
  language?: string;
  date?: string;
  url: string;
  allLnag?: string;
}

interface GitSliderProps {
  some: GitRepository[];
}

interface GitState {
  data: GitRepository[];
}

export default function GitSlider({ some }: GitSliderProps) {
  const dispatch = useDispatch<AppDispatch>();

  const gitD = useSelector((state: { git: GitState }) => state.git);

  useEffect(() => {
    dispatch(getData(some));
  }, [dispatch, some]);

  if (!gitD.data || gitD.data.length === 0) {
    return (
      <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]">
        <p className="text-sm text-gray-500">
          No GitHub repositories available.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <Slide infinite autoplay transitionDuration={500} duration={6000} arrows>
        {gitD.data.map((item, index) => (
          <div key={`${item.name}-${index}`} className="px-2 pb-2">
            <article
              className="
                group relative mx-auto w-full max-w-[360px]
                overflow-hidden rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-5
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-sky-400/30
                hover:bg-white/[0.05]
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none absolute
                  -right-16 -top-16
                  h-32 w-32
                  rounded-full
                  bg-sky-400/10
                  blur-3xl
                  transition-opacity duration-300
                  group-hover:bg-sky-400/20
                "
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="
                      flex h-11 w-11 shrink-0
                      items-center justify-center
                      rounded-xl
                      border border-sky-400/20
                      bg-sky-400/10
                      text-sky-300
                    "
                  >
                    <GitHubIcon />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="
                        truncate
                        text-lg font-semibold
                        text-white
                        transition-colors
                        group-hover:text-sky-300
                      "
                      title={item.name}
                    >
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">GitHub Repository</p>
                  </div>
                </div>

                {/* Repository information */}
                <div className="space-y-3">
                  <div
                    className="
                      flex items-center justify-between
                      rounded-xl
                      border border-white/5
                      bg-black/10
                      px-3 py-2
                    "
                  >
                    <span className="text-xs text-gray-500">Main language</span>

                    <span className="text-sm font-medium text-sky-300">
                      {item.language || "Not specified"}
                    </span>
                  </div>

                  {item.date && (
                    <div
                      className="
                        flex items-center justify-between
                        rounded-xl
                        border border-white/5
                        bg-black/10
                        px-3 py-2
                      "
                    >
                      <span className="text-xs text-gray-500">Updated</span>

                      <span className="text-sm text-gray-300">{item.date}</span>
                    </div>
                  )}
                </div>

                {/* GitHub button */}
                <Button
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  fullWidth
                  startIcon={<GitHubIcon fontSize="small" />}
                  sx={{
                    mt: 2.5,
                    py: 1,
                    borderRadius: "12px",
                    textTransform: "none",
                    color: "#7dd3fc",
                    borderColor: "rgba(56, 189, 248, 0.25)",
                    backgroundColor: "rgba(56, 189, 248, 0.05)",
                    "&:hover": {
                      borderColor: "rgba(56, 189, 248, 0.5)",
                      backgroundColor: "rgba(56, 189, 248, 0.1)",
                    },
                  }}
                >
                  View on GitHub
                </Button>

                {/* Languages */}
                {item.allLnag && (
                  <div className="mt-3">
                    <AllLang url={item.allLnag} />
                  </div>
                )}
              </div>
            </article>
          </div>
        ))}
      </Slide>

      {/* Bottom indicator */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
        <span className="text-xs text-gray-600">GitHub repositories</span>
      </div>
    </div>
  );
}
