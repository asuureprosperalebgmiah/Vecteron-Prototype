import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { footerNavigation } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="border-t border-brand-line bg-brand-ink text-white">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link className="flex items-center gap-4 font-display font-bold" href="/#home">
              <span className="relative flex size-16 overflow-hidden rounded-lg bg-white">
                <Image
                  alt={`${brandConfig.name} logo`}
                  className="object-contain"
                  fill
                  sizes="64px"
                  src={brandConfig.assets.logo}
                />
              </span>
              <span className="grid">
                <span className="text-xl uppercase tracking-[0.14em]">{brandConfig.name}</span>
                <span className="text-xs uppercase tracking-[0.22em] text-brand-primary">{brandConfig.tagline}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/72">{brandConfig.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="text-sm font-semibold text-brand-accent hover:text-white" href={ctas.primary.href}>
                {ctas.primary.label}
              </Link>
              <Link className="text-sm font-semibold text-white/80 hover:text-white" href={ctas.secondary.href}>
                {ctas.secondary.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold">{group.title}</h2>
                <ul className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}-${link.href}`}>
                      <Link className="text-sm text-white/70 transition-colors hover:text-white" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-6 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} {brandConfig.legalName}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
