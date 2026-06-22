/**
 * Build-time refresh of src/data/version.ts from the latest GitHub release of
 * Kernel-Guard/bpfcompat. Runs in `prebuild`. Best-effort: any failure
 * (network, rate limit, no releases) leaves the committed fallback untouched
 * and never fails the build.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const REPO = 'Kernel-Guard/bpfcompat';
const VERSION_FILE = fileURLToPath(new URL('../src/data/version.ts', import.meta.url));
const REPORT_FILE = fileURLToPath(new URL('../src/data/bpfcompatReport.json', import.meta.url));

async function main(): Promise<void> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'kernel-guard-frontend-build',
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers });
  if (!res.ok) {
    console.warn(`[fetch-version] releases/latest -> ${res.status}; keeping fallback`);
    return;
  }
  const data = (await res.json()) as { tag_name?: string };
  const tag = (data.tag_name ?? '').trim();
  if (!/^v?\d+\.\d+\.\d+/.test(tag)) {
    console.warn(`[fetch-version] unexpected tag ${JSON.stringify(tag)}; keeping fallback`);
    return;
  }
  const version = tag.startsWith('v') ? tag : `v${tag}`;

  const src = readFileSync(VERSION_FILE, 'utf8');
  const updated = src.replace(
    /export const BPFCOMPAT_VERSION = '[^']*';/,
    `export const BPFCOMPAT_VERSION = '${version}';`,
  );
  if (updated === src) {
    console.log(`[fetch-version] already ${version}`);
  } else {
    writeFileSync(VERSION_FILE, updated);
    console.log(`[fetch-version] BPFCOMPAT_VERSION -> ${version}`);
  }

  // Keep the sample report's version field in sync too (data, not displayed).
  const report = readFileSync(REPORT_FILE, 'utf8');
  const reportUpdated = report.replace(/("version":\s*)"[^"]*"/, `$1"${version}"`);
  if (reportUpdated !== report) {
    writeFileSync(REPORT_FILE, reportUpdated);
    console.log(`[fetch-version] report.json version -> ${version}`);
  }
}

main().catch((err) => {
  console.warn(`[fetch-version] skipped (${err instanceof Error ? err.message : err}); keeping fallback`);
});
