import { Nav } from "@/components/nav";
import { InquiryTrigger } from "@/components/inquiry-modal";

const steps = [
  "Understand the problem deeply",
  "Design for simplicity",
  "Build fast, iterate faster",
  "Ship and learn from real users",
];

export default function PlatformPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-zinc-900">
      <Nav variant="light" />

      <main className="mx-auto w-full max-w-xl flex-1 px-6 pt-32 pb-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Always building · always learning
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          How I approach building things.
        </h1>

        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          I care about software that feels right — fast, reliable, and built
          with intention. Whether it&apos;s infrastructure, developer tools, or
          consumer products, I try to bring the same energy.
        </p>

        <ol className="mt-8 divide-y divide-zinc-100 border-y border-zinc-100">
          {steps.map((s, i) => (
            <li
              key={s}
              className="flex items-baseline gap-4 py-3 text-sm"
            >
              <span className="font-mono text-xs text-zinc-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-zinc-900">{s}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-center gap-3">
          <InquiryTrigger className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
            Get in touch →
          </InquiryTrigger>
          <span className="text-xs text-zinc-400">
            Always open to interesting conversations.
          </span>
        </div>
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
