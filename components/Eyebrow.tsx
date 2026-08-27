import type { ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.7rem] font-medium uppercase tracking-[0.28em] text-muted ${className}`}
    >
      {children}
    </p>
  );
}
