"use client";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutHandle } from "@/libs/logoutHandle";
import { useState } from "react";

export default function Sidbar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const isActive = (path: string) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }

    return pathname.startsWith(path);
  };

  const closeMobile = () => {
    setShow(false);
  };

  return (
    <>
      {/* ========================================
          Mobile menu button
      ======================================== */}
      <button
        type="button"
        aria-label={show ? "Close sidebar" : "Open sidebar"}
        onClick={() => setShow(!show)}
        className="
          fixed
          left-4
          top-4
          z-50
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-[#070b12]/90
          text-gray-400
          shadow-lg
          backdrop-blur-md
          transition-all
          hover:border-sky-400/30
          hover:bg-sky-400/10
          hover:text-sky-300
          sm:hidden
        "
      >
        {show ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
      </button>

      {/* ========================================
          Mobile overlay
      ======================================== */}
      {show && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={closeMobile}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            backdrop-blur-[2px]
            sm:hidden
          "
        />
      )}

      {/* ========================================
          Sidebar
      ======================================== */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-64
          transform
          border-r
          border-white/10
          bg-[#070b12]
          shadow-[20px_0_60px_rgba(0,0,0,0.25)]
          transition-transform
          duration-300
          sm:translate-x-0
          ${show ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            h-64
            w-full
            bg-sky-500/[0.04]
            blur-3xl
          "
        />

        <div className="relative flex h-full flex-col px-3 py-5">
          {/* ========================================
              Logo / title
          ======================================== */}
          <div className="mb-8 px-3">
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-sky-400/20
                  bg-sky-400/10
                  text-sky-300
                  shadow-[0_0_20px_rgba(56,189,248,0.08)]
                "
              >
                <DashboardIcon fontSize="small" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">Admin</p>

                <p className="text-[10px] uppercase tracking-[0.15em] text-gray-600">
                  Control Panel
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
              Navigation
          ======================================== */}
          <nav className="flex-1">
            <p
              className="
                mb-3
                px-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-gray-600
              "
            >
              Navigation
            </p>

            <ul className="space-y-1.5">
              {/* ========================================
                  Dashboard
              ======================================== */}
              <li>
                <Link
                  href="/admin"
                  onClick={closeMobile}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    transition-all
                    duration-200
                    ${
                      isActive("/admin")
                        ? "border border-sky-400/10 bg-sky-400/10 text-sky-300"
                        : "border border-transparent text-gray-400 hover:bg-white/[0.04] hover:text-gray-200"
                    }
                  `}
                >
                  {isActive("/admin") && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-5
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-sky-400
                        shadow-[0_0_10px_rgba(56,189,248,0.8)]
                      "
                    />
                  )}

                  <DashboardIcon fontSize="small" />

                  <span>Dashboard</span>
                </Link>
              </li>

              {/* ========================================
                  Existing Inbox
                  DO NOT CHANGE
              ======================================== */}
              <li>
                <Link
                  href="/admin/inbox"
                  onClick={closeMobile}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    transition-all
                    duration-200
                    ${
                      isActive("/admin/inbox")
                        ? "border border-sky-400/10 bg-sky-400/10 text-sky-300"
                        : "border border-transparent text-gray-400 hover:bg-white/[0.04] hover:text-gray-200"
                    }
                  `}
                >
                  {isActive("/admin/inbox") && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-5
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-sky-400
                        shadow-[0_0_10px_rgba(56,189,248,0.8)]
                      "
                    />
                  )}

                  <ForwardToInboxIcon fontSize="small" />

                  <span>Inbox</span>
                </Link>
              </li>

              {/* ========================================
                  Contact Messages
                  NEW
              ======================================== */}
              <li>
                <Link
                  href="/admin/messages"
                  onClick={closeMobile}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    transition-all
                    duration-200
                    ${
                      isActive("/admin/messages")
                        ? "border border-sky-400/10 bg-sky-400/10 text-sky-300"
                        : "border border-transparent text-gray-400 hover:bg-white/[0.04] hover:text-gray-200"
                    }
                  `}
                >
                  {isActive("/admin/messages") && (
                    <span
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-5
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-sky-400
                        shadow-[0_0_10px_rgba(56,189,248,0.8)]
                      "
                    />
                  )}

                  <MailOutlineIcon fontSize="small" />

                  <span>Messages</span>
                </Link>
              </li>

              {/* ========================================
                  Home
              ======================================== */}
              <li>
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-transparent
                    px-3
                    py-3
                    text-sm
                    text-gray-400
                    transition-all
                    duration-200
                    hover:bg-white/[0.04]
                    hover:text-gray-200
                  "
                >
                  <HomeIcon fontSize="small" />

                  <span>Home</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* ========================================
              Bottom section
          ======================================== */}
          <div className="border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={logoutHandle}
              className="
                group
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                border
                border-transparent
                px-3
                py-3
                text-sm
                text-gray-500
                transition-all
                duration-200
                hover:border-red-400/10
                hover:bg-red-400/[0.05]
                hover:text-red-300
              "
            >
              <LogoutIcon fontSize="small" />

              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
