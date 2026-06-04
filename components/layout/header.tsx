import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { actionNavigation, primaryNavigation } from "@/config/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-brand-surface/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-3 font-display text-lg font-bold text-brand-ink" href="/">
          <span className="flex size-10 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">
            CN
          </span>
          <span>{brandConfig.name}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={actionNavigation[1].href} variant="secondary">
            {actionNavigation[1].label}
          </Button>
          <Button href={actionNavigation[0].href}>{actionNavigation[0].label}</Button>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center rounded-lg border border-brand-line px-4 text-sm font-semibold text-brand-ink">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-lg border border-brand-line bg-brand-surface p-4 shadow-soft">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {primaryNavigation.map((item) => (
                <Link className="rounded-md px-3 py-2 text-sm font-medium hover:bg-brand-primary/10" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-2">
              {actionNavigation.map((item, index) => (
                <Button href={item.href} key={item.href} variant={index === 0 ? "primary" : "secondary"}>
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
