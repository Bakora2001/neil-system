import type { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ndip-orange-alt">
      {children}
    </p>
  );
}
