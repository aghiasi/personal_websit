"use client";
import Image from "next/image";
import Img from "../../../public/assets/images/93682279.jpg";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { useMediaQuery } from "@mui/material";
export default function HeaderImg() {
  const [top, setTop] = useState<number>();
    const matches = useMediaQuery("(max-width:765px")
  useEffect(() => {
    const element = document.getElementById("id")
    window.addEventListener("scroll",()=>{
      const y:number = window.scrollY;
      setTop(y);
    })
    if(top){
      if(matches){
      if(top >= 330){
        element?.classList.add("fixed","top-3","left-4", "w-[60px]","h-[60px]","z-10", "md:w-[50px]", "md:h-[50px]")
      }else{
        element?.classList.remove("fixed","top-3","left-4", "w-[60px]","h-[60px]","z-10", "md:w-[50px]", "md:h-[50px]")
      }
      }else{
      if(top >= 200){
        element?.classList.add("fixed","top-1","left-4", "w-[30px]","h-[30px]","z-10", "md:w-[50px]", "md:h-[50px]")
      }else{
       return ()=>{
        element?.classList.remove("fixed","top-1","left-4", "w-[30px]","h-[30px]","z-10", "md:w-[50px]", "md:h-[50px]")
      } 
      }
    }
    }else{
      return ()=>{
        element?.classList.remove("fixed","top-1","left-4", "w-[30px]","h-[30px]","z-10", "md:w-[50px]", "md:h-[50px]")
      }
    }
  }, [top]);
  return (
    <motion.div>
      <Image
        id="id"
        className="header_img"
        src={Img}
        alt=""
        width={200}
        height={200}
      />
    </motion.div>
  );
}
