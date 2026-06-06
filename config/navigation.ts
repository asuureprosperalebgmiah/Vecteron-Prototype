import type { FooterGroup, NavItem } from "@/types/navigation";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Careers", href: "/#careers" },
  { label: "Project Request", href: "/#project-request" },
  { label: "Contact", href: "/#contact" }
];

export const footerNavigation: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "Careers", href: "/#careers" },
      { label: "Contact", href: "/#contact" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "Infrastructure & Procurement", href: "/#services" },
      { label: "Creative & Branding", href: "/#services" },
      { label: "Research Consulting", href: "/#services" }
    ]
  },
  {
    title: "Start",
    links: [
      { label: "Start a Project", href: "/#project-request" },
      { label: "Project Request", href: "/#project-request" },
      { label: "Contact", href: "/#contact" }
    ]
  }
];
