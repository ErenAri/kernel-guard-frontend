# Kernel Guard Frontend

React/Vite frontend for the Kernel Guard website, including prerendered public pages, the admin content workflow, and the Web3Forms contact form.

## Prerequisites

- Node.js 22
- npm

## Local Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in local values:

   ```bash
   cp .env.example .env
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The dev server runs on `http://localhost:3000`.

## Environment

Keep real secrets in `.env` locally and in the hosting provider's environment variables. Do not commit `.env`.

Important variables:

- `VITE_WEB3FORMS_ACCESS_KEY`: contact form access key used by the browser client.
- `GITHUB_PAT`, `GITHUB_OWNER`, `GITHUB_REPO`: admin content editing integration.
- `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`: admin authentication.
- `TURNSTILE_SECRET_KEY`, `VITE_TURNSTILE_SITE_KEY`: optional Cloudflare Turnstile protection.
- `SITE_URL`: canonical site URL for sitemap and prerender output.
- `VITE_GOOGLE_SITE_VERIFICATION`: optional Google Search Console HTML tag verification token.

## Contact Routing

The website uses the role inboxes defined in `src/config/site.ts`:

- General contact: `contact@kernelguard.net`
- Support: `support@kernelguard.net`
- Security disclosures: `security@kernelguard.net`
- Legal: `legal@kernelguard.net`
- Privacy: `privacy@kernelguard.net`
- Sales: `sales@kernelguard.net`

The old `iletisim@kernelguard.net` address has been replaced by `contact@kernelguard.net`. Update any external automation, email forwarding, and third-party form notifications to use the new role inboxes.

For Google Workspace email delivery, keep SPF and DKIM enabled and publish a DMARC TXT record for `kernelguard.net`.

Starter DMARC record:

```txt
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:dmarc@kernelguard.net; pct=100
```

After report monitoring confirms legitimate mail passes alignment, move the policy from `p=none` to `p=quarantine`, then `p=reject`.

MTA-STS and TLS-RPT hardening records:

```txt
Type: TXT
Name: _smtp._tls
Value: v=TLSRPTv1; rua=mailto:dmarc@kernelguard.net

Type: TXT
Name: _mta-sts
Value: v=STSv1; id=20260614191500
```

The MTA-STS policy is published from `public/.well-known/mta-sts.txt` and starts in `testing` mode for Google Workspace MX host `smtp.google.com`. Configure `mta-sts.kernelguard.net` in Cloudflare so `https://mta-sts.kernelguard.net/.well-known/mta-sts.txt` serves that file over HTTPS. After at least two weeks of clean TLS reports, change `mode: testing` to `mode: enforce`, update the `_mta-sts` DNS `id`, and redeploy.

## Scripts

```bash
npm run dev          # Start Vite dev server
npm run lint         # Typecheck with TypeScript
npm test             # Run Vitest tests
npm run build        # Build client, SSR bundle, sitemap, and prerendered pages
npm run preview      # Preview the production build
npm run audit:prod   # Audit production dependencies
```

## Deployment

The production build output is `dist`. The repository includes `wrangler.jsonc` so Cloudflare Workers can upload static assets from `./dist`.

GitHub Actions runs typecheck, tests, dependency audit, production build, Cloudflare Functions build, preview startup, and Lighthouse checks on pull requests and pushes to `main`.
