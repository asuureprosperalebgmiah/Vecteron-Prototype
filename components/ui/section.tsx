import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
};

export function Section({ className, eyebrow, title, description, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)} {...props}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-primary">{eyebrow}</p> : null}
          {title ? <h2 className="font-display text-3xl font-bold text-brand-ink sm:text-4xl">{title}</h2> : null}
          {description ? <p className="mt-4 text-base leading-7 text-brand-muted">{description}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
