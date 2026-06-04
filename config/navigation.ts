import type { FooterGroup, NavItem } from "@/types/navigation";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const actionNavigation: NavItem[] = [
  { label: "Request a Project", href: "/request-project" },
  { label: "Get a Quote", href: "/contact" }
];

export const footerNavigation: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/careers" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Software & Technology", href: "/services/software-technology" },
      { label: "Infrastructure & Procurement", href: "/services/infrastructure-procurement" },
      { label: "Creative & Branding", href: "/services/creative-branding" },
      { label: "Research & Academic Consulting", href: "/services/research-academic-consulting" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Resources", href: "/blog" },
      { label: "Case Studies", href: "/portfolio" },
      { label: "Contact", href: "/contact" }
    ]
  }
];
