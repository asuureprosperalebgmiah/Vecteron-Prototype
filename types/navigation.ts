export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type FooterGroup = {
  title: string;
  links: NavItem[];
};
