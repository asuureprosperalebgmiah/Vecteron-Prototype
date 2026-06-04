import type { ContentCategory } from "@/types/content";

export const careerCategories = [
  {
    slug: "available-positions",
    label: "Available Positions",
    description: "Placeholder category for current roles and recruitment needs.",
    contentStatus: "placeholder"
  },
  {
    slug: "internships",
    label: "Internship Opportunities",
    description: "Placeholder category for internship pathways and early-career opportunities.",
    contentStatus: "placeholder"
  },
  {
    slug: "application-form",
    label: "Application Form",
    description: "Future form flow for candidate details, CV upload, and portfolio upload.",
    contentStatus: "planned"
  },
  {
    slug: "cv-upload",
    label: "CV Upload",
    description: "Future secure upload field for candidate CV documents.",
    contentStatus: "planned"
  },
  {
    slug: "portfolio-upload",
    label: "Portfolio Upload",
    description: "Future secure upload field for candidate portfolio files or links.",
    contentStatus: "planned"
  }
] as const satisfies readonly ContentCategory[];
