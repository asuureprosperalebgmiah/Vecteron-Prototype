import type { ContentCategory } from "@/types/content";

export const resourceCategories = [
  {
    slug: "technology-articles",
    label: "Technology Articles",
    description: "Placeholder category for practical articles on software, systems, infrastructure, and tools.",
    contentStatus: "placeholder"
  },
  {
    slug: "business-startup-guides",
    label: "Business Startup Guides",
    description: "Placeholder category for guidance aimed at founders and growing organizations.",
    contentStatus: "placeholder"
  },
  {
    slug: "research-resources",
    label: "Research Resources",
    description: "Placeholder category for research planning, academic documentation, and evidence-led resources.",
    contentStatus: "placeholder"
  },
  {
    slug: "industry-updates",
    label: "Industry Updates",
    description: "Placeholder category for relevant technology, business, research, and service-market updates.",
    contentStatus: "placeholder"
  }
] as const satisfies readonly ContentCategory[];
