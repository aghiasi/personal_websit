import ProjectCard from "./ProjectCard";

async function fetchRepos(username: string) {
  try {
    const token = process.env.SECRET_GIT_HUB;

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        headers: token
          ? {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github+json",
            }
          : {
              Accept: "application/vnd.github+json",
            },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const username = "aghiasi";

  const repos = await fetchRepos(username);

  const projects = repos
    .filter((repo: any) => !repo.fork)
    .sort(
      (a: any, b: any) => (b.stargazers_count || 0) - (a.stargazers_count || 0),
    )
    .slice(0, 9)
    .map((repo: any) => ({
      title: repo.name,
      desc:
        repo.description ||
        `A ${repo.language || "software"} project developed by Ali Ghiasi.`,
      link: repo.html_url,
      stars: repo.stargazers_count || 0,
      homepage: repo.homepage || null,
      language: repo.language || null,
    }));

  return (
    <section
      id="projects"
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
              GitHub
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Featured <span className="text-sky-300">Projects</span>
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            A selection of my public GitHub projects, covering application
            development, web technologies, programming, and software
            engineering.
          </p>
        </div>

        {/* Projects */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: any) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-2xl border border-white/10
                       bg-white/[0.03] p-8 text-center"
          >
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center
                         rounded-xl border border-sky-400/20
                         bg-sky-400/10 text-sky-300"
            >
              !
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Projects unavailable
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
              GitHub repositories could not be loaded right now. You can view
              the projects directly on my GitHub profile.
            </p>

            <a
              href="https://github.com/aghiasi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl
                         border border-sky-400/20 bg-sky-400/10
                         px-4 py-2.5 text-sm font-medium text-sky-300
                         transition-all duration-200
                         hover:border-sky-400/40
                         hover:bg-sky-400/15
                         hover:text-sky-200"
            >
              View GitHub
              <span>↗</span>
            </a>
          </div>
        )}

        {/* Footer */}
        <div
          className="mt-10 border-t border-white/10 pt-6
                     text-xs text-gray-500"
        >
          <div
            className="flex flex-col gap-2
                       sm:flex-row sm:items-center
                       sm:justify-between"
          >
            <span>Open Source • Application Development • Web Development</span>

            <a
              href="https://github.com/aghiasi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-gray-500 transition-colors
                         hover:text-sky-300"
            >
              github.com/aghiasi ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
