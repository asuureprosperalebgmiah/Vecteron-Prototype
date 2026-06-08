import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { footerNavigation } from "@/config/navigation";

const serviceSummary = ["Software", "Infrastructure", "Creative", "Research"] as const;

export function Footer() {
  const phoneHref = `tel:${brandConfig.contact.phone.replace(/\s+/g, "")}`;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgb(18_138_91_/_0.2),transparent_32%),linear-gradient(135deg,rgb(10_33_80),rgb(7_21_49))]" />
      <div className="vecteron-grid absolute inset-0 opacity-20" />
      <Container className="relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1.65fr_0.85fr]">
          <div>
            <Link className="flex items-center gap-4 font-display font-bold" href="/#home">
              <span className="relative flex size-20 overflow-hidden rounded-2xl bg-white shadow-[0_18px_48px_rgb(0_0_0_/_0.16)]">
                <Image
                  alt={`${brandConfig.name} logo`}
                  className="object-contain"
                  fill
                  sizes="80px"
                  src={brandConfig.assets.logo}
                />
              </span>
              <span className="grid">
                <span className="font-tech text-2xl uppercase tracking-[0.18em]">{brandConfig.name}</span>
                <span className="text-[0.68rem] uppercase tracking-[0.22em] text-brand-primary">{brandConfig.legalName}</span>
                <span className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-cyan-100/78">{brandConfig.tagline}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-footer">{brandConfig.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {serviceSummary.map((item) => (
                <span className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-footer" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link className="rounded-full border border-brand-primary/40 bg-brand-primary/12 px-4 py-2 font-semibold text-cyan-100 transition-colors hover:bg-brand-primary/18 hover:text-white" href={ctas.primary.href}>
                {ctas.primary.label}
              </Link>
              <Link className="rounded-full border border-white/16 px-4 py-2 font-semibold text-footer transition-colors hover:border-white/32 hover:text-white" href={ctas.secondary.href}>
                {ctas.secondary.label}
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="technical-label text-on-dark-label">{group.title}</h2>
                <ul className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}-${link.href}`}>
                      <Link className="text-sm text-footer-muted transition-colors hover:text-white" href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-5">
            <h2 className="technical-label text-on-dark-label">Contact</h2>
            <div className="mt-4 grid gap-3">
              <a
                className="rounded-md text-sm leading-6 text-footer underline-offset-4 transition-colors duration-300 hover:text-white hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                href={`mailto:${brandConfig.contact.email}`}
              >
                {brandConfig.contact.email}
              </a>
              <a
                className="rounded-md text-sm leading-6 text-footer underline-offset-4 transition-colors duration-300 hover:text-white hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                href={phoneHref}
              >
                {brandConfig.contact.phone}
              </a>
              <p className="text-sm leading-6 text-footer-muted">{brandConfig.contact.location}</p>
              <p className="text-sm leading-6 text-footer-muted">{brandConfig.contact.serviceArea}</p>
            </div>
            <Link
              className="mt-5 inline-flex rounded-full border border-brand-primary/45 bg-brand-primary/12 px-4 py-2 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary/18 hover:text-white"
              href={ctas.whatsapp.href}
            >
              {ctas.whatsapp.label}
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {brandConfig.legalName}. All rights reserved.</p>
          <p>Forms and inquiries can be followed up through Vecteron&apos;s available communication channels.</p>
        </div>
      </Container>
    </footer>
  );
}
