import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppLink } from "@/components/ui/whatsapp-link";
import { brandConfig } from "@/config/brand";
import { ctas } from "@/config/ctas";

const services = [
  {
    title: "Web Development",
    description: "Responsive websites, business systems, and digital tools built around real operational needs.",
    outcome: "Launch clearer digital experiences and useful internal tools.",
    icon: "M5 7.5h14v9H5z M8 19h8 M10 16.5v2.5 M14 16.5v2.5 M8.5 10.5l2 2-2 2 M13 14.5h3.5"
  },
  {
    title: "Infrastructure & Procurement",
    description: "IT planning, procurement guidance, vendor coordination, and deployment support.",
    outcome: "Make technology purchases and rollouts easier to plan.",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    title: "Creative & Branding",
    description: "Brand identity, digital design, marketing assets, and professional presentation systems.",
    outcome: "Communicate with a clearer, more consistent visual identity.",
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M13.5 8.5l2 2 M6.5 6.5h4 M16 15.5h2.5"
  },
  {
    title: "Cybersecurity & IT Support",
    description: "Practical security awareness, technical review, and support for safer day-to-day operations.",
    outcome: "Reduce avoidable technical risk with practical support.",
    icon: "M12 4.5 18 7v4.8c0 3.3-2.4 6.2-6 7.7-3.6-1.5-6-4.4-6-7.7V7l6-2.5Z M9.5 12l1.5 1.5 3.5-4"
  },
  {
    title: "Research Consulting",
    description: "Research planning, documentation, academic support, and evidence-aware analysis.",
    outcome: "Structure research work with better planning and documentation.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  },
  {
    title: "Digital Strategy",
    description: "Clear planning for systems, brand direction, workflows, and technology decisions.",
    outcome: "Turn broad ideas into scoped, practical next steps.",
    icon: "M5 18V6 M5 18h14 M8 15l3-3 2.2 2.2L18 9 M16 9h2v2"
  }
] as const;

const capabilityHighlights = [
  {
    value: "Software",
    label: "Business systems and web experiences",
    icon: "M5 7.5h14v9H5z M8 19h8 M9 11l1.8 1.8L9 14.6 M13 14.5h3"
  },
  {
    value: "Infrastructure",
    label: "Procurement and IT planning support",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    value: "Creative",
    label: "Branding, media, and communication assets",
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M6.5 6.5h4 M16 15.5h2.5"
  },
  {
    value: "Research",
    label: "Academic and evidence-led consulting",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  }
] as const;

const aboutCards = [
  {
    title: "Digital systems",
    description: "Websites, tools, and workflows shaped around how the organization actually works.",
    icon: "M5 7.5h14v9H5z M8 19h8 M9 11l1.8 1.8L9 14.6 M13 14.5h3"
  },
  {
    title: "Infrastructure support",
    description: "Planning and procurement guidance for technology decisions that need structure.",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    title: "Brand clarity",
    description: "Identity, presentation, and communication assets that make the work easier to understand.",
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M6.5 6.5h4 M16 15.5h2.5"
  },
  {
    title: "Research planning",
    description: "Documentation and evidence-aware support for academic, business, and project decisions.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  }
] as const;

const portfolioItems = [
  {
    title: "Business Website Concepts",
    category: "Web Development",
    label: "Sample showcase area",
    preview: "Public website system"
  },
  {
    title: "Procurement Planning Templates",
    category: "Infrastructure",
    label: "Demo concept",
    preview: "Planning dashboard"
  },
  {
    title: "Brand Identity Systems",
    category: "Creative & Branding",
    label: "Upcoming project showcase",
    preview: "Brand asset suite"
  },
  {
    title: "Research Support Frameworks",
    category: "Research Consulting",
    label: "Sample showcase area",
    preview: "Research workflow"
  }
] as const;

const careers = [
  "Software and web development collaborators",
  "Creative design and branding interns",
  "Research and documentation assistants"
] as const;

const processSteps = [
  {
    title: "Discover",
    description: "Clarify the need, context, constraints, and desired result.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  },
  {
    title: "Plan",
    description: "Shape the scope, delivery path, priorities, and dependencies.",
    icon: "M6 6.5h12 M6 11.5h12 M6 16.5h7 M4.5 6.5h.01 M4.5 11.5h.01 M4.5 16.5h.01"
  },
  {
    title: "Build",
    description: "Create the system, asset, process, or research output.",
    icon: "M5 7.5h14v9H5z M8.5 11l1.7 1.7-1.7 1.7 M13 14.5h3"
  },
  {
    title: "Support",
    description: "Review, refine, document, and hand over the work clearly.",
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
    description: "Digital systems, infrastructure, and support work are treated as connected business decisions.",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    title: "Collaborative Delivery",
    description: "Communication stays direct, structured, and useful so stakeholders can follow the work.",
    icon: "M7.5 8.5a3 3 0 1 0 0 6 M16.5 8.5a3 3 0 1 1 0 6 M10 18.5h4 M8 5.5h8"
  }
] as const;

const contactDetails = [
  {
    label: "Email",
    value: brandConfig.contact.email,
    icon: "M5 8.5 12 13l7-4.5 M6 6h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
  },
  {
    label: "Service focus",
    value: brandConfig.contact.serviceArea,
    icon: "M12 5v14 M5 12h14 M7.5 7.5l9 9 M16.5 7.5l-9 9"
  },
  {
    label: "Response",
    value: "Project and service inquiries are reviewed for the clearest next step.",
    icon: "M5 12.5 9 16.5 19 6.5 M5 6.5h8 M5 10h5"
  }
] as const;

const projectRequestSteps = [
  "Choose the project type",
  "Share the business need",
  "Add contact details",
  "Receive the next-step response"
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

function AboutSection() {
  return (
    <section className="section-shell overflow-hidden bg-brand-canvas" id="about">
      <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" aria-hidden="true" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="section-eyebrow text-brand-primary">About Vecteron</p>
            <h2 className="section-title mt-4 max-w-xl text-brand-ink">
              Practical technology work shaped around planning, execution, and clarity.
            </h2>
            <p className="section-copy mt-5 max-w-xl text-secondary">
              Vecteron helps teams move from loose ideas and operational pressure into clearer digital systems, infrastructure decisions, brand assets, and research support.
            </p>
            <p className="section-copy mt-4 max-w-xl text-secondary">
              The approach is intentionally grounded: understand the need, plan the work, build what is useful, and keep communication simple enough for teams to act on.
            </p>
            <Button className="mt-7 rounded-full" href="/#services" variant="secondary">
              Explore Services
            </Button>
          </Reveal>
          <Reveal className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-brand-ink p-5 shadow-[0_24px_70px_rgb(10_33_80_/_0.16)] sm:p-6" delay={120}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgb(18_138_91_/_0.34),transparent_32%),linear-gradient(135deg,rgb(10_33_80),rgb(7_21_49))]" />
            <div className="vecteron-grid absolute inset-0 opacity-35" />
            <div className="relative grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgb(103_232_249_/_0.18),transparent_30%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <p className="technical-label text-on-dark-label">System View</p>
                    <h3 className="mt-3 max-w-xs font-display text-2xl font-semibold leading-tight text-white">
                      From business need to usable digital output.
                    </h3>
                  </div>
                  <div className="mt-8 grid gap-3">
                    {["Need", "Plan", "Build", "Support"].map((step, index) => (
                      <div className="flex items-center gap-3" key={step}>
                        <span className="flex size-9 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-primary/14 text-xs font-bold text-cyan-100">
                          0{index + 1}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-brand-primary/70 to-cyan-300/20" />
                        <span className="w-20 text-sm font-semibold text-on-dark-primary">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {aboutCards.map((item) => (
                  <div className="rounded-2xl border border-white/12 bg-white/8 p-5 text-white" key={item.title}>
                    <span className="flex size-10 items-center justify-center rounded-xl bg-brand-primary">
                      <Icon path={item.icon} />
                    </span>
                    <h3 className="card-title mt-5 text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-on-dark-helper">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
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
          title="Focused services for teams that need practical execution."
          description="Each service area is designed around a clear outcome: plan better, build cleaner, communicate clearly, and support decisions with evidence."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal delay={index * 80} key={service.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-brand-line bg-white p-6 shadow-[0_4px_20px_rgb(10_33_80_/_0.06)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-brand-primary/30 hover:shadow-[0_18px_45px_rgb(10_33_80_/_0.12)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-primary to-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="relative min-h-32 overflow-hidden rounded-2xl bg-brand-canvas p-4">
                  <div className="vecteron-grid absolute inset-0 opacity-60" />
                  <div className="absolute right-4 top-4 size-16 rounded-full bg-brand-primary/10" />
                  <div className="relative flex size-14 items-center justify-center rounded-2xl border border-brand-primary/18 bg-white text-brand-primary shadow-[0_10px_28px_rgb(10_33_80_/_0.08)]">
                    <Icon path={service.icon} />
                  </div>
                  <div className="relative mt-6 h-px bg-gradient-to-r from-brand-primary/60 via-cyan-300/45 to-transparent" />
                </div>
                <h3 className="card-title mt-6 text-brand-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{service.description}</p>
                <p className="mt-5 rounded-xl border border-brand-line bg-brand-canvas px-4 py-3 text-sm font-semibold leading-6 text-brand-ink">
                  {service.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
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

function PortfolioSection() {
  return (
    <section className="relative scroll-mt-20 overflow-hidden bg-brand-ink py-20 text-white sm:py-28" id="portfolio">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgb(18_138_91_/_0.22),transparent_32%),radial-gradient(circle_at_12%_82%,rgb(103_232_249_/_0.08),transparent_34%),linear-gradient(135deg,rgb(10_33_80),rgb(7_21_49))]" />
      <div className="vecteron-grid absolute inset-0 opacity-25" />
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="A showcase system ready for approved work."
          description="These branded previews show how real projects, demos, and case studies can be presented once approved content is available."
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
                      Branded project previews for websites, systems, research, and identity work.
                    </h3>
                  </div>
                  <div className="mt-10 grid gap-3 sm:grid-cols-3">
                    {["Planning", "Interface", "Delivery"].map((item) => (
                      <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4" key={item}>
                        <span className="block h-1.5 w-10 rounded-full bg-brand-primary" />
                        <p className="mt-4 text-sm font-semibold text-white/84">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/12 bg-white/[0.07] p-5">
                  <p className="technical-label text-on-dark-label">Portfolio Status</p>
                  <p className="mt-3 text-sm leading-6 text-on-dark-secondary">
                    Showcase entries remain placeholders until real project details, client permissions, and approved outcomes are available.
                  </p>
                </div>
                <div className="rounded-2xl border border-brand-primary/25 bg-brand-primary/10 p-5">
                  <p className="text-sm font-semibold text-cyan-100">No fake clients. No inflated results. Only approved work will become case studies.</p>
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
                  <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-brand-ink via-[#0b3b56] to-brand-primary/70 p-4">
                    <div className="vecteron-grid absolute inset-0 opacity-45 transition-transform duration-700 ease-out group-hover:scale-110" />
                    <div className="relative grid h-full content-between">
                      <span className="h-2 w-16 rounded-full bg-cyan-100/60" />
                      <div className="grid gap-2">
                        <span className="h-2 rounded-full bg-white/30" />
                        <span className="h-2 w-2/3 rounded-full bg-brand-primary/80" />
                        <span className="h-2 w-1/2 rounded-full bg-cyan-100/45" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="technical-label mt-5 text-brand-primary">{item.label}</p>
                <h3 className="card-title mt-2 text-white">{item.title}</h3>
                <p className="mt-2 text-sm font-semibold text-on-dark-metadata">{item.category}</p>
                <p className="mt-3 text-sm leading-6 text-on-dark-helper">{item.preview}</p>
              </article>
            </Reveal>
          ))}
        </div>
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
            <h2 className="section-title mt-4 text-brand-ink">Future roles will be shared when there is a clear opening.</h2>
            <p className="section-copy mt-5 text-secondary">
              Vecteron is still growing, so this area stays honest and compact. Future opportunities may include technical collaborators, creative interns, and research support roles.
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
                      <p className="mt-1 text-sm leading-6 text-secondary">Future opportunity area, not an active listing.</p>
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
          title="Start with a short brief."
          description="Share the project type, contact details, budget direction, and the main thing you want to achieve."
          invert
        />
        <div className="relative mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal className="rounded-2xl border border-white/12 bg-white/[0.07] p-6 shadow-[0_20px_54px_rgb(0_0_0_/_0.12)] sm:p-8">
            <p className="technical-label text-on-dark-label">Frontend-only intake preview</p>
            <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-white">A simple way to frame the first conversation.</h3>
            <div className="mt-8 grid gap-4">
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
              <p className="text-sm leading-6 text-on-dark-secondary">
                This form does not submit yet. Backend handling and notifications can be connected when the launch process is ready.
              </p>
            </div>
          </Reveal>
          <Reveal className="rounded-2xl border border-white/12 bg-white/8 p-6 shadow-[0_20px_54px_rgb(0_0_0_/_0.16)] sm:p-8" delay={120}>
            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold">
                  Full name
                  <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/60 focus:border-brand-primary focus:ring-brand-primary" placeholder="Your name" type="text" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Email address
                  <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/60 focus:border-brand-primary focus:ring-brand-primary" placeholder="you@example.com" type="email" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Organization
                  <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/60 focus:border-brand-primary focus:ring-brand-primary" placeholder="Organization name" type="text" />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Project type
                  <select className="rounded-xl border-white/18 bg-white/8 text-white focus:border-brand-primary focus:ring-brand-primary">
                    <option>Web development</option>
                    <option>Infrastructure & procurement</option>
                    <option>Creative & branding</option>
                    <option>Research consulting</option>
                    <option>Digital strategy</option>
                  </select>
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold">
                Project description
                <textarea className="min-h-36 rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/60 focus:border-brand-primary focus:ring-brand-primary" placeholder="Tell us what you want to build, improve, plan, or explore." />
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <Button className="w-full rounded-full bg-gradient-to-r from-brand-primary to-cyan-500" type="button">
                  Prepare Project Brief
                </Button>
                <WhatsAppLink className="border-white/14 bg-white/[0.06] !text-white hover:!border-brand-success/45 hover:!bg-brand-success/10 hover:!text-white" label="Follow up on WhatsApp" shape="button" />
              </div>
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
          title="Get in touch with the Vecteron team."
          description="Use email, WhatsApp, or the contact form to start a practical conversation about your next project."
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
                    Use the channel that fits the conversation. Project details can start simple and become more structured after review.
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
