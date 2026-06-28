"use client";

import { useState } from "react";

export function InquiryTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <a
        href="mailto:edward.h.jung07@gmail.com"
        className={className}
      >
        edward.h.jung07@gmail.com
      </a>
    );
  }

  return (
    <button type="button" onClick={() => setRevealed(true)} className={className}>
      {children}
    </button>
  );
}
