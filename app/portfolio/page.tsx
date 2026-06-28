import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { projects } from "@/lib/projects";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav variant="light" />

      <main className="mx-auto w-full max-w-2xl px-6 pt-32 pb-24">
        <h1 className="mb-16 text-4xl font-bold tracking-tight">Projects</h1>

        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <div key={project.slug}>
              {project.images.map((src, i) => (
                <div key={i} className="mb-2 w-full">
                  <Image
                    src={src}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full object-cover"
                    unoptimized
                  />
                </div>
              ))}

              <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>

              {project.description && (
                <p className="mt-1 text-sm text-zinc-500">{project.description}</p>
              )}

              <Link
                href={`/portfolio/${project.slug}`}
                className="mt-2 inline-block text-sm text-zinc-400 underline underline-offset-2 hover:text-zinc-700"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
