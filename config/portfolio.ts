import type { ContentCategory } from "@/types/content";

export const portfolioCategories = [
  {
    slug: "completed-projects",
    label: "Completed Projects",
    description: "Placeholder category for delivered software, infrastructure, creative, research, or consulting work.",
    contentStatus: "placeholder"
  },
  {
    slug: "demo-systems",
    label: "Demo Systems",
    description: "Placeholder category for demonstration systems and prototypes.",
    contentStatus: "placeholder"
  },
  {
    slug: "branding-projects",
    label: "Branding Projects",
    description: "Placeholder category for brand identity, creative systems, and visual communication work.",
    contentStatus: "placeholder"
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    description: "Placeholder category for challenge, solution, technologies used, and outcomes.",
    contentStatus: "placeholder"
  },
  {
    slug: "success-stories",
    label: "Success Stories",
    description: "Placeholder category for client outcomes and approved proof points.",
    contentStatus: "placeholder"
  }
] as const satisfies readonly ContentCategory[];
