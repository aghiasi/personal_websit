import { section as Section, div as Div } from "motion/react-client";
import CodeIcon from "@mui/icons-material/Code";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Diversity1Icon from "@mui/icons-material/Diversity1";
export default function TopSection() {
  return (
    <Section className="top_section">
      <Div initial={{opacity:0}} whileInView={{opacity:1}}>
        <CodeIcon sx={{ color: "white", width: "300px", height: "250px" }} />
        <p>Love to Code</p>
      </Div>
      <Div initial="offscreen" whileInView="onscreen">
        <Diversity3Icon
          sx={{ color: "white", width: "300px", height: "250px" }}
        />
        <p>Hard Worker and Good TeamMate</p>
      </Div>
      <Div initial="offscreen" whileInView="onscreen">
        <Diversity1Icon
          sx={{ color: "white", width: "300px", height: "250px" }}
        />
        <p>Love My Family</p>
      </Div>
    </Section>
  );
}
