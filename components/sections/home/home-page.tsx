import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";

const services = [
  {
    title: "Software & Technology Services",
    description: "Web platforms, business systems, IT support, and technology planning shaped around practical operational needs.",
    outcome: "Build useful digital tools and keep technology decisions easier to manage, support, and improve over time.",
    services: ["Web Development", "Business Systems", "IT Support", "Technology Infrastructure", "Workspace Planning"],
    icon: "M5 7.5h14v9H5z M8.5 11l1.7 1.7-1.7 1.7 M13 14.5h3 M12 4.5 18 7v4.8",
    visual: "software"
  },
  {
    title: "Creative, Branding & Media Services",
    description: "Brand identity, digital design, media assets, and communication materials that help organizations present their work clearly.",
    outcome: "Create consistent visual systems and communication assets that support recognition, trust, and day-to-day presentation.",
    services: ["Brand Identity", "Digital Design", "Social Media Assets", "Presentation Design", "Communication Materials"],
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M13.5 8.5l2 2 M6.5 6.5h4 M16 15.5h2.5",
    visual: "creative"
  },
  {
    title: "Research & Academic Consulting",
    description: "Research planning, academic documentation, evidence analysis, and structured report support for clearer decisions.",
    outcome: "Turn questions, data, and ideas into organized research outputs that can be reviewed, explained, and used.",
    services: ["Research Planning", "Academic Documentation", "Evidence Analysis", "Framework Development", "Consulting Reports"],
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5",
    visual: "research"
  }
] as const;

const capabilityHighlights = [
  {
    value: "Software",
    label: "Web platforms, business systems, and support",
    icon: "M5 7.5h14v9H5z M8 19h8 M9 11l1.8 1.8L9 14.6 M13 14.5h3"
  },
  {
    value: "Infrastructure",
    label: "Workspace, equipment, and IT planning",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    value: "Creative",
    label: "Brand, design, and media assets",
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M6.5 6.5h4 M16 15.5h2.5"
  },
  {
    value: "Research",
    label: "Academic, research, and evidence support",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  }
] as const;

