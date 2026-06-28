import { DitheringShader } from "@/components/ui/dithering-shader";
import { Nav } from "@/components/nav";
import { WordCycler } from "@/components/word-cycler";

export default function Home() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
      <Nav variant="dark" />
      <div className="absolute inset-0">
        <DitheringShader
          fullscreen
          shape="swirl"
          type="4x4"
          colorBack="#000000"
          colorFront="#ffffff"
          pxSize={4}
          speed={0.9}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="flex flex-col items-center gap-0 text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span>I like building</span>
          <WordCycler words={["physical", "scalable", "cool"]} />
          <span>things</span>
        </h1>
        <p className="max-w-xl text-sm text-white/70 sm:text-base">
          physical systems that scale.
        </p>
      </div>
    </main>
  );
}
