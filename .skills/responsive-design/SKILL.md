---

name: responsive-design
description: Ensure all interfaces, pages, components, and layouts work effectively across mobile, tablet, laptop, and desktop devices. Use this skill whenever building or modifying frontend UI.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Responsive Design Skill

## Purpose

The purpose of this skill is to ensure that every interface remains:

* Usable
* Readable
* Accessible
* Professional

across all screen sizes.

Responsive design is not an afterthought.

It is a core requirement.

---

## Core Principle

Design mobile-first.

Start with the smallest practical screen size and progressively enhance for larger screens.

Avoid designing exclusively for desktop.

---

## Supported Viewports

All layouts should function effectively on:

### Mobile

Approximate width:

* 320px
* 375px
* 390px
* 414px

---

### Tablet

Approximate width:

* 768px
* 820px
* 1024px

---

### Laptop

Approximate width:

* 1280px
* 1366px
* 1440px

---

### Desktop

Approximate width:

* 1600px+
* 1920px+

---

## Layout Principles

Prioritize:

* Flexible layouts
* Fluid sizing
* Logical content flow
* Consistent spacing

Avoid:

* Fixed widths
* Overflow issues
* Horizontal scrolling
* Content clipping

Layouts should adapt naturally.

---

## Mobile First

Begin with the mobile experience.

Then enhance for larger screens.

Ask:

* Is the content readable?
* Is navigation usable?
* Are actions obvious?
* Is the layout clean?

before considering desktop enhancements.

---

## Typography

Text must remain readable across devices.

Avoid:

* Tiny font sizes
* Excessively large headings
* Compressed text blocks

Maintain clear hierarchy at every breakpoint.

---

## Navigation

Navigation should adapt appropriately.

Examples:

### Mobile

* Hamburger menu
* Slide-out menu
* Compact navigation

### Desktop

* Full navigation bar
* Expanded navigation options

Navigation should never become difficult to access.

---

## Cards and Content Blocks

Cards should:

* Stack naturally on mobile
* Expand into grids on larger screens

Avoid forcing multi-column layouts on small screens.

Content should remain readable without zooming.

---

## Images and Media

Images should:

* Scale appropriately
* Remain visible
* Avoid distortion

Use responsive sizing whenever possible.

Avoid oversized media that dominates mobile screens.

---

## Forms

Forms should remain easy to complete on mobile devices.

Ensure:

* Inputs are large enough
* Labels remain visible
* Buttons remain tappable

Avoid cramped layouts.

---

## Touch Targets

Interactive elements must be easy to use.

Examples:

* Buttons
* Links
* Dropdowns
* Menus
* Form controls

Avoid small click targets.

Design for fingers, not mouse pointers.

---

## Spacing

Spacing should adapt across devices.

Maintain:

* Breathing room
* Visual hierarchy
* Readability

Avoid overcrowded mobile layouts.

---

## Responsive Components

Every component should be reviewed independently.

Examples:

* Hero sections
* Service cards
* Testimonials
* Pricing sections
* Contact forms
* Navigation bars
* Footers

Do not assume a component that works on desktop works on mobile.

---

## Responsive Grids

Prefer:

* Flexible grid systems
* CSS Grid
* Flexbox

Use breakpoint-based adjustments when needed.

Avoid rigid layouts.

---

## Tables

Tables often break on mobile.

When displaying tables:

* Use responsive containers
* Allow horizontal scrolling when necessary
* Consider alternative layouts

Prioritize readability.

---

## Animation Responsiveness

Animations should remain smooth across devices.

Avoid:

* Heavy effects
* Excessive motion
* Animations that impact mobile performance

Visual polish should not reduce usability.

---

## Testing Mindset

Before completing work, verify:

### Mobile

* Layout works
* Text is readable
* Navigation functions correctly
* Buttons are accessible

### Tablet

* Layout remains balanced
* Content scales appropriately

### Desktop

* Layout uses available space effectively
* Content does not become excessively stretched

---

## Tailwind CSS Guidelines

Prefer responsive utility classes.

Examples:

* sm:
* md:
* lg:
* xl:
* 2xl:

Build progressively rather than overriding large desktop layouts.

---

## Common Problems to Avoid

Avoid:

* Horizontal scrolling
* Text overflow
* Image overflow
* Fixed-width containers
* Tiny buttons
* Hidden content
* Overlapping elements
* Broken navigation
* Excessive whitespace on large screens

---

## Review Checklist

Before completing UI work verify:

* Mobile layout is usable.
* Tablet layout is usable.
* Desktop layout is usable.
* Navigation works on all devices.
* Forms work on all devices.
* Images scale correctly.
* Text remains readable.
* Touch targets are large enough.
* No horizontal scrolling exists.
* Components adapt appropriately.

---

## Final Rule

A website is only truly complete when it works well on all major screen sizes.

When making design decisions:

Mobile usability comes first.

Desktop enhancements come second.

The user experience should feel intentional on every device.
