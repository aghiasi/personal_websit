"use client";

import { useState } from "react";
import Link from "next/link";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Admin", href: "/admin" },
];

type MenuBtnProps = {
  installPrompt: {
    prompt: () => Promise<void>;
    userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
  } | null;
  onInstall: () => Promise<void>;
  isInstalled: boolean;
};

export default function MenuBtn({
  installPrompt,
  onInstall,
  isInstalled,
}: MenuBtnProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <IconButton
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          sx={{
            width: 42,
            height: 42,
            color: "#7dd3fc",
            border: "1px solid rgba(56, 189, 248, 0.2)",
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            transition: "all 200ms ease",
            "&:hover": {
              backgroundColor: "rgba(56, 189, 248, 0.08)",
              borderColor: "rgba(56, 189, 248, 0.4)",
            },
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Navigation */}
      <div
        id="navbar-dropdown"
        className={`
          absolute
          left-0
          top-full
          w-full
          overflow-hidden
          border-b
          border-white/10
          bg-[#070b12]/95
          backdrop-blur-xl
          transition-all
          duration-300
          md:static
          md:block
          md:w-auto
          md:overflow-visible
          md:border-0
          md:bg-transparent
          md:backdrop-blur-none
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          }
        `}
      >
        <ul
          className="
            flex
            flex-col
            gap-1
            px-5
            py-5
            md:flex-row
            md:items-center
            md:gap-1
            md:p-0
          "
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="
                  group
                  relative
                  block
                  rounded-lg
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-gray-400
                  transition-all
                  duration-200
                  hover:bg-white/[0.04]
                  hover:text-sky-300
                  md:px-3
                  md:py-2
                "
              >
                {link.label}

                {/* Hover underline */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-sky-400
                    shadow-[0_0_8px_rgba(56,189,248,0.7)]
                    transition-all
                    duration-300
                    group-hover:w-1/2
                  "
                />
              </Link>
            </li>
          ))}

          {!isInstalled && installPrompt && (
            <li>
              <button
                type="button"
                onClick={async () => {
                  closeMenu();
                  await onInstall();
                }}
                className="
                  mt-1
                  block
                  w-full
                  rounded-lg
                  border
                  border-emerald-400/30
                  bg-emerald-400/10
                  px-4
                  py-2.5
                  text-left
                  text-sm
                  font-medium
                  text-emerald-300
                  transition-all
                  duration-200
                  hover:border-emerald-400/60
                  hover:bg-emerald-400/15
                "
              >
                Install app
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
