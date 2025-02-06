"use client";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";
export default function MenuBtn() {
  const [open, setOpen] = useState(true);
  const menu = (): void => {
    const menu = document.getElementById("navbar-dropdown")?.classList;
    if (open) {
      setOpen(false);
      menu?.remove("-top-80");
      menu?.add("top-[50px]");
    } else {
      setOpen(true);
      menu?.remove("top-[50px]");
      menu?.add("-top-80");
    }
  };
  return (
    <>
      <div
        className="fixed  md:static -top-80 left-0 transition-all  w-full md:block md:w-auto"
        id="navbar-dropdown"
      >
        <ul className="flex  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Button
              LinkComponent={Link}
              href="/"
              className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              LinkComponent={Link}
              href="/admin"
              className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              Admin
            </Button>
          </li>
          <li>
            <Button
              LinkComponent={Link}
              href="/contact"
              className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              aria-current="page"
            >
              contact me
            </Button>
          </li>
        </ul>
      </div>
      <span className="ml-5 md:hidden">
        <IconButton onClick={menu}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
      </span>
    </>
  );
}
