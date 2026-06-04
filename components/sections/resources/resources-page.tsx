import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { resourceCategories } from "@/config/content-index";

const placeholderResources: Record<
  string,
  readonly {
    title: string;
    format: string;
    summary: string;
  }[]
> = {
  "technology-articles": [
    {
      title: "Choosing the Right Business System Placeholder",
      format: "Article placeholder",
      summary: "Example topic for a future article about selecting practical software tools without overcomplicating operations."
    },
    {
      title: "Infrastructure Planning Checklist Placeholder",
      format: "Guide placeholder",
      summary: "Example topic for a future resource on requirements, vendors, deployment, and maintenance planning."
    }
  ],
  "business-startup-guides": [
    {
      title: "Early Product Scope Placeholder",
      format: "Startup guide placeholder",
      summary: "Example topic for a future guide about moving from idea to a realistic first build."
    },
    {
      title: "Brand Foundations Placeholder",
      format: "Guide placeholder",
      summary: "Example topic for a future guide about clear positioning, presentation, and customer-facing materials."
    }
  ],
  "research-resources": [
    {
      title: "Research Documentation Structure Placeholder",
      format: "Resource placeholder",
      summary: "Example topic for a future resource on organizing research outputs, notes, evidence, and review materials."
    },
    {
      title: "Evidence-Led Decisions Placeholder",
      format: "Brief placeholder",
      summary: "Example topic for a future brief on turning research and data into clearer decisions."
    }
  ],
  "industry-updates": [
    {
      title: "Technology Operations Update Placeholder",
      format: "Update placeholder",
      summary: "Example topic for a future update about practical changes in tools, systems, or service delivery."
    },
    {
      title: "Procurement and Delivery Notes Placeholder",
      format: "Update placeholder",
      summary: "Example topic for a future update on infrastructure, procurement, vendor coordination, or delivery planning."
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

function ResourcesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Resources for practical technology, business, research, and industry thinking.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            This page prepares the structure for useful articles and guides. Current entries are placeholders until real content is written and approved.
          </p>
        </div>
      </Container>
    </section>
  );
}

function CategoryOverview() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
          <SectionIntro
            eyebrow="Resources"
            title="A future knowledge base with clear categories and honest placeholders."
            description="Resources should educate, clarify, and support better decisions. This structure keeps the page ready without pretending articles have already been published."
          />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resourceCategories.map((category) => (
            <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={category.slug}>
              <span className="block size-2 rounded-full bg-brand-accent shadow-[0_0_16px_rgb(198_145_66_/_0.55)]" />
              <h2 className="mt-5 font-display text-xl font-bold text-brand-ink">{category.label}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{category.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedResource() {
  return (
    <section className="border-y border-brand-line bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 rounded-2xl border border-brand-line bg-brand-canvas p-6 shadow-soft sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionIntro
            eyebrow="Featured placeholder"
            title="A future featured resource can anchor the page."
            description="Use this area for a practical guide, field note, checklist, or article once real content exists."
          />
          <article className="rounded-xl border border-brand-line bg-brand-surface p-5">
            <span className="rounded-full border border-brand-line bg-brand-canvas px-3 py-1 text-xs font-semibold text-brand-muted">Placeholder only</span>
            <h3 className="mt-5 font-display text-2xl font-bold text-brand-ink">Featured Guide Placeholder</h3>
            <p className="mt-3 text-sm leading-6 text-brand-muted">
              This is a non-published example area. Replace it with a real article summary, author/date metadata, and approved resource link when content is ready.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

function ResourceSections() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <div className="grid gap-6">
          {resourceCategories.map((category) => (
            <section className="rounded-2xl border border-brand-line bg-brand-surface p-5 shadow-soft sm:p-8" key={category.slug} aria-labelledby={`${category.slug}-heading`}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Placeholder category</p>
                  <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-ink" id={`${category.slug}-heading`}>
                    {category.label}
                  </h2>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-brand-muted">{category.description}</p>
                </div>
                <span className="w-fit rounded-full border border-brand-line bg-brand-canvas px-3 py-1 text-xs font-semibold text-brand-muted">
                  Not published yet
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {(placeholderResources[category.slug] ?? []).map((resource) => (
                  <ResourceCard resource={resource} key={resource.title} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ResourceCard({ resource }: { resource: (typeof placeholderResources)[string][number] }) {
  return (
    <article className="rounded-xl border border-brand-line bg-brand-canvas p-5 transition-colors hover:bg-white">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-primary">{resource.format}</span>
        <span className="rounded-full border border-brand-line bg-brand-surface px-3 py-1 text-xs font-semibold text-brand-muted">Draft slot</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-brand-ink">{resource.title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-muted">{resource.summary}</p>
      <p className="mt-4 border-t border-brand-line pt-4 text-sm leading-6 text-brand-muted">
        Placeholder only. Add real publication details when content is approved.
      </p>
    </article>
  );
}

function NewsletterPlaceholder() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionIntro
            eyebrow="Newsletter placeholder"
            title="A future signup path for useful updates."
            description="Newsletter submission is not implemented yet. This section shows the intended experience before backend validation and storage are added."
            invert
          />
          <form className="rounded-2xl border border-white/12 bg-white/7 p-5 backdrop-blur sm:p-6" aria-label="Newsletter signup placeholder">
            <label>
              <span className="text-sm font-semibold text-white">Email address</span>
              <input className="mt-2 w-full rounded-lg border-white/12 bg-white/8 text-white placeholder:text-white/40" disabled placeholder="Placeholder field - signup is not active" />
            </label>
            <Button className="mt-5 opacity-70" disabled type="button">
              Signup Not Active
            </Button>
            <p className="mt-4 text-sm leading-6 text-white/58">No email will be collected until newsletter functionality is implemented.</p>
          </form>
        </div>
      </Container>
    </section>
  );
}

function ResourcesFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Need a practical answer?</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Use the resources as a starting point, then talk through the actual problem.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            When a question needs more context than an article can provide, start a project request or contact the team.
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

export const resourcesMetadata: Metadata = {
  title: "Blog & Resources",
  description: `Explore placeholder blog and resource categories for practical technology, business, research, and industry content from ${brandConfig.name}.`
};

export function ResourcesPageSections() {
  return (
    <>
      <ResourcesHero />
      <CategoryOverview />
      <FeaturedResource />
      <ResourceSections />
      <NewsletterPlaceholder />
      <ResourcesFinalCta />
    </>
  );
}
