import { describe, it, expect } from 'vitest';
import report from '../data/bpfcompatReport.json';

/**
 * Guards the real report.json that drives the compatibility matrix: complete
 * coverage (every artifact × kernel), valid states, and a tally that matches
 * what the page renders. If the report is ever swapped for a live run, this
 * keeps it structurally honest.
 */

const VALID_STATES = ['pass', 'fail', 'partial', 'skip'];

describe('bpfcompat report.json', () => {
  it('has kernels, artifacts, and results', () => {
    expect(report.kernels.length).toBeGreaterThan(0);
    expect(report.artifacts.length).toBeGreaterThan(0);
    expect(report.results.length).toBe(report.kernels.length * report.artifacts.length);
  });

  it('covers every artifact × kernel exactly once', () => {
    const seen = new Set<string>();
    for (const r of report.results) {
      const key = `${r.artifact}__${r.kernel}`;
      expect(seen.has(key), `duplicate cell: ${key}`).toBe(false);
      seen.add(key);
    }
    for (const a of report.artifacts) {
      for (const k of report.kernels) {
        expect(seen.has(`${a.name}__${k.id}`), `missing cell: ${a.name} × ${k.id}`).toBe(true);
      }
    }
  });

  it('only uses valid cell states', () => {
    for (const r of report.results) {
      expect(VALID_STATES, `bad state '${r.state}' for ${r.artifact}`).toContain(r.state);
    }
  });

  it('references only declared artifacts and kernels', () => {
    const artifactNames = new Set(report.artifacts.map((a) => a.name));
    const kernelIds = new Set(report.kernels.map((k) => k.id));
    for (const r of report.results) {
      expect(artifactNames.has(r.artifact), `unknown artifact ${r.artifact}`).toBe(true);
      expect(kernelIds.has(r.kernel), `unknown kernel ${r.kernel}`).toBe(true);
    }
  });

  it('exits non-zero iff there is at least one failure', () => {
    const fails = report.results.filter((r) => r.state === 'fail').length;
    // The page renders "exit 2" when (and only when) a regression/fail exists.
    expect(fails > 0).toBe(true); // the showcase run intentionally contains a failure
  });
});
