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
  const [revealed, setRevealed] = useState(false);
  const [toast, setToast] = useState(false);

  const handleClick = async () => {
    setRevealed(true);
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {}
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        {revealed ? EMAIL : children}
      </button>

      {toast && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5L5.5 10L11 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Email copied to clipboard
        </div>
      )}
    </>
  );
}
