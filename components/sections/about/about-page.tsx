import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { trustSignals } from "@/config/content-index";

const values = [
  {
    label: "Clarity",
    description: "We make requirements, tradeoffs, and next steps easier to understand before work begins."
  },
  {
    label: "Reliability",
    description: "We favor practical decisions, clear communication, and work that can be maintained after delivery."
  },
  {
    label: "Technical Care",
    description: "We approach technology, infrastructure, and documentation with attention to structure and detail."
  },
  {
    label: "Useful Creativity",
    description: "We use design and creative thinking to support business goals, not distract from them."
  }
] as const;

const workSteps = [
  "Understand the organization, audience, constraints, and decision context.",
  "Define a clear scope with priorities, risks, and practical delivery steps.",
  "Execute with regular communication, review points, and careful documentation.",
  "Support improvement after launch, handoff, or final delivery."
] as const;

const reasons = [
  "A practical mix of software, infrastructure, creative, and research capability.",
  "Early-stage energy balanced with professional delivery discipline.",
  "A preference for specific outcomes over vague technology language.",
  "A structure that can grow into stronger proof, case studies, and partnerships over time."
] as const;

const storyHighlights = [
  {
    label: "Company Background",
    description: "Built around the practical intersection of technology, procurement, creative communication, and research support."
  },
  {
    label: "Vision & Mission",
    description: "Focused on helping organizations make clearer decisions and move useful work forward with confidence."
  },
  {
    label: "Core Values",
    description: "Grounded in clarity, reliability, technical care, and creative thinking that supports real business needs."
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

function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[30rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            About a practical technology and consulting company built around useful execution.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            {brandConfig.name} is structured to help organizations turn unclear needs into planned, built, procured, designed, or researched work that can be understood and acted on.
          </p>
        </div>
      </Container>
    </section>
  );
}

function CompanyStory() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
            <SectionIntro
              eyebrow="Company story"
              title="A focused foundation for technical, creative, infrastructure, and research work."
              description="The company is positioned for teams that need thoughtful planning and practical delivery rather than broad claims or one-size-fits-all solutions."
            />
          </div>
          <div className="grid gap-4">
            {storyHighlights.map((highlight) => (
              <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={highlight.label}>
                <h2 className="font-display text-xl font-bold text-brand-ink">{highlight.label}</h2>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="border-y border-brand-line bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-line bg-brand-canvas p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Mission</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-ink">Help organizations move from intention to practical execution.</h2>
            <p className="mt-4 text-base leading-7 text-brand-muted">
              The mission is to support useful work across technology, infrastructure, creative communication, and research with clear planning and careful delivery.
            </p>
          </article>
          <article className="rounded-2xl border border-brand-line bg-brand-ink p-6 text-white shadow-soft sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Vision</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight">Become a trusted execution partner for teams with serious operational needs.</h2>
            <p className="mt-4 text-base leading-7 text-white/72">
              The vision is steady and realistic: build a reputation for clear thinking, reliable work, and solutions that remain useful after delivery.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Core values"
          title="Values that keep the work grounded."
          description="These principles shape how the company should communicate, plan, and deliver as the website and business mature."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={value.label}>
              <span className="block size-2 rounded-full bg-brand-accent shadow-[0_0_16px_rgb(198_145_66_/_0.55)]" />
              <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{value.label}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="How we work"
            title="Simple process, clear decisions, careful handoff."
            description="The working model is intentionally direct, so clients can understand what is happening and why."
            invert
          />
          <ol className="grid gap-4">
            {workSteps.map((step, index) => (
              <li className="rounded-xl border border-white/12 bg-white/7 p-5 backdrop-blur" key={step}>
                <div className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent text-sm font-bold text-brand-ink">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/72">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function WhyChooseUs() {
  const aboutTrustSignals = trustSignals.filter((signal) => signal.plannedUse.some((use) => use === "About")).slice(0, 3);

  return (
    <section className="bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionIntro
              eyebrow="Why choose us"
              title="A credible fit for teams that value clarity and practical follow-through."
              description="The strongest reason to choose the company should be the quality of the thinking, planning, execution, and communication around each engagement."
            />
            <ul className="mt-8 grid gap-3 text-sm leading-6 text-brand-muted">
              {reasons.map((reason) => (
                <li className="flex gap-3" key={reason}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4">
            {aboutTrustSignals.map((signal) => (
              <article className="rounded-xl border border-brand-line bg-brand-canvas p-5 transition-colors hover:bg-white" key={signal.slug}>
                <h3 className="font-semibold text-brand-ink">{signal.label}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{signal.evidencePlaceholder}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AboutFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Next step</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Talk through what you are trying to build, improve, or clarify.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Start with a project request or ask for a quote. The first conversation should help clarify the need before committing to a path.
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

export const aboutMetadata: Metadata = {
  title: "About",
  description: `Learn about ${brandConfig.name}, a practical technology and consulting company focused on planning, execution, infrastructure, creative, and research support.`
};

export function AboutPageSections() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <HowWeWork />
      <WhyChooseUs />
      <AboutFinalCta />
    </>
  );
}
