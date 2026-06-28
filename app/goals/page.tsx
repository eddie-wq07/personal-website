import { Nav } from "@/components/nav";

export default function GoalsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-[57px]">
      <Nav variant="light" />

      <main className="mx-auto w-full max-w-2xl px-6 pt-16 pb-24">
        <h1 className="mb-12 text-4xl font-bold tracking-tight">My Goals</h1>

        <div className="space-y-6 text-base leading-relaxed text-zinc-700">
          <p>
            If you asked me a year ago what I wanted to be, I&apos;d probably say software engineer or product manager at some big tech company. It&apos;s cool. You get the brand-image. The paycheck. But after building with real physical systems on my own time, and some independent research, I realize that the next &quot;GPT&quot; moment is here. Just for robotics.
          </p>

          <p>
            I&apos;ve set clear goals for what I want to accomplish this month, and 6 months from now.
          </p>

          <p>
            This month (July), I want to build a fully simulator trained humanoid (unitree in our lab), to do basic household tasks. You might say, &quot;but that&apos;s been done!&quot; And you&apos;d be somewhat right. In fact, it seems like everyone is doing it at the moment. But my goal is a bit different. Simulators. If I am able to zero-shot training, I can avoid damaging the current robot we have. Its literally more than 120k USD to buy right now (Yikes), so it means a lot more to me that I don&apos;t break it.
          </p>

          <p>
            Its a H1-2 that I got my hands-on which you can find here:{" "}
            <a
              href="https://robostore.com/products/unitree-h1-s-robotic-humanoid?srsltid=AfmBOorDI_S-4kb1_x1gXQ6RjXZTvAn9JNvwsi8TRu6gSs02IccDf5Ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-900 underline underline-offset-2 hover:text-zinc-600 break-words"
            >
              https://robostore.com/products/unitree-h1-s-robotic-humanoid
            </a>
          </p>

          <p>
            Hopefully by the time you see this, the cost went down. Which it only will.
          </p>

          <p>
            6 months from now, either I&apos;m building at the frontier with my own startup working in this space or working for a startup/company that is. That&apos;s it. I mean 6 months from now, who knows what this space will look like...
          </p>

          <p>
            Thanks for reading. Feel to reach out, I&apos;ll try to get back to you as soon as I can.
          </p>
        </div>

        <div className="mt-16 border-t border-zinc-100 pt-8 text-base leading-relaxed text-zinc-700">
          <p>
            One more thing. I&apos;m building on my own right now, but I&apos;m also open to work. If you&apos;re a physical AI company that&apos;s serious about shipping, I&apos;d love to learn what you&apos;re doing and see if I&apos;d be a good fit. Physical AI is the goal, but I&apos;m also exploring ML infra and distributed systems, so I&apos;m open to roles there too.
          </p>
        </div>
      </main>
    </div>
  );
}
