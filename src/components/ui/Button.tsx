import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline-dark" | "outline-light";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-body font-semibold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:-translate-y-0";

  const variants = {
    primary: "bg-accent-green text-white hover:bg-accent-green/90",
    "outline-dark":
      "bg-transparent border-[1.5px] border-white/80 text-white hover:bg-white hover:text-primary-dark",
    "outline-light":
      "bg-white border-[1.5px] border-accent-green text-accent-green hover:bg-accent-green hover:text-white",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
