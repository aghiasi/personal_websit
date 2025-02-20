"use client"
import  { useEffect,Fragment } from 'react'
import { Alert, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AllLang } from "./AllLang";
import { Slide } from "react-slideshow-image";
import { useDispatch, useSelector } from 'react-redux';
import { gitFetch } from '@/store/git/action';
import  { AppDispatch, store } from '@/store/store';
import { pageRefresh } from '@/store/git/gitReducer';
export default  function GitSlider() {
const dispatch = useDispatch<AppDispatch>()
const gitdata = useSelector((state:any)=>state.git)
useEffect(()=>{
    dispatch(gitFetch())
  console.log(gitdata)
},[])
console.log(gitdata)
  return (
    <Fragment>
            {gitdata.data && !gitdata.loading && gitdata.data.map(async (item:any, index:number) => (
            <Box
              key={index}
              className="bg-white rounded-md p-4 shadow-gray-400 shadow-md m-5 min-w-80 float-right"
            >
              <div className="flex mb-5 items-center">
                <GitHubIcon />
                <h3 className="text-xl ml-2">{item.name}</h3>
              </div>
              <div className="pl-3">
                <p>Main language : {item.language}</p>
                <p>date : {item.date}</p>
                <AllLang url={item.allLnag} />
              </div>
            </Box>
          ))}
          {gitdata.error && <Box className="w-screen">
            <Alert className='w-3/5 m-auto' severity='error'>{gitdata.error}</Alert>
          </Box>
          }
  </Fragment>
  )
}
