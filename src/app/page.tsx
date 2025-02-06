import * as motion from "motion/react-client";
import GitHub from "./components/GitHub";
import HeaderImg from "./components/Image";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import ChatBtn from "./components/ChatBtn";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <ChatBtn />
      <header className="header">
        <div className="header_wraper">
          <h1 className="mb-16">Wellcome To Aghiasi WebSite .</h1>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <HeaderImg />
          <a
            href="https://github.com/aghiasi"
            className="header_img header_img-icon"
          >
            <GitHub />
          </a>
        </motion.div>
      </header>
      <Main />
      <Footer />
    </>
  );
}
