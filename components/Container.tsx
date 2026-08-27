import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const width =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-[86rem]"
        : "max-w-6xl";

  return (
    <div className={`mx-auto w-full ${width} px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
