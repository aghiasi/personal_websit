"use client"
import { getAllLang } from "@/libs/getAllLang";
import {  ArrowDownward } from "@mui/icons-material";
import { Button } from "@mui/material";
import {  useState } from "react";
export const AllLang = ({url}:any) => {
  const [getData , setData]= useState<any>();
  const [used ,setUsed]=useState(false)
    const getAll = async()=>{
      if(!used){
      const data = await getAllLang(url)
      const keys = Object.keys(data.data)
      setData(keys)
      setUsed(true)
      }
    }
    return (
      <>
        <Button variant="outlined" className="mt-2" onClick={getAll} > all languages used <ArrowDownward/></Button>
        {getData && getData.map((item:string,index:number)=>(
          <p key={item} className="m-1 mt-2">{index + 1 } : {item}</p>
        ))}
      </>
    );
};
