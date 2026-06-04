export type ContentStatus = "planned" | "placeholder" | "ready";

export type CtaReference = {
  label: string;
  href: string;
};

export type SectionPlan = {
  id: string;
  label: string;
  purpose: string;
  contentStatus: ContentStatus;
  primaryCta?: CtaReference;
  secondaryCta?: CtaReference;
  trustSignals?: string[];
  accessibilityNotes?: string[];
  seoIntent?: string;
};

export type ServiceDefinition = {
  slug: string;
  title: string;
  href: string;
  audience: string[];
  clientProblems: string[];
  outcomes: string[];
  capabilityAreas: string[];
  relatedIndustries: string[];
  primaryCta: CtaReference;
  seoTopic: string;
  contentStatus: ContentStatus;
};

export type IndustryDefinition = {
  slug: string;
  title: string;
  href: string;
  typicalNeeds: string[];
  relevantServices: string[];
  trustAngles: string[];
  primaryCta: CtaReference;
  contentStatus: ContentStatus;
};

export type TrustSignal = {
  slug: string;
  label: string;
  description: string;
  evidencePlaceholder: string;
  plannedUse: string[];
  contentStatus: ContentStatus;
};

export type ContentCategory = {
  slug: string;
  label: string;
  description: string;
  contentStatus: ContentStatus;
};

export type ContactMethod = {
  id: string;
  label: string;
  href: string;
  purpose: string;
  responseExpectation: string;
  contentStatus: ContentStatus;
};
