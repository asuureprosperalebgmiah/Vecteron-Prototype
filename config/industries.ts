import { ctas } from "@/config/ctas";
import type { IndustryDefinition } from "@/types/content";

export const industries = [
  {
    slug: "education",
    title: "Education",
    href: "/industries/education",
    typicalNeeds: ["Learning platforms", "Administrative systems", "Research and documentation support"],
    relevantServices: ["software-technology", "creative-branding", "research-academic-consulting"],
    trustAngles: ["Methodology", "Case Studies", "Technology Stack"],
    primaryCta: ctas.primary,
    contentStatus: "placeholder"
  },
  {
    slug: "smes",
    title: "SMEs",
    href: "/industries/smes",
    typicalNeeds: ["Business systems", "Brand presentation", "Procurement guidance"],
    relevantServices: ["software-technology", "infrastructure-procurement", "creative-branding"],
    trustAngles: ["Methodology", "Testimonials", "Case Studies"],
    primaryCta: ctas.secondary,
    contentStatus: "placeholder"
  },
  {
    slug: "startups",
    title: "Startups",
    href: "/industries/startups",
    typicalNeeds: ["MVP planning", "Brand foundations", "Technical execution support"],
    relevantServices: ["software-technology", "creative-branding", "research-academic-consulting"],
    trustAngles: ["Technology Stack", "Methodology", "Case Studies"],
    primaryCta: ctas.primary,
    contentStatus: "placeholder"
  },
  {
    slug: "government",
    title: "Government",
    href: "/industries/government",
    typicalNeeds: ["Procurement support", "Digital systems", "Research-backed planning"],
    relevantServices: ["infrastructure-procurement", "software-technology", "research-academic-consulting"],
    trustAngles: ["Certifications", "Methodology", "Partnerships"],
    primaryCta: ctas.secondary,
    contentStatus: "placeholder"
  },
  {
    slug: "ngos",
    title: "NGOs",
    href: "/industries/ngos",
    typicalNeeds: ["Program systems", "Reporting materials", "Research and evaluation support"],
    relevantServices: ["software-technology", "creative-branding", "research-academic-consulting"],
    trustAngles: ["Methodology", "Case Studies", "Testimonials"],
    primaryCta: ctas.primary,
    contentStatus: "placeholder"
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    href: "/industries/financial-services",
    typicalNeeds: ["Secure digital workflows", "Infrastructure reliability", "Professional customer experiences"],
    relevantServices: ["software-technology", "infrastructure-procurement", "creative-branding"],
    trustAngles: ["Certifications", "Technology Stack", "Methodology"],
    primaryCta: ctas.secondary,
    contentStatus: "placeholder"
  },
  {
    slug: "research-institutions",
    title: "Research Institutions",
    href: "/industries/research-institutions",
    typicalNeeds: ["Research documentation", "Data-informed systems", "Institutional communication materials"],
    relevantServices: ["research-academic-consulting", "software-technology", "creative-branding"],
    trustAngles: ["Methodology", "Case Studies", "Partnerships"],
    primaryCta: ctas.primary,
    contentStatus: "placeholder"
  }
] as const satisfies readonly IndustryDefinition[];
