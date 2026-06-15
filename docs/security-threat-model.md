# Security Threat Model

## Assets

- Public brand content, localized pages, project descriptions, and service pages.
- Admin credentials and admin session cookie.
- GitHub PAT used by the server-side content bridge.
- Contact form submissions and role inbox routing.
- DNS, email authentication records, and trust files.
- CI pipeline, dependency tree, and production build artifacts.

## Trust Boundaries

- Browser to public static assets.
- Browser to `https://api.web3forms.com/submit` for contact form delivery.
- Browser to same-origin `/api/github` for admin operations.
- Cloudflare Pages Function to GitHub Contents API.
- GitHub Actions to repository build and verification gates.
- Google Workspace to external mail senders and recipients.

## Primary Threats

- Secret exposure through committed fallback keys or browser storage.
- XSS leading to admin session abuse.
- CSRF or permissive CORS against admin write APIs.
- Credential stuffing or brute-force attempts against admin login.
- Dependency compromise or vulnerable packages.
- Email spoofing against company role inboxes.
- Misconfigured preview deployments gaining write capability.
- Content regression that weakens credibility or publishes inaccurate claims.

## Controls

- No committed Web3Forms fallback key; contact form fails closed when the env var is missing.
- Admin login sends password only for session creation.
- Admin session material is held in an HttpOnly, Secure, SameSite=Strict cookie in production.
- Client storage keeps only non-secret admin identity.
- Admin API uses exact origin allowlisting; Cloudflare Pages preview domains are not wildcarded.
- Server-side GitHub PAT is never sent to the browser.
- Optional Turnstile plus API rate limiting reduce automated login abuse.
- Strict TypeScript, tests, dependency audit, build, Cloudflare Functions build, and Lighthouse run in CI.
- Security headers, `security.txt`, MTA-STS, TLS-RPT, SPF, DKIM, and DMARC are documented and published.
- Service and project pages include scope, standards, deliverables, and case-study evidence instead of generic claims.

## Residual Risks

- Admin authentication is custom and should eventually move to a managed identity provider with MFA and audit logs.
- CSP should be moved toward report-only telemetry, then enforcement tuning with violation reporting.
- Cloudflare WAF/rate rules should be managed as code for repeatable production posture.
- Dependency review can be expanded with CodeQL or another SAST gate.
- DMARC should move from monitoring to `p=quarantine`, then `p=reject` after alignment confidence.
- Preview deployment origins must be maintained explicitly in `ALLOWED_ORIGINS` when write testing is required.

## Review Cadence

Review this threat model after changes to authentication, admin writes, DNS/email configuration, CI, or the contact form provider.
