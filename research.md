# Orex — Research

## Detailed Cost & Performance Breakdown (Sourced from SIM1)

### Real-World Data Collection

- **Manual Labor:** $200 per day (8 hours at $25/hour).
- **Hardware Depreciation:** $82 per day (based on a 1-year lifecycle for the platform).

### Simulation Pipeline

- **Operating Cost:** Amortized to $0.37 per hour.
- **Processing Speed:** Average rendering time of 16.2 minutes per GPU, allowing for parallel generation.

### Overall Advantages of Simulation

- **Cost Efficiency:** A **27×** reduction in cost compared to physical collection.
- **Scalability:** A **6.8×** increase in throughput.

### Table 4 — Comparison of Data Acquisition Efficiency

> *All costs estimated based on the daily expense of employing two data operators ($282).*

| Method                | Throughput (traj./day) ↑ | Unit Cost ($/traj.) ↓ | Relative Cost ↓ |
| --------------------- | -----------------------: | --------------------: | --------------: |
| Real-world Collection |                      104 |                  2.71 |            1.0× |
| **Ours (Simulation)** |                  **710** |              **0.10** |      **0.037×** |

> **Image context (page 1):** This appears as a dark-themed results table from the SIM1 source. It contrasts real-world teleoperation data collection against the simulation pipeline ("Ours"). Simulation produces roughly **6.8× more trajectories per day** (710 vs. 104) at about **1/27th the unit cost** ($0.10 vs. $2.71 per trajectory), reinforcing the 27× cost-reduction and 6.8× throughput claims above.

---

## Expensive Example: Human Teleop-Trained Data (Unfolding Robotics)

Source: <https://huggingface.co/spaces/lerobot/robot-folding#the-robot-bimanual-openarm>

### Data Collection (Time and Scale)

- **Time spent:** ~131 hours collecting real-world teleoperation demonstrations in person.
- **Dataset diversity:** 25+ different t-shirts, 8 different backgrounds, and varying camera/robot heights to maximize dataset diversity.
- **Tasks:** Two difficulty levels —
  - **Level 1:** Folding a laid-out shirt.
  - **Level 2:** Spreading a messy, crumpled shirt, folding it, and placing it aside.

### Equipment Used

- **Number of Setups:** 8 bimanual robot setups run in parallel.
- **Total Robots:** Because each setup is bimanual (two arms) and uses a leader-follower teleoperation system, the 8 setups required:
  - **16 follower arms** (the main OpenArm)
  - **16 leader arms** (the OpenArm Mini, used by human operators)

### Cost

- **Leader Arms:** Custom 3D-printed leader arms (OpenArm Mini) were highly cost-effective at roughly **€120 per arm (~$130 USD)**. This low cost is what enabled scaling to 8 parallel stations.
- **Follower Arms:** The exact price for the main bimanual OpenArm robot (sold by vendors like WowRobo) is not explicitly listed, but it was chosen because it is **fully open-source hardware**, helping keep the overall project budget accessible.

---

## Momentum of Embodied AI (Perplexity)

- **Robotics / physical AI VC in 2025:** ~$27.6B across 1,009 deals — roughly **2× 2024's $13.7B**.
  [Source](https://business20channel.tv/robotics-funding-2026-276b-surge-reshapes-vc-bets-on-automation-16-may-2026)
- **Defense + security robotics in 2025:** ~$8B across 234 deals (~29% of the 2025 robotics total).
  [Source](https://bebeez.eu/2026/03/23/military-technology-is-driving-the-global-vc-growth-in-robotics/)
- **Industrial robotics in 2025:** ~$5.9B across 201 deals; robotics software & AI raised ~$3.4B across 124 deals.
  [Source](https://bebeez.eu/2026/03/23/military-technology-is-driving-the-global-vc-growth-in-robotics/)
- **General-purpose robotics funding:** rose from **$2B in 2024 to $5B in 2025**.
  [Source](https://roboticsandautomationnews.com/2025/11/07/f-primes-state-of-robotics-2025-report-shows-record-21-billion-investment-but-is-it-another-bubble/96377/)
- **Q1 2026 physical AI funding:** ~$6.4B across 210+ deals — flow still accelerating into 2026.
  [Source](https://agentmarketcap.ai/blog/2026/04/05/capital-rotation-physical-ai-robotics-embodied-agent-funding)
- **AI's share of total global VC in 2025:** ~61% of all VC value, showing capital concentration around AI broadly (including the physical AI stack).
  [Source](https://www.oecd.org/en/publications/venture-capital-investments-in-artificial-intelligence-through-2025_a13752f5-en/full-report.html)

### Illustrative Takeaway

- The market is transitioning from purely software AI to **end-to-end embodied systems**. Capital is flowing into hardware-enabled AI, robotics foundations, sensors, and deployment infrastructure, with sustained multi-year potential as real-world adoption scales.
- **~$28B in 2025** robotics/physical AI funding, plus **~$6.4B in Q1 2026** as the next acceleration signal.

---

## International Federation of Robotics (IFR)

Source: <https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years>

- **Total Installations:** 542,000 industrial robots installed globally in 2024 — more than double the volume from ten years ago.
- **Operational Stock:** 4,664,000 units in operational use worldwide in 2024 (a 9% year-over-year increase).
- **Regional Breakdown:** Asia accounted for **74%** of new deployments, followed by Europe (16%) and the Americas (9%).
- **Future Outlook:** Global installations projected to grow 6% to **575,000 units in 2025**, and expected to surpass **700,000 units annually by 2028**.

### Chart — Annual Installations of Industrial Robots (World)

> **Image context (page 4):** An IFR-branded bar chart titled *"Global Factory Robot Workforce More Than Doubled in 10 Years."* It plots annual industrial-robot installations worldwide (in thousands of units) from 2014 to 2024, visually confirming the >2× growth over the decade. Source: World Robotics 2025.

| Year | Installations (1,000 units) |
| ---- | --------------------------: |
| 2014 |                         221 |
| 2015 |                         254 |
| 2016 |                         304 |
| 2017 |                         400 |
| 2018 |                         423 |
| 2019 |                         387 |
| 2020 |                         390 |
| 2021 |                         526 |
| 2022 |                         553 |
| 2023 |                         541 |
| 2024 |                         542 |

*Installations climbed steadily from 221k (2014), dipped in 2019–2020, then surged past 500k from 2021 onward — roughly 2.45× the 2014 level by 2024.*