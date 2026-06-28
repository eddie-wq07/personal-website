"use client";

import Image from "next/image";
import { Nav } from "@/components/nav";
import { projects } from "@/lib/projects";

function MediaItem({ item }: { item: { type: string; src: string; caption?: string } }) {
  if (item.type === "video") {
    return (
      <div className="w-full">
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto max-h-[70vh] w-auto max-w-full"
        />
        {item.caption && (
          <p className="mt-1.5 text-center text-xs text-zinc-400">{item.caption}</p>
        )}
      </div>
    );
  }
  return (
    <div className="w-full">
      <Image
        src={item.src}
        alt=""
        width={1200}
        height={800}
        className="mx-auto max-h-[70vh] w-auto max-w-full object-contain"
        unoptimized
      />
      {item.caption && (
        <p className="mt-1.5 text-center text-xs text-zinc-400">{item.caption}</p>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-[57px]">
      <Nav variant="light" />

      {/* sticky project jump nav */}
      <div className="sticky top-[57px] z-10 border-b border-zinc-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-3xl gap-6 overflow-x-auto px-6 py-3 text-sm">
          {projects.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="shrink-0 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <main className="mx-auto w-full max-w-3xl px-6 pt-16 pb-24">
        <h1 className="mb-16 text-4xl font-bold tracking-tight">Projects</h1>

        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <section key={project.slug} id={project.slug} className="scroll-mt-32">
              <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
              {project.description && (
                <p className="mb-5 text-sm text-zinc-500">{project.description}</p>
              )}

              <div className="flex flex-col gap-4">
                {project.media.map((item, i) => (
                  <MediaItem key={i} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
