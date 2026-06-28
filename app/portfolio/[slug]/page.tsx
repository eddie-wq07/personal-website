import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav variant="light" />

      <main className="mx-auto w-full max-w-2xl px-6 pt-32 pb-24">
        <h1 className="mb-12 text-4xl font-bold tracking-tight">{project.title}</h1>

        <div className="flex flex-col gap-2">
          {project.media.map((item, i) => (
            <div key={i}>
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              ) : (
                <Image
                  src={item.src}
                  alt=""
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  unoptimized
                />
              )}
              {item.caption && (
                <p className="mt-1.5 text-xs text-zinc-400">{item.caption}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
