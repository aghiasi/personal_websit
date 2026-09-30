import AboutCard from "./AboutCard";
import Experience from "../components/Experience";
import Education from "../components/Education";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#070b12]"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute -left-40 top-20
                   h-96 w-96 rounded-full
                   bg-sky-500/10 blur-3xl"
      />

      <div
        className="pointer-events-none absolute -right-40 top-1/2
                   h-96 w-96 rounded-full
                   bg-sky-500/5 blur-3xl"
      />

      <div className="site-container relative py-16">
        {/* Header */}
        <div className="mb-10 max-w-3xl">
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

          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Programmer &{" "}
            <span className="text-sky-300">Application Developer</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            A programmer working across modern web development, application
            software, databases, and enterprise mainframe systems.
          </p>
        </div>

        {/* About card */}
        <AboutCard />

        {/* About text */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div
            className="rounded-2xl border border-white/10
                       bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center
                           rounded-lg border border-sky-400/20
                           bg-sky-400/10 text-sky-300"
              >
                01
              </span>

              <h3 className="text-lg font-semibold text-white">What I Do</h3>
            </div>

            <div className="space-y-4 text-sm leading-7 text-gray-400">
              <p>
                I am a programmer and application developer with over 3 years of
                professional experience in software development. My experience
                covers web applications, APIs, and enterprise software.
              </p>

              <p>
                I work with technologies including C++, JavaScript, TypeScript,
                Node.js, React, Next.js, and RESTful APIs, along with databases
                such as IBM DB2, MongoDB, and SQL.
              </p>
            </div>
          </div>

          <div
            className="rounded-2xl border border-white/10
                       bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <span
                className="flex h-9 w-9 items-center justify-center
                           rounded-lg border border-sky-400/20
                           bg-sky-400/10 text-sky-300"
              >
                02
              </span>

              <h3 className="text-lg font-semibold text-white">
                Enterprise Experience
              </h3>
            </div>

            <div className="space-y-4 text-sm leading-7 text-gray-400">
              <p>
                I also have professional experience working with COBOL and IBM
                DB2 in mainframe environments, including enterprise systems and
                large-scale data processing.
              </p>

              <p>
                Working across both modern web technologies and established
                enterprise systems has given me experience with different
                development environments and application architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Training */}
        <div className="mt-12">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-sky-400
                           shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              />

              <span
                className="text-xs font-medium uppercase
                           tracking-[0.2em] text-sky-300"
              >
                Learning
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-white">
              Training & <span className="text-sky-300">Courses</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Course
              title="COBOL Programming and DB2 Database"
              duration="300 Hours"
            />

            <Course
              title="Database Principles and SQL Server"
              duration="67 Hours"
            />

            <Course title="C++ Programming Advanced OOP" duration="50 Hours" />

            <Course title="C Programming" duration="45 Hours" />

            <Course title="Front-End Development" duration="66 Hours" />

            <Course title="TypeScript" duration="Course" />
          </div>
        </div>

        {/* Experience */}
        <div className="mt-12">
          <Experience />
        </div>

        {/* Education */}
        <div className="mt-2">
          <Education />
        </div>
      </div>
    </section>
  );
}

function Course({ title, duration }: { title: string; duration: string }) {
  return (
    <div
      className="group flex items-center gap-4 rounded-xl
                 border border-white/10 bg-white/[0.03] p-4
                 transition-all duration-200
                 hover:border-sky-400/20
                 hover:bg-white/[0.05]"
    >
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center
                   rounded-lg border border-sky-400/20
                   bg-sky-400/10 text-xs font-semibold
                   text-sky-300"
      >
        ✓
      </div>

      <div className="min-w-0">
        <div className="text-sm font-medium text-gray-200">{title}</div>

        <div className="mt-1 text-xs text-gray-500">{duration}</div>
      </div>
    </div>
  );
}
