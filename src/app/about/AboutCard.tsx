import Image from "next/image";
import Img from "../../../public/assets/images/93682279.png";

export default function AboutCard() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#070b12]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -left-32 top-10
                   h-72 w-72 rounded-full
                   bg-sky-500/10 blur-3xl"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0
                   h-72 w-72 rounded-full
                   bg-sky-500/5 blur-3xl"
      />

      <div className="site-container relative py-16">
        {/* Section label */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-sky-400
                         shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            />

            <span
              className="text-xs font-medium uppercase
                         tracking-[0.2em] text-sky-300"
            >
              About Me
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Programmer &{" "}
            <span className="text-sky-300">Application Developer</span>
          </h2>
        </div>

        {/* Main card */}
        <div
          className="group relative overflow-hidden rounded-2xl
                     border border-white/10 bg-white/[0.03]
                     p-6 transition-all duration-300
                     hover:border-sky-400/20
                     hover:bg-white/[0.04]
                     md:p-8"
        >
          {/* Card glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24
                       h-56 w-56 rounded-full bg-sky-500/5
                       blur-3xl transition-all duration-500
                       group-hover:bg-sky-500/10"
          />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
            {/* Profile image */}
            <div className="flex shrink-0 justify-center md:justify-start">
              <div
                className="relative h-40 w-40 rounded-full p-[2px]
                           bg-gradient-to-br from-sky-400/60
                           via-sky-400/10 to-transparent"
              >
                <div
                  className="h-full w-full overflow-hidden rounded-full
                             border border-white/10 bg-[#070b12]"
                >
                  <Image
                    src={Img}
                    alt="Ali Ghiasi"
                    width={160}
                    height={160}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    Ali Ghiasi
                  </h3>

                  <p className="mt-1 font-medium text-sky-300">
                    Programmer & Application Developer
                  </p>
                </div>

                <span
                  className="flex w-fit items-center gap-2 rounded-full
                             border border-white/10 bg-white/5
                             px-3 py-1.5 text-xs text-gray-400"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-sky-400
                               shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                  />
                  Available for projects
                </span>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                Programmer and application developer with 3.5+ years of
                professional experience building software, web applications, and
                RESTful APIs. Experienced in frontend and backend development,
                database systems, performance optimization, and working with
                large-scale systems and mainframe technologies.
              </p>

              {/* Information */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <InfoItem icon="💼" label="Experience" value="3.5+ Years" />

                <InfoItem
                  icon="🎓"
                  label="Education"
                  value="Bachelor of Information Technology"
                />

                <InfoItem
                  icon="💻"
                  label="Specialties"
                  value="C++, JavaScript, TypeScript, Node.js, Next.js, React, COBOL"
                />

                <InfoItem
                  icon="🗄️"
                  label="Databases"
                  value="IBM DB2, MongoDB, SQL"
                />
              </div>

              {/* Contact */}
              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="mailto:ghaisikhamene@gmail.com"
                  className="group/contact inline-flex items-center gap-2
                             text-sm text-gray-400 transition-colors
                             hover:text-sky-300"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center
                               rounded-lg border border-white/10
                               bg-white/5 text-xs
                               group-hover/contact:border-sky-400/30
                               group-hover/contact:bg-sky-400/10"
                  >
                    ✉
                  </span>
                  ghaisikhamene@gmail.com
                </a>

                <a
                  href="tel:09904282582"
                  className="group/contact inline-flex items-center gap-2
                             text-sm text-gray-400 transition-colors
                             hover:text-sky-300"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center
                               rounded-lg border border-white/10
                               bg-white/5 text-xs
                               group-hover/contact:border-sky-400/30
                               group-hover/contact:bg-sky-400/10"
                  >
                    ☎
                  </span>
                  09904282582
                </a>

                <a
                  href="https://github.com/aghiasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/contact inline-flex items-center gap-2
                             text-sm text-gray-400 transition-colors
                             hover:text-sky-300"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center
                               rounded-lg border border-white/10
                               bg-white/5 text-xs
                               group-hover/contact:border-sky-400/30
                               group-hover/contact:bg-sky-400/10"
                  >
                    ↗
                  </span>
                  github.com/aghiasi
                </a>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2
                             rounded-xl border border-sky-400/20
                             bg-sky-400/10 px-4 py-2.5
                             text-sm font-medium text-sky-300
                             transition-all duration-200
                             hover:border-sky-400/40
                             hover:bg-sky-400/15
                             hover:text-sky-200"
                >
                  Download Resume
                  <span className="transition-transform group-hover:translate-y-0.5">
                    ↓
                  </span>
                </a>

                <a
                  href="https://github.com/aghiasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             rounded-xl border border-white/10
                             bg-white/5 px-4 py-2.5
                             text-sm font-medium text-gray-300
                             transition-all duration-200
                             hover:border-sky-400/20
                             hover:bg-white/10
                             hover:text-white"
                >
                  View GitHub
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-8 border-t border-white/10 pt-6
                     text-xs text-gray-500"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Software Development • Web Applications • Enterprise Systems
            </span>

            <span className="text-gray-600">Based in Tehran, Iran</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <div
      className="rounded-xl border border-white/10 bg-white/[0.025]
                 p-4 transition-colors duration-200
                 hover:border-white/15 hover:bg-white/[0.04]"
    >
      <div className="flex items-start gap-3">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center
                     rounded-lg border border-white/10 bg-white/5 text-sm"
        >
          {icon}
        </span>

        <div className="min-w-0">
          <div className="text-xs uppercase tracking-wider text-gray-500">
            {label}
          </div>

          <div className="mt-1 text-sm leading-6 text-gray-300">{value}</div>
        </div>
      </div>
    </div>
  );
}
