import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import {
  careerCategories,
  industries,
  portfolioCategories,
  serviceCategories,
  trustSignals
} from "@/config/content-index";

const processSteps = [
  {
    label: "Discover",
    description: "Clarify goals, constraints, stakeholders, and the business context before proposing a solution."
  },
  {
    label: "Plan",
    description: "Shape the scope, delivery path, priorities, risks, and practical next steps."
  },
  {
    label: "Build",
    description: "Design, implement, coordinate, or document the work with clear communication throughout."
  },
  {
    label: "Support",
    description: "Review outcomes, improve where needed, and help the work stay useful after launch."
  }
] as const;

const heroProofPoints = [
  {
    label: "Practical Delivery",
    detail: "Execution-focused"
  },
  {
    label: "Technical Planning",
    detail: "Scoped before build"
  },
  {
    label: "Research-Led Approach",
    detail: "Evidence-aware"
  }
] as const;

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

function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_52%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-canvas/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center pb-24 pt-20 lg:pb-28 lg:pt-24">
        <div className="animate-reveal mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mx-auto mt-6 max-w-5xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Practical technology and consulting support for teams ready to execute.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76">
            {brandConfig.description} The focus is clear planning, useful systems, reliable coordination, and evidence-led decisions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.primary.href}>
              {ctas.primary.label}
            </Button>
            <Button className="border-white/18 bg-white/10 text-white hover:bg-white/16" href={ctas.secondary.href} variant="secondary">
              {ctas.secondary.label}
            </Button>
          </div>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/68" aria-label="Credibility indicators">
            {heroProofPoints.map((point) => (
              <span className="group relative inline-flex items-center gap-2 rounded-full px-2 py-1 transition-transform duration-200 hover:-translate-y-0.5 hover:text-white" key={point.label}>
                <span className="size-1.5 rounded-full bg-brand-accent shadow-[0_0_14px_rgb(198_145_66_/_0.72)] transition-shadow duration-200 group-hover:shadow-[0_0_20px_rgb(198_145_66_/_0.95)]" />
                <span className="font-semibold text-white/82 transition-colors duration-200 group-hover:text-white">{point.label}</span>
                <span className="absolute inset-x-2 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-accent/70 transition-transform duration-200 group-hover:scale-x-100" />
              </span>
            ))}
          </div>
          <WhatsAppLink className="mt-5" label="Chat with us on WhatsApp" />
        </div>
      </Container>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section className="relative -mt-1 bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/82 p-5 shadow-soft backdrop-blur sm:p-8">
          <SectionIntro
            eyebrow="Services"
            title="A focused service mix for organizations that need useful work done well."
            description="The service structure connects execution, procurement, identity, and research without pretending every need has the same solution."
          />
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <article className="group relative overflow-hidden rounded-xl border border-brand-line bg-brand-surface p-6 shadow-soft transition-transform hover:-translate-y-1" key={service.slug}>
              <div className="absolute right-5 top-5 text-5xl font-bold text-brand-primary/8">{index + 1}</div>
              <h3 className="relative max-w-md font-display text-xl font-bold leading-tight text-brand-ink">{service.title}</h3>
              <p className="relative mt-4 text-sm font-bold uppercase tracking-[0.14em] text-brand-primary">Typical outcomes</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-brand-muted">
                {service.outcomes.map((outcome) => (
                  <li className="flex gap-2" key={outcome}>
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link className="mt-6 inline-flex text-sm font-semibold text-brand-primary hover:text-brand-ink" href={service.href}>
                Explore service area
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="border-y border-brand-line bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro
            eyebrow="Industries"
            title="Industry paths without overclaiming the story."
            description="The homepage can guide different visitors while keeping the tone honest: practical support, relevant context, and proof when it is available."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry) => (
              <Link
                className="rounded-lg border border-brand-line bg-brand-canvas p-4 transition-colors hover:border-brand-primary/40 hover:bg-white"
                href={industry.href}
                key={industry.slug}
              >
                <h3 className="font-semibold text-brand-ink">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{industry.typicalNeeds[0]}</p>
              </Link>
            ))}
          </div>
        </div>
        <Button className="mt-8" href="/industries" variant="secondary">
          View Industries
        </Button>
      </Container>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative">
          <SectionIntro
            eyebrow="Trust & credibility"
            title="Credibility designed around evidence, not inflated claims."
            description="These placeholders make room for verified proof as credentials, tools, partnerships, and project outcomes are confirmed."
            invert
          />
        </div>
        <div className="relative mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((signal) => (
            <article className="rounded-xl border border-white/12 bg-white/7 p-5 backdrop-blur" key={signal.slug}>
              <h3 className="font-semibold text-white">{signal.label}</h3>
              <p className="mt-3 text-sm leading-6 text-white/68">{signal.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Engagement model"
          title="Clear enough for early conversations, structured enough for delivery."
          description="The model keeps work grounded: understand the problem, plan the path, execute carefully, and support what has been built."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <li className="relative rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={step.label}>
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{step.label}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function PortfolioPreview() {
  return (
    <section className="bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Portfolio preview"
            title="A place for evidence once the work is ready to show."
            description="The structure is ready for completed projects, demos, branding work, case studies, and success stories without inventing proof too early."
          />
          <Button href="/portfolio" variant="secondary">
            View Portfolio
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {portfolioCategories.map((category) => (
            <article className="rounded-xl border border-brand-line bg-brand-canvas p-5 transition-colors hover:bg-white" key={category.slug}>
              <h3 className="font-semibold text-brand-ink">{category.label}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{category.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CareersTeaser() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-2xl border border-brand-line bg-brand-surface p-6 shadow-soft md:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <SectionIntro
            eyebrow="Careers"
            title="Room for careful growth, internships, and future roles."
            description="The careers path stays modest and practical: open roles, internships, CV upload, and portfolio upload can be added when the hiring process is ready."
          />
          <div className="grid gap-3">
            {careerCategories.slice(0, 3).map((category) => (
              <div className="rounded-lg bg-brand-canvas p-4" key={category.slug}>
                <h3 className="font-semibold text-brand-ink">{category.label}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{category.description}</p>
              </div>
            ))}
            <Button className="mt-2 w-full sm:w-fit" href={ctas.careers.href}>
              {ctas.careers.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Start the conversation</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Bring a project, question, or early idea to the team.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Use the project request path for structured requirements, contact the team for a quote, or use WhatsApp for quick contact when the official number is confirmed.
          </p>
        </div>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.primary.href}>
            {ctas.primary.label}
          </Button>
          <Button className="border-white/18 bg-white/10 text-white hover:bg-white/16" href={ctas.secondary.href} variant="secondary">
            Contact the Team
          </Button>
          <WhatsAppLink label="Chat on WhatsApp" shape="button" />
        </div>
      </Container>
    </section>
  );
}

export function HomePageSections() {
  return (
    <>
      <HomeHero />
      <ServicesOverview />
      <IndustriesPreview />
      <TrustSection />
      <ProcessSection />
      <PortfolioPreview />
      <CareersTeaser />
      <FinalCta />
    </>
  );
}
