import Link from "next/link";
import { notFound } from "next/navigation";

const POSTS = [
  {
    slug: "cobol-db2-mainframe-development",
    title: "Working with COBOL and IBM DB2 on Mainframe Systems",
    excerpt:
      "My experience working with COBOL, IBM DB2, large-scale data, and enterprise mainframe applications.",
    content: [
      "Mainframe systems continue to play an important role in large enterprise environments, especially where reliability, transaction processing, and large-scale data management are required.",
      "Working with COBOL and IBM DB2 provides a different perspective compared with modern web development. Applications often interact with large datasets and long-running business processes where performance and reliability are extremely important.",
      "One of the interesting parts of mainframe development is understanding how application programs interact with databases, JCL, datasets, VSAM files, and other z/OS services.",
      "IBM DB2 is particularly important in these environments because it provides structured and reliable access to large amounts of business data. Writing efficient SQL and understanding the underlying data structures can make a significant difference when working with large tables.",
      "My experience with mainframe development has also taught me the importance of understanding existing systems before changing them. Enterprise applications often have years of business logic behind them, so even a small change can require careful analysis.",
    ],
  },

  {
    slug: "modern-cpp-development",
    title: "Modern C++ Development",
    excerpt:
      "Lessons from working with C++, object-oriented programming, and building maintainable application software.",
    content: [
      "C++ is a language that combines low-level control with high-level programming features. This makes it useful for many different types of applications, from system software to games and high-performance applications.",
      "One of the things I enjoy about C++ is that it requires developers to understand what is happening underneath the abstraction. Memory management, object lifetime, references, pointers, and compilation are all important concepts.",
      "Modern C++ also provides many features that make application development cleaner and safer. Templates, smart pointers, standard containers, lambda expressions, and other language features can significantly improve code quality when used correctly.",
      "Object-oriented programming is another important part of C++. Designing classes with clear responsibilities can make larger applications easier to maintain.",
      "At the same time, good C++ development is not only about using as many language features as possible. Understanding when to keep things simple is equally important.",
    ],
  },

  {
    slug: "building-restful-apis",
    title: "Building RESTful APIs with Node.js",
    excerpt:
      "Practical experience developing REST APIs and connecting frontend applications with backend services.",
    content: [
      "REST APIs are one of the most common ways for frontend applications to communicate with backend services.",
      "Node.js makes it possible to build these APIs using JavaScript or TypeScript on the server. This allows developers to use similar technologies across both the frontend and backend of an application.",
      "A good API should have clear endpoints, predictable responses, proper HTTP status codes, and consistent error handling.",
      "Authentication is another important part of API development. Applications commonly use cookies, sessions, or tokens to identify users and protect private endpoints.",
      "When building an API, I also pay attention to validation. Data received from clients should never automatically be considered valid. Request bodies, query parameters, and route parameters should be checked before they are processed.",
      "Connecting these APIs to frontend applications such as React or Next.js creates a complete application architecture where the frontend handles the user interface while the backend manages business logic and data.",
    ],
  },

  {
    slug: "typescript-nextjs-development",
    title: "TypeScript and Next.js Development",
    excerpt:
      "My approach to building modern web applications using TypeScript, Next.js, React, and Node.js.",
    content: [
      "TypeScript and Next.js provide a powerful combination for building modern web applications.",
      "TypeScript adds static typing to JavaScript, which makes it easier to understand the structure of data and detect many mistakes before the application runs.",
      "Next.js provides features such as routing, server-side rendering, API routes, and optimized application builds. The App Router also provides a useful way to organize modern React applications.",
      "One of the things I value most when working with Next.js is keeping the project structure organized. Components should have clear responsibilities, API communication should be separated from UI logic where appropriate, and reusable components should be created when they actually provide value.",
      "React components make it possible to build interfaces from smaller reusable pieces. Combined with TypeScript, this makes larger frontend projects easier to maintain.",
      "For me, the most important part of using modern frameworks is not simply using the newest technology. The goal is to create software that is understandable, maintainable, and practical.",
    ],
  },

  {
    slug: "mongodb-and-database-development",
    title: "Working with Databases in Application Development",
    excerpt:
      "Experience working with MongoDB, IBM DB2, SQL, and database-driven applications.",
    content: [
      "Databases are at the center of many applications. Whether the application uses a relational database such as IBM DB2 or a document database such as MongoDB, understanding how data is stored and accessed is essential.",
      "MongoDB provides a document-oriented approach where data can be represented as documents. This can be convenient for applications whose data structures naturally map to JSON-like objects.",
      "Relational databases such as DB2 use tables, rows, columns, relationships, and SQL. They are particularly useful when data integrity and structured relationships are important.",
      "Working with different database technologies has shown me that there is no single database model that is perfect for every application.",
      "Performance is also an important consideration. Queries should be designed carefully, indexes should be used where appropriate, and applications should avoid retrieving significantly more data than they actually need.",
      "The database is not just a place to store information. It is an important part of the overall architecture of an application.",
    ],
  },

  {
    slug: "mainframe-to-modern-web",
    title: "From Mainframe Systems to Modern Web Applications",
    excerpt:
      "Working across traditional mainframe technologies and modern web development environments.",
    content: [
      "Modern web development and mainframe development can appear to be completely different worlds, but many of the fundamental programming concepts are shared between them.",
      "On one side, technologies such as COBOL, JCL, DB2, and VSAM are commonly found in enterprise mainframe environments. On the other side, technologies such as TypeScript, React, Next.js, Node.js, and MongoDB are widely used for modern web applications.",
      "Working with both environments provides an interesting perspective. Mainframe systems often emphasize stability, predictable processing, and large-scale transaction workloads, while modern web applications frequently emphasize rapid development, flexible architectures, and user experience.",
      "Understanding both worlds can also make it easier to integrate older enterprise systems with newer applications. APIs and other integration layers can expose existing business functionality to modern frontend and backend applications.",
      "The technologies may change over time, but the fundamentals remain important: understanding the data, writing maintainable code, debugging problems carefully, and designing systems that solve real business requirements.",
      "For me, learning different technologies is less about choosing one technology over another and more about understanding which tool is appropriate for a particular problem.",
    ],
  },
];

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = POSTS.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b12]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2
                   h-96 w-96 -translate-x-1/2 rounded-full
                   bg-sky-500/10 blur-3xl"
      />

      <div className="site-container relative py-12 md:py-20">
        {/* Back */}
        <Link
          href="/#blog"
          className="group mb-10 inline-flex items-center gap-2
                     rounded-lg border border-white/10 bg-white/[0.03]
                     px-4 py-2 text-sm text-gray-400
                     transition-all duration-200
                     hover:border-sky-400/20
                     hover:bg-sky-400/10
                     hover:text-sky-300"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          Back to Blog
        </Link>

        {/* Article */}
        <article className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-5 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-sky-400
                           shadow-[0_0_12px_rgba(56,189,248,0.8)]"
              />

              <span
                className="text-xs font-medium uppercase
                           tracking-[0.2em] text-sky-300"
              >
                Article
              </span>
            </div>

            <h1
              className="max-w-4xl text-4xl font-bold leading-tight
                         tracking-tight text-white md:text-5xl"
            >
              {post.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Software Development
              </span>

              <span className="text-gray-700">•</span>

              <span>{post.content.length} sections</span>
            </div>
          </header>

          {/* Content */}
          <div className="relative">
            {/* Reading line */}
            <div
              className="pointer-events-none absolute -left-6 top-0 hidden
                         h-full w-px bg-gradient-to-b
                         from-sky-400/30 via-white/10 to-transparent
                         lg:block"
            />

            <div className="space-y-8">
              {post.content.map((paragraph, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border
                             border-white/10 bg-white/[0.025] p-6
                             transition-colors duration-200
                             hover:border-white/15
                             hover:bg-white/[0.035]
                             md:p-8"
                >
                  <div className="flex gap-5">
                    <span
                      className="hidden shrink-0 pt-1 text-xs
                                 font-medium text-sky-400/60
                                 sm:block"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="text-base leading-8 text-gray-300
                                 md:text-lg md:leading-9"
                    >
                      {paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <Link
              href="/#blog"
              className="group inline-flex items-center gap-2
                         text-sm font-medium text-sky-300
                         transition-all duration-200
                         hover:gap-3 hover:text-sky-200"
            >
              <span>←</span>
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
