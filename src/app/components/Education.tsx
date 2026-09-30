export default function Education() {
  const items = [
    {
      degree: "Bachelor of Information Technology",
      period: "2016 - 2021",
      school: "Shamsipour College",
      location: "Tehran, Iran",
      desc: "Bachelor's degree in Information Technology.",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/10 bg-[#070b12]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4
                   h-80 w-80 rounded-full
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
              Education
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Academic <span className="text-sky-300">Background</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            My academic background in information technology and computer
            science-related fields.
          </p>
        </div>

        {/* Education card */}
        <div className="group relative max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/20 hover:bg-white/[0.05]">
          {/* Card glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20
                       h-40 w-40 rounded-full bg-sky-500/5
                       blur-3xl transition-all duration-300
                       group-hover:bg-sky-500/10"
          />

          {items.map((item) => (
            <div
              key={item.degree}
              className="relative flex flex-col gap-6 sm:flex-row sm:items-start"
            >
              {/* Icon */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center
                           rounded-xl border border-sky-400/20
                           bg-sky-400/10 text-sky-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z" />
                  <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5" />
                  <path d="M21 10v5" />
                </svg>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.degree}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium text-sky-300">
                        {item.school}
                      </span>

                      <span className="text-gray-700">•</span>

                      <span className="text-xs text-gray-500">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className="w-fit shrink-0 rounded-full border
                               border-white/10 bg-white/5
                               px-3 py-1.5 text-xs text-gray-400"
                  >
                    {item.period}
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400">
                  {item.desc}
                </p>
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
              Information Technology • Software Development • Computer Systems
            </span>

            <span className="text-gray-600">2016 — 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
}
