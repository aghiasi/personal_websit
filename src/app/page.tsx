import * as motion from "motion/react-client";

import GitHub from "./components/GitHub";
import HeaderImg from "./components/Image";
import Main from "./components/Main";
import ChatBtn from "./components/ChatBtn";

import AboutSection from "./about/page";
import ProjectsSection from "./projects/page";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import BlogIndex from "./blog/page";

export default function Home() {
  return (
    <>
      <ChatBtn />

      {/* Hero */}
      <header
        id="home"
        className="relative overflow-hidden border-b border-white/10 bg-[#070b12]"
      >
        {/* Background glows */}
        <div
          className="pointer-events-none absolute -left-40 top-10
                     h-96 w-96 rounded-full
                     bg-sky-500/10 blur-3xl"
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0
                     h-96 w-96 rounded-full
                     bg-sky-500/5 blur-3xl"
        />

        <div
          className="site-container relative flex min-h-[calc(100vh-4rem)]
                     flex-col justify-center py-20"
        >
          <div
            className="grid grid-cols-1 items-center gap-12
                       lg:grid-cols-[1fr_360px]"
          >
            {/* Hero content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-5 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full bg-sky-400
                             shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                />

                <span
                  className="text-xs font-medium uppercase
                             tracking-[0.2em] text-sky-300"
                >
                  Programmer & Application Developer
                </span>
              </div>

              <h1
                className="text-4xl font-bold tracking-tight
                           text-white sm:text-5xl lg:text-6xl"
              >
                Hello, I&apos;m{" "}
                <span className="text-sky-300">Ali Ghiasi.</span>
              </h1>

              <p
                className="mt-6 max-w-2xl text-base leading-8
                           text-gray-400 md:text-lg"
              >
                I build software, web applications, APIs, and enterprise systems
                using modern development technologies and mainframe platforms.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2
                             rounded-xl border border-sky-400/20
                             bg-sky-400/10 px-5 py-3
                             text-sm font-medium text-sky-300
                             transition-all duration-200
                             hover:border-sky-400/40
                             hover:bg-sky-400/15
                             hover:text-sky-200"
                >
                  View Projects
                  <span>↓</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2
                             rounded-xl border border-white/10
                             bg-white/5 px-5 py-3
                             text-sm font-medium text-gray-300
                             transition-all duration-200
                             hover:border-sky-400/20
                             hover:bg-white/10
                             hover:text-white"
                >
                  About Me
                </a>

                <a
                  href="https://github.com/aghiasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             rounded-xl border border-white/10
                             bg-white/5 px-5 py-3
                             text-sm font-medium text-gray-300
                             transition-all duration-200
                             hover:border-sky-400/20
                             hover:bg-white/10
                             hover:text-white"
                >
                  GitHub
                  <span>↗</span>
                </a>
              </div>

              {/* Technologies */}
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "C++",
                  "TypeScript",
                  "JavaScript",
                  "Node.js",
                  "Next.js",
                  "React",
                  "COBOL",
                  "IBM DB2",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10
                               bg-white/[0.03] px-3 py-2
                               text-xs text-gray-400
                               transition-colors duration-200
                               hover:border-sky-400/20
                               hover:bg-sky-400/10
                               hover:text-sky-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow */}
                <div
                  className="pointer-events-none absolute inset-0
                             rounded-full bg-sky-400/10 blur-3xl"
                />

                {/* Circular image */}
                <div
                  className="relative h-64 w-64 rounded-full p-[2px]
                             bg-gradient-to-br from-sky-400/60
                             via-sky-400/20 to-transparent
                             sm:h-72 sm:w-72"
                >
                  <div
                    className="relative h-full w-full overflow-hidden
                               rounded-full border border-white/10
                               bg-[#070b12]"
                  >
                    <HeaderImg />
                  </div>
                </div>

                {/* GitHub floating button */}
                <a
                  href="https://github.com/aghiasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit GitHub"
                  className="absolute bottom-4 right-4 flex h-12 w-12
                             items-center justify-center rounded-xl
                             border border-white/10 bg-[#070b12]/90
                             text-gray-300 shadow-xl backdrop-blur
                             transition-all duration-200
                             hover:-translate-y-1
                             hover:border-sky-400/30
                             hover:bg-sky-400/10
                             hover:text-sky-300"
                >
                  <GitHub />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto mt-16 flex flex-col items-center
                       gap-2 text-xs text-gray-600
                       transition-colors hover:text-sky-300"
          >
            <span>Explore</span>

            <span
              className="flex h-8 w-5 items-start justify-center
                         rounded-full border border-white/10 p-1"
            >
              <span
                className="h-1.5 w-1.5 animate-bounce
                           rounded-full bg-sky-400"
              />
            </span>
          </motion.a>
        </div>
      </header>

      {/* Main */}
      <Main />

      {/* About */}
      <AboutSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Skills */}
      <Skills />

      {/* Testimonials */}
      <Testimonials />

      {/* Blog */}
      <BlogIndex />
    </>
  );
}
