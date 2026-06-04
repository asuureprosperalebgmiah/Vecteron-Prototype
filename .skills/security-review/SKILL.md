---

name: security-review
description: Review frontend, backend, APIs, forms, database interactions, authentication, and deployment configurations for security risks and insecure practices. Use this skill whenever implementing or modifying application functionality.
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Security Review Skill

## Purpose

The purpose of this skill is to ensure that the application remains secure by default.

Security should be considered during design and implementation rather than added later.

The goal is to:

* Reduce risk
* Protect user data
* Protect business data
* Prevent common vulnerabilities
* Encourage secure coding practices

---

## Core Principle

Assume all user input is untrusted.

Never trust:

* Form submissions
* URL parameters
* Query parameters
* Cookies
* Client-side validation
* Browser-generated data

All validation must occur on the server when security is important.

---

## Secure By Default

Prefer secure defaults.

Avoid convenience shortcuts that introduce risk.

When uncertain, choose the more secure implementation.

---

## Secrets Management

Never hardcode:

* API keys
* Database credentials
* Access tokens
* Service role keys
* Private secrets

Use environment variables.

Sensitive values should never be committed to source control.

---

## Supabase Security

When using Supabase:

Never expose:

* Service role keys
* Administrative credentials

Client-side applications should use only the appropriate public credentials.

Use server-side logic whenever elevated privileges are required.

---

## Authentication

Authentication should:

* Use trusted providers or established libraries
* Validate sessions properly
* Expire invalid sessions

Avoid building custom authentication systems unless required.

Prefer proven solutions.

---

## Authorization

Authentication and authorization are different.

Always verify:

* Who is making the request
* What they are allowed to do

Never rely solely on UI restrictions.

Server-side authorization is required.

---

## Input Validation

Validate all user input.

Examples:

* Email addresses
* Form fields
* Uploaded files
* Query parameters
* API payloads

Validation should occur before processing or storage.

---

## Output Handling

Treat output carefully.

Avoid rendering untrusted content directly.

Prevent:

* Cross-site scripting
* Unsafe HTML rendering
* Script injection

Sanitize content where necessary.

---

## Forms

Forms should:

* Validate input
* Display safe error messages
* Prevent spam when appropriate

Avoid exposing internal system details in form responses.

---

## Error Handling

Error messages should be useful but not reveal sensitive information.

Avoid exposing:

* Stack traces
* Database details
* Internal paths
* Infrastructure information

Use generic user-facing messages.

Log detailed errors securely.

---

## Logging

Logs should assist troubleshooting without exposing sensitive information.

Avoid logging:

* Passwords
* Secrets
* Tokens
* Session identifiers
* Personal information unless required

Log only what is necessary.

---

## File Uploads

When implementing uploads:

Validate:

* File type
* File size
* File format

Do not trust file extensions alone.

Store uploads securely.

---

## API Security

APIs should:

* Validate requests
* Validate inputs
* Handle errors safely
* Return only required data

Avoid exposing unnecessary fields.

Use the principle of least privilege.

---

## Database Security

When working with PostgreSQL or Supabase:

Prefer:

* Parameterized queries
* ORM protections
* Limited access permissions

Avoid:

* Dynamic query construction
* Excessive privileges
* Unrestricted access

Retrieve only the data that is needed.

---

## Third-Party Dependencies

Before adding a dependency:

Ask:

* Is it necessary?
* Is it maintained?
* Does it solve a real problem?

Avoid dependency bloat.

Fewer dependencies generally reduce risk.

---

## Client-Side Security

Never assume client-side protections are sufficient.

Client-side checks improve usability.

Server-side checks provide security.

Both may be used together.

---

## Data Minimization

Collect only the information required.

Avoid storing unnecessary personal information.

Reduce risk by reducing stored data.

---

## Security Headers Mindset

Applications should support modern security practices.

Consider:

* Content Security Policy
* Secure cookies
* HTTPS
* Security headers

Use framework-supported approaches whenever possible.

---

## Review Checklist

Before completing work verify:

* No secrets are hardcoded.
* Environment variables are used correctly.
* User input is validated.
* Sensitive data is protected.
* APIs return only necessary information.
* Authentication is handled securely.
* Authorization checks exist where needed.
* Error messages do not reveal internal details.
* Logging avoids sensitive information.
* Database access follows least privilege.
* Dependencies are justified.

---

## Common Security Mistakes

Avoid:

* Exposing API keys
* Exposing service role keys
* Trusting client-side validation
* Logging sensitive data
* Rendering unsafe HTML
* Overly permissive permissions
* Excessive data exposure
* Hardcoded credentials

---

## Final Rule

Security should not make the application difficult to use.

The goal is practical, professional security.

Protect users, protect business data, and follow secure-by-default practices without introducing unnecessary complexity.
