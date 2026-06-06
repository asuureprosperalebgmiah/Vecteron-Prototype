import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { ctas } from "@/config/ctas";
import { cn } from "@/lib/utils";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label?: string;
  shape?: "pill" | "button";
};

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path
        className="stroke-current"
        d="M12 4.25a7.65 7.65 0 0 0-6.5 11.7l-.73 3.02 3.1-.7A7.65 7.65 0 1 0 12 4.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        className="fill-current"
        d="M9.05 8.45c.16-.34.32-.36.55-.36h.38c.14 0 .33.04.5.38.2.45.62 1.5.67 1.6.05.11.08.24.02.38-.08.18-.14.25-.27.39l-.21.23c-.1.1-.2.2-.09.4.1.2.47.78 1 1.26.7.63 1.27.82 1.48.91.2.08.33.07.45-.08l.61-.73c.15-.2.32-.16.54-.08.22.08 1.4.66 1.64.78.24.12.4.18.46.29.06.1.06.58-.14 1.13-.2.55-1.06 1.05-1.47 1.1-.39.05-.9.08-2.86-.73-2.42-.99-3.96-3.44-4.08-3.6-.12-.17-.96-1.28-.96-2.42 0-1.14.58-1.7.79-1.93Z"
      />
    </svg>
  );
}

export function WhatsAppLink({
  className,
  label = ctas.whatsapp.label,
  shape = "pill",
  href = ctas.whatsapp.href,
  ...props
}: WhatsAppLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2.5 border border-white/8 bg-white/5 px-4 py-2 text-sm font-semibold text-white/66 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-success/45 hover:bg-brand-success/12 hover:text-white hover:shadow-[0_12px_30px_rgb(34_122_93_/_0.16)]",
        shape === "pill" ? "rounded-full" : "rounded-lg px-5 py-2.5",
        className
      )}
      href={href}
      {...props}
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/56 transition-all duration-300 group-hover:scale-105 group-hover:border-brand-success/45 group-hover:bg-brand-success/14 group-hover:text-brand-success group-hover:shadow-[0_0_18px_rgb(34_122_93_/_0.42)]">
        <WhatsAppIcon />
      </span>
      <span>{label}</span>
    </Link>
  );
}
