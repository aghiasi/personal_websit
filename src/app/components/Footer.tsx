export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070b12]">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2
                   h-64 w-64 -translate-x-1/2 rounded-full
                   bg-sky-500/10 blur-3xl"
      />

      <div className="site-container relative">
        <div className="py-12">
          {/* Main footer */}
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* Brand / introduction */}
            <div className="max-w-md">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
                  Available for projects
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Let&apos;s build something
                <span className="text-sky-300"> together.</span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                I&apos;m a programmer and application developer interested in
                software development, modern web applications, enterprise
                systems, and interesting technical projects.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ghaisikhamene@gmail.com"
                className="group flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-sky-300"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg
                             border border-white/10 bg-white/5
                             transition-all group-hover:border-sky-400/30
                             group-hover:bg-sky-400/10"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5 12 13l9-5.5M4.5 19.5h15A1.5 1.5 0 0 0 21 18V6a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 6v12a1.5 1.5 0 0 0 1.5 1.5Z"
                    />
                  </svg>
                </span>
                ghaisikhamene@gmail.com
              </a>

              <a
                href="tel:+989904282582"
                className="group flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-sky-300"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg
                             border border-white/10 bg-white/5
                             transition-all group-hover:border-sky-400/30
                             group-hover:bg-sky-400/10"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.5 3.5h3l1.5 4-2 1.5a14.5 14.5 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z"
                    />
                  </svg>
                </span>
                +98 990 428 2582
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/aghiasi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl
                           border border-white/10 bg-white/5
                           text-gray-400 transition-all duration-200
                           hover:-translate-y-0.5 hover:border-sky-400/30
                           hover:bg-sky-400/10 hover:text-sky-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.46 11.46 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.13 3.17.76.84 1.22 1.91 1.22 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://discordapp.com/users/648184362482925598"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="group flex h-11 w-11 items-center justify-center rounded-xl
                           border border-white/10 bg-white/5
                           text-gray-400 transition-all duration-200
                           hover:-translate-y-0.5 hover:border-sky-400/30
                           hover:bg-sky-400/10 hover:text-sky-300"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.54 4.11A16.87 16.87 0 0 0 15.25 2.8l-.52 1.05a15.8 15.8 0 0 0-5.46 0L8.75 2.8a16.8 16.8 0 0 0-4.3 1.31C1.73 8.18 1 12.15 1.36 16.07a17.2 17.2 0 0 0 5.28 2.66l1.28-1.74c-.7-.26-1.37-.58-2-.96l.49-.38c3.85 1.8 8.02 1.8 11.82 0l.5.38c-.64.38-1.31.7-2.01.96L18 18.73a17.17 17.17 0 0 0 5.28-2.66c.42-4.55-.72-8.48-3.74-11.96ZM8.05 13.84c-1.15 0-2.1-1.06-2.1-2.36s.93-2.36 2.1-2.36c1.18 0 2.12 1.06 2.1 2.36 0 1.3-.93 2.36-2.1 2.36Zm7.9 0c-1.16 0-2.1-1.06-2.1-2.36s.93-2.36 2.1-2.36 2.1 1.06 2.1 2.36-.93 2.36-2.1 2.36Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="mt-10 flex flex-col gap-3 border-t border-white/10
                       pt-6 text-xs text-gray-500 sm:flex-row
                       sm:items-center sm:justify-between"
          >
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-gray-400">Ali Ghiasi</span>. All rights
              reserved.
            </p>

            <div className="flex items-center gap-2">
              <span>Built with</span>
              <span className="text-gray-400">Next.js</span>
              <span className="text-gray-700">•</span>
              <span className="text-gray-400">TypeScript</span>
              <span className="text-gray-700">•</span>
              <span className="text-gray-400">React</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
