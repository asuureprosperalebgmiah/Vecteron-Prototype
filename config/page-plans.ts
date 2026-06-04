import { ctas } from "@/config/ctas";
import type { SectionPlan } from "@/types/content";

export const homepageSectionPlan = [
  {
    id: "hero",
    label: "Hero",
    purpose: "Introduce the company placeholder, core service scope, and primary conversion paths.",
    contentStatus: "planned",
    primaryCta: ctas.primary,
    secondaryCta: ctas.secondary,
    trustSignals: ["Methodology", "Technology Stack"],
    accessibilityNotes: ["Use one h1", "Keep CTA labels descriptive", "Avoid motion that delays access to actions"],
    seoIntent: "professional technology services company"
  },
  {
    id: "service-overview",
    label: "Service Overview",
    purpose: "Summarize the four service categories from the requirements document.",
    contentStatus: "planned",
    secondaryCta: { label: "View Services", href: "/services" },
    trustSignals: ["Technology Stack", "Methodology"],
    accessibilityNotes: ["Use semantic section headings", "Ensure cards remain keyboard and screen-reader friendly"],
    seoIntent: "software infrastructure creative research consulting services"
  },
  {
    id: "industries-overview",
    label: "Industries Overview",
    purpose: "Show the audiences the company can support without overclaiming experience.",
    contentStatus: "planned",
    secondaryCta: { label: "View Industries", href: "/industries" },
    trustSignals: ["Case Studies", "Testimonials"],
    accessibilityNotes: ["Keep industry links descriptive"],
    seoIntent: "technology services for education SMEs startups government NGOs financial services research"
  },
  {
    id: "trust-credibility",
    label: "Trust & Credibility",
    purpose: "Reserve a consistent area for certifications, technology stack, methodology, case studies, partnerships, and testimonials.",
    contentStatus: "placeholder",
    secondaryCta: { label: "View Case Studies", href: "/portfolio" },
    trustSignals: ["Certifications", "Technology Stack", "Methodology", "Case Studies", "Partnerships", "Testimonials"],
    accessibilityNotes: ["Do not rely on logo images alone", "Provide text alternatives for credibility assets"],
    seoIntent: "credible professional technology consulting company"
  },
  {
    id: "project-request",
    label: "Project Request Portal Preview",
    purpose: "Route qualified visitors toward project submission, budget estimate, file upload, email notification, and WhatsApp follow-up flow.",
    contentStatus: "planned",
    primaryCta: ctas.primary,
    secondaryCta: ctas.whatsapp,
    trustSignals: ["Methodology"],
    accessibilityNotes: ["Future form fields must use visible labels and clear validation messages"],
    seoIntent: "request a technology project quote"
  },
  {
    id: "careers-preview",
    label: "Careers Preview",
    purpose: "Expose recruitment and internship pathways without building the full careers page yet.",
    contentStatus: "planned",
    primaryCta: ctas.careers,
    trustSignals: ["Methodology", "Partnerships"],
    accessibilityNotes: ["Use plain language for application actions"],
    seoIntent: "technology careers internships applications"
  },
  {
    id: "contact-cta",
    label: "Contact CTA",
    purpose: "Provide a final low-friction path to contact form, WhatsApp, email, and social links.",
    contentStatus: "planned",
    primaryCta: ctas.secondary,
    secondaryCta: ctas.whatsapp,
    trustSignals: ["Testimonials"],
    accessibilityNotes: ["Ensure contact options are accessible as links with clear names"],
    seoIntent: "contact technology services company"
  }
] as const satisfies readonly SectionPlan[];

export const aboutPageSectionPlan = [
  {
    id: "company-background",
    label: "Company Background",
    purpose: "Introduce the neutral company placeholder and explain the organization at a high level.",
    contentStatus: "planned",
    trustSignals: ["Methodology"],
    accessibilityNotes: ["Use one h1 and concise introductory copy"],
    seoIntent: "about professional technology services company"
  },
  {
    id: "mission-vision",
    label: "Vision & Mission",
    purpose: "Structure future mission and vision content without writing final statements yet.",
    contentStatus: "placeholder",
    trustSignals: ["Methodology"],
    accessibilityNotes: ["Avoid vague claims that do not help users understand capability"],
    seoIntent: "technology services mission vision"
  },
  {
    id: "core-values",
    label: "Core Values",
    purpose: "Prepare values architecture tied to reliability, clarity, technical capability, creativity, and professionalism.",
    contentStatus: "placeholder",
    trustSignals: ["Methodology"],
    accessibilityNotes: ["Use scannable value labels with supporting text"],
    seoIntent: "professional technology company values"
  },
  {
    id: "founder-message",
    label: "Founder/CEO Message",
    purpose: "Reserve a section for leadership message requested in the requirements document.",
    contentStatus: "placeholder",
    trustSignals: ["Testimonials", "Partnerships"],
    accessibilityNotes: ["Provide descriptive alt text if a portrait is added later"],
    seoIntent: "technology company founder message"
  },
  {
    id: "why-choose-us",
    label: "Why Choose Us",
    purpose: "Connect credibility signals to specific buyer concerns and engagement confidence.",
    contentStatus: "planned",
    primaryCta: ctas.secondary,
    trustSignals: ["Certifications", "Technology Stack", "Methodology", "Case Studies", "Partnerships", "Testimonials"],
    accessibilityNotes: ["Avoid decorative-only proof points", "Keep claims evidence-led"],
    seoIntent: "why choose technology consulting company"
  }
] as const satisfies readonly SectionPlan[];
