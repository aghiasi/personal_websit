import { div as Div } from "motion/react-client";
import WrapedCard from "./WrapedCard";
const darkColors = [
  "dark:bg-lime-800",
  "dark:bg-blue-800",
  "dark:bg-gray-800",
  "dark:bg-cyan-800",
  "dark:bg-rose-800",
  "dark:bg-purple-800",
  "dark:bg-red-800",
  "dark:bg-orange-800",
  "dark:bg-yellow-800",
  "dark:bg-fuchsia-800",
  "dark:bg-teal-800",
];
const colors = [
  "bg-lime-400",
  "bg-blue-400",
  "bg-gray-400",
  "bg-cyan-400",
  "bg-rose-400",
  "bg-purple-400",
  "bg-red-400",
  "bg-orange-400",
  "bg-yellow-400",
  "bg-fuchsia-400",
  "bg-teal-400",
];
export default function Card(prop: any) {
  const randomNumb = Math.floor(Math.random() * 10);
  const color = colors[randomNumb];
  const darkColor = darkColors[randomNumb];
  return (
    <>
      <div className="component ">
        <Div
          className="cardContainer relative"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          <div className={`splash ${color} ${darkColor}`} />
          <WrapedCard img={prop.img} gitData={prop.data} />
        </Div>
      </div>
    </>
  );
}
