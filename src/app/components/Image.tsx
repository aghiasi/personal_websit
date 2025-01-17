"use client"
import Image from "next/image";
import Img from "../../../public/assets/images/93682279.jpg";
import { useRef, useState } from "react";
export default function HeaderImg() {
    const [top,setTop]= useState(Number)
    const img = useRef(null)
    const topListener = ():void=>{
        if(img.current){

        }else{

        }
    }
  return (
    <>
        <Image ref={img} className="header_img" src={Img} alt="" width={200} height={200}/>
    </>
  )
}
