import Link from "next/link";
import { InquiryTrigger } from "@/components/inquiry-modal";

export function Nav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between border-b px-6 py-4 md:px-10 ${
        isDark
          ? "border-white/10 bg-black text-white/90"
          : "border-zinc-200 bg-white text-zinc-900"
      }`}
    >
      <Link href="/" aria-label="Edward Jung home" className="flex items-center">
        <span className="text-base font-semibold tracking-tight">
          Edward Jung
        </span>
      </Link>
      <div className="flex items-center gap-6 text-sm">
        <Link
          href="/platform"
          className="hidden hover:opacity-100 opacity-80 sm:inline"
        >
          Platform
        </Link>
        <Link
          href="/portfolio"
          className="hidden hover:opacity-100 opacity-80 sm:inline"
        >
          Portfolio
        </Link>
        <Link
          href="/about"
          className="hidden hover:opacity-100 opacity-80 sm:inline"
        >
          About
        </Link>
        <InquiryTrigger
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            isDark
              ? "bg-white text-black hover:bg-white/90"
              : "bg-black text-white hover:bg-black/90"
          }`}
        >
          Get in touch
        </InquiryTrigger>
      </div>
    </nav>
  );
}
