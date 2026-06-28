"use client";

import { useState } from "react";

const EMAIL = "edward.h.jung07@gmail.com";

export function InquiryTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [state, setState] = useState<"idle" | "revealed" | "copied">("idle");

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {}
    setState("copied");
    setTimeout(() => setState("revealed"), 2500);
  };

  if (state === "idle") {
    return (
      <button type="button" onClick={handleClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {state === "copied" ? (
        <span className="flex items-center gap-1.5">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5L5.5 10L11 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          copied to clipboard
        </span>
      ) : (
        EMAIL
      )}
    </button>
  );
}
