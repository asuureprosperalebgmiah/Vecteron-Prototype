import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";
import type { ContactMethod } from "@/types/content";

export const contactMethods = [
  {
    id: "contact-form",
    label: "Contact Form",
    href: "/contact",
    purpose: "General inquiries, consultation requests, and service questions.",
    responseExpectation: "Future response guidance should be added after operations process is confirmed.",
    contentStatus: "planned"
  },
  {
    id: "project-request-form",
    label: "Project Request Form",
    href: ctas.primary.href,
    purpose: "Project submissions with budget estimate, file upload, email notification, and WhatsApp follow-up support.",
    responseExpectation: "Future workflow should confirm review process and expected next step.",
    contentStatus: "planned"
  },
  {
    id: "whatsapp",
    label: ctas.whatsapp.label,
    href: ctas.whatsapp.href,
    purpose: "Quick contact for visitors who prefer WhatsApp.",
    responseExpectation: "Placeholder until WhatsApp number and operating hours are confirmed.",
    contentStatus: "placeholder"
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${brandConfig.contact.email}`,
    purpose: "Direct email inquiries and document-based communication.",
    responseExpectation: "Placeholder until official response times are confirmed.",
    contentStatus: "placeholder"
  },
  {
    id: "social-links",
    label: "Social Media Links",
    href: "/contact",
    purpose: "Route visitors to official social channels once confirmed.",
    responseExpectation: "Placeholder until social profiles are confirmed.",
    contentStatus: "placeholder"
  }
] as const satisfies readonly ContactMethod[];
