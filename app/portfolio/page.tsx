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
          className="w-full"
        />
        {item.caption && (
          <p className="mt-1.5 text-xs text-zinc-400">{item.caption}</p>
        )}
      </div>
    );
  }
  return (
    <div className="w-full">
      <Image
        src={item.src}
        alt=""
        width={800}
        height={600}
        className="w-full object-cover"
        unoptimized
      />
      {item.caption && (
        <p className="mt-1.5 text-xs text-zinc-400">{item.caption}</p>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav variant="light" />

      {/* sticky project jump nav */}
      <div className="sticky top-[57px] z-10 border-b border-zinc-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-2xl gap-6 overflow-x-auto px-6 py-3 text-sm">
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

      <main className="mx-auto w-full max-w-2xl px-6 pt-12 pb-24">
        <h1 className="mb-16 text-4xl font-bold tracking-tight">Projects</h1>

        <div className="flex flex-col gap-24">
          {projects.map((project) => (
            <div key={project.slug} id={project.slug}>
              <div className="flex flex-col gap-2">
                {project.media.map((item, i) => (
                  <MediaItem key={i} item={item} />
                ))}
              </div>

              <h2 className="mt-5 text-xl font-semibold">{project.title}</h2>
              {project.description && (
                <p className="mt-1 text-sm text-zinc-500">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
