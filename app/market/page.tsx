import { Nav } from "@/components/nav";

const stats = [
  { value: "$27.6B", label: "Robotics / physical AI VC in 2025", sub: "2× the $13.7B raised in 2024" },
  { value: "$6.4B", label: "Q1 2026 funding across 210+ deals", sub: "Flow still accelerating" },
  { value: "61%", label: "AI's share of all global VC value in 2025", sub: "Capital concentrating around the physical AI stack" },
];

const deploymentData = [
  ["2014", "221k"],
  ["2016", "304k"],
  ["2018", "423k"],
  ["2020", "390k"],
  ["2021", "526k"],
  ["2022", "553k"],
  ["2024", "542k"],
];

export default function MarketPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Nav variant="dark" />

      <div className="mx-auto max-w-4xl px-6 pt-36 pb-24 md:px-10">

        {/* Header */}
        <div className="mb-20 border-b border-white/10 pb-10">
          <p className="mb-3 font-mono text-xs tracking-widest text-white/60 uppercase">Market</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Physical AI is here.
          </h1>
          <p className="mt-4 max-w-lg text-sm text-white/75 leading-relaxed">
            Capital, deployments, and demand are converging. The infrastructure layer beneath embodied AI is still being built.
          </p>
        </div>

        {/* Funding stats */}
        <section className="mb-20">
          <p className="mb-8 font-mono text-xs tracking-widest text-white/60 uppercase">Funding momentum</p>
          <div className="grid gap-px bg-white/10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.value} className="bg-black p-6">
                <div className="text-3xl font-bold tracking-tight text-white">{s.value}</div>
                <div className="mt-2 text-xs text-white/90 leading-relaxed">{s.label}</div>
                <div className="mt-1 font-mono text-xs text-white/45">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Simulation efficiency */}
        <section className="mb-20">
          <p className="mb-8 font-mono text-xs tracking-widest text-white/60 uppercase">Why simulation wins</p>
          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <div className="border border-white/10 p-6">
              <div className="font-mono text-4xl font-bold text-white">27×</div>
              <div className="mt-2 text-xs text-white/75">Cost reduction vs. real-world teleoperation collection</div>
            </div>
            <div className="border border-white/10 p-6">
              <div className="font-mono text-4xl font-bold text-white">6.8×</div>
              <div className="mt-2 text-xs text-white/75">Throughput increase, 710 trajectories/day vs. 104</div>
            </div>
          </div>
          <div className="border border-white/10">
            <div className="grid grid-cols-3 border-b border-white/10 px-4 py-2 font-mono text-xs text-white/60 uppercase tracking-widest">
              <span>Method</span>
              <span className="text-right">Traj / day</span>
              <span className="text-right">Unit cost</span>
            </div>
            <div className="grid grid-cols-3 px-4 py-3 text-sm text-white/75">
              <span>Real-world</span>
              <span className="text-right font-mono">104</span>
              <span className="text-right font-mono">$2.71</span>
            </div>
            <div className="grid grid-cols-3 bg-white/[0.03] px-4 py-3 text-sm text-white">
              <span className="font-medium">Simulation</span>
              <span className="text-right font-mono font-medium">710</span>
              <span className="text-right font-mono font-medium">$0.10</span>
            </div>
          </div>
          <p className="mt-3 font-mono text-xs text-white/30">Source: SIM1, data collection cost analysis</p>
        </section>

        {/* Industrial deployment */}
        <section className="mb-20">
          <p className="mb-8 font-mono text-xs tracking-widest text-white/60 uppercase">Industrial deployments (IFR)</p>
          <div className="mb-6 grid gap-6 sm:grid-cols-3">
            <div>
              <div className="font-mono text-3xl font-bold text-white">542k</div>
              <div className="mt-1 text-xs text-white/75">New installations in 2024</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-white">4.66M</div>
              <div className="mt-1 text-xs text-white/75">Units in operation worldwide</div>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-white">700k+</div>
              <div className="mt-1 text-xs text-white/75">Projected annual installations by 2028</div>
            </div>
          </div>

          {/* Sparkline-style bar chart */}
          <div className="flex items-end gap-1.5">
            {deploymentData.map(([year, val]) => {
              const num = parseInt(val);
              const pct = Math.round((num / 553) * 100);
              return (
                <div key={year} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className="w-full bg-white/20"
                    style={{ height: `${pct * 0.7}px` }}
                  />
                  <span className="font-mono text-[10px] text-white/30">{year.slice(2)}</span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-xs text-white/30">Annual industrial robot installations, source: IFR World Robotics 2025</p>
        </section>

        {/* Takeaway */}
        <div className="border-t border-white/10 pt-10">
          <p className="max-w-xl text-sm text-white/75 leading-relaxed">
            The market is transitioning from purely software AI to end-to-end embodied systems.
            Capital is flowing into hardware-enabled AI, robotics foundations, sensors, and deployment infrastructure,
            with sustained multi-year potential as real-world adoption scales.
          </p>
        </div>

      </div>
    </main>
  );
}
