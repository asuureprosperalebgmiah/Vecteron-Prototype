import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white shadow-soft hover:-translate-y-0.5 hover:bg-brand-primary/90 hover:shadow-[0_12px_28px_rgb(18_138_91_/_0.22)]",
  secondary: "border border-brand-line bg-brand-surface text-brand-ink hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-[0_10px_24px_rgb(10_33_80_/_0.08)]",
  ghost: "text-brand-ink hover:bg-brand-primary/10"
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export function Button({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: LinkButtonProps | NativeButtonProps) {
  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
