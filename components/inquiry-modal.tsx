"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function InquiryTrigger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <InquiryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function InquiryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!open) return null;

  const handleClose = () => {
    setSent(false);
    setError("");
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message }),
      });

      if (!res.ok) throw new Error("Send failed");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100">
              <svg
                className="h-5 w-5 text-zinc-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950">
              Inquiry received.
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              We will get back to you in 1 business day.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="inquiry-title"
              className="text-xl font-semibold tracking-tight text-zinc-950"
            >
              Get in touch
            </h2>
            <p className="mt-1.5 text-sm text-zinc-500">
              Tell us about your team and what you&apos;re building.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
              />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company (optional)"
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
              />
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are you working on?"
                rows={4}
                className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none"
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send inquiry →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
