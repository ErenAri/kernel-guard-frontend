# Release Process

## Quality Gates

Every release should pass:

- `npm run lint`
- `npm test`
- `npm run audit:prod`
- `npm run build`
- Cloudflare Pages Functions build
- Preview startup check
- Lighthouse desktop gate from `.github/workflows/quality.yml`

## Release Checklist

- Confirm `.env` and hosting variables are set without committing secrets.
- Confirm `VITE_WEB3FORMS_ACCESS_KEY` exists in production before enabling the public form.
- Confirm `ADMIN_SESSION_SECRET` exists and is strong.
- Confirm `ALLOWED_ORIGINS` contains only exact production and explicitly approved preview origins.
- Confirm `security.txt`, MTA-STS, TLS-RPT, SPF, DKIM, and DMARC records are still accurate.
- Review service and project content for unsupported security claims.
- Review dependency changes and audit output.
- Build and inspect prerender output for localized pages.

## Deployment

Production output is generated in `dist`. Cloudflare deployment consumes static assets from `dist` and Functions from `functions/`.

Use the same commands locally that CI runs. Do not promote a deployment when typecheck, tests, audit, build, Functions build, preview startup, or Lighthouse gates fail.

## Rollback

- Revert the release commit or redeploy the previous known-good Cloudflare deployment.
- If an environment variable caused the issue, correct the variable in the hosting provider and redeploy.
- If a leaked key or token is suspected, rotate it before redeploying.
- If a public security issue is involved, update `SECURITY.md` handling notes and coordinate disclosure timing through `security@kernelguard.net`.

## Dependency Updates

- Prefer small, reviewable dependency changes.
- Run production audit after every dependency update.
- Watch for transitive package changes that affect Vite, React, Cloudflare Workers, or test runtime behavior.
- Record security-impacting dependency fixes in the public changelog page.
