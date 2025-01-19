import { div as Div } from "motion/react-client";
import Image from "next/image";
import type { Variants } from "motion/react"
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
  return (
    <>
    <div className="component">
      <Div
        className="cardContainer relative"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        <div className="splash" />
        <Div variants={cardVariants} whileHover={{scale:1.1,rotate:2}} whileTap={{y:300}}  className="card z-[4] hover:rotate-6"><Image src={prop.img} alt="" width={200} height={200} /> </Div>
      </Div>
    </div>
    </>
  );
}
