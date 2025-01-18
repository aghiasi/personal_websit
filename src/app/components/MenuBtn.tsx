"use client"
import { IconButton } from '@mui/material';
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
export default function MenuBtn() {
    const [open,setOpen]= useState<boolean>(false);
    const menu = ():void=>{
        setOpen(!open)
        const menu = document.getElementById("navbar-dropdown")?.classList
        if(open){
            menu?.remove("-top-80")
            menu?.add( "top-[50px]",)
        }else{
            menu?.remove("top-[50px]")
            menu?.add("-top-80")
        }
    }
  return (
    <>
    <div className="fixed  md:static -top-80 left-0 transition-all  w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex  flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Button  href="#"className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Button>
        </li>
        <li>
          <Button  href="#"className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">AboutMe</Button>
        </li>
        <li>
          <Button  href="#"className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Skills</Button>
        </li>
        <li>
          <Button  href="#"className="block py-2 bg-transparent text-center px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">ContactMe</Button>
        </li>
      </ul>
    </div>
    <span className="ml-5 md:hidden">
      <IconButton onClick={menu}>
<MenuIcon  sx={{color:"white"}} />
        </IconButton>
    </span>
    </>
)
}
