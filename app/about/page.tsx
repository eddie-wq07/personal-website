import { Nav } from "@/components/nav";
import { InquiryTrigger } from "@/components/inquiry-modal";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white text-zinc-900">
      <Nav variant="light" />

      <main className="mx-auto w-full max-w-xl flex-1 px-6 pt-32 pb-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-600">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          About me
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Hey, I&apos;m Edward.
        </h1>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600">
          <p>
            I&apos;m a software engineer who likes building things — the weird kind,
            the scalable kind, and ideally both at once. I care about craft: fast
            software, clean systems, and interfaces that feel good to use.
          </p>
          <p>
            Right now I&apos;m working on robotics infrastructure, trying to make
            physical AI easier to build and deploy. Before that I&apos;ve shipped
            products across the stack — from low-level systems work to
            consumer-facing apps.
          </p>
          <p>
            Outside of work I&apos;m usually tinkering on a side project, thinking
            about system design, or finding new ways to make a computer do
            something it wasn&apos;t supposed to.
          </p>
        </div>

        <div className="mt-10 border-t border-zinc-100 pt-8">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h2>
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <a
              href="mailto:edward.h.jung07@gmail.com"
              className="hover:text-zinc-900 transition-colors"
            >
              edward.h.jung07@gmail.com
            </a>
            <a
              href="https://github.com/eddie-wq07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              github.com/eddie-wq07
            </a>
          </div>
        </div>

        <div className="mt-8">
          <InquiryTrigger className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800">
            Say hello →
          </InquiryTrigger>
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
