export default function Skills() {
  const groups = [
    {
      title: "Programming Languages",
      skills: ["C++", "C#", "JavaScript", "TypeScript", "COBOL"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "React", "Next.js", "Node.js", "Axios"],
    },
    {
      title: "Backend & APIs",
      skills: ["REST API", "GraphQL", "JWT"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "IBM DB2", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Git"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-[#070b12]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2
                   h-80 w-80 -translate-x-1/2 rounded-full
                   bg-sky-500/10 blur-3xl"
      />

      <div className="site-container relative py-16">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-sky-400
                         shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            />

            <span
              className="text-xs font-medium uppercase
                         tracking-[0.2em] text-sky-300"
            >
              Technologies
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Skills & <span className="text-sky-300">Technologies</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Technologies and tools I use across application development, modern
            web applications, APIs, databases, and enterprise systems.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-2xl
                         border border-white/10 bg-white/[0.03] p-6
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:border-sky-400/20
                         hover:bg-white/[0.05]"
            >
              {/* Card glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16
                           h-32 w-32 rounded-full bg-sky-500/5
                           blur-2xl transition-all duration-300
                           group-hover:bg-sky-500/10"
              />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center
                               rounded-lg border border-sky-400/20
                               bg-sky-400/10 text-sky-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  </span>

                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10
                                 bg-white/5 px-3 py-2 text-sm text-gray-300
                                 transition-all duration-200
                                 hover:border-sky-400/30
                                 hover:bg-sky-400/10
                                 hover:text-sky-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div
          className="mt-10 border-t border-white/10 pt-6
                     text-xs text-gray-500"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Application Development • Web Development • Enterprise Systems
            </span>

            <span className="text-gray-600">
              Always learning. Always building.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
