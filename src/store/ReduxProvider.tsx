"use client"
import {store} from "./store"
import { Provider } from "react-redux"
import { PropsWithChildren } from "react";
export function ReduxProvider ({children}:PropsWithChildren<any>){
    return(
        <Provider store={store}>{children}</Provider>
    )
}