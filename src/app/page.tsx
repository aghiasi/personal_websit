import Img from "../../public/assets/images/93682279.jpg";
import Image from "next/image";
import * as motion from "motion/react-client";
import GitHub from "./components/GitHub";
export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header_wraper">
          <h1 className="mb-16">Wellcome To Aghiasi WebSite .</h1>
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <Image
            className="header_img"
            src={Img}
            width={200}
            height={200}
            alt=""
          />
          <a href="https://github.com/aghiasi"className="header_img header_img-icon"><GitHub /></a>
        </motion.div>
      </header>
    </>
  );
}
