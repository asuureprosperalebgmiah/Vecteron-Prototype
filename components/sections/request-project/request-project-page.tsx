import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { contactMethods, serviceCategories } from "@/config/content-index";

const requestSteps = [
  "Share the project type, current situation, and the outcome you want.",
  "Add budget, timeline, and contact details so the request has enough context.",
  "Attach supporting files later when secure upload handling is implemented.",
  "Future workflow can send email notifications and support WhatsApp follow-up."
] as const;

const projectTypes = [
  "Software or technology project",
  "Infrastructure or procurement support",
  "Creative or branding work",
  "Research or academic consulting",
  "Mixed or unsure"
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

function RequestHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Request a project with enough context to start a useful conversation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            This portal is currently a frontend placeholder. It shows the intended request flow before form submission, file upload, Supabase, and email notifications are connected.
          </p>
        </div>
      </Container>
    </section>
  );
}

function RequestExplanation() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
            <SectionIntro
              eyebrow="How requests work"
              title="Start with the need, then clarify the practical path."
              description="A good request does not need to be perfect. It should explain the situation, desired outcome, rough budget, timing, and any useful context."
            />
          </div>
          <ol className="grid gap-4">
            {requestSteps.map((step, index) => (
              <li className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={step}>
                <div className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-brand-muted">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

function RequestFormPlaceholder() {
  return (
    <section className="border-y border-brand-line bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form className="rounded-2xl border border-brand-line bg-brand-canvas p-5 shadow-soft sm:p-8" aria-label="Project request form placeholder">
            <SectionIntro
              eyebrow="Project submission form"
              title="Frontend-only request form placeholder."
              description="This form is disabled. Submission, validation, storage, email notification, and upload handling are not implemented yet."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-brand-ink">Project category or type</span>
                <select className="mt-2 w-full rounded-lg border-brand-line bg-brand-surface text-brand-muted" disabled>
                  {projectTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <Field label="Estimated budget" placeholder="Placeholder budget range" />
              <Field label="Preferred start date or timeline" placeholder="Placeholder timeline" />
              <Field label="Full name" placeholder="Placeholder name" />
              <Field label="Email address" placeholder="Placeholder email" />
              <Field label="Organization" placeholder="Placeholder organization" />
              <Field label="Preferred contact method" placeholder="Email, WhatsApp, or phone" />
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-brand-ink">Project details</span>
                <textarea className="mt-2 min-h-36 w-full rounded-lg border-brand-line bg-brand-surface text-brand-muted" disabled placeholder="Placeholder only - project details are not submitted yet." />
              </label>
            </div>
            <Button className="mt-6 opacity-70" disabled type="button">
              Submission Not Active
            </Button>
          </form>

          <aside className="grid gap-5">
            <UploadPlaceholder />
            <FollowUpCard />
            <EmailNotificationNote />
          </aside>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label>
      <span className="text-sm font-semibold text-brand-ink">{label}</span>
      <input className="mt-2 w-full rounded-lg border-brand-line bg-brand-surface text-brand-muted" disabled placeholder={placeholder} />
    </label>
  );
}

function UploadPlaceholder() {
  return (
    <article className="rounded-2xl border border-brand-line bg-brand-canvas p-5 shadow-soft sm:p-6">
      <div className="rounded-xl border border-dashed border-brand-line bg-brand-surface p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">File upload placeholder</p>
        <h2 className="mt-4 font-display text-2xl font-bold text-brand-ink">Supporting files</h2>
        <p className="mt-3 text-sm leading-6 text-brand-muted">
          Future secure upload area for briefs, PDFs, screenshots, proposals, brand assets, or research documents.
        </p>
        <p className="mt-4 text-sm font-semibold text-brand-muted">File uploads are not implemented yet.</p>
      </div>
    </article>
  );
}

function FollowUpCard() {
  const whatsappMethod = contactMethods.find((method) => method.id === "whatsapp");

  return (
    <article className="rounded-2xl border border-brand-line bg-brand-ink p-5 text-white shadow-soft sm:p-6">
      <h2 className="font-display text-2xl font-bold">WhatsApp follow-up</h2>
      <p className="mt-3 text-sm leading-6 text-white/72">
        {whatsappMethod?.purpose} This option can support quick clarification after a request workflow is implemented.
      </p>
      <WhatsAppLink className="mt-5" label="Chat on WhatsApp" />
    </article>
  );
}

function EmailNotificationNote() {
  return (
    <article className="rounded-2xl border border-brand-line bg-brand-canvas p-5 shadow-soft sm:p-6">
      <h2 className="font-display text-2xl font-bold text-brand-ink">Email notification note</h2>
      <p className="mt-3 text-sm leading-6 text-brand-muted">
        Future integration can notify the team by email when a request is submitted. No notification is sent from this placeholder UI.
      </p>
    </article>
  );
}

function RequestCategories() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <SectionIntro
          eyebrow="Request categories"
          title="Requests can start in one area or combine several."
          description="The form structure supports software, infrastructure, creative, and research needs without forcing every project into a narrow category."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {serviceCategories.map((service) => (
            <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={service.slug}>
              <h2 className="font-display text-xl font-bold text-brand-ink">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{service.outcomes[0]}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhatHappensNext() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="What happens next"
            title="Future request handling should be clear, careful, and realistic."
            description="Once backend functionality is added, the flow should validate the request, store only necessary data, notify the team, and make follow-up easier."
            invert
          />
          <div className="grid gap-4 md:grid-cols-3">
            {["Review the request", "Clarify requirements", "Suggest a practical next step"].map((item) => (
              <article className="rounded-xl border border-white/12 bg-white/7 p-5 backdrop-blur" key={item}>
                <h2 className="font-semibold text-white">{item}</h2>
                <p className="mt-3 text-sm leading-6 text-white/68">Placeholder process step for the future request workflow.</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function RequestFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Ready when functionality is connected</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">The portal is structured for future submission handling.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Until backend features are added, use the contact page or WhatsApp placeholder for general questions.
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

export const requestProjectMetadata: Metadata = {
  title: "Request a Project",
  description: `Use the project request placeholder for future technology, infrastructure, creative, branding, research, or consulting requests with ${brandConfig.name}.`
};

export function RequestProjectPageSections() {
  return (
    <>
      <RequestHero />
      <RequestExplanation />
      <RequestFormPlaceholder />
      <RequestCategories />
      <WhatHappensNext />
      <RequestFinalCta />
    </>
  );
}
