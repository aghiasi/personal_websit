"use client";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutHandle } from "@/libs/logoutHandle";
export default function Sidbar() {
  const pathname = usePathname();
  return (
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
  );
}
