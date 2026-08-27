import Link from "next/link";
import type { ReactNode } from "react";

export function PrimaryCta({
  href,
  children,
  className = "",
  tone = "ink",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "paper";
}) {
  const styles =
    tone === "paper"
      ? "bg-paper text-ink hover:bg-white"
      : "bg-ink text-paper hover:bg-ink-2";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

export function SecondaryCta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full border border-line px-7 py-3.5 text-[0.95rem] font-medium tracking-tight text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-y-0.5"
      >
        ↓
      </span>
    </Link>
  );
}
