export default function Experience() {
  const items = [
    {
      role: "Programmer",
      period: "September 2025 - Present",
      company: "Novin Hi-Tech Solutions",
      location: "Tehran, Iran",
      desc: "Working on enterprise software development with COBOL and IBM DB2. Developing and maintaining applications for mainframe environments, working with large-scale data, databases, batch processing, and high-volume requests.",
    },
    {
      role: "Freelance Programmer / Application Developer",
      period: "March 2023 - Present",
      company: "Freelance Developer",
      location: "Tehran, Iran",
      desc: "Developing custom websites and software applications for various clients. Creating and managing RESTful APIs for server-client communication, improving website performance through code optimization, and providing technical advice on selecting appropriate technologies.",
    },
    {
      role: "Frontend Developer",
      period: "December 2024 - March 2025",
      company: "Kanda Idea",
      location: "Tehran, Iran",
      desc: "Worked as a frontend developer, building and developing web applications using modern JavaScript frameworks and frontend technologies.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/10 bg-[#070b12]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/3
                   h-80 w-80 rounded-full
                   bg-sky-500/10 blur-3xl"
      />

      <div className="site-container relative py-16">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-sky-400
                         shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            />

            <span
              className="text-xs font-medium uppercase
                         tracking-[0.2em] text-sky-300"
            >
              Career
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Work <span className="text-sky-300">Experience</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            My professional experience across software development, application
            development, frontend development, and enterprise systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute bottom-0 left-[11px] top-0 w-px
                       bg-gradient-to-b from-sky-400/40
                       via-white/10 to-transparent"
          />

          <div className="space-y-8">
            {items.map((item, index) => (
              <article
                key={`${item.role}-${item.company}`}
                className="group relative pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 flex h-6 w-6
                             items-center justify-center rounded-full
                             border border-sky-400/30
                             bg-[#070b12]
                             transition-all duration-300
                             group-hover:border-sky-400/60
                             group-hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                >
                  <span
                    className="h-2 w-2 rounded-full bg-sky-400
                               transition-all duration-300
                               group-hover:scale-125"
                  />
                </div>

                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl
                             border border-white/10 bg-white/[0.03]
                             p-6 transition-all duration-300
                             group-hover:-translate-y-1
                             group-hover:border-sky-400/20
                             group-hover:bg-white/[0.05]"
                >
                  {/* Card glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20
                               h-40 w-40 rounded-full bg-sky-500/5
                               blur-3xl transition-all duration-300
                               group-hover:bg-sky-500/10"
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.role}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-sm font-medium text-sky-300">
                            {item.company}
                          </span>

                          <span className="text-gray-700">•</span>

                          <span className="text-xs text-gray-500">
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <span
                        className="w-fit rounded-full border
                                   border-white/10 bg-white/5
                                   px-3 py-1.5 text-xs text-gray-400"
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div
          className="mt-12 border-t border-white/10 pt-6
                     text-xs text-gray-500"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Software Development • Application Development • Enterprise
              Systems
            </span>

            <span className="text-gray-600">2023 — Present</span>
          </div>
        </div>
      </div>
    </section>
  );
}
