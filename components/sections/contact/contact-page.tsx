import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import { contactMethods, serviceCategories } from "@/config/content-index";

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

function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(18_24_38),rgb(14_43_58)_54%,rgb(18_24_38))]" />
      <div className="hero-vector-field" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-canvas [clip-path:polygon(0_58%,100%_0,100%_100%,0_100%)]" aria-hidden="true" />
      <Container className="relative flex min-h-[32rem] items-center py-20 sm:py-24">
        <div className="animate-reveal max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">{brandConfig.name}</p>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Contact the team about a project, quote, or early requirement.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Use this page to choose the best contact path. Forms and notifications are currently placeholders until backend handling is implemented.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.primary.href}>
              {ctas.primary.label}
            </Button>
            <WhatsAppLink label="Chat on WhatsApp" shape="button" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactMethods() {
  return (
    <section className="bg-brand-canvas pb-20 pt-12 sm:pb-24 sm:pt-14">
      <Container>
        <div className="rounded-2xl border border-brand-line bg-brand-surface/84 p-6 shadow-soft sm:p-8">
          <SectionIntro
            eyebrow="Contact options"
            title="Choose the path that matches the question."
            description="The page is structured for general inquiries, project requests, WhatsApp, email, and future social channels without pretending every workflow is live."
          />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {contactMethods.map((method) => (
            <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={method.id}>
              <span className="block size-2 rounded-full bg-brand-accent shadow-[0_0_16px_rgb(198_145_66_/_0.55)]" />
              <h2 className="mt-5 font-display text-xl font-bold text-brand-ink">{method.label}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{method.purpose}</p>
              <p className="mt-4 border-t border-brand-line pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {method.contentStatus === "planned" ? "Planned workflow" : "Placeholder detail"}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactFormPlaceholder() {
  return (
    <section className="border-y border-brand-line bg-brand-surface py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form className="rounded-2xl border border-brand-line bg-brand-canvas p-5 shadow-soft sm:p-8" aria-label="Contact form placeholder">
            <SectionIntro
              eyebrow="Contact form"
              title="A future form for service inquiries."
              description="This form UI is disabled. Real submission, validation, email notification, and database storage are not implemented yet."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Full name", "Email address", "Company or organization", "Service interest"].map((label) => (
                <label key={label}>
                  <span className="text-sm font-semibold text-brand-ink">{label}</span>
                  <input className="mt-2 w-full rounded-lg border-brand-line bg-brand-surface text-brand-muted" disabled placeholder="Placeholder field" />
                </label>
              ))}
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold text-brand-ink">Message</span>
                <textarea className="mt-2 min-h-32 w-full rounded-lg border-brand-line bg-brand-surface text-brand-muted" disabled placeholder="Placeholder only - messages are not submitted yet." />
              </label>
            </div>
            <Button className="mt-6 opacity-70" disabled type="button">
              Submission Not Active
            </Button>
          </form>

          <aside className="grid gap-5">
            <div className="rounded-2xl border border-brand-line bg-brand-canvas p-5 shadow-soft sm:p-6">
              <h2 className="font-display text-2xl font-bold text-brand-ink">Direct details</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-brand-ink">Email</dt>
                  <dd className="mt-1 text-brand-muted">
                    <Link className="text-brand-primary hover:text-brand-ink" href={`mailto:${brandConfig.contact.email}`}>
                      {brandConfig.contact.email}
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-ink">Phone</dt>
                  <dd className="mt-1 text-brand-muted">{brandConfig.contact.phone || "Phone number placeholder"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-brand-ink">Service area</dt>
                  <dd className="mt-1 text-brand-muted">{brandConfig.contact.serviceArea}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl border border-brand-line bg-brand-ink p-5 text-white shadow-soft sm:p-6">
              <h2 className="font-display text-2xl font-bold">WhatsApp contact</h2>
              <p className="mt-3 text-sm leading-6 text-white/72">Use WhatsApp for short questions once the official channel is confirmed.</p>
              <WhatsAppLink className="mt-5" label="Chat on WhatsApp" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

function InquiryPrompt() {
  return (
    <section className="bg-brand-canvas py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Service inquiry"
            title="A useful inquiry starts with the problem, not the tool."
            description="When contacting the team, it helps to share the type of organization, the current challenge, timing, and what a useful outcome would look like."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {serviceCategories.map((service) => (
              <article className="rounded-xl border border-brand-line bg-brand-surface p-5 shadow-soft" key={service.slug}>
                <h2 className="font-semibold text-brand-ink">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{service.outcomes[0]}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SocialAndAvailability() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgb(18_24_38),rgb(16_58_73)_64%,rgb(18_24_38))]" />
      <Container>
        <div className="relative grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/12 bg-white/7 p-5 backdrop-blur sm:p-6">
            <h2 className="font-display text-2xl font-bold">Social links placeholder</h2>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Official social profiles should be added through centralized brand config once confirmed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {Object.entries(brandConfig.social).map(([name, href]) => (
                <span className="rounded-full border border-white/12 bg-white/7 px-3 py-1 text-xs font-semibold text-white/62" key={name}>
                  {href || `${name} placeholder`}
                </span>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-white/12 bg-white/7 p-5 backdrop-blur sm:p-6">
            <h2 className="font-display text-2xl font-bold">Availability note</h2>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Response expectations are placeholders until the operating process is confirmed. The contact experience should set realistic expectations rather than overpromising speed.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}

function ContactFinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(198_145_66_/_0.12),transparent_28%),linear-gradient(135deg,rgb(18_24_38),rgb(14_37_52))]" />
      <Container>
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">Next step</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Share the requirement and clarify the best next move.</h2>
          <p className="mt-4 text-base leading-7 text-white/72">
            Use the project request path for structured requirements or contact the team for an early conversation.
          </p>
        </div>
        <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="bg-brand-accent text-brand-ink hover:bg-brand-accent/90" href={ctas.primary.href}>
            {ctas.primary.label}
          </Button>
          <WhatsAppLink label="Chat on WhatsApp" shape="button" />
        </div>
      </Container>
    </section>
  );
}

export const contactMetadata: Metadata = {
  title: "Contact",
  description: `Contact ${brandConfig.name} about technology, infrastructure, creative, branding, research, or consulting needs.`
};

export function ContactPageSections() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactFormPlaceholder />
      <InquiryPrompt />
      <SocialAndAvailability />
      <ContactFinalCta />
    </>
  );
}
