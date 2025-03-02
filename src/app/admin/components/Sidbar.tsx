"use client";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutHandle } from "@/libs/logoutHandle";
import { useState } from "react";
export default function Sidbar() {
  const pathname = usePathname();
  const [show , setShow] = useState(false)
  return (
    <>

      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={()=>setShow(!show)}
      >
        <span className="sr-only text-gray-700">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 hover:w-64 h-screen  transition-transform -translate-x-full sm:translate-x-0 "
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium ">
            <li>
              <Link
                href="/admin"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                aria-disabled={pathname == "/admin" && true}
              >
                <DashboardIcon />
                <span className="ms-3 side_span ">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/inbox"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <ForwardToInboxIcon />
                <span className="ms-3 side_span">Inbox</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HomeIcon />
                <span className="flex-1 ms-3 side_span ">Home</span>
              </Link>
            </li>
            <li>
              <a
                onClick={logoutHandle}
                className="flex items-center p-2 cursor-pointer text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <LogoutIcon />
                <span className="flex-1 ms-3 side_span ">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
        {show && 
          <ul className="space-y-2 font-medium ">
            <li>
              <Link
                href="/admin"
                className="flex items-center p-2 text-gray-900   hover:bg-gray-100 bg-gray-200 group"
                aria-disabled={pathname == "/admin" && true}
              >
                <DashboardIcon />
                <span className="ms-3  ">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/inbox"
                className="flex items-center p-2 text-gray-900  hover:bg-gray-100 bg-gray-200 group"
              >
                <ForwardToInboxIcon />
                <span className="ms-3 ">Inbox</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex items-center p-2 cursor-pointer text-gray-900  hover:bg-gray-100 bg-gray-200 group"
              >
                <HomeIcon />
                <span className="flex-1 ms-3 ">Home</span>
              </Link>
            </li>
            <li>
              <a
                onClick={logoutHandle}
                className="flex items-center p-2 cursor-pointer text-gray-900   hover:bg-gray-100 bg-gray-200 group"
              >
                <LogoutIcon />
                <span className="flex-1 ms-3  ">Logout</span>
              </a>
            </li>
          </ul>
        }
    </>
  );
}
