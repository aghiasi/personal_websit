export default function ProjectCard({ project }: any) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden
                 rounded-2xl border border-white/10
                 bg-white/[0.03] p-6
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:border-sky-400/20
                 hover:bg-white/[0.05]"
    >
      {/* Card glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16
                   h-32 w-32 rounded-full
                   bg-sky-500/5 blur-2xl
                   transition-all duration-300
                   group-hover:bg-sky-500/10"
      />

      <div className="relative flex h-full flex-col">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center
                       rounded-xl border border-sky-400/20
                       bg-sky-400/10 text-sky-300"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v14H6.5A2.5 2.5 0 0 0 4 19.5v-14Z" />
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            </svg>
          </div>

          {project.language ? (
            <span
              className="rounded-full border border-white/10
                         bg-white/5 px-3 py-1.5 text-xs
                         text-gray-400"
            >
              {project.language}
            </span>
          ) : null}
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3
            className="text-lg font-semibold capitalize
                       tracking-tight text-white
                       transition-colors duration-200
                       group-hover:text-sky-300"
          >
            {project.title}
          </h3>

          {project.desc ? (
            <p className="mt-3 line-clamp-4 text-sm leading-7 text-gray-400">
              {project.desc}
            </p>
          ) : (
            <p className="mt-3 text-sm leading-7 text-gray-500">
              No description available for this repository.
            </p>
          )}
        </div>

        {/* Metadata */}
        <div
          className="mt-6 flex items-center gap-4
                     border-t border-white/10 pt-4"
        >
          {project.stars !== undefined ? (
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4 text-sky-300"
                aria-hidden="true"
              >
                <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
              </svg>

              <span>{project.stars}</span>

              <span className="text-gray-600">
                {project.stars === 1 ? "star" : "stars"}
              </span>
            </div>
          ) : null}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/github inline-flex items-center gap-2
                       rounded-xl border border-sky-400/20
                       bg-sky-400/10 px-4 py-2.5
                       text-sm font-medium text-sky-300
                       transition-all duration-200
                       hover:border-sky-400/40
                       hover:bg-sky-400/15
                       hover:text-sky-200"
          >
            View on GitHub
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4 transition-transform duration-200
                         group-hover/github:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>

          {project.homepage ? (
            <a
              href={project.homepage}
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
              Live Demo
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M14 5h5v5" />
                <path d="m19 5-8 8" />
                <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
              </svg>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
