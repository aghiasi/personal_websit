"use client"
export const CardClickHandle =(state:boolean , setState:Function):void=>{
state ? setState(false) : setState(true);
console.log(state)
}