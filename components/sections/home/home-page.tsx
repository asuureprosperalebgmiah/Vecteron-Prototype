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
    icon: "M5 7.5h14v9H5z M8 19h8 M10 16.5v2.5 M14 16.5v2.5 M8.5 10.5l2 2-2 2 M13 14.5h3.5"
  },
  {
    title: "Infrastructure & Procurement",
    description: "IT planning, procurement guidance, vendor coordination, and deployment support.",
    icon: "M7 6.5h10v5H7z M9 14h6 M6 18h12 M9 11.5v6.5 M15 11.5v6.5"
  },
  {
    title: "Creative & Branding",
    description: "Brand identity, digital design, marketing assets, and professional presentation systems.",
    icon: "M7 15.5 15.5 7l2.5 2.5-8.5 8.5H7z M13.5 8.5l2 2 M6.5 6.5h4 M16 15.5h2.5"
  },
  {
    title: "Cybersecurity & IT Support",
    description: "Practical security awareness, technical review, and support for safer day-to-day operations.",
    icon: "M12 4.5 18 7v4.8c0 3.3-2.4 6.2-6 7.7-3.6-1.5-6-4.4-6-7.7V7l6-2.5Z M9.5 12l1.5 1.5 3.5-4"
  },
  {
    title: "Research Consulting",
    description: "Research planning, documentation, academic support, and evidence-aware analysis.",
    icon: "M10.5 17.5a6 6 0 1 1 4.2-1.7L19 20 M8.5 11h5 M8.5 13.5h3.5"
  },
  {
    title: "Digital Strategy",
    description: "Clear planning for systems, brand direction, workflows, and technology decisions.",
    icon: "M5 18V6 M5 18h14 M8 15l3-3 2.2 2.2L18 9 M16 9h2v2"
  }
] as const;

const capabilityHighlights = [
  { value: "Software", label: "Business systems and web experiences" },
  { value: "Infrastructure", label: "Procurement and IT planning support" },
  { value: "Creative", label: "Branding, media, and communication assets" },
  { value: "Research", label: "Academic and evidence-led consulting" }
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
  { title: "Business Website Concepts", category: "Web Development", tone: "from-blue-700 to-cyan-500" },
  { title: "Procurement Planning Templates", category: "Infrastructure", tone: "from-emerald-700 to-teal-400" },
  { title: "Brand Identity Systems", category: "Creative & Branding", tone: "from-slate-900 to-emerald-600" },
  { title: "Research Support Frameworks", category: "Research Consulting", tone: "from-brand-ink to-blue-600" },
  { title: "Workflow Automation Demos", category: "Digital Systems", tone: "from-cyan-700 to-emerald-500" },
  { title: "IT Support Playbooks", category: "Cybersecurity & Support", tone: "from-slate-800 to-brand-primary" }
] as const;

