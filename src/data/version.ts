/**
 * Single source of truth for the displayed bpfcompat version.
 *
 * This literal is the FALLBACK. At build time `scripts/fetch-version.ts`
 * (run in `prebuild`) rewrites it to the latest GitHub release tag of
 * Kernel-Guard/bpfcompat, so the site never drifts out of date. If the fetch
 * is unavailable (offline / rate-limited), this committed value is used as-is.
 */
export const BPFCOMPAT_VERSION = 'v0.3.0';
