"use client"
export const CardClickHandle =(state:boolean , setState:any):void=>{
state ? setState(false) : setState(true);
console.log(state)
}