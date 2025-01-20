import { div as Div } from "motion/react-client";
import Image from "next/image";
import type { Variants } from "motion/react"
import gradient from "random-gradient";
const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
    
}
export default function Card(prop:any) {
  const randomNumberGenerator =()=>{
    const colors = ["green","blue","gray","cyan","white","purple","red","orange","yellow","fuchsia","teal"]
   const  randomNumb =  Math.floor(Math.random()*10)
    const random =   gradient(colors[randomNumb])
    return random ;
  }
  return (
    <>
    <div className="component ">
      <Div
        className="cardContainer relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div className="splash" style={{background:randomNumberGenerator()}} />
        <Div variants={cardVariants} whileHover={{scale:1.1,rotate:2}} whileTap={{y:300}}  className="card z-[4] hover:rotate-6"><Image src={prop.img} alt="" width={200} height={200} /> </Div>
      </Div>
    </div>
    </>
  );
}
