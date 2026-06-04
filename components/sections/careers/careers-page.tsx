import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { careerCategories } from "@/config/content-index";

const whyJoin = [
  "Work around practical technology, infrastructure, creative, and research problems.",
  "Contribute to an early-stage company where clarity and careful execution matter.",
  "Build habits around useful documentation, thoughtful planning, and client-ready communication."
] as const;

const placeholderRoles = [
  {
    title: "Software & Technology Associate",
    focus: "Future role placeholder",
    description: "Example role for software planning, implementation support, automation, and technical documentation."
  },
  {
    title: "Creative & Branding Associate",
    focus: "Future role placeholder",
    description: "Example role for brand systems, digital materials, presentation design, and communication support."
  },
  {
    title: "Research & Documentation Associate",
    focus: "Future role placeholder",
    description: "Example role for research support, documentation, analysis assistance, and structured writing."
  }
] as const;

const applicationSteps = [
  "Review future role or internship requirements when they are published.",
  "Prepare a concise CV and relevant portfolio, writing, or project samples.",
  "Submit the application form once real submission functionality is enabled.",
  "Wait for a structured review and follow-up process after hiring workflows are confirmed."
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

function CareersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Careers and internships will be added carefully as the company grows.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            This page prepares a clear hiring and internship structure without implying active recruitment before roles are confirmed.
          </p>
        </div>
      </Container>
    </section>
  );
}

function WhyJoinUs() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
          <SectionIntro
            eyebrow="Why join us"
            title="A future team culture built around useful work and clear communication."
            description="The careers area is intentionally modest for now. It explains the kind of working environment the company wants to build as hiring becomes real."
          />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyJoin.map((item) => (
            <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={item}>
              <span className="block size-2 rounded-full bg-brand-accent shadow-[0_0_16px_rgb(198_145_66_/_0.55)]" />
              <p className="mt-5 text-sm leading-6 text-brand-muted">{item}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PositionsAndInternships() {
  const availablePositions = careerCategories.find((category) => category.slug === "available-positions");
  const internships = careerCategories.find((category) => category.slug === "internships");

  return (
    <section className="border-y border-brand-line bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Future opportunities"
            title="Placeholder roles and internship pathways."
            description="These entries are examples only. Real openings should be added only when the company is actively ready to receive applications."
          />
          <div className="grid gap-5">
            <div className="rounded-2xl border border-brand-line bg-brand-canvas p-5 sm:p-6">
              <h2 className="font-display text-2xl font-bold text-brand-ink">{availablePositions?.label ?? "Available Positions"}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{availablePositions?.description}</p>
              <div className="mt-5 grid gap-3">
                {placeholderRoles.map((role) => (
                  <article className="rounded-xl border border-brand-line bg-brand-surface p-4" key={role.title}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-brand-line bg-brand-canvas px-3 py-1 text-xs font-semibold text-brand-muted">{role.focus}</span>
                      <span className="rounded-full border border-brand-line bg-brand-canvas px-3 py-1 text-xs font-semibold text-brand-primary">Not actively hiring</span>
                    </div>
                    <h3 className="mt-4 font-semibold text-brand-ink">{role.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-muted">{role.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-line bg-brand-ink p-5 text-white shadow-soft sm:p-6">
              <h2 className="font-display text-2xl font-bold">{internships?.label ?? "Internship Opportunities"}</h2>
              <p className="mt-3 text-sm leading-6 text-white/72">{internships?.description}</p>
              <p className="mt-4 text-sm leading-6 text-white/62">
                Internship details, eligibility, timelines, and review process should be added when the company is ready to run a real internship cycle.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ApplicationProcess() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Application process"
            title="A future workflow for structured, respectful application review."
            description="This is a placeholder process. It should become active only after the company confirms roles, timelines, and review responsibilities."
            invert
          />
          <ol className="grid gap-4">
            {applicationSteps.map((step, index) => (
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

function ApplicationPlaceholder() {
  const formCategory = careerCategories.find((category) => category.slug === "application-form");
  const cvCategory = careerCategories.find((category) => category.slug === "cv-upload");
  const portfolioCategory = careerCategories.find((category) => category.slug === "portfolio-upload");

  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Application form placeholder"
          title="A visible form structure, not a live submission flow."
          description="The fields below show the intended application experience. They are disabled until backend validation, storage, and review workflows are implemented."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <form className="rounded-2xl border border-brand-line bg-brand-surface p-5 shadow-soft sm:p-8" aria-label="Application form placeholder">
            <div className="mb-6 rounded-xl border border-brand-line bg-brand-canvas p-4">
              <h2 className="font-display text-xl font-bold text-brand-ink">{formCategory?.label ?? "Application Form"}</h2>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{formCategory?.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Full name", "Email address", "Area of interest", "Short note"].map((label) => (
                <label className={label === "Short note" ? "sm:col-span-2" : undefined} key={label}>
                  <span className="text-sm font-semibold text-brand-ink">{label}</span>
                  {label === "Short note" ? (
                    <textarea className="mt-2 min-h-28 w-full rounded-lg border-brand-line bg-brand-canvas text-brand-muted" disabled placeholder="Placeholder only - submissions are not active yet." />
                  ) : (
                    <input className="mt-2 w-full rounded-lg border-brand-line bg-brand-canvas text-brand-muted" disabled placeholder="Placeholder field" />
                  )}
                </label>
              ))}
            </div>
            <Button className="mt-6 opacity-70" disabled type="button">
              Submission Not Active
            </Button>
          </form>

          <div className="grid gap-5">
            <UploadPlaceholder title={cvCategory?.label ?? "CV Upload"} description={cvCategory?.description ?? "Future secure upload field for candidate CV documents."} />
            <UploadPlaceholder title={portfolioCategory?.label ?? "Portfolio Upload"} description={portfolioCategory?.description ?? "Future secure upload field for candidate portfolio files or links."} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function UploadPlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-brand-line bg-brand-surface p-5 shadow-soft sm:p-6">
      <div className="rounded-xl border border-dashed border-brand-line bg-brand-canvas p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Upload placeholder</p>
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-ink">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-brand-muted">{description}</p>
        <p className="mt-4 text-sm font-semibold text-brand-muted">File handling is not implemented yet.</p>
      </div>
    </article>
  );
}

function CareersFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Stay connected</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Interested in future roles or internships?</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Hiring is not active unless a real role is published. You can still use the contact path for future interest or general questions.
          </p>
        </div>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.secondary.href}>
            Contact the Team
          </Button>
          <WhatsAppLink label="Chat on WhatsApp" shape="button" />
        </div>
      </Container>
    </section>
  );
}

export const careersMetadata: Metadata = {
  title: "Careers",
  description: `Explore future career and internship placeholders for ${brandConfig.name}.`
};

export function CareersPageSections() {
  return (
    <>
      <CareersHero />
      <WhyJoinUs />
      <PositionsAndInternships />
      <ApplicationProcess />
      <ApplicationPlaceholder />
      <CareersFinalCta />
    </>
  );
}
