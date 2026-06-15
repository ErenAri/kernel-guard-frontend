# Security Policy

Kernel Guard accepts good-faith vulnerability reports for the public website, admin content workflow, and supporting Cloudflare Pages Functions.

## Reporting

Send reports to `security@kernelguard.net`.

Please include:

- Affected URL, route, file, or endpoint.
- Reproduction steps.
- Expected and observed behavior.
- Security impact and affected data, if any.
- Safe proof of concept, screenshots, or logs.
- Your preferred contact details.

Do not include sensitive user data in reports. If you accidentally access data that is not yours, stop testing and report the issue immediately.

## Scope

In scope:

- `https://www.kernelguard.net`
- `https://kernelguard.net`
- Public website routes, forms, headers, and static assets.
- Cloudflare Pages Functions in `functions/`.
- Public repository configuration, CI, and dependency posture.

Out of scope:

- Denial-of-service, stress, or volume testing.
- Physical attacks, phishing, spam, or social engineering.
- Vulnerabilities in third-party services outside Kernel Guard control.
- Scanner-only findings without a reproducible impact.
- Missing best-practice headers with no realistic exploit path.

## Response Targets

- Acknowledge credible reports within 2 business days.
- Triage severity and reproduction within 5 business days.
- Provide remediation status for high-impact findings as soon as a fix path is known.
- Coordinate public disclosure only after remediation or an agreed disclosure date.

## Safe Harbor

Good-faith research is welcome when it avoids harm to users, data, infrastructure, and service availability. Stay within the defined scope, use test accounts or your own data, and do not persist access, exfiltrate data, or degrade service.

## Current Controls

- Static prerendered public pages behind Cloudflare.
- Browser security headers in `public/_headers`.
- Machine-readable disclosure contact in `public/.well-known/security.txt`.
- GitHub write access isolated behind `functions/api/github.js`.
- Admin session stored as an HttpOnly, Secure, SameSite=Strict cookie in production.
- No admin password, GitHub PAT, or session token stored in browser storage.
- Explicit admin API origin allowlist through `ALLOWED_ORIGINS`.
- Optional Cloudflare Turnstile verification for admin login.
- Rate limiting on admin API requests.
- Web3Forms contact key required through `VITE_WEB3FORMS_ACCESS_KEY`; no committed fallback key.
- CI gates for strict TypeScript, Vitest, npm audit, production build, Cloudflare Functions build, preview startup, and Lighthouse.
- Google Workspace SPF, DKIM, DMARC reporting, MTA-STS, and TLS-RPT tracking documented in `README.md`.

## Related Documents

- Threat model: `docs/security-threat-model.md`
- Release process: `docs/release-process.md`
- Public security page: `https://www.kernelguard.net/security/`
