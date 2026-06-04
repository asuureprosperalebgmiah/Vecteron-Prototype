---

name: performance-optimization
description: Ensure frontend and backend implementations remain fast, efficient, responsive, and scalable. Use this skill whenever creating, reviewing, or modifying pages, components, APIs, database interactions, animations, or assets.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Performance Optimization Skill

## Purpose

The purpose of this skill is to ensure that the website remains:

* Fast
* Responsive
* Efficient
* Scalable
* Mobile-friendly

Performance is a feature.

A visually impressive website that loads slowly is a poor user experience.

---

## Core Principle

Prioritize:

User Experience > Visual Effects

Maintain visual quality while minimizing unnecessary complexity.

Whenever possible:

* Reduce page weight
* Reduce JavaScript
* Reduce network requests
* Reduce render blocking resources

---

## Performance Mindset

Before implementing a feature ask:

* Is this necessary?
* Can it be simplified?
* Can it be achieved with CSS instead of JavaScript?
* Does it justify its performance cost?

Avoid adding complexity without clear value.

---

## Frontend Performance

Prioritize:

* Fast initial page load
* Fast interaction times
* Fast navigation
* Smooth scrolling
* Responsive UI

Avoid:

* Heavy animation libraries
* Excessive re-renders
* Large client-side bundles
* Unnecessary dependencies

---

## Images

Images are often the largest performance cost.

Always:

* Compress images
* Use modern formats when possible
* Use responsive image sizing
* Lazy-load non-critical images

Avoid:

* Oversized images
* Full-resolution uploads
* Unoptimized media

---

## Fonts

Use a limited number of fonts.

Prefer:

* One display font
* One body font

Avoid:

* Excessive font families
* Excessive font weights
* Large font downloads

Typography should remain performant.

---

## Animations

Animations should feel smooth and intentional.

Prefer:

* Transform
* Opacity

Avoid:

* Frequent layout shifts
* Expensive animations
* Excessive motion

Use animations sparingly.

The purpose is enhancement, not entertainment.

---

## React and Next.js Optimization

Prefer:

* Server Components where appropriate
* Lazy loading when beneficial
* Reusable components
* Efficient state management

Avoid:

* Unnecessary client components
* Excessive state updates
* Deep prop drilling
* Duplicate logic

---

## Code Quality

Write maintainable code.

Prefer:

* Small components
* Reusable components
* Clear abstractions

Avoid:

* Duplicate implementations
* Large monolithic files
* Unnecessary complexity

Good architecture improves performance.

---

## API Performance

APIs should:

* Return only required data
* Validate inputs efficiently
* Handle errors gracefully

Avoid:

* Returning excessive data
* Unnecessary requests
* Repeated queries

---

## Database Performance

When working with Supabase PostgreSQL:

Prefer:

* Indexed queries
* Targeted queries
* Pagination when needed

Avoid:

* Fetching entire tables
* Repeated database calls
* Unnecessary joins

Only retrieve the data that is needed.

---

## Asset Optimization

Optimize:

* Images
* Icons
* Fonts
* Video

Avoid shipping assets that are not used.

Remove unused resources.

---

## Mobile Performance

Mobile performance is critical.

Always verify:

* Fast loading
* Responsive layouts
* Efficient animations
* Readable content
* Touch responsiveness

Optimize for average mobile devices, not only high-end hardware.

---

## Accessibility and Performance

Performance improvements must not reduce accessibility.

Do not sacrifice:

* Semantic HTML
* Accessibility features
* Usability

for small performance gains.

---

## Core Web Vitals Mindset

Prioritize:

* Fast loading
* Stable layouts
* Responsive interactions

Avoid:

* Layout shifts
* Blocking resources
* Delayed interactions

---

## Review Checklist

Before completing work verify:

* Images are optimized.
* Fonts are optimized.
* Unnecessary dependencies are avoided.
* Components are reusable.
* JavaScript is minimized.
* Animations remain lightweight.
* Database queries are efficient.
* API responses are efficient.
* Mobile performance remains strong.
* Accessibility has not been compromised.

---

## Final Rule

The website should feel fast, smooth, and professional.

Visitors should experience:

* Quick page loads
* Smooth interactions
* Responsive interfaces
* Reliable performance

When choosing between a visually impressive feature and a faster user experience, prefer the faster user experience unless the visual benefit is substantial.
