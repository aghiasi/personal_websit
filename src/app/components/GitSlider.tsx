"use client";
import { Box, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AllLang } from "./AllLang";
import { Slide } from "react-slideshow-image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { getData } from "@/store/git/gitReducer";
import jQuery from "jquery";
import { fetchHtml } from "@/libs/fetchHtml";
import { useState } from "react";
export default function GitSlider({ some }: any) {
  const $ = jQuery;
  const [datashow , setDatashow] = useState('')
  const dispatch = useDispatch<AppDispatch>();
  const gitD = useSelector((state: any) => state.git);
  dispatch(getData(some));
  return (
    <div className="">
      <Slide  infinite autoplay transitionDuration={100} duration={6000}>
        {gitD.data &&
          gitD.data.map((item: any, index: number) => (
            <Box
              key={index}
              className="bg-white rounded-md p-4 shadow-gray-400 shadow-md w-[300px] m-auto"
            >
              <div className="flex mb-5 items-center">
                <GitHubIcon />
                <h3 className="text-xl ml-2">{item.name}</h3>
              </div>
              <div className="pl-3">
                <p>Main language : {item.language}</p>
                <p>date : {item.date}</p>
                <Button
                  sx={{
                    marginY: 1,
                  }}
                  variant="outlined"
                  component={"a"}
                  href={item.url}
                  target="blank"
                >
                  github page
                  <GitHubIcon fontSize="small" className="ml-2" />
                </Button>
                <AllLang url={item.allLnag} />
              </div>
            </Box>
          ))}
      </Slide>
    </div>
  );
}
