import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { industries, serviceCategories, trustSignals } from "@/config/content-index";

const industryContext: Record<
  string,
  {
    overview: string;
    challenges: readonly string[];
    support: readonly string[];
    outcomes: readonly string[];
  }
> = {
  education: {
    overview: "Education teams often need systems, materials, and research support that are clear enough for staff, students, administrators, and decision-makers to use.",
    challenges: ["Manual administration", "Fragmented learning or reporting tools", "Research and documentation pressure"],
    support: ["Plan learning or administrative systems", "Improve digital and visual communication", "Support research documentation and analysis"],
    outcomes: ["Clearer internal workflows", "More usable digital experiences", "Better structured academic or institutional outputs"]
  },
  smes: {
    overview: "Small and medium-sized businesses need practical tools and credible presentation without overcomplicated technology decisions.",
    challenges: ["Manual business processes", "Unclear brand or customer communication", "Procurement and technology selection uncertainty"],
    support: ["Shape business systems around daily operations", "Improve brand and client-facing materials", "Support technology purchasing decisions"],
    outcomes: ["Reduced manual work", "More professional market presence", "Clearer technology investment choices"]
  },
  startups: {
    overview: "Startup teams often need help turning early ideas into scoped products, credible brand foundations, and decisions they can act on.",
    challenges: ["Unclear MVP scope", "Limited technical planning capacity", "Early-stage brand and product uncertainty"],
    support: ["Clarify product direction and build scope", "Create practical brand and presentation assets", "Support research and validation documentation"],
    outcomes: ["Sharper product priorities", "More credible early presentation", "A clearer path from idea to execution"]
  },
  government: {
    overview: "Public-sector teams need careful requirements, procurement clarity, and systems or research support that can withstand review.",
    challenges: ["Complex procurement requirements", "Infrastructure planning gaps", "Documentation and stakeholder alignment needs"],
    support: ["Support requirements and vendor coordination", "Plan digital or infrastructure initiatives", "Structure research-backed documentation"],
    outcomes: ["Clearer procurement decisions", "Reduced implementation ambiguity", "Better documented planning and delivery"]
  },
  ngos: {
    overview: "NGOs need practical systems, reporting support, and communication materials that help programs operate and explain their work clearly.",
    challenges: ["Program reporting complexity", "Disconnected operational tools", "Need for credible donor or stakeholder communication"],
    support: ["Plan program systems and reporting workflows", "Improve communication and presentation materials", "Support research and evaluation documentation"],
    outcomes: ["More organized program data", "Clearer stakeholder reporting", "Stronger materials for communication and review"]
  },
  "financial-services": {
    overview: "Financial-service teams need reliable digital workflows, careful infrastructure choices, and professional client-facing experiences.",
    challenges: ["Process reliability needs", "Infrastructure and vendor risk", "Customer experience expectations"],
    support: ["Plan secure-feeling workflows and business systems", "Support infrastructure and procurement decisions", "Improve digital presentation and user flows"],
    outcomes: ["More dependable operations", "Clearer technology planning", "More polished customer-facing experiences"]
  },
  "research-institutions": {
    overview: "Research institutions need structured documentation, evidence-aware systems, and clear communication for complex work.",
    challenges: ["Complex research documentation", "Data and evidence organization", "Institutional communication needs"],
    support: ["Structure research outputs and documentation", "Plan systems that support evidence workflows", "Create clearer institutional materials"],
    outcomes: ["Better organized research material", "More usable documentation", "Clearer communication of institutional work"]
  }
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

function IndustriesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Industry paths for teams that need practical technology and consulting support.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Different organizations face different constraints. This page maps the company&apos;s service areas to common operational, technical, creative, and research needs.
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

function IndustryCard({ industry, index }: { industry: (typeof industries)[number]; index: number }) {
  const context = industryContext[industry.slug];
  const relevantServices = industry.relevantServices.map((slug) => serviceCategories.find((service) => service.slug === slug)).filter((service) => service !== undefined);

  return (
    <article className="rounded-2xl border border-brand-line bg-brand-surface p-5 shadow-soft sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Industry {index + 1}</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-ink">{industry.title}</h2>
          <p className="mt-5 text-base leading-7 text-brand-muted">{context.overview}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={industry.primaryCta.href}>{industry.primaryCta.label}</Button>
            <Button href="/services" variant="secondary">
              View Relevant Services
            </Button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <IndustryList title="Common challenges" items={context.challenges} />
            <IndustryList title="How we can support" items={context.support} />
            <IndustryList title="Practical outcomes" items={context.outcomes} />
            <div className="rounded-xl border border-brand-line bg-brand-canvas p-5">
              <h3 className="font-semibold text-brand-ink">Relevant services</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relevantServices.map((service) => (
                  <Link className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-primary transition-colors hover:border-brand-primary/40" href="/services" key={service.slug}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-brand-line bg-brand-canvas p-5">
            <h3 className="font-semibold text-brand-ink">Typical needs</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {industry.typicalNeeds.map((need) => (
                <span className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-muted" key={need}>
                  {need}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function IndustryList({ title, items }: { title: string; items: readonly string[] }) {
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

function IndustriesOverview() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
          <SectionIntro
            eyebrow="Industries"
            title="A practical view of who the services can support."
            description="The industry structure helps visitors find the closest fit without claiming more than the company can clearly explain."
          />
        </div>
        <div className="mt-8 grid gap-6">
          {industries.map((industry, index) => (
            <IndustryCard index={index} industry={industry} key={industry.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustryTrustBand() {
  const selectedSignals = trustSignals.filter((signal) => ["methodology", "case-studies", "technology-stack"].includes(signal.slug));

  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Industry confidence"
            title="Support should be shaped around the context, not a generic pitch."
            description="As the company develops proof, this page can connect industry needs to methodology, examples, tools, and outcomes."
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

function IndustriesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Find the right fit</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Start with your context, then shape the support around it.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Share the kind of organization, challenge, or decision you are working through. The first step is to clarify what kind of support is actually useful.
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

export const industriesMetadata: Metadata = {
  title: "Industries",
  description: `Explore practical industry paths for education, SMEs, startups, government, NGOs, financial services, and research institutions from ${brandConfig.name}.`
};

export function IndustriesPageSections() {
  return (
    <>
      <IndustriesHero />
      <IndustriesOverview />
      <IndustryTrustBand />
      <IndustriesFinalCta />
    </>
  );
}
