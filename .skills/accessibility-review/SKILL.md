---

name: accessibility-review
description: Review frontend components, pages, forms, and layouts for accessibility, usability, and WCAG compliance. Use this skill whenever creating or modifying user interfaces.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Accessibility Review Skill

This skill ensures that interfaces are accessible, usable, and inclusive.

Apply this skill whenever creating, modifying, or reviewing:

* Pages
* Components
* Forms
* Navigation
* Modals
* Dashboards
* Cards
* Tables
* Interactive elements

## Core Principle

Accessibility is not an optional enhancement.

Accessibility should be considered during implementation, not added later.

The interface should be usable by:

* Keyboard users
* Screen reader users
* Users with low vision
* Users with color vision deficiencies
* Users with motor impairments
* Users on mobile devices

## Semantic HTML

Prefer semantic HTML whenever possible.

Use:

* header
* nav
* main
* section
* article
* aside
* footer
* button

instead of generic div elements when appropriate.

Avoid excessive nesting.

## Headings

Use proper heading hierarchy.

Preferred:

h1 → h2 → h3 → h4

Avoid skipping heading levels.

Each page should contain a meaningful h1.

## Images

All meaningful images must have descriptive alt text.

Decorative images should use:

alt=""

Do not use generic descriptions such as:

* image
* graphic
* picture

## Buttons

Buttons must:

* Have descriptive text
* Be keyboard accessible
* Have visible focus states
* Be large enough to interact with comfortably

Avoid icon-only buttons unless they include accessible labels.

## Links

Links should clearly describe their destination.

Avoid:

* Click here
* Read more
* Learn more

Prefer:

* View Services
* Request a Consultation
* Read Our Case Studies

## Forms

Every form field must:

* Have a visible label
* Provide validation feedback
* Display helpful error messages
* Be keyboard accessible

Use:

* label
* fieldset
* legend

where appropriate.

Never rely solely on placeholder text.

## Keyboard Navigation

Users must be able to:

* Navigate using Tab
* Activate controls using Enter or Space
* Access menus
* Access forms
* Access modal dialogs

Interactive elements must have visible focus indicators.

Do not remove focus outlines without providing an improved replacement.

## Color and Contrast

Ensure sufficient contrast between text and background.

Avoid relying solely on color to communicate information.

Examples:

Bad:

* Red text only indicates error

Good:

* Error icon + message + color

## Motion and Animation

Animations should enhance usability.

Provide restrained motion.

Avoid:

* Excessive flashing
* Rapid movement
* Distracting animation loops

Animations should not interfere with reading or navigation.

## Responsive Accessibility

Accessibility applies across all screen sizes.

Verify:

* Mobile usability
* Tablet usability
* Desktop usability

Ensure touch targets are large enough on mobile devices.

## ARIA

Use ARIA only when semantic HTML is insufficient.

Do not add unnecessary ARIA attributes.

Prefer native HTML behavior whenever possible.

## Tables

Tables must:

* Use proper headers
* Include table structure
* Remain readable on smaller screens

Avoid using tables for layout.

## Modals and Dialogs

Modals should:

* Trap keyboard focus
* Support Escape to close
* Restore focus when closed
* Be accessible to screen readers

## Error Handling

Error messages should:

* Explain the problem clearly
* Explain how to fix it
* Be accessible to assistive technologies

Avoid vague messages.

Bad:

* Invalid input

Good:

* Please enter a valid email address.

## Review Checklist

Before completing UI work, verify:

* Semantic HTML is used appropriately.
* Headings follow a logical structure.
* Images include proper alt text.
* Buttons are accessible.
* Links are descriptive.
* Forms contain labels.
* Keyboard navigation works.
* Focus states are visible.
* Color contrast is sufficient.
* Responsive layouts remain usable.
* ARIA is used only when necessary.
* Error messages are clear.
* Animations do not reduce usability.

## Final Rule

Accessibility should improve usability for everyone, not only users with disabilities.

When there is a choice between visual flair and usability, prioritize usability.
