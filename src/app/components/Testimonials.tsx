export default function Testimonials() {
  const items = [
    {
      by: "Client A",
      role: "Client",
      text: "Great work, delivered on time.",
    },
    {
      by: "Client B",
      role: "Client",
      text: "Professional and communicative.",
    },
  ];

  return (
    <section
      id="testimonials"
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
              Client Feedback
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            What people <span className="text-sky-300">say</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Feedback from people I have worked with on software and application
            development projects.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <blockquote
              key={`${item.by}-${index}`}
              className="group relative overflow-hidden rounded-2xl
                         border border-white/10 bg-white/[0.03] p-6
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:border-sky-400/20
                         hover:bg-white/[0.05]"
            >
              {/* Glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16
                           h-32 w-32 rounded-full bg-sky-500/5
                           blur-2xl transition-all duration-300
                           group-hover:bg-sky-500/10"
              />

              <div className="relative">
                {/* Quote icon */}
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center
                             rounded-xl border border-sky-400/20
                             bg-sky-400/10 text-2xl text-sky-300"
                >
                  &ldquo;
                </div>

                <p className="text-base leading-7 text-gray-300">{item.text}</p>

                <footer className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center
                               rounded-full border border-white/10
                               bg-white/5 text-sm font-semibold
                               text-sky-300"
                  >
                    {item.by.charAt(0)}
                  </div>

                  <div>
                    <div className="text-sm font-medium text-white">
                      {item.by}
                    </div>

                    <div className="text-xs text-gray-500">{item.role}</div>
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Bottom line */}
        <div
          className="mt-10 border-t border-white/10 pt-6
                     text-xs text-gray-500"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Collaboration • Communication • Software Development</span>

            <span className="text-gray-600">Built through real projects.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
