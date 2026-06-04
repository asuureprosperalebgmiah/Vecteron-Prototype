import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { portfolioCategories, trustSignals } from "@/config/content-index";

const placeholderProjects: Record<
  string,
  readonly {
    title: string;
    type: string;
    summary: string;
    outcome: string;
  }[]
> = {
  "completed-projects": [
    {
      title: "Operations System Placeholder",
      type: "Software / Process",
      summary: "Example entry for a future internal workflow, business system, or operational platform.",
      outcome: "Outcome placeholder: document the real operational improvement after a verified project is added."
    },
    {
      title: "Infrastructure Planning Placeholder",
      type: "Infrastructure / Procurement",
      summary: "Example entry for a future procurement, deployment, or infrastructure advisory engagement.",
      outcome: "Outcome placeholder: replace with approved implementation notes and lessons learned."
    }
  ],
  "demo-systems": [
    {
      title: "Prototype Dashboard Placeholder",
      type: "Demo System",
      summary: "Example entry for a future proof-of-concept, workflow demo, or product prototype.",
      outcome: "Outcome placeholder: describe what the demo helped clarify once real work exists."
    },
    {
      title: "Service Portal Placeholder",
      type: "Demo System",
      summary: "Example entry for a future portal, intake form, or client-facing system demonstration.",
      outcome: "Outcome placeholder: add real validation notes only after the demo is approved."
    }
  ],
  "branding-projects": [
    {
      title: "Brand Identity Placeholder",
      type: "Creative / Branding",
      summary: "Example entry for a future identity system, visual language, or presentation toolkit.",
      outcome: "Outcome placeholder: replace with approved brand clarity or communication improvements."
    },
    {
      title: "Digital Materials Placeholder",
      type: "Creative / Communication",
      summary: "Example entry for future marketing, pitch, or stakeholder communication materials.",
      outcome: "Outcome placeholder: add real material scope and approved feedback later."
    }
  ],
  "case-studies": [
    {
      title: "Case Study Structure Placeholder",
      type: "Challenge / Solution / Result",
      summary: "Example entry showing where future case studies can explain the problem, approach, technologies, and outcome.",
      outcome: "Outcome placeholder: real results should be verified, specific, and approved before publishing."
    }
  ],
  "success-stories": [
    {
      title: "Client Outcome Placeholder",
      type: "Success Story",
      summary: "Example entry for a future approved client story, testimonial, or delivery note.",
      outcome: "Outcome placeholder: avoid publishing measurable claims until real evidence is available."
    }
  ]
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

function PortfolioHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Portfolio structure for future project evidence and case studies.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            This page prepares a credible way to present completed work, demos, branding projects, case studies, and success stories once real projects are approved for publication.
          </p>
        </div>
      </Container>
    </section>
  );
}

function PortfolioOverview() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
          <SectionIntro
            eyebrow="Portfolio"
            title="A placeholder portfolio that is clear about what is real and what is planned."
            description="The current entries are examples only. Real client names, project outcomes, and measurable results should be added only after approval."
          />
        </div>
        <div className="mt-8 grid gap-6">
          {portfolioCategories.map((category) => (
            <PortfolioCategorySection category={category} key={category.slug} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortfolioCategorySection({ category }: { category: (typeof portfolioCategories)[number] }) {
  const projects = placeholderProjects[category.slug] ?? [];

  return (
    <section className="rounded-2xl border border-brand-line bg-brand-surface p-5 shadow-soft sm:p-8" aria-labelledby={`${category.slug}-heading`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Placeholder category</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-ink" id={`${category.slug}-heading`}>
            {category.label}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-brand-muted">{category.description}</p>
        </div>
        <span className="w-fit rounded-full border border-brand-line bg-brand-canvas px-3 py-1 text-xs font-semibold text-brand-muted">
          Example content only
        </span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <PlaceholderProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

function PlaceholderProjectCard({ project }: { project: (typeof placeholderProjects)[string][number] }) {
  return (
    <article className="rounded-xl border border-brand-line bg-brand-canvas p-5 transition-colors hover:bg-white">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-primary">{project.type}</span>
        <span className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-muted">Placeholder</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-muted">{project.summary}</p>
      <p className="mt-4 border-t border-brand-line pt-4 text-sm leading-6 text-brand-muted">{project.outcome}</p>
    </article>
  );
}

function CaseStudyPreview() {
  const caseStudySignal = trustSignals.find((signal) => signal.slug === "case-studies");

  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Case study preview"
            title="Future case studies should explain the work, not decorate the page."
            description={caseStudySignal?.evidencePlaceholder ?? "Add approved case study evidence when real projects are ready."}
            invert
          />
          <div className="grid gap-4 md:grid-cols-2">
            {["Challenge", "Approach", "Tools or methods", "Verified outcome"].map((item) => (
              <article className="rounded-xl border border-white/12 bg-white/7 p-5 backdrop-blur" key={item}>
                <h3 className="font-semibold text-white">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  Placeholder area for approved project details. Do not add real-looking claims until evidence is available.
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PracticalOutcomes() {
  return (
    <section className="bg-brand-surface py-20 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Results structure"
          title="Outcomes should be practical, specific, and verified."
          description="When real portfolio entries are added, results should describe what changed, how it was delivered, and what can be responsibly shared."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Operational clarity", "Usable deliverables", "Evidence for decisions"].map((outcome) => (
            <article className="rounded-xl border border-brand-line bg-brand-canvas p-5" key={outcome}>
              <span className="block size-2 rounded-full bg-brand-accent shadow-[0_0_16px_rgb(198_145_66_/_0.55)]" />
              <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{outcome}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">
                Placeholder result category. Replace with real, approved project evidence when available.
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortfolioFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Build the next entry</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Have a project that needs structure, delivery, or clearer presentation?</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Start with a project request or a conversation. Real portfolio evidence should come from work that is carefully scoped and responsibly delivered.
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

export const portfolioMetadata: Metadata = {
  title: "Portfolio",
  description: `Review placeholder portfolio categories and future case study structure for ${brandConfig.name}.`
};

export function PortfolioPageSections() {
  return (
    <>
      <PortfolioHero />
      <PortfolioOverview />
      <CaseStudyPreview />
      <PracticalOutcomes />
      <PortfolioFinalCta />
    </>
  );
}
