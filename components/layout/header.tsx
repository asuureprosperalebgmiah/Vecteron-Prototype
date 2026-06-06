import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { primaryNavigation } from "@/config/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/18 bg-[linear-gradient(112deg,rgb(255_255_255)_0%,rgb(246_248_251)_26%,rgb(204_219_230)_39%,rgb(10_33_80)_61%,rgb(5_20_45)_100%)] shadow-[0_12px_32px_rgb(10_33_80_/_0.2)]">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link className="flex items-center gap-4 font-display text-lg font-bold text-brand-ink" href="/#home">
          <span className="relative flex size-14 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
            <Image
              alt={`${brandConfig.name} logo`}
              className="object-contain"
              fill
              priority
              sizes="56px"
              src={brandConfig.assets.logo}
            />
          </span>
          <span className="hidden leading-none sm:grid">
            <span className="text-xl font-bold uppercase tracking-[0.32em] text-brand-ink [font-family:'Orbitron',var(--font-display)] [text-shadow:0_1px_0_rgb(255_255_255_/_0.8)]">
              {brandConfig.name}
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-4 xl:gap-6 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              className="relative text-xs font-semibold text-white transition-colors after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-brand-primary after:transition-all hover:text-emerald-200 hover:after:w-full xl:text-sm"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-white/35 px-4 text-sm font-semibold text-white transition-colors hover:border-brand-primary/70 hover:text-emerald-200">
            <span>Menu</span>
            <span aria-hidden="true" className="grid gap-1">
              <span className="block h-0.5 w-4 rounded-full bg-white transition-transform group-open:translate-y-1.5 group-open:rotate-45" />
              <span className="block h-0.5 w-4 rounded-full bg-white transition-opacity group-open:opacity-0" />
              <span className="block h-0.5 w-4 rounded-full bg-white transition-transform group-open:-translate-y-1.5 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 rounded-xl border border-white/12 bg-brand-ink p-4 shadow-soft">
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {primaryNavigation.map((item) => (
                <Link className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-emerald-200" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </Container>
    </header>
  );
}
