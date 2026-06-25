"use client";

import { useEffect, useState } from "react";

interface WordCyclerProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

// Vertical distance the column travels per word, in em.
// 1em of glyph + 0.4em of empty gap between words.
const STEP_EM = 1.4;

export function WordCycler({
  words,
  intervalMs = 2800,
  className = "",
}: WordCyclerProps) {
  const extended = [...words, words[0]];
  const [i, setI] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setI((prev) => prev + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  useEffect(() => {
    if (i !== words.length) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setI(0);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      );
    }, 1300);
    return () => clearTimeout(t);
  }, [i, words.length]);

  const widest = words.reduce((a, b) => (a.length >= b.length ? a : b));

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className}`}
      style={{ lineHeight: 1, verticalAlign: "baseline" }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Invisible inline placeholder — gives the outer inline-block its width
          AND its baseline (since it's inline content, not block). This is the
          piece that keeps the cycler perfectly baseline-aligned with the
          adjacent " faster," text. */}
      <span aria-hidden="true" className="invisible">
        {widest}
      </span>

      {/* Clipping viewport — absolute, so its `overflow: hidden` does not
          hijack the outer span's baseline. The box is enlarged on every side
          with negative offsets, then padded back to the same content area:
          bold-cap overshoot, "y" descenders, and edge glyphs render into the
          padding (which `overflow: hidden` clips at the border edge, not the
          padding edge) so they're not cut off, while the slide effect still
          works because items past the box are still clipped. */}
      <span
        className="absolute overflow-hidden"
        style={{
          left: "-0.18em",
          right: "-0.18em",
          top: "-0.25em",
          height: "1.4em",
          padding: "0.25em 0.18em 0.15em",
          boxSizing: "border-box",
        }}
      >
        <span
          className="block"
          style={{
            transform: `translateY(${-i * STEP_EM}em)`,
            transition: animate
              ? "transform 1300ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
            lineHeight: 1,
          }}
        >
          {extended.map((w, idx) => (
            <span
              key={idx}
              className="block"
              style={{ height: `${STEP_EM}em`, lineHeight: 1 }}
            >
              {w}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
