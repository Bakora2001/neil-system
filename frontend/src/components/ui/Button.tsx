import { Link } from "react-router-dom";
import clsx from "clsx";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "navy" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-[#ef9d4a] text-white hover:brightness-95 shadow-md hover:scale-105 active:scale-95 transition-all duration-200",
  outline: "border-2 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200",
  navy: "bg-[#1A237E] text-white hover:bg-opacity-90 hover:scale-105 active:scale-95 transition-all duration-200",
  ghost: "text-[#1A237E] hover:text-[#ef9d4a] transition-all",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200";

export function Button({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  onClick,
}: BaseProps & { href?: string; type?: "button" | "submit"; onClick?: () => void }) {
  const classes = clsx(base, variantClasses[variant], className);

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
