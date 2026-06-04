import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white shadow-soft hover:bg-brand-primary/90",
  secondary: "border border-brand-line bg-brand-surface text-brand-ink hover:border-brand-primary/40",
  ghost: "text-brand-ink hover:bg-brand-primary/10"
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors";

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
