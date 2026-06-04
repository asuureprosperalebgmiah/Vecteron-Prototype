import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { industries, serviceCategories, trustSignals } from "@/config/content-index";

const serviceOverviews: Record<string, string> = {
  "software-technology":
    "Plan and build practical digital systems that reduce manual work, connect operations, and support better user experiences.",
  "infrastructure-procurement":
    "Support technology purchasing, infrastructure planning, and vendor coordination with clearer requirements and reduced delivery risk.",
  "creative-branding":
    "Create more credible brand, design, and communication systems for organizations that need to present themselves clearly.",
  "research-academic-consulting":
    "Help structure research, documentation, analysis, and academic support so evidence can be easier to understand and use."
};

function SectionIntro({
  eyebrow,
  title,
  description,
  invert = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={invert ? "text-xs font-bold uppercase tracking-[0.18em] text-brand-accent" : "text-xs font-bold uppercase tracking-[0.18em] text-brand-primary"}>
        {eyebrow}
      </p>
      <h2 className={invert ? "mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl" : "mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-brand-ink sm:text-4xl"}>
        {title}
      </h2>
      <p className={invert ? "mt-4 text-base leading-7 text-white/72" : "mt-4 text-base leading-7 text-brand-muted"}>
        {description}
      </p>
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Services for practical planning, execution, procurement, design, and research.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            The service model is built for organizations that need clear thinking and useful delivery rather than vague promises.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.primary.href}>
              {ctas.primary.label}
            </Button>
            <Button className="border-white/18 bg-white/10 text-white hover:bg-white/16" href={ctas.secondary.href} variant="secondary">
              {ctas.secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceDetailCard({ service, index }: { service: (typeof serviceCategories)[number]; index: number }) {
  const relatedIndustryNames = service.relatedIndustries.map((slug) => industries.find((industry) => industry.slug === slug)?.title ?? slug);

  return (
    <article className="rounded-2xl border border-brand-line bg-brand-surface p-5 shadow-soft sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Service {index + 1}</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-ink">{service.title}</h2>
          <p className="mt-5 text-base leading-7 text-brand-muted">{serviceOverviews[service.slug]}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={service.primaryCta.href}>{service.primaryCta.label}</Button>
            <Button href="/contact" variant="secondary">
              Discuss Requirements
            </Button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-xl border border-brand-line bg-brand-canvas p-5">
            <h3 className="font-semibold text-brand-ink">Who it is for</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.audience.map((audience) => (
                <span className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-muted" key={audience}>
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <ServiceList title="Problems it solves" items={service.clientProblems} />
            <ServiceList title="Capabilities" items={service.capabilityAreas} />
            <ServiceList title="Outcomes" items={service.outcomes} />
            <div className="rounded-xl border border-brand-line bg-brand-canvas p-5">
              <h3 className="font-semibold text-brand-ink">Related industries</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedIndustryNames.map((name) => (
                  <Link className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-primary transition-colors hover:border-brand-primary/40" href="/industries" key={name}>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-xl border border-brand-line bg-brand-canvas p-5">
      <h3 className="font-semibold text-brand-ink">{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-brand-muted">
        {items.map((item) => (
          <li className="flex gap-2" key={item}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesOverview() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
          <SectionIntro
            eyebrow="Services"
            title="Four connected service areas, one practical delivery mindset."
            description="Each service category can stand alone, but the strongest work often happens when technical, operational, creative, and research needs are understood together."
          />
        </div>
        <div className="mt-8 grid gap-6">
          {serviceCategories.map((service, index) => (
            <ServiceDetailCard index={index} key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TrustBand() {
  const selectedSignals = trustSignals.filter((signal) => ["technology-stack", "methodology", "case-studies"].includes(signal.slug));

  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Service confidence"
            title="The page is structured for evidence, not exaggerated claims."
            description="As proof becomes available, the service pages can show tools, methodology, examples, and outcomes in a clear way."
            invert
          />
          <div className="grid gap-4 md:grid-cols-3">
            {selectedSignals.map((signal) => (
              <article className="rounded-xl border border-white/12 bg-white/7 p-5 backdrop-blur" key={signal.slug}>
                <h3 className="font-semibold text-white">{signal.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{signal.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Discuss the right service mix</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Start with the need, then shape the service around it.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Bring a project, procurement question, brand challenge, or research need. The first step is to clarify the practical path forward.
          </p>
        </div>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.primary.href}>
            {ctas.primary.label}
          </Button>
          <Button className="border-white/18 bg-white/10 text-white hover:bg-white/16" href={ctas.secondary.href} variant="secondary">
            {ctas.secondary.label}
          </Button>
          <WhatsAppLink label="Chat on WhatsApp" shape="button" />
        </div>
      </Container>
    </section>
  );
}

export const servicesMetadata: Metadata = {
  title: "Services",
  description: `Explore practical technology, infrastructure, creative, branding, research, and academic consulting services from ${brandConfig.name}.`
};

export function ServicesPageSections() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <TrustBand />
      <ServicesFinalCta />
    </>
  );
}
