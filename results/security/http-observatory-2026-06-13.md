# HTTP Observatory — www.kernelguard.net

- **Scanner:** Mozilla HTTP Observatory (MDN)
- **Scan date:** 2026-06-13 (server `Date: Sat, 13 Jun 2026 17:53:17 GMT`)
- **Result (as scanned):** **B+ · 80 / 100 · 9/10 tests passed**
- **Host:** Cloudflare (`Server: cloudflare`)

## Scoring (as scanned)

| Test | Score | Result |
|---|---|---|
| Content Security Policy (CSP) | **−20** | **Failed** — `'unsafe-inline'` in `script-src` |
| Cookies | — | No cookies detected |
| Cross-Origin Resource Sharing (CORS) | 0 | Passed |
| Redirection | 0 | Passed (HTTP→HTTPS, same host) |
| Referrer Policy | 0 | Passed (`strict-origin-when-cross-origin`) |
| Subresource Integrity | — | Not implemented (all scripts same-origin) |
| Strict Transport Security (HSTS) | 0 | Passed (≥ 6 months; preload set) |
| X-Content-Type-Options | 0 | Passed (`nosniff`) |
| X-Frame-Options | 0 | Passed (via CSP `frame-ancestors`) |
| Cross-Origin Resource Policy | — | Not implemented (defaults to cross-origin) |

## CSP analysis (as scanned)

Passed: `unsafe-eval` blocked · `object-src 'none'` · no active/passive mixed content ·
`frame-ancestors` · `base-uri` restricted · `form-action` restricted.

Failed:
- **Blocks inline JavaScript** — `script-src` contained `'unsafe-inline'`.
- **Blocks inline styles** — `style-src` contains `'unsafe-inline'` (informational; required for React inline `style=` attributes; does not incur the −20).
- **Deny by default** — used `default-src 'self'` rather than `'none'` (informational).

## Remediation applied (2026-06-13)

The entire −20 came from `'unsafe-inline'` in `script-src`. Verified the built HTML
contains **no executable inline JavaScript** — only `application/ld+json` data blocks
(not subject to `script-src` execution) and the external module entry
(`script-src 'self'`). Vite's module-preload polyfill is disabled
(`build.modulepreload.polyfill = false`) so no inline polyfill script is emitted.

**Change in `public/_headers`:**

```diff
- script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com;
+ script-src 'self' https://challenges.cloudflare.com;
```

`style-src 'unsafe-inline'` is intentionally retained (React inline style attributes;
does not affect the script-src penalty).

**Expected after redeploy:** the CSP "implemented unsafely" penalty clears → **A/A+**.

## Verify after deploy

- HTTP Observatory: https://developer.mozilla.org/en-US/observatory/analyze?host=www.kernelguard.net
- securityheaders.com: https://securityheaders.com/?q=https%3A%2F%2Fwww.kernelguard.net&followRedirects=on

## Smoke-test after deploy (CSP can break things silently)

- [ ] Site loads + hydrates (no console CSP errors)
- [ ] Contact form submits (Web3Forms) and Turnstile widget renders
- [ ] JSON-LD still present in page source (View Source → `application/ld+json`)
- [ ] Re-run both scanners and archive the new grade here
