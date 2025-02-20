"use client";
import Card from "./Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export default function CardContainer(prop: any) {
  const { skill } = prop;
  return (
    <div className="w-[500px]">
      <Slide infinite autoplay transitionDuration={50} duration={4000}>
        {skill.map((item: any, index: any) => (
          <Card img={item} key={index} />
        ))}
      </Slide>
    </div>
  );
}
