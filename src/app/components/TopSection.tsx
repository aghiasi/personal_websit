import CodeIcon from "@mui/icons-material/Code";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Diversity1Icon from "@mui/icons-material/Diversity1";

const items = [
  {
    title: "Love to Code",
    description:
      "I enjoy building software, solving problems, and learning new technologies.",
    icon: CodeIcon,
  },
  {
    title: "Hard Worker & Good Teammate",
    description:
      "I value collaboration, clean communication, and consistently improving my work.",
    icon: Diversity3Icon,
  },
  {
    title: "Love My Family",
    description:
      "Family is an important part of my life and keeps me motivated beyond my work.",
    icon: Diversity1Icon,
  },
];

export default function TopSection() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/10
                 bg-[#070b12] py-20"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2
                   h-[500px] w-[500px] -translate-x-1/2
                   -translate-y-1/2 rounded-full
                   bg-sky-500/5 blur-3xl"
      />

      <div className="site-container relative">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-sky-400
                         shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            />

            <span
              className="text-xs font-medium uppercase
                         tracking-[0.2em] text-sky-300"
            >
              A little about me
            </span>
          </div>

          <h2
            className="text-3xl font-semibold tracking-tight
                       text-white sm:text-4xl"
          >
            What Drives <span className="text-sky-300">Me</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            A few things that describe how I approach programming, work, and
            life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="group relative h-full">
                {/* Card glow */}
                <div
                  className="pointer-events-none absolute -inset-px
                             rounded-2xl bg-sky-400/0
                             blur-xl transition-all duration-300
                             group-hover:bg-sky-400/5"
                />

                <div
                  className="relative flex h-full flex-col
                             items-center rounded-2xl
                             border border-white/10
                             bg-white/[0.03] p-8 text-center
                             backdrop-blur-sm
                             transition-all duration-300
                             group-hover:-translate-y-1
                             group-hover:border-sky-400/20
                             group-hover:bg-white/[0.05]"
                >
                  {/* Icon */}
                  <div
                    className="flex h-20 w-20 items-center
                               justify-center rounded-2xl
                               border border-sky-400/20
                               bg-sky-400/10
                               transition-all duration-300
                               group-hover:border-sky-400/40
                               group-hover:bg-sky-400/15
                               group-hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]"
                  >
                    <Icon
                      sx={{
                        color: "#7dd3fc",
                        fontSize: 46,
                      }}
                    />
                  </div>

                  {/* Number */}
                  <span
                    className="mt-6 text-xs font-medium
                               uppercase tracking-[0.2em]
                               text-gray-600"
                  >
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-3 text-lg font-semibold
                               tracking-tight text-white
                               transition-colors duration-200
                               group-hover:text-sky-300"
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-3 max-w-sm text-sm
                               leading-7 text-gray-400"
                  >
                    {item.description}
                  </p>

                  {/* Bottom line */}
                  <div
                    className="mt-7 h-px w-12
                               bg-sky-400/20
                               transition-all duration-300
                               group-hover:w-20
                               group-hover:bg-sky-400/50"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Decorative lines */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0
                   h-24 w-full opacity-30"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 80 C240 20 360 110 600 65 C840 20 1050 100 1440 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-sky-400/20"
        />

        <path
          d="M0 105 C260 50 430 120 700 80 C970 40 1150 110 1440 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/10"
        />
      </svg>
    </section>
  );
}
