---

name: supabase-postgres
description: Build, manage, and interact with Supabase PostgreSQL databases securely and efficiently. Use this skill whenever creating schemas, tables, queries, APIs, forms, authentication flows, or database-backed features.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Supabase PostgreSQL Skill

## Purpose

This skill ensures database functionality is:

* Secure
* Maintainable
* Scalable
* Efficient
* Easy to understand

Use this skill whenever working with:

* Supabase
* PostgreSQL
* Database-backed forms
* APIs
* Authentication
* Content management
* Admin functionality

---

## Core Principle

Use Supabase as the managed PostgreSQL platform.

Treat PostgreSQL as the source of truth.

Design data structures carefully before implementation.

Favor clarity and maintainability over complexity.

---

## Project Context

This project is a professional technology services company website.

Initial database use cases include:

* Contact form submissions
* Consultation requests
* Quote requests
* Newsletter subscriptions
* Future project portfolio content
* Future blog content
* Future admin dashboard functionality

Do not over-engineer the database.

Build for current needs while allowing future expansion.

---

## Database Design Principles

Prefer:

* Clear table names
* Consistent naming conventions
* Normalized structures
* Simple relationships

Avoid:

* Excessive tables
* Premature optimization
* Unnecessary complexity

Design for readability.

---

## Naming Conventions

Prefer:

* snake_case table names
* snake_case column names

Examples:

contact_requests

newsletter_subscribers

project_case_studies

blog_posts

created_at

updated_at

Avoid inconsistent naming patterns.

---

## Primary Keys

Use:

id UUID PRIMARY KEY

for most tables.

Prefer UUIDs over sequential identifiers.

---

## Timestamps

Include:

created_at

updated_at

on most business tables.

Track record creation and modification automatically when practical.

---

## Data Validation

Validate data before storage.

Examples:

* Email addresses
* Phone numbers
* URLs
* Required fields

Never rely solely on client-side validation.

---

## Query Principles

Retrieve only required data.

Prefer:

SELECT specific_columns

over:

SELECT *

Avoid unnecessary data retrieval.

---

## Performance Principles

Use:

* Indexed columns
* Targeted queries
* Pagination where appropriate

Avoid:

* Full-table scans
* Unnecessary joins
* Repeated queries

Optimize only when necessary.

---

## API Architecture

Frontend should not directly handle privileged operations.

Preferred architecture:

Frontend

↓

API Route / Server Action

↓

Supabase

↓

PostgreSQL

Use server-side logic whenever sensitive operations are involved.

---

## Environment Variables

Store credentials using environment variables.

Examples:

SUPABASE_URL

SUPABASE_ANON_KEY

SUPABASE_SERVICE_ROLE_KEY

Never hardcode credentials.

Never commit secrets to source control.

---

## Supabase Security

Treat the service role key as highly sensitive.

Never expose:

* Service role keys
* Administrative credentials

Frontend applications should use only appropriate public credentials.

Privileged actions belong on the server.

---

## Row Level Security

Prefer enabling Row Level Security (RLS) for production systems.

Design access policies deliberately.

Follow the principle of least privilege.

Deny access by default.

Grant only what is required.

---

## Authentication

When authentication is needed:

Prefer Supabase Auth.

Avoid building custom authentication systems unless required.

Use established authentication flows.

---

## Form Handling

Forms should:

* Validate inputs
* Sanitize data
* Handle errors gracefully

Examples:

* Contact forms
* Quote requests
* Consultation requests

Store only required information.

---

## Error Handling

Handle database failures safely.

Do not expose:

* SQL errors
* Internal stack traces
* Sensitive database details

Provide user-friendly messages.

Log technical details securely.

---

## Migrations

Prefer version-controlled migrations.

Database changes should be:

* Reproducible
* Traceable
* Reviewable

Avoid manual production changes whenever possible.

---

## Future Scalability

Design tables so future features can be added without major restructuring.

Examples:

* Blog system
* Portfolio system
* Admin dashboard
* User accounts

Avoid premature complexity.

---

## Review Checklist

Before completing database-related work verify:

* Naming conventions are consistent.
* Tables are appropriately structured.
* UUIDs are used where appropriate.
* Timestamps are included.
* Input validation exists.
* Queries retrieve only required data.
* Secrets are protected.
* Environment variables are used.
* RLS is considered where appropriate.
* Errors are handled safely.
* Data collection is minimized.

---

## Common Mistakes to Avoid

Avoid:

* Hardcoded credentials
* Exposed service role keys
* SELECT *
* Unvalidated user input
* Excessive table complexity
* Missing timestamps
* Missing indexes on frequently queried fields
* Unrestricted database access

---

## Final Rule

The database should remain:

* Secure
* Understandable
* Scalable
* Easy to maintain

Favor simple, reliable PostgreSQL designs over clever but unnecessary complexity.
