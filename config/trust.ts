import type { TrustSignal } from "@/types/content";

export const trustSignals = [
  {
    slug: "certifications",
    label: "Certifications",
    description: "Placeholder for professional certifications, credentials, and compliance markers.",
    evidencePlaceholder: "Add verified certifications, badges, or compliance notes when available.",
    plannedUse: ["Home", "About", "Services", "Project Request Portal"],
    contentStatus: "placeholder"
  },
  {
    slug: "technology-stack",
    label: "Technology Stack",
    description: "Placeholder for platforms, frameworks, infrastructure, and delivery tools.",
    evidencePlaceholder: "Add approved tools, frameworks, cloud platforms, and technical capabilities.",
    plannedUse: ["Home", "Services", "Portfolio"],
    contentStatus: "placeholder"
  },
  {
    slug: "methodology",
    label: "Methodology",
    description: "Placeholder for discovery, planning, delivery, QA, and support approach.",
    evidencePlaceholder: "Add delivery process, QA approach, discovery framework, and support model.",
    plannedUse: ["Home", "About", "Services", "Project Request Portal"],
    contentStatus: "placeholder"
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    description: "Placeholder for project outcomes, demos, and success stories.",
    evidencePlaceholder: "Add project examples using challenge, solution, technologies, and results.",
    plannedUse: ["Home", "Portfolio", "Services", "Industries"],
    contentStatus: "placeholder"
  },
  {
    slug: "partnerships",
    label: "Partnerships",
    description: "Placeholder for vendor, ecosystem, academic, and implementation partners.",
    evidencePlaceholder: "Add verified vendor, ecosystem, academic, or implementation relationships.",
    plannedUse: ["About", "Services", "Industries"],
    contentStatus: "placeholder"
  },
  {
    slug: "testimonials",
    label: "Testimonials",
    description: "Placeholder for client feedback and proof points.",
    evidencePlaceholder: "Add approved client quotes, attribution rules, and review snippets.",
    plannedUse: ["Home", "Portfolio", "Contact"],
    contentStatus: "placeholder"
  }
] as const satisfies readonly TrustSignal[];
