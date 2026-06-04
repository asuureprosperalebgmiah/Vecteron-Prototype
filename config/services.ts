import { ctas } from "@/config/ctas";
import type { ServiceDefinition } from "@/types/content";

export const serviceCategories = [
  {
    title: "Software & Technology Services",
    slug: "software-technology",
    href: "/services/software-technology",
    audience: ["SMEs", "Startups", "Education", "Financial Services", "Research Institutions"],
    clientProblems: ["Manual workflows", "Disconnected systems", "Limited digital product capacity"],
    outcomes: ["Operational efficiency", "Reliable digital systems", "Improved customer and staff experiences"],
    capabilityAreas: ["Web applications", "Business systems", "Automation", "Technical consulting"],
    relatedIndustries: ["education", "smes", "startups", "financial-services", "research-institutions"],
    primaryCta: ctas.primary,
    seoTopic: "software and technology services",
    contentStatus: "placeholder"
  },
  {
    title: "Infrastructure & Procurement Services",
    slug: "infrastructure-procurement",
    href: "/services/infrastructure-procurement",
    audience: ["Government", "NGOs", "Education", "SMEs", "Financial Services"],
    clientProblems: ["Technology procurement uncertainty", "Infrastructure planning gaps", "Vendor selection risk"],
    outcomes: ["Better procurement decisions", "Reliable infrastructure planning", "Reduced implementation risk"],
    capabilityAreas: ["IT procurement", "Infrastructure advisory", "Vendor coordination", "Deployment support"],
    relatedIndustries: ["government", "ngos", "education", "smes", "financial-services"],
    primaryCta: ctas.secondary,
    seoTopic: "infrastructure and procurement services",
    contentStatus: "placeholder"
  },
  {
    title: "Creative & Branding Services",
    slug: "creative-branding",
    href: "/services/creative-branding",
    audience: ["Startups", "SMEs", "NGOs", "Education", "Research Institutions"],
    clientProblems: ["Unclear brand identity", "Inconsistent communication", "Weak digital presentation"],
    outcomes: ["Stronger brand clarity", "Professional visual systems", "More credible client-facing materials"],
    capabilityAreas: ["Brand identity", "Digital design", "Marketing assets", "Presentation systems"],
    relatedIndustries: ["startups", "smes", "ngos", "education", "research-institutions"],
    primaryCta: ctas.primary,
    seoTopic: "creative and branding services",
    contentStatus: "placeholder"
  },
  {
    title: "Research & Academic Consulting Services",
    slug: "research-academic-consulting",
    href: "/services/research-academic-consulting",
    audience: ["Research Institutions", "Education", "NGOs", "Government", "Startups"],
    clientProblems: ["Research planning complexity", "Academic documentation needs", "Data and evidence gaps"],
    outcomes: ["Clearer research outputs", "Better structured documentation", "Stronger evidence-led decisions"],
    capabilityAreas: ["Research support", "Academic consulting", "Documentation", "Analysis support"],
    relatedIndustries: ["research-institutions", "education", "ngos", "government", "startups"],
    primaryCta: ctas.secondary,
    seoTopic: "research and academic consulting services",
    contentStatus: "placeholder"
  }
] as const satisfies readonly ServiceDefinition[];