const aboutCards = [
  {
    title: "Digital Systems",
    description: "Websites, business tools, and workflows shaped around how an organization actually operates.",
    icon: "M5 7.5h14v9H5z M8 19h8 M9 11l1.8 1.8L9 14.6 M13 14.5h3"
  },
  {
    title: "Technology Infrastructure",
    description: "Workspace, equipment, and IT planning support for technology decisions that need structure.",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    title: "Brand Systems",
    description: "Identity, presentation, and media assets that make an organization's work easier to recognize and explain.",
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M6.5 6.5h4 M16 15.5h2.5"
  },
  {
    title: "Research Strategy",
    description: "Documentation, frameworks, and evidence-aware support for academic, business, and project decisions.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  }
] as const;

const aboutPillars = [
  {
    title: "Software & Technology Services",
    description: "Digital systems, web experiences, IT support, and technical planning for organizations that need dependable tools.",
    chips: ["Web systems", "Business tools", "IT support", "Technology planning"],
    icon: "M5 7.5h14v9H5z M8.5 11l1.7 1.7-1.7 1.7 M13 14.5h3 M12 4.5 18 7v4.8",
    accent: "from-cyan-300/34 via-brand-primary/18 to-transparent",
    motif: "technical"
  },
  {
    title: "Creative, Branding & Media Services",
    description: "Brand identity, digital design, media assets, and communication systems that make work easier to present.",
    chips: ["Brand identity", "Design assets", "Media content", "Presentation systems"],
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M6.5 6.5h4 M16 15.5h2.5",
    accent: "from-brand-primary/30 via-white/10 to-transparent",
    motif: "creative"
  },
  {
    title: "Research & Academic Consulting",
    description: "Research planning, academic documentation, structured analysis, and evidence-led support for clearer decisions.",
    chips: ["Research planning", "Academic support", "Documentation", "Evidence analysis"],
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5",
    accent: "from-teal-200/28 via-cyan-300/14 to-transparent",
    motif: "research"
  }
] as const;

const portfolioItems = [
  {
    title: "Software & Web System Previews",
    category: "Software & Technology Services",
    label: "Sample showcase area",
    preview: "Website and business system presentation area",
    visual: "browser"
  },
  {
    title: "Workspace Planning Previews",
    category: "Infrastructure & Workspace Planning",
    label: "Demo concept",
    preview: "Equipment, workspace, and IT planning area",
    visual: "dashboard"
  },
  {
    title: "Brand & Media System Previews",
    category: "Creative, Branding & Media Services",
    label: "Upcoming project showcase",
    preview: "Brand identity, media, and communication assets",
    visual: "brand"
  },
  {
    title: "Research & Academic Frameworks",
    category: "Research & Academic Consulting",
    label: "Sample showcase area",
    preview: "Research planning and academic documentation area",
    visual: "research"
  }
] as const;

const careers = [
  "Software, technology, and IT support collaborators",
  "Creative, branding, and media interns",
  "Research and academic documentation assistants"
] as const;

const processSteps = [
  {
    title: "Discover",
    description: "Understand the need, environment, audience, and practical constraints.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  },
  {
    title: "Plan",
    description: "Define scope, service area, responsibilities, timeline, and next steps.",
    icon: "M6 6.5h12 M6 11.5h12 M6 16.5h7 M4.5 6.5h.01 M4.5 11.5h.01 M4.5 16.5h.01"
  },
  {
    title: "Build",
    description: "Produce the digital system, workspace plan, media asset, or research output.",
    icon: "M5 7.5h14v9H5z M8.5 11l1.7 1.7-1.7 1.7 M13 14.5h3"
  },
  {
    title: "Support",
    description: "Review, document, refine, and support the work beyond initial delivery.",
    icon: "M12 5v14 M5 12h14 M8 8l8 8 M16 8l-8 8"
  }
] as const;

const trustItems = [
  {
    title: "Practical Execution",
    description: "Work is scoped around what can be built, improved, documented, and handed over clearly.",
    icon: "M5 12.5 9 16.5 19 6.5 M5 6.5h8 M5 10h5"
  },
  {
    title: "Research-Driven Thinking",
    description: "Planning uses context, evidence, and careful questions before moving into implementation.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  },
  {
    title: "Technology Expertise",
    description: "Software, IT support, infrastructure, and workspace planning are treated as connected business decisions.",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    title: "Collaborative Delivery",
    description: "Communication stays direct, structured, and useful so stakeholders can follow the work across service areas.",
    icon: "M7.5 8.5a3 3 0 1 0 0 6 M16.5 8.5a3 3 0 1 1 0 6 M10 18.5h4 M8 5.5h8"
  }
] as const;

const visionMission = [
  {
    title: "Vision",
    description:
      "To become a leading technology and business solutions company in Africa, recognised for driving innovation, digital transformation, and sustainable growth through world-class technology, infrastructure, branding, and consulting services.",
    icon: "M5 12h14 M12 5l7 7-7 7 M5 6.5h6 M5 17.5h6"
  },
  {
    title: "Mission",
    description:
      "To deliver innovative, reliable, and client-focused solutions in technology, infrastructure, branding, and consulting services that empower businesses, institutions, and individuals to achieve sustainable growth and success.",
    icon: "M12 4.5 18.5 8v8L12 20.5 5.5 16V8L12 4.5Z M9 12l1.8 1.8L15 9.8"
  }
] as const;

const coreValues = [
  "Innovation",
  "Integrity",
  "Customer Satisfaction",
  "Excellence",
  "Collaboration",
  "Professionalism",
  "Continuous Learning",
  "Impact & Growth"
] as const;

const contactDetails = [
  {
    label: "Email",
    value: brandConfig.contact.email,
    icon: "M5 8.5 12 13l7-4.5 M6 6h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
  },
  {
    label: "Phone / WhatsApp",
    value: brandConfig.contact.phone,
    icon: "M8 5.5h8a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z M10 16.5h4 M11 8h2"
  },
  {
    label: "Location",
    value: brandConfig.contact.location,
    icon: "M12 20s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
  }
] as const;

const projectRequestSteps = [
  "Choose the service area",
  "Share the business or academic need",
  "Add contact and timeline details",
  "Receive a practical next-step response"
] as const;

function SectionHeader({
  eyebrow,
  title,
  description,
  invert = false
}: {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className={invert ? "section-eyebrow text-brand-primary" : "section-eyebrow text-brand-primary"}>
        {eyebrow}
      </p>
      <h2 className={invert ? "section-title mt-4 text-white" : "section-title mt-4 text-brand-ink"}>
        {title}
      </h2>
      <p className={invert ? "section-copy mt-5 text-on-dark-secondary" : "section-copy mt-5 text-secondary"}>
        {description}
      </p>
    </Reveal>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 24 24">
      <path d={path} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
    </svg>
  );
}

function SmallIcon({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path d={path} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
    </svg>
  );
}

function HeroGlobe() {
  const nodes = [
    [52, 12], [63, 15], [40, 18], [73, 22], [30, 27], [54, 26],
    [84, 32], [43, 35], [67, 36], [22, 41], [91, 45], [55, 47],
    [35, 50], [76, 52], [18, 58], [47, 59], [64, 63], [86, 66],
    [29, 69], [55, 73], [72, 77], [39, 80], [61, 86], [48, 91],
    [78, 88], [27, 87], [58, 20], [34, 60], [82, 40], [42, 44],
    [68, 27], [50, 39], [70, 68], [38, 66], [59, 56], [78, 59]
  ] as const;

  const lines = [
    [0, 1], [0, 2], [1, 3], [1, 26], [2, 4], [2, 5], [3, 6],
    [3, 8], [3, 30], [4, 7], [4, 9], [5, 7], [5, 8], [5, 26],
    [6, 10], [6, 28], [7, 11], [7, 12], [7, 29], [8, 11],
    [8, 13], [8, 30], [9, 12], [9, 14], [10, 13], [10, 17],
    [10, 28], [11, 13], [11, 15], [11, 16], [11, 31], [12, 14],
    [12, 15], [12, 18], [12, 29], [13, 16], [13, 17], [13, 35],
    [14, 18], [14, 27], [15, 16], [15, 18], [15, 19], [15, 34],
    [16, 19], [16, 20], [16, 32], [17, 20], [17, 24], [17, 35],
    [18, 21], [18, 25], [18, 33], [19, 21], [19, 22], [19, 32],
    [20, 22], [20, 24], [21, 23], [21, 25], [22, 23], [22, 24],
    [23, 25], [26, 30], [27, 33], [28, 13], [29, 31], [30, 8],
    [31, 34], [32, 35], [33, 34], [34, 16], [35, 20]
  ] as const;

  const sparkles = [
    [11, 30], [18, 23], [89, 24], [94, 53], [78, 12], [20, 82],
    [89, 82], [61, 8], [13, 67], [97, 38], [43, 8], [9, 50],
    [74, 94], [31, 13], [93, 70], [55, 96]
  ] as const;

  return (
    <Reveal className="hero-load hero-load-visual relative mx-auto hidden aspect-square w-full max-w-[39rem] overflow-visible lg:-mt-7 lg:block" delay={180}>
      <div className="hero-globe-aura absolute inset-0 rounded-full" aria-hidden="true" />
      <div className="hero-globe relative h-full w-full rounded-full">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="globeFill" cx="50%" cy="45%" r="58%">
              <stop offset="0%" stopColor="rgb(103 232 249)" stopOpacity="0.12" />
              <stop offset="42%" stopColor="rgb(18 138 91)" stopOpacity="0.22" />
              <stop offset="72%" stopColor="rgb(6 182 212)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="rgb(10 33 80)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="globeLine" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(18 138 91)" stopOpacity="0.58" />
              <stop offset="48%" stopColor="rgb(45 212 191)" stopOpacity="0.72" />
              <stop offset="100%" stopColor="rgb(103 232 249)" stopOpacity="0.82" />
            </linearGradient>
            <linearGradient id="globeFrontLine" x1="0%" x2="100%" y1="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(18 138 91)" stopOpacity="0.7" />
              <stop offset="50%" stopColor="rgb(45 212 191)" stopOpacity="0.88" />
              <stop offset="100%" stopColor="rgb(165 243 252)" stopOpacity="0.92" />
            </linearGradient>
          </defs>
          {sparkles.map(([x, y], index) => (
            <circle
              className="hero-globe-spark"
              cx={x}
              cy={y}
              key={`${x}-${y}`}
              r={index % 2 === 0 ? 0.72 : 0.52}
            />
          ))}
          <circle className="hero-globe-shell" cx="52" cy="52" fill="url(#globeFill)" r="38" />
          <circle className="hero-globe-edge" cx="52" cy="52" fill="none" r="39.4" />
          {lines.map(([from, to], index) => {
            const depthClass = index % 5 === 0 ? "hero-globe-line-front" : index % 3 === 0 ? "hero-globe-line-back" : "";

            return (
              <line
                className={`hero-globe-line ${depthClass}`}
                key={`${from}-${to}`}
                stroke={depthClass === "hero-globe-line-front" ? "url(#globeFrontLine)" : "url(#globeLine)"}
                x1={nodes[from][0]}
                x2={nodes[to][0]}
                y1={nodes[from][1]}
                y2={nodes[to][1]}
              />
            );
          })}
          {nodes.map(([x, y], index) => (
            <circle
              className={`hero-globe-node ${index % 5 === 0 ? "hero-globe-node-front" : index % 4 === 0 ? "hero-globe-node-back" : ""}`}
              cx={x}
              cy={y}
              key={`${x}-${y}`}
              r={index % 3 === 0 ? 1.45 : 1.1}
            />
          ))}
          <path className="hero-globe-trail" d="M6 88 C22 76, 32 70, 47 63 C61 57, 72 54, 92 45" fill="none" />
          <path className="hero-globe-trail hero-globe-trail-soft" d="M13 82 C30 69, 42 61, 58 55 C70 50, 78 46, 89 38" fill="none" />
        </svg>
      </div>
    </Reveal>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[82vh] scroll-mt-20 items-center overflow-hidden bg-brand-ink px-0 pb-14 pt-10 text-white sm:pb-16 sm:pt-12 lg:pb-14 lg:pt-10" id="home">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgb(18_138_91_/_0.26),transparent_34%),radial-gradient(circle_at_64%_52%,rgb(6_182_212_/_0.12),transparent_44%),linear-gradient(135deg,rgb(10_33_80),rgb(6_24_50)_58%,rgb(7_38_54))]" />
      <div className="hero-atmosphere absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_50%_45%,rgb(18_138_91_/_0.2),transparent_50%)] lg:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" aria-hidden="true" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal className="hero-load hero-load-copy mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h1 className="font-display text-[clamp(2.45rem,5.25vw,4.45rem)] font-bold uppercase leading-[1.04] tracking-[0.015em] text-white [font-family:var(--font-display)]">
            Innovating
            <span className="my-1.5 block bg-gradient-to-r from-brand-primary via-teal-300 to-cyan-300 bg-clip-text text-transparent">Beyond</span>
            <span className="block">Boundaries</span>
          </h1>
          <p className="mt-8 flex items-center justify-center gap-3 text-[0.86rem] font-bold uppercase tracking-[0.28em] text-cyan-100/88 lg:justify-start">
            <span className="h-px w-8 bg-gradient-to-r from-brand-primary to-cyan-300" aria-hidden="true" />
            Technology <span className="text-brand-primary" aria-hidden="true">/</span> Strategy <span className="text-brand-primary" aria-hidden="true">/</span> Execution
          </p>
          <p className="mx-auto mt-6 max-w-[38rem] text-lg leading-9 text-slate-100/82 sm:text-xl sm:leading-10 lg:mx-0">
            Building digital solutions that help organizations move forward with practical strategy, design, and execution.
          </p>
        </Reveal>
        <HeroGlobe />
      </Container>
    </section>
  );
}

function CapabilityBar() {
  return (
    <section className="relative z-10 -mt-4 bg-gradient-to-b from-brand-ink via-brand-canvas to-brand-canvas px-5 pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-white/70 bg-white/94 p-3 shadow-[0_22px_70px_rgb(10_33_80_/_0.16)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/55 to-transparent" />
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityHighlights.map((item, index) => (
            <Reveal className="group rounded-xl p-5 transition-colors duration-300 hover:bg-brand-canvas" delay={index * 80} key={item.value}>
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-brand-primary/18 bg-brand-primary/8 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                  <SmallIcon path={item.icon} />
                </span>
                <div>
                  <p className="card-title text-brand-ink">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-secondary">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AboutIdentityVisual() {
  return (
    <div className="relative min-h-[28rem] overflow-hidden rounded-[1.75rem] border border-white/12 bg-brand-ink p-5 shadow-[0_24px_70px_rgb(10_33_80_/_0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgb(18_138_91_/_0.34),transparent_32%),radial-gradient(circle_at_24%_76%,rgb(103_232_249_/_0.12),transparent_34%),linear-gradient(135deg,rgb(10_33_80),rgb(7_21_49))]" />
      <div className="vecteron-grid absolute inset-0 opacity-35" />
      <div className="relative grid h-full gap-4">
        <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-5">
            <p className="technical-label text-on-dark-label">Systems Architecture</p>
            <div className="mt-6 grid gap-3">
              {["Software layer", "Workspace planning", "Workflow support"].map((item, index) => (
                <div className="flex items-center gap-3" key={item}>
                  <span className="flex size-9 items-center justify-center rounded-full border border-brand-primary/35 bg-brand-primary/14 text-xs font-bold text-cyan-100">
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-primary/70 to-cyan-300/20" />
                  <span className="w-32 text-sm font-semibold text-on-dark-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-4">
              <span className="block h-2 w-16 rounded-full bg-brand-primary" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                <span className="aspect-square rounded-xl bg-brand-primary/80" />
                <span className="aspect-square rounded-xl bg-cyan-100/70" />
                <span className="aspect-square rounded-xl bg-white/18" />
              </div>
              <p className="mt-4 text-sm font-semibold text-on-dark-secondary">Brand and media systems</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-4">
              <div className="grid gap-2">
                <span className="h-2.5 rounded-full bg-cyan-100/68" />
                <span className="h-2 w-4/5 rounded-full bg-white/24" />
                <span className="h-2 w-2/3 rounded-full bg-brand-primary/70" />
              </div>
              <p className="mt-4 text-sm font-semibold text-on-dark-secondary">Research documentation</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-4">
          <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-stretch">
            {/* Approved About image. Prefer replacing with a compressed WebP/AVIF at the same path family for production. */}
            <div
              className="group relative min-h-40 overflow-hidden rounded-xl border border-brand-primary/18 bg-brand-ink shadow-[0_18px_44px_rgb(0_0_0_/_0.16)]"
            >
              <Image
                alt="Vecteron technology workspace with systems planning, development screens, and infrastructure visuals"
                className="object-cover opacity-90 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 100vw"
                src="/images/about-execution-workspace.png"
              />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(10_33_80_/_0.4),rgb(10_33_80_/_0.08)_42%,rgb(18_138_91_/_0.16)),radial-gradient(circle_at_78%_24%,rgb(103_232_249_/_0.16),transparent_34%)]" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute left-4 top-4 rounded-full border border-white/16 bg-brand-ink/55 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cyan-100/92 backdrop-blur-sm">
                Execution workspace
              </div>
            </div>
            <div className="relative grid gap-3">
              <div className="absolute inset-y-0 left-4 hidden w-px bg-gradient-to-b from-transparent via-brand-primary/65 to-transparent sm:block" />
              {["Secure systems", "Creative outputs", "Evidence support"].map((item) => (
                <div className="relative rounded-xl border border-white/10 bg-brand-ink/40 p-4 sm:ml-6" key={item}>
                  <span className="absolute -left-[1.9rem] top-6 hidden size-2 rounded-full bg-cyan-200 shadow-[0_0_16px_rgb(103_232_249_/_0.62)] sm:block" />
                  <p className="text-sm font-semibold text-on-dark-primary">{item}</p>
                  <span className="mt-4 block h-1.5 w-12 rounded-full bg-brand-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PillarMotif({ motif }: { motif: (typeof aboutPillars)[number]["motif"] }) {
  if (motif === "creative") {
    return (
      <div className="grid gap-2">
        <div className="grid grid-cols-[0.72fr_1.28fr] gap-2">
          <div className="grid place-items-center rounded-lg border border-white/16 bg-white/[0.08]">
            <span className="font-display text-sm font-bold text-cyan-100">Aa</span>
          </div>
          <div className="grid gap-1.5 rounded-lg border border-white/16 bg-white/[0.08] p-2">
            <span className="h-1.5 rounded-full bg-cyan-100/70" />
            <span className="h-1.5 w-3/4 rounded-full bg-white/32" />
            <span className="h-1.5 w-1/2 rounded-full bg-brand-primary/80" />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          <span className="aspect-square rounded-md bg-brand-primary" />
          <span className="aspect-square rounded-md bg-cyan-100/80" />
          <span className="aspect-square rounded-md bg-brand-canvas" />
          <span className="aspect-square rounded-md border border-white/16 bg-white/18" />
        </div>
      </div>
    );
  }

  if (motif === "research") {
    return (
      <div className="relative grid gap-2">
        <div className="absolute left-3 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cyan-100/40 via-brand-primary/55 to-transparent" />
        {["Question", "Evidence", "Finding"].map((item, index) => (
          <div className="relative grid grid-cols-[auto_1fr] items-center gap-2 rounded-lg border border-white/14 bg-white/[0.07] p-2" key={item}>
            <span className="z-10 size-2.5 rounded-full bg-cyan-100 shadow-[0_0_12px_rgb(103_232_249_/_0.42)]" />
            <span className={index === 1 ? "h-1.5 rounded-full bg-brand-primary/78" : "h-1.5 rounded-full bg-white/32"} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="relative grid gap-2 rounded-lg border border-white/12 bg-white/[0.06] p-2">
      <div className="grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((item) => (
          <span className="h-6 rounded-md border border-cyan-100/14 bg-brand-ink/55" key={item} />
        ))}
      </div>
      <div className="relative flex items-center justify-between rounded-md border border-brand-primary/24 bg-brand-primary/10 px-2 py-1.5">
        <span className="size-2 rounded-full bg-cyan-100 shadow-[0_0_12px_rgb(103_232_249_/_0.48)]" />
        <span className="h-px flex-1 bg-gradient-to-r from-cyan-100/50 via-brand-primary/70 to-cyan-100/50" />
        <span className="size-2 rounded-full bg-brand-primary shadow-[0_0_12px_rgb(18_138_91_/_0.52)]" />
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1.5">
        <span className="h-1.5 rounded-full bg-white/28" />
        <span className="size-5 rounded-md border border-brand-primary/40 bg-brand-primary/18" />
        <span className="h-1.5 rounded-full bg-white/28" />
      </div>
    </div>
  );
}

function ServiceVisual({ visual }: { visual: (typeof services)[number]["visual"] }) {
  if (visual === "creative") {
    return (
      <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/12 bg-brand-ink p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgb(18_138_91_/_0.26),transparent_32%)]" />
        <div className="relative grid h-full gap-4">
          <div className="grid grid-cols-[0.72fr_1.28fr] gap-4">
            <div className="grid place-items-center rounded-2xl border border-white/12 bg-white/[0.08]">
              <span className="font-display text-4xl font-bold text-cyan-100">Aa</span>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/12 bg-white/[0.08] p-4">
              <span className="h-3 rounded-full bg-cyan-100/70" />
              <span className="h-3 w-4/5 rounded-full bg-white/30" />
              <span className="h-3 w-2/3 rounded-full bg-brand-primary/78" />
              <div className="mt-2 grid grid-cols-3 gap-2">
                <span className="aspect-square rounded-lg bg-brand-primary" />
                <span className="aspect-square rounded-lg bg-cyan-100/80" />
                <span className="aspect-square rounded-lg bg-brand-canvas" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div className="rounded-xl border border-white/10 bg-white/[0.07] p-3" key={item}>
                <span className="block h-12 rounded-lg bg-gradient-to-br from-brand-primary/45 to-cyan-100/22" />
                <span className="mt-3 block h-2 rounded-full bg-white/28" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (visual === "research") {
    return (
      <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/12 bg-brand-ink p-5">
        <div className="vecteron-grid absolute inset-0 opacity-25" />
        <div className="relative grid h-full gap-4">
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="grid gap-3 rounded-2xl border border-white/12 bg-white/[0.08] p-4">
              <span className="h-3 w-2/3 rounded-full bg-cyan-100/70" />
              <span className="h-2 rounded-full bg-white/26" />
              <span className="h-2 w-5/6 rounded-full bg-white/20" />
              <span className="h-2 w-1/2 rounded-full bg-brand-primary/75" />
            </div>
            <span className="size-16 rounded-2xl border border-brand-primary/35 bg-brand-primary/14" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["Question", "Evidence", "Output"].map((item, index) => (
              <div className="relative rounded-xl border border-white/10 bg-white/[0.07] p-3" key={item}>
                <span className="block size-2.5 rounded-full bg-cyan-100 shadow-[0_0_12px_rgb(103_232_249_/_0.42)]" />
                <span className={index === 1 ? "mt-4 block h-2 rounded-full bg-brand-primary/78" : "mt-4 block h-2 rounded-full bg-white/28"} />
                <p className="mt-3 text-xs font-semibold text-on-dark-metadata">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-64 overflow-hidden rounded-2xl border border-white/12 bg-brand-ink p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgb(103_232_249_/_0.12),transparent_32%)]" />
      <div className="vecteron-grid absolute inset-0 opacity-25" />
      <div className="relative grid h-full content-between gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <span className="h-16 rounded-xl border border-cyan-100/14 bg-white/[0.07]" key={item} />
          ))}
        </div>
        <div className="rounded-2xl border border-brand-primary/28 bg-brand-primary/10 p-4">
          <div className="flex items-center">
            <span className="size-3 rounded-full bg-cyan-100 shadow-[0_0_14px_rgb(103_232_249_/_0.5)]" />
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-100/60 via-brand-primary to-cyan-100/60" />
            <span className="size-12 rounded-2xl border border-brand-primary/45 bg-brand-primary/18" />
            <span className="h-px flex-1 bg-gradient-to-r from-cyan-100/60 via-brand-primary to-cyan-100/60" />
            <span className="size-3 rounded-full bg-brand-primary shadow-[0_0_14px_rgb(18_138_91_/_0.55)]" />
          </div>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <span className="h-2 rounded-full bg-white/28" />
          <span className="rounded-full border border-brand-primary/40 bg-brand-primary/14 px-3 py-1 text-xs font-bold text-cyan-100">Secure</span>
          <span className="h-2 rounded-full bg-white/28" />
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="section-shell overflow-hidden bg-brand-canvas" id="about">
      <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="section-eyebrow text-brand-primary">About Vecteron</p>
            <h2 className="section-title mt-4 text-brand-ink">
              A multidisciplinary technology and consulting company helping organizations move work forward with practical support.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="section-copy text-secondary">
              Vecteron Solutions Ltd helps organizations plan, build, communicate, and research with more clarity. The company brings together software and technology services, infrastructure and workspace planning, creative media, and evidence-aware consulting.
            </p>
            <p className="section-copy mt-5 text-secondary">
              It exists for teams that need useful execution rather than inflated promises: systems that work, workspaces that are planned, brands that communicate clearly, and research outputs that can be understood and used.
            </p>
            <Button className="mt-7 rounded-full" href="/#services" variant="secondary">
              Explore Services
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <AboutIdentityVisual />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {aboutPillars.map((pillar, index) => (
            <Reveal delay={index * 90} key={pillar.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/12 bg-brand-ink p-6 text-white shadow-[0_18px_54px_rgb(10_33_80_/_0.12)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-primary/38">
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.accent}`} />
                <div className="vecteron-grid absolute inset-0 opacity-20" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-brand-primary/35 bg-brand-primary/14 text-cyan-100 transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                      <Icon path={pillar.icon} />
                    </span>
                    <div className="w-24">
                      <PillarMotif motif={pillar.motif} />
                    </div>
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-semibold leading-tight text-white">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-on-dark-secondary">{pillar.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {pillar.chips.map((chip) => (
                      <span className="rounded-full border border-white/12 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-on-dark-metadata" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-brand-line bg-white/80 p-4 shadow-[0_10px_32px_rgb(10_33_80_/_0.06)]">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {aboutCards.map((item, index) => (
              <div className="rounded-xl border border-brand-line bg-brand-canvas p-5" key={item.title}>
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <SmallIcon path={item.icon} />
                </span>
                <h3 className="card-title mt-5 text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-secondary">{item.description}</p>
                <p className="technical-label mt-5 text-label">Support 0{index + 1}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="relative bg-brand-canvas px-5 pb-20 sm:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.75rem] border border-brand-line bg-white p-5 shadow-[0_18px_54px_rgb(10_33_80_/_0.08)] sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgb(18_138_91_/_0.12),transparent_30%),linear-gradient(135deg,rgb(255_255_255),rgb(242_244_247))]" />
          <div className="relative grid gap-5 lg:grid-cols-2">
            {visionMission.map((item, index) => (
              <article
                className="group relative overflow-hidden rounded-2xl border border-brand-line bg-white p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_16px_40px_rgb(10_33_80_/_0.1)] sm:p-7"
                key={item.title}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary via-teal-300 to-cyan-300 opacity-80" />
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-brand-primary/18 bg-brand-primary/10 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon path={item.icon} />
                  </span>
                  <div>
                    <p className="technical-label text-label">Official {index === 0 ? "Direction" : "Purpose"}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-brand-ink">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-base leading-8 text-secondary">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="relative mt-6 rounded-2xl border border-brand-line bg-brand-canvas p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[0.34fr_1fr] lg:items-start">
              <div>
                <p className="section-eyebrow text-brand-primary">Core Values</p>
                <p className="mt-3 text-sm leading-6 text-secondary">
                  The working principles behind Vecteron&apos;s delivery, communication, and long-term support.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {coreValues.map((value) => (
                  <span
                    className="rounded-full border border-brand-primary/18 bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-[0_6px_18px_rgb(10_33_80_/_0.04)]"
                    key={value}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-shell bg-white" id="services">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="Services shaped around Vecteron's core areas of work."
          description="Each service area combines practical planning with execution-focused support, from software and IT needs to workspace planning, media assets, and research documentation."
        />
        <div className="mt-12 grid gap-7">
          {services.map((service, index) => (
            <Reveal delay={index * 80} key={service.title}>
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-brand-line bg-white p-5 shadow-[0_4px_20px_rgb(10_33_80_/_0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_18px_45px_rgb(10_33_80_/_0.12)] sm:p-6">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-primary to-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="grid gap-7 lg:grid-cols-[1fr_0.82fr] lg:items-center">
                  <div>
                    <span className="flex size-14 items-center justify-center rounded-2xl border border-brand-primary/18 bg-brand-primary/10 text-brand-primary">
                      <Icon path={service.icon} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-brand-ink sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-secondary sm:text-base">{service.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.services.map((item) => (
                        <span className="rounded-full border border-brand-line bg-brand-canvas px-3.5 py-2 text-sm font-semibold text-metadata transition-colors duration-300 group-hover:border-brand-primary/24" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-6 rounded-2xl border border-brand-line bg-brand-canvas px-5 py-4 text-sm font-semibold leading-6 text-brand-ink">
                      {service.outcome}
                    </p>
                  </div>
                  <ServiceVisual visual={service.visual} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/#project-request">
            Start a Project
          </Button>
          <Button href="/#contact" variant="secondary">
            Contact Us
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

function ProcessStrip() {
  return (
    <section className="relative bg-white px-5 pb-20 sm:pb-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[1.5rem] border border-brand-line bg-brand-ink p-4 shadow-[0_18px_54px_rgb(10_33_80_/_0.12)] sm:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(18_138_91_/_0.2),transparent_30%),linear-gradient(135deg,rgb(10_33_80),rgb(7_25_54))]" />
          <div className="vecteron-grid absolute inset-0 opacity-25" />
          <div className="relative grid gap-3 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div className="group relative rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary/40 hover:bg-white/[0.09]" key={step.title}>
                {index < processSteps.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-brand-primary to-cyan-300 md:block" aria-hidden="true" />
                ) : null}
                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-brand-primary/35 bg-brand-primary/14 text-cyan-100">
                    <SmallIcon path={step.icon} />
                  </span>
                  <div>
                    <p className="technical-label text-on-dark-metadata">Step 0{index + 1}</p>
                    <h3 className="card-title mt-1 text-white">{step.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-on-dark-helper">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="section-shell bg-brand-canvas">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="section-eyebrow text-brand-primary">Why Work With Vecteron</p>
            <h2 className="section-title mt-4 text-brand-ink">Built for organizations that need clarity before complexity.</h2>
            <p className="section-copy mt-5 text-secondary">
              The work is deliberately practical: understand the problem, plan the path, build what matters, and communicate the next step clearly.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {trustItems.map((item, index) => (
              <Reveal delay={index * 80} key={item.title}>
                <article className="group h-full rounded-2xl border border-brand-line bg-white p-6 shadow-[0_8px_28px_rgb(10_33_80_/_0.05)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary/28 hover:shadow-[0_18px_42px_rgb(10_33_80_/_0.1)]">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon path={item.icon} />
                  </span>
                  <h3 className="card-title mt-5 text-brand-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PortfolioMockup({ visual }: { visual: (typeof portfolioItems)[number]["visual"] }) {
  const commonFrame =
    "relative mt-2 aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-brand-ink via-[#0b3b56] to-brand-primary/70 p-4";

  if (visual === "dashboard") {
    return (
      <div className={commonFrame}>
        <div className="vecteron-grid absolute inset-0 opacity-35 transition-transform duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgb(103_232_249_/_0.18),transparent_30%)]" />
        <div className="relative grid h-full grid-rows-[1fr_auto] gap-2">
          <div className="relative rounded-lg border border-white/10 bg-brand-ink/42 p-3">
            <div className="absolute left-1/2 top-4 size-7 -translate-x-1/2 rounded-full border border-cyan-100/55 bg-cyan-100/10 shadow-[0_0_18px_rgb(103_232_249_/_0.24)]" />
            <div className="absolute left-1/2 top-11 h-8 w-px -translate-x-1/2 bg-cyan-100/35" />
            <div className="absolute left-[20%] top-[48%] h-px w-[60%] bg-gradient-to-r from-brand-primary/70 via-cyan-100/45 to-brand-primary/70" />
            <div className="absolute bottom-5 left-[14%] size-7 rounded-lg border border-brand-primary/45 bg-brand-primary/14" />
            <div className="absolute bottom-5 left-[41%] size-7 rounded-lg border border-cyan-100/35 bg-white/[0.06]" />
            <div className="absolute bottom-5 right-[14%] size-7 rounded-lg border border-brand-primary/45 bg-brand-primary/14" />
            <div className="absolute bottom-14 left-[17%] h-5 w-px bg-brand-primary/45" />
            <div className="absolute bottom-14 left-1/2 h-5 w-px -translate-x-1/2 bg-cyan-100/35" />
            <div className="absolute bottom-14 right-[17%] h-5 w-px bg-brand-primary/45" />
          </div>
          <div className="grid grid-cols-[1fr_0.8fr] gap-2">
            <div className="grid grid-cols-2 gap-1.5">
              {["Network", "Zones", "Equip", "Deploy"].map((item) => (
                <span className="rounded-md border border-white/10 bg-white/[0.08] px-1.5 py-1 text-[0.48rem] font-bold uppercase tracking-[0.08em] text-cyan-100/72" key={item}>
                  {item}
                </span>
              ))}
            </div>
            <div className="grid content-center gap-1.5 rounded-md border border-brand-primary/24 bg-brand-primary/10 p-2">
              <span className="h-1.5 rounded-full bg-cyan-100/60" />
              <span className="h-1.5 w-4/5 rounded-full bg-white/24" />
              <span className="h-1.5 w-2/3 rounded-full bg-brand-primary/70" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "brand") {
    return (
      <div className={commonFrame}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgb(255_255_255_/_0.16),transparent_26%)]" />
        <div className="relative grid h-full grid-cols-[0.9fr_1.1fr] gap-3">
          <div className="grid gap-2 rounded-xl border border-white/12 bg-white/[0.08] p-3">
            <div className="grid place-items-center rounded-lg border border-white/12 bg-brand-ink/52">
              <span className="font-display text-lg font-bold text-cyan-100">Aa</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <span className="aspect-square rounded-md bg-brand-primary" />
              <span className="aspect-square rounded-md bg-cyan-100/80" />
              <span className="aspect-square rounded-md bg-brand-canvas/88" />
            </div>
          </div>
          <div className="grid gap-2">
            <div className="rounded-lg border border-white/12 bg-white/[0.08] p-2">
              <span className="block h-2 w-14 rounded-full bg-cyan-100/70" />
              <div className="mt-2 grid grid-cols-[1.2fr_0.8fr] gap-2">
                <span className="h-10 rounded-md bg-brand-primary/35" />
                <span className="h-10 rounded-md bg-white/14" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <span className="h-12 rounded-lg border border-brand-primary/25 bg-brand-primary/14" />
              <span className="h-12 rounded-lg border border-white/12 bg-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (visual === "research") {
    return (
      <div className={commonFrame}>
        <div className="vecteron-grid absolute inset-0 opacity-35" />
        <div className="relative grid h-full grid-cols-[0.85fr_1.15fr] gap-3">
          <div className="relative">
            <div className="absolute left-3 top-3 h-[calc(100%-0.75rem)] w-[72%] rounded-lg border border-white/12 bg-white/[0.06]" />
            <div className="absolute left-1.5 top-1.5 h-[calc(100%-0.75rem)] w-[72%] rounded-lg border border-white/12 bg-brand-ink/52 p-2">
              <span className="block h-1.5 w-12 rounded-full bg-cyan-100/70" />
              <span className="mt-2 block h-1.5 rounded-full bg-white/24" />
              <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-white/18" />
              <div className="mt-3 grid grid-cols-2 gap-1">
                {[0, 1, 2, 3].map((item) => (
                  <span className="h-4 rounded border border-white/10 bg-white/[0.06]" key={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="relative rounded-lg border border-white/10 bg-white/[0.07] p-2">
              <span className="absolute left-4 top-1/2 h-px w-[calc(100%-2rem)] bg-cyan-100/25" />
              {["Q", "E", "F"].map((item) => (
                <span
                  className="relative z-10 mr-2 inline-flex size-6 items-center justify-center rounded-full border border-brand-primary/45 bg-brand-primary/16 text-[0.58rem] font-bold text-cyan-100"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-1.5 rounded-lg border border-white/10 bg-white/[0.07] p-2">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <span className={item === 4 ? "h-5 rounded bg-brand-primary/55" : "h-5 rounded bg-white/14"} key={item} />
              ))}
            </div>
            <div className="grid gap-1.5 rounded-lg border border-white/10 bg-white/[0.07] p-2">
              <span className="h-1.5 rounded-full bg-brand-primary/70" />
              <span className="h-1.5 rounded-full bg-cyan-100/48" />
              <span className="h-1.5 w-2/3 rounded-full bg-white/22" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={commonFrame}>
      <div className="vecteron-grid absolute inset-0 opacity-42 transition-transform duration-700 ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgb(103_232_249_/_0.2),transparent_30%)]" />
      <div className="relative grid h-full grid-cols-[0.36fr_1fr] gap-3">
        <div className="grid gap-2 rounded-lg border border-white/10 bg-brand-ink/55 p-2">
          {["App", "Users", "Access"].map((item, index) => (
            <span
              className={index === 2 ? "rounded-md border border-brand-primary/35 bg-brand-primary/16 px-1.5 py-1 text-[0.48rem] font-bold uppercase tracking-[0.08em] text-cyan-100/78" : "rounded-md border border-white/10 bg-white/[0.07] px-1.5 py-1 text-[0.48rem] font-bold uppercase tracking-[0.08em] text-cyan-100/70"}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-[1fr_auto] gap-2 rounded-lg border border-white/10 bg-white/[0.08] p-2">
            <div className="grid gap-1.5">
              <span className="h-2 w-16 rounded-full bg-cyan-100/68" />
              <span className="h-2 rounded-full bg-white/24" />
              <span className="h-2 w-4/5 rounded-full bg-white/18" />
            </div>
            <span className="grid size-9 place-items-center rounded-full border border-brand-primary/45 bg-brand-primary/16 text-[0.58rem] font-bold text-cyan-100">
              SEC
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <span className="h-10 rounded-lg border border-white/10 bg-white/[0.07]" key={item} />
            ))}
          </div>
          <div className="relative rounded-lg border border-white/10 bg-white/[0.06] p-2">
            <span className="absolute left-4 top-1/2 h-px w-[calc(100%-2rem)] bg-gradient-to-r from-brand-primary/70 via-cyan-100/45 to-brand-primary/70" />
            <div className="relative flex justify-between">
              {[0, 1, 2, 3].map((item) => (
                <span className="size-2.5 rounded-full bg-cyan-100 shadow-[0_0_12px_rgb(103_232_249_/_0.34)]" key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-brand-ink py-20 text-white sm:py-28" id="portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgb(18_138_91_/_0.22),transparent_32%),radial-gradient(circle_at_12%_82%,rgb(103_232_249_/_0.08),transparent_34%),linear-gradient(135deg,rgb(10_33_80),rgb(7_21_49))]" />
      <div className="vecteron-grid absolute inset-0 opacity-25" />
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="A practical showcase framework for future approved work."
          description="These previews show how Vecteron can present software, workspace planning, brand media, and research work once real project content is approved."
          invert
        />
        <Reveal className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-4 shadow-[0_28px_90px_rgb(0_0_0_/_0.18)] sm:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgb(18_138_91_/_0.16),transparent_36%)]" />
          <div className="relative rounded-[1.25rem] border border-white/12 bg-brand-ink/72 p-3">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 pb-3">
              <span className="size-3 rounded-full bg-red-300/80" />
              <span className="size-3 rounded-full bg-amber-200/80" />
              <span className="size-3 rounded-full bg-brand-primary/90" />
              <span className="ml-3 h-7 flex-1 rounded-full border border-white/10 bg-white/[0.06]" />
            </div>
            <div className="grid gap-5 p-3 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(135deg,rgb(10_33_80),rgb(8_45_58))] p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_38%,rgb(45_212_191_/_0.22),transparent_30%)]" />
                <div className="vecteron-grid absolute inset-0 opacity-45" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="technical-label text-on-dark-label">Featured Preview</p>
                    <h3 className="mt-4 max-w-lg font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      Branded previews for digital systems, workspace plans, media assets, and research documentation.
                    </h3>
                  </div>
                  <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_0.72fr]">
                    <div className="rounded-2xl border border-white/12 bg-white/[0.08] p-3 shadow-[0_18px_45px_rgb(0_0_0_/_0.12)]">
                      <div className="flex items-center gap-2 border-b border-white/10 px-2 pb-3">
                        <span className="size-2.5 rounded-full bg-brand-primary" />
                        <span className="size-2.5 rounded-full bg-cyan-200/70" />
                        <span className="size-2.5 rounded-full bg-white/30" />
                        <span className="ml-2 h-5 flex-1 rounded-full bg-white/[0.08]" />
                      </div>
                      <div className="grid gap-3 pt-3 sm:grid-cols-[0.8fr_1.2fr]">
                        <div className="grid gap-2 rounded-xl border border-white/10 bg-brand-ink/48 p-3">
                          <span className="h-2 w-14 rounded-full bg-cyan-100/70" />
                          <span className="h-2 rounded-full bg-white/24" />
                          <span className="h-2 w-3/4 rounded-full bg-white/18" />
                          <span className="mt-2 h-12 rounded-lg bg-brand-primary/24" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {[0, 1, 2, 3].map((item) => (
                            <span className="min-h-14 rounded-xl border border-white/10 bg-white/[0.07]" key={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-3">
                      {["Planning", "Interface", "Delivery"].map((item) => (
                        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4" key={item}>
                          <span className="block h-1.5 w-10 rounded-full bg-brand-primary" />
                          <p className="mt-4 text-sm font-semibold text-white/84">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-5">
                  <p className="technical-label text-on-dark-label">Portfolio Status</p>
                  <p className="mt-3 text-sm leading-6 text-on-dark-secondary">
                    Showcase entries remain sample areas until real project details, client permissions, and approved outcomes are available.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-primary/25 bg-brand-primary/10 p-5">
                  <p className="text-sm font-semibold text-cyan-100">Only approved Vecteron work will become public case studies or success stories.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="relative mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <Reveal delay={index * 80} key={item.title}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.07] p-4 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-primary/45 hover:bg-white/[0.1]">
                <div className="rounded-xl border border-white/12 bg-brand-ink/70 p-2">
                  <div className="flex items-center gap-1.5 border-b border-white/10 pb-2">
                    <span className="size-2 rounded-full bg-white/30" />
                    <span className="size-2 rounded-full bg-white/30" />
                    <span className="size-2 rounded-full bg-brand-primary" />
                  </div>
                  <PortfolioMockup visual={item.visual} />
                </div>
                <p className="technical-label mt-5 text-brand-primary">{item.label}</p>
                <h3 className="card-title mt-2 text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-on-dark-metadata">{item.category}</p>
                <p className="mt-3 text-sm leading-6 text-on-dark-helper">{item.preview}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/12 bg-white/[0.07] px-5 py-4 text-center">
          <p className="text-sm leading-6 text-on-dark-secondary">
            Portfolio examples currently illustrate solution types and showcase formats. Approved client work will be published where project details and permissions allow.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="section-shell bg-white" id="careers">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow text-brand-primary">Careers & Opportunities</p>
            <h2 className="section-title mt-4 text-brand-ink">Future opportunities will be shared when a clear role or internship is available.</h2>
            <p className="section-copy mt-5 text-secondary">
              Vecteron is still growing, so this area stays honest and compact. Future opportunities may support software and technology, creative media, infrastructure planning, or research documentation work.
            </p>
          </Reveal>
          <div className="grid gap-4">
            {careers.map((career, index) => (
              <Reveal delay={index * 80} key={career}>
                <div className="group flex flex-col gap-4 rounded-2xl border border-brand-line bg-brand-canvas p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary/35 hover:bg-white sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-bold text-brand-primary">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="card-title text-brand-ink">{career}</h3>
                      <p className="mt-1 text-sm leading-6 text-secondary">Future opportunity area, not an active opening.</p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-brand-line px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-metadata">
                    Future
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProjectRequestSection() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-brand-ink py-20 text-white sm:py-24" id="project-request">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgb(18_138_91_/_0.24),transparent_34%),linear-gradient(135deg,rgb(10_33_80),rgb(10_24_53))]" />
      <Container>
        <SectionHeader
          eyebrow="Project Request"
          title="Start with a clear service brief."
          description="Share the service area, contact details, timeline direction, and the main thing you want Vecteron to help you plan or build."
          invert
        />
        <div className="relative mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="rounded-2xl border border-white/12 bg-white/[0.07] p-6 shadow-[0_20px_54px_rgb(0_0_0_/_0.12)] sm:p-8">
            <p className="technical-label text-on-dark-label">Project intake preview</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white">A simple way to prepare the first practical conversation.</h3>
            <div className="mt-7 rounded-2xl border border-white/12 bg-brand-ink/38 p-4">
              <div className="grid gap-3 sm:grid-cols-4">
                {["Request", "Review", "Clarify", "Response"].map((item, index) => (
                  <div className="relative rounded-xl border border-white/10 bg-white/[0.06] p-3" key={item}>
                    {index < 3 ? (
                      <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-brand-primary to-cyan-300 sm:block" aria-hidden="true" />
                    ) : null}
                    <span className="flex size-8 items-center justify-center rounded-full border border-brand-primary/35 bg-brand-primary/14 text-xs font-bold text-cyan-100">
                      0{index + 1}
                    </span>
                    <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-on-dark-primary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {projectRequestSteps.map((step, index) => (
                <div className="flex items-center gap-4" key={step}>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-brand-primary/35 bg-brand-primary/14 text-sm font-bold text-cyan-100">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-semibold text-on-dark-primary">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-brand-primary/24 bg-brand-primary/10 p-5">
              <p className="technical-label text-on-dark-label">Typical next steps</p>
              <p className="mt-3 text-sm leading-6 text-on-dark-secondary">
                Request details are reviewed, scope is clarified if needed, a recommended approach is shared, and a project discussion can be scheduled through the available contact channels.
              </p>
            </div>
          </Reveal>
          <Reveal className="rounded-2xl border border-white/12 bg-white/8 p-6 shadow-[0_20px_54px_rgb(0_0_0_/_0.16)] sm:p-8" delay={120}>
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Full name
                  <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/70 focus:border-brand-primary focus:ring-brand-primary" placeholder="Your name" type="text" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email address
                  <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/70 focus:border-brand-primary focus:ring-brand-primary" placeholder="you@example.com" type="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Organization
                  <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/70 focus:border-brand-primary focus:ring-brand-primary" placeholder="Organization name or individual" type="text" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Project type
                  <select className="rounded-xl border-white/18 bg-white/8 text-white [color-scheme:dark] focus:border-brand-primary focus:ring-brand-primary">
                    <option>Software & Technology Services</option>
                    <option>Infrastructure & Workspace Planning</option>
                    <option>Creative, Branding & Media Services</option>
                    <option>Research & Academic Consulting</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Preferred contact method
                  <select className="rounded-xl border-white/18 bg-white/8 text-white [color-scheme:dark] focus:border-brand-primary focus:ring-brand-primary">
                    <option>Email</option>
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Preferred timeline
                  <select className="rounded-xl border-white/18 bg-white/8 text-white [color-scheme:dark] focus:border-brand-primary focus:ring-brand-primary">
                    <option>Immediately</option>
                    <option>Within 1 Month</option>
                    <option>Within 3 Months</option>
                    <option>Exploring Options</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Project description
                <textarea className="min-h-36 rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/70 focus:border-brand-primary focus:ring-brand-primary" placeholder="Tell us what you want to build, plan, design, support, or research." />
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <Button className="w-full rounded-full bg-gradient-to-r from-brand-primary to-cyan-500" type="button">
                  Prepare Project Brief
                </Button>
                <WhatsAppLink className="border-white/14 bg-white/[0.06] !text-white hover:!border-brand-success/45 hover:!bg-brand-success/10 hover:!text-white" label="Follow up on WhatsApp" shape="button" />
              </div>
              <p className="rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm leading-6 text-on-dark-secondary">
                This form is currently a frontend preview. Use WhatsApp, email, or phone to share prepared request details with the Vecteron team.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="section-shell bg-white" id="contact">
      <Container>
        <SectionHeader
          eyebrow="Contact Us"
          title="Get in touch with Vecteron Solutions Ltd."
          description="Use email, phone, WhatsApp, or the contact form to start a practical conversation about software, infrastructure, creative media, or research support."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="grid gap-5">
              {contactDetails.map((detail) => (
                <div className="flex gap-4 rounded-2xl border border-brand-line bg-brand-canvas p-5" key={detail.label}>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                    <Icon path={detail.icon} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-brand-ink">{detail.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-secondary">{detail.value}</p>
                  </div>
                </div>
              ))}
              <WhatsAppLink
                className="border-brand-line bg-brand-canvas !text-brand-ink hover:!border-brand-success/45 hover:!bg-brand-success/10 hover:!text-brand-ink"
                label="Chat on WhatsApp"
                shape="button"
              />
              <div className="relative overflow-hidden rounded-2xl border border-brand-line bg-brand-ink p-5 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgb(18_138_91_/_0.24),transparent_32%)]" />
                <div className="vecteron-grid absolute inset-0 opacity-25" />
                <div className="relative">
                  <p className="technical-label text-on-dark-label">Communication Channel</p>
                  <p className="mt-4 text-sm leading-6 text-on-dark-secondary">
                    Use the channel that fits the conversation. A request can start simple, then become more structured after the team reviews the service area and next step.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <form className="rounded-2xl border border-brand-line bg-white p-6 shadow-soft sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-brand-ink">
                  Name
                  <input className="rounded-xl border-brand-line bg-brand-canvas focus:border-brand-primary focus:ring-brand-primary" placeholder="Your name" type="text" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-brand-ink">
                  Email
                  <input className="rounded-xl border-brand-line bg-brand-canvas focus:border-brand-primary focus:ring-brand-primary" placeholder="you@example.com" type="email" />
                </label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-brand-ink">
                Subject
                <input className="rounded-xl border-brand-line bg-brand-canvas focus:border-brand-primary focus:ring-brand-primary" placeholder="What would you like to discuss?" type="text" />
              </label>
              <label className="mt-5 grid gap-2 text-sm font-semibold text-brand-ink">
                Message
                <textarea className="min-h-36 rounded-xl border-brand-line bg-brand-canvas focus:border-brand-primary focus:ring-brand-primary" placeholder="Share a short message." />
              </label>
              <Button className="mt-6 w-full rounded-full" type="button">
                Prepare Message
              </Button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <Link
      aria-label="Chat with Vecteron on WhatsApp"
      className="whatsapp-float fixed bottom-8 right-8 z-[999] flex size-[60px] cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white no-underline shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 ease-[ease] hover:scale-110 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)]"
      href={ctas.whatsapp.href}
    >
      <svg aria-hidden="true" className="size-[1.8rem]" fill="none" viewBox="0 0 24 24">
        <path d="M12 4.25a7.65 7.65 0 0 0-6.5 11.7l-.73 3.02 3.1-.7A7.65 7.65 0 1 0 12 4.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.05 8.45c.16-.34.32-.36.55-.36h.38c.14 0 .33.04.5.38.2.45.62 1.5.67 1.6.05.11.08.24.02.38-.08.18-.14.25-.27.39l-.21.23c-.1.1-.2.2-.09.4.1.2.47.78 1 1.26.7.63 1.27.82 1.48.91.2.08.33.07.45-.08l.61-.73c.15-.2.32-.16.54-.08.22.08 1.4.66 1.64.78.24.12.4.18.46.29.06.1.06.58-.14 1.13-.2.55-1.06 1.05-1.47 1.1-.39.05-.9.08-2.86-.73-2.42-.99-3.96-3.44-4.08-3.6-.12-.17-.96-1.28-.96-2.42 0-1.14.58-1.7.79-1.93Z" fill="currentColor" />
      </svg>
    </Link>
  );
}

export function HomePageSections() {
  return (
    <>
      <HeroSection />
      <CapabilityBar />
      <AboutSection />
      <VisionMissionSection />
      <ServicesSection />
      <ProcessStrip />
      <TrustSection />
      <PortfolioSection />
      <CareersSection />
      <ProjectRequestSection />
      <ContactSection />
      <FloatingWhatsApp />
    </>
  );
}
