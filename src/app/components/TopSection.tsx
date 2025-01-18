import { section as Section, div as Div } from "motion/react-client";
import CodeIcon from "@mui/icons-material/Code";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import type { Variants } from "motion/react";
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
export default function TopSection() {
  return (
    <Section className="top_section">
      <Div initial="offscreen" whileInView="onscreen" viewport={{amount:0.8}}>
        <CodeIcon sx={{ color: "white", width: "300px", height: "250px" }} />
        <p>Love to Code</p>
      </Div>
      <Div>
        <Diversity3Icon
          sx={{ color: "white", width: "300px", height: "250px" }}
        />
        <p>Hard Worker and Good TeamMate</p>
      </Div>
      <Div>
        <Diversity1Icon
          sx={{ color: "white", width: "300px", height: "250px" }}
        />
        <p>Love My Family</p>
      </Div>
    </Section>
  );
}
