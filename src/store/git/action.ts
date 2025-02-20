import { fetchGit } from "@/libs/fetchGit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const gitFetch = createAsyncThunk("fetchGit",()=>{
    if(!sessionStorage.getItem("gitData")){
    return fetchGit()
    }
    else{
        const data = sessionStorage.getItem("gitData")
        if(data){
        return JSON.parse(data)
        }
    }
})