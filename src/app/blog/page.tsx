import Link from "next/link";

const POSTS = [
  {
    slug: "cobol-db2-mainframe-development",
    title: "Working with COBOL and IBM DB2 on Mainframe Systems",
    excerpt:
      "My experience working with COBOL, IBM DB2, large-scale data, and enterprise mainframe applications.",
  },
  {
    slug: "modern-cpp-development",
    title: "Modern C++ Development",
    excerpt:
      "Lessons from working with C++, object-oriented programming, and building maintainable application software.",
  },
  {
    slug: "building-restful-apis",
    title: "Building RESTful APIs with Node.js",
    excerpt:
      "Practical experience developing REST APIs and connecting frontend applications with backend services.",
  },
  {
    slug: "typescript-nextjs-development",
    title: "TypeScript and Next.js Development",
    excerpt:
      "My approach to building modern web applications using TypeScript, Next.js, React, and Node.js.",
  },
  {
    slug: "mongodb-and-database-development",
    title: "Working with Databases in Application Development",
    excerpt:
      "Experience working with MongoDB, IBM DB2, SQL, and database-driven applications.",
  },
  {
    slug: "mainframe-to-modern-web",
    title: "From Mainframe Systems to Modern Web Applications",
    excerpt:
      "Working across traditional mainframe technologies and modern web development environments.",
  },
];

export default function BlogIndex() {
  return (
    <section
      id="blog"
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
              Articles
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            My <span className="text-sky-300">Blog</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            I write about software development, programming, databases,
            mainframe technologies, and modern web development based on my
            experience as a programmer and application developer.
          </p>
        </div>

        {/* Posts */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {POSTS.map((post, index) => (
            <article
              key={post.slug}
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
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center
                               rounded-lg border border-sky-400/20
                               bg-sky-400/10 text-xs font-semibold
                               text-sky-300"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xs text-gray-600">Article</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-7 text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors
                               group-hover:text-sky-300"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {post.excerpt}
                </p>

                {/* Link */}
                <div className="mt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm
                               font-medium text-sky-300
                               transition-all duration-200
                               hover:gap-3 hover:text-sky-200"
                  >
                    Read article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom line */}
        <div
          className="mt-10 border-t border-white/10 pt-6
                     text-xs text-gray-500"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>Programming • Databases • Mainframe • Web Development</span>

            <span className="text-gray-600">{POSTS.length} articles</span>
          </div>
        </div>
      </div>
    </section>
  );
}