const careers = [
  "Software and web development collaborators",
  "Creative design and branding interns",
  "Research and documentation assistants"
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
      <p className={invert ? "text-xs font-bold uppercase tracking-[0.2em] text-brand-primary" : "text-xs font-bold uppercase tracking-[0.2em] text-brand-primary"}>
        {eyebrow}
      </p>
      <h2 className={invert ? "mt-4 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl" : "mt-4 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl"}>
        {title}
      </h2>
      <p className={invert ? "mt-4 text-base leading-7 text-white/72" : "mt-4 text-base leading-7 text-brand-muted"}>
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
    <Reveal className="relative mx-auto hidden aspect-square w-full max-w-[39rem] overflow-visible lg:-mt-7 lg:block" delay={180}>
      <div className="hero-globe-aura absolute inset-0 rounded-full" aria-hidden="true" />
      <div className="hero-globe relative h-full w-full rounded-full">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="globeFill" cx="50%" cy="45%" r="58%">
              <stop offset="0%" stopColor="rgb(18 138 91)" stopOpacity="0.32" />
              <stop offset="52%" stopColor="rgb(6 182 212)" stopOpacity="0.17" />
              <stop offset="100%" stopColor="rgb(10 33 80)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="globeLine" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(18 138 91)" stopOpacity="0.76" />
              <stop offset="50%" stopColor="rgb(45 212 191)" stopOpacity="0.78" />
              <stop offset="100%" stopColor="rgb(103 232 249)" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {sparkles.map(([x, y], index) => (
            <circle
              className="hero-globe-spark"
              cx={x}
              cy={y}
              key={`${x}-${y}`}
              r={index % 2 === 0 ? 0.72 : 0.52}
              style={{ animationDelay: `${index * 220}ms` }}
            />
          ))}
          <circle className="hero-globe-shell" cx="52" cy="52" fill="url(#globeFill)" r="38" />
          <circle className="hero-globe-edge" cx="52" cy="52" fill="none" r="39.4" />
          {lines.map(([from, to], index) => (
            <line
              className="hero-globe-line"
              key={`${from}-${to}`}
              stroke="url(#globeLine)"
              style={{ animationDelay: `${index * 120}ms` }}
              x1={nodes[from][0]}
              x2={nodes[to][0]}
              y1={nodes[from][1]}
              y2={nodes[to][1]}
            />
          ))}
          {nodes.map(([x, y], index) => (
            <circle
              className="hero-globe-node"
              cx={x}
              cy={y}
              key={`${x}-${y}`}
              r={index % 3 === 0 ? 1.45 : 1.1}
              style={{ animationDelay: `${index * 160}ms` }}
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
        <Reveal className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
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
    <section className="bg-white px-5 py-10 shadow-[0_10px_35px_rgb(10_33_80_/_0.07)]">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityHighlights.map((item, index) => (
            <Reveal className="text-center" delay={index * 80} key={item.value}>
              <p className="font-display text-2xl font-extrabold text-brand-primary">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-brand-muted">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="scroll-mt-20 bg-brand-canvas py-20 sm:py-24" id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">About Vecteron</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
              Technology, solutions, growth, excellence.
            </h2>
            <p className="mt-5 text-base leading-7 text-brand-muted">
              Vecteron is a practical technology and consulting company focused on helping teams turn ideas, operational needs, and communication goals into clear digital outputs.
            </p>
            <p className="mt-4 text-base leading-7 text-brand-muted">
              The work spans web development, infrastructure planning, procurement support, creative branding, research consulting, and digital strategy.
            </p>
            <Button className="mt-7 rounded-full" href="/#about" variant="secondary">
              Learn More
            </Button>
          </Reveal>
          <Reveal className="relative min-h-80 overflow-hidden rounded-[1.5rem] bg-brand-ink p-6 shadow-soft" delay={120}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgb(18_138_91_/_0.4),transparent_32%),linear-gradient(135deg,rgb(10_33_80),rgb(7_21_49))]" />
            <div className="vecteron-grid absolute inset-0 opacity-40" />
            <div className="relative grid h-full gap-4 sm:grid-cols-2">
              {aboutCards.map((item) => (
                <div className="rounded-2xl border border-white/12 bg-white/8 p-5 text-white backdrop-blur" key={item.title}>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-primary">
                    <Icon path={item.icon} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/64">{item.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="scroll-mt-20 bg-white py-20 sm:py-24" id="services">
      <Container>
        <SectionHeader
          eyebrow="Our Services"
          title="A focused mix of digital, infrastructure, creative, and consulting services."
          description="Simple service areas make it easier to understand where Vecteron can help and what kind of conversation to start."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal delay={index * 80} key={service.title}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-brand-line bg-white p-7 shadow-[0_4px_20px_rgb(10_33_80_/_0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_18px_45px_rgb(10_33_80_/_0.12)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-primary to-cyan-400 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all duration-500 ease-out group-hover:bg-brand-primary group-hover:text-white">
                  <Icon path={service.icon} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-brand-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="scroll-mt-20 bg-brand-canvas py-20 sm:py-24" id="portfolio">
      <Container>
        <SectionHeader
          eyebrow="Portfolio"
          title="Project showcase areas prepared for approved work."
          description="These cards represent the types of work Vecteron can present when real projects, demos, and case studies are approved for publication."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal delay={index * 80} key={item.title}>
              <article className="group relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-soft">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.tone}`} />
                <div className="vecteron-grid absolute inset-0 opacity-50 transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/92 via-brand-ink/18 to-transparent opacity-80" />
                <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
                  Work category
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 text-white opacity-90 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-emerald-200">{item.category}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold">{item.title}</h3>
                </div>
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
    <section className="scroll-mt-20 bg-white py-20 sm:py-24" id="careers">
      <Container>
        <SectionHeader
          eyebrow="Careers"
          title="Future collaboration opportunities will be shared as the team grows."
          description="Vecteron is early-stage, so this section stays intentionally brief. Future roles, internships, and collaborator opportunities will be shared when they are ready."
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {careers.map((career, index) => (
            <Reveal delay={index * 80} key={career}>
              <div className="flex flex-col gap-4 rounded-2xl border border-brand-line bg-brand-canvas p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-primary/35 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-ink">{career}</h3>
                  <p className="mt-1 text-sm text-brand-muted">Future opportunity area</p>
                </div>
                <Button className="w-fit rounded-full" href="/#careers" variant="secondary">
                  View Careers
                </Button>
              </div>
            </Reveal>
          ))}
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
        <Reveal className="relative mx-auto mt-12 max-w-4xl rounded-2xl border border-white/12 bg-white/8 p-6 shadow-[0_24px_70px_rgb(0_0_0_/_0.2)] backdrop-blur sm:p-8">
          <form className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Full name
                <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/38 focus:border-brand-primary focus:ring-brand-primary" placeholder="Your name" type="text" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email address
                <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/38 focus:border-brand-primary focus:ring-brand-primary" placeholder="you@example.com" type="email" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Organization
                <input className="rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/38 focus:border-brand-primary focus:ring-brand-primary" placeholder="Organization name" type="text" />
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
              <textarea className="min-h-36 rounded-xl border-white/18 bg-white/8 text-white placeholder:text-white/38 focus:border-brand-primary focus:ring-brand-primary" placeholder="Tell us what you want to build, improve, plan, or explore." />
            </label>
            <Button className="w-full rounded-xl bg-gradient-to-r from-brand-primary to-cyan-500" type="button">
              Prepare Project Brief
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="scroll-mt-20 bg-white py-20 sm:py-24" id="contact">
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
                    <p className="mt-1 text-sm leading-6 text-brand-muted">{detail.value}</p>
                  </div>
                </div>
              ))}
              <WhatsAppLink
                className="border-brand-line bg-brand-canvas !text-brand-ink hover:!border-brand-success/45 hover:!bg-brand-success/10 hover:!text-brand-ink"
                label="Chat on WhatsApp"
                shape="button"
              />
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
              <Button className="mt-6 w-full rounded-xl" type="button">
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
      <PortfolioSection />
      <CareersSection />
      <ProjectRequestSection />
      <ContactSection />
      <FloatingWhatsApp />
    </>
  );
}
