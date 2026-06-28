import { Nav } from "@/components/nav";

const projects = [
  {
    name: "Orex",
    description:
      "Infrastructure layer connecting simulation environments to physical robot fleets. One workspace, one loop.",
    tags: ["Robotics", "Infrastructure", "TypeScript"],
    status: "Active",
  },
  {
    name: "robo/website",
    description:
      "The site you&apos;re on. Built with Next.js, WebGL dithering shaders, and a custom word cycler animation.",
    tags: ["Next.js", "WebGL", "Design"],
    status: "Shipped",
  },
  {
    name: "More coming soon",
    description:
      "Always working on something. Reach out if you want to collaborate.",
    tags: [],
    status: "In progress",
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-zinc-900">
      <Nav variant="light" />

      <main className="mx-auto w-full max-w-xl flex-1 px-6 pt-32 pb-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Selected work
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Things I&apos;ve built.
        </h1>

        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          A mix of side projects, startups, and tools I&apos;ve shipped. I like working
          close to the metal and shipping things people actually use.
        </p>

        <ol className="mt-8 divide-y divide-zinc-100 border-y border-zinc-100">
          {projects.map((p, i) => (
            <li key={p.name} className="flex items-start gap-4 py-4 text-sm">
              <span className="mt-0.5 font-mono text-xs text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-zinc-900">{p.name}</span>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
                    {p.status}
                  </span>
                </div>
                <span
                  className="text-zinc-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.description }}
                />
                {p.tags.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </main>

      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-4 px-6 py-8 text-xs text-zinc-500 sm:flex-row sm:items-start sm:justify-between">
          <div className="font-semibold tracking-tight text-zinc-900">Edward Jung</div>
          <div className="flex flex-col gap-1.5 sm:items-end sm:text-right">
            <span className="pt-1">© 2026 Edward Jung</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
