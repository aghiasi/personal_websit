import * as motion from "motion/react-client";
import GitHub from "./components/GitHub";
import HeaderImg from "./components/Image";
export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header_wraper">
          <h1 className="mb-16">Wellcome To Aghiasi WebSite .</h1>
        </div>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <HeaderImg /> 
          <a href="https://github.com/aghiasi"className="header_img header_img-icon"><GitHub /></a>
        </motion.div>
      </header>
      <main className="h-[2000px]">

      </main>
    </>
  );
}
