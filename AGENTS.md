# AGENTS.md

## Project Overview

This project is a professional technology services company website.

The company provides:

* Software and technology services
* Infrastructure and procurement services
* Creative and branding services
* Research and academic consulting services

The website should present the company as modern, trustworthy, technically capable, creative, and professional.

The goal of the website is to:

* Explain the company clearly
* Present services in a polished and credible way
* Build trust with potential clients
* Encourage visitors to contact the company, request a quote, or book a consultation
* Showcase technical and creative competence through design quality and user experience

## Preferred Tech Stack

Use the following stack unless instructed otherwise:

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion for subtle animations
* Supabase PostgreSQL for database needs
* Environment variables for secrets and configuration

Do not introduce additional major libraries unless they are clearly useful and explained.

## Design Direction

Use a modern B2B technology style.

The design should feel:

* Professional
* Bold
* Clean
* Premium
* Trustworthy
* Slightly creative, but not playful or childish

Use subtle animations to improve polish, not to distract.

Good animation examples:

* Fade-in sections
* Smooth hover effects
* Card transitions
* Gentle scroll reveals
* Button micro-interactions

Avoid:

* Excessive motion
* Spinning elements
* Loud parallax effects
* Auto-playing media
* Flashy effects that reduce professionalism

Aim for 85% professional and 15% creative.

## Visual Standards

Follow these UI principles:

* Clear visual hierarchy
* Strong hero section
* Clean typography
* Consistent spacing
* Modern service cards
* Strong calls-to-action
* Professional color palette
* Responsive layouts
* Good contrast
* Minimal clutter

The site should not look like a generic AI-generated template.

## Suggested Pages

Build around these pages unless instructed otherwise:

* Home
* About
* Services
* Projects or Case Studies
* Insights or Blog
* Contact

The Services section should cover:

* Software and Technology Services
* Infrastructure and Procurement Services
* Creative and Branding Services
* Research and Academic Consulting Services

## Frontend Rules

Use reusable components.

Prefer clean component structure such as:

* components/layout
* components/sections
* components/ui
* components/forms
* lib
* styles

Use semantic HTML where possible.

Use Tailwind CSS consistently.

Avoid duplicated markup when a reusable component would be better.

Ensure the website works well on:

* Mobile
* Tablet
* Desktop

## Backend and Database Rules

Use Supabase PostgreSQL when database functionality is needed.

Possible database-backed features include:

* Contact form submissions
* Service inquiry forms
* Newsletter signups
* Admin dashboard later
* Project/case study content later
* Blog/insights content later

Do not expose private keys or service-role keys in frontend code.

Use environment variables for Supabase URLs, anon keys, and server-only secrets.

Validate all form data before writing to the database.

Use API routes/server actions where business logic or private credentials are required.

## Security Rules

Security is important for this project.

Always:

* Validate user input
* Avoid exposing secrets
* Use environment variables
* Handle errors safely
* Avoid logging sensitive data
* Protect database write operations
* Use proper form validation

Never:

* Place service-role keys in client-side code
* Hardcode private credentials
* Trust client-side validation alone
* Store unnecessary personal data

## Content and Copywriting Rules

Write in a clear, professional, confident tone.

Avoid vague phrases like:

* We provide quality solutions
* We are the best
* Innovative solutions for everyone

Prefer specific, credible language.

The copy should explain:

* What the company does
* Who the company helps
* What problems it solves
* Why clients should trust it
* What action visitors should take next

Calls-to-action should be clear, such as:

* Request a Quote
* Book a Consultation
* Start a Project
* Contact Us

## SEO Rules

Use proper SEO basics:

* Clear page titles
* Meta descriptions
* Semantic headings
* Descriptive service sections
* Open Graph metadata where appropriate
* Clean URLs
* Good internal linking

Use keywords naturally. Do not keyword-stuff.

## Accessibility Rules

Follow accessibility best practices:

* Use semantic HTML
* Maintain strong color contrast
* Add alt text to meaningful images
* Ensure forms have labels
* Support keyboard navigation
* Avoid motion that harms usability
* Use ARIA only when needed

## Performance Rules

Keep the site fast.

Prioritize:

* Optimized images
* Lazy loading where appropriate
* Minimal unnecessary JavaScript
* Clean component structure
* Fast initial load
* Good Core Web Vitals

Avoid adding heavy libraries unless necessary.

## Quality Checklist

Before finishing any major task, check:

* Does the page look professional?
* Is the layout responsive?
* Is the code clean and maintainable?
* Are components reusable?
* Are TypeScript errors resolved?
* Are obvious accessibility issues fixed?
* Are forms validated?
* Are secrets protected?
* Are animations subtle?
* Does the page guide users toward contacting the company?

## Working Style

Before making large changes:

* Briefly inspect the existing project structure
* Explain the intended approach
* Make focused changes
* Avoid unnecessary rewrites
* Preserve existing working code unless there is a clear reason to change it

When implementing features:

* Prefer simple, reliable solutions
* Keep the code understandable
* Avoid overengineering
* Explain important decisions briefly

## Skill Usage

Use the project skills in `.skills/` when relevant:

* Use `frontend-design` when designing pages, sections, layouts, components, and animations.
* Use `content-strategy` or `b2b-copywriting` when writing service descriptions, hero copy, CTAs, and page content.
* Use `conversion-optimization` when improving calls-to-action and lead capture flows.
* Use `accessibility-review` before finalizing UI work.
* Use `responsive-design` when building or reviewing layouts.
* Use `performance-optimization` before finalizing pages.
* Use `seo-optimization` when creating pages, metadata, headings, and content structure.
* Use `supabase-postgres` when working with database features.
* Use `security-review` when working with forms, APIs, authentication, environment variables, and database writes.

## Final Output Expectations

When completing a task, provide:

* Summary of what changed
* Files changed
* Any setup steps needed
* Any environment variables needed
* Any recommended next steps
