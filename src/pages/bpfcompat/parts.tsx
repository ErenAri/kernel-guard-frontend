/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Shared building blocks for the bpfcompat product-page design previews.
 * Preview-only: sample data is clearly labelled. Not wired into production routes.
 */

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { BPFCOMPAT_VERSION } from '../../data/version';
import { NavLink, useLocation } from 'react-router-dom';
import { useBp } from './content';
import {
  Check, X, AlertTriangle, Minus, Github, ExternalLink, Copy, Pause, Play,
  Terminal as TerminalIcon, FileCode2, Boxes, ShieldCheck, Table2,
  ArrowLeft, BookOpen, Cpu, Network, Server, ScrollText, FileText,
} from 'lucide-react';

export const GITHUB_URL = 'https://github.com/Kernel-Guard/bpfcompat';
export const DEMO_URL = 'https://bpfcompat.kernelguard.net/';
export const DOCS_URL = 'https://github.com/Kernel-Guard/bpfcompat/tree/main/docs';
const DOC_BASE = 'https://github.com/Kernel-Guard/bpfcompat/blob/main';

/* --------------------------------------------------------------------------
 * Compatibility data — sourced from a real report.json (src/data).
 * Swap that file for a live measured run to publish real results.
 * ------------------------------------------------------------------------ */

import report from '../../data/bpfcompatReport.json';

export type CellState = 'pass' | 'fail' | 'partial' | 'skip';

export interface KernelCol {
  id: string;
  distro: string;
  version: string;
  arch: string;
}

export interface ArtifactRow {
  name: string;
  kind: string;
}

export interface ResultEntry {
  artifact: string;
  kernel: string;
  state: CellState;
  stage?: string;
  btf?: string;
  coreRelocations?: string;
  caps?: string;
  detail?: string;
  human?: string;
}

export const REPORT = report as {
  tool: string; version: string; generatedAt: string; gate: string;
  source: string; note: string;
  kernels: KernelCol[]; artifacts: ArtifactRow[]; results: ResultEntry[];
};

export const KERNELS: KernelCol[] = REPORT.kernels;
export const ARTIFACTS: ArtifactRow[] = REPORT.artifacts;

// Look up a cell's result by artifact name + kernel id.
const RESULT_INDEX: Record<string, ResultEntry> = Object.fromEntries(
  REPORT.results.map((r) => [`${r.artifact}__${r.kernel}`, r]),
);

export function getResult(artifact: string, kernel: string): ResultEntry | undefined {
  return RESULT_INDEX[`${artifact}__${kernel}`];
}

function countState(state: CellState): number {
  return REPORT.results.filter((r) => r.state === state).length;
}

export const PASS_COUNT = countState('pass');
export const FAIL_COUNT = countState('fail');
export const PARTIAL_COUNT = countState('partial');
export const HAS_REGRESSION = FAIL_COUNT > 0;

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

/* --------------------------------------------------------------------------
 * Small primitives
 * ------------------------------------------------------------------------ */

export function Chip({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={
        'px-3 py-1 text-xs font-mono uppercase tracking-wider border ' +
        (accent
          ? 'border-primary text-primary'
          : 'border-border bg-surface text-foreground/80')
      }
    >
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/50 mb-4">
      {children}
    </div>
  );
}

/** Signature kernel-motif eyebrow: a kernel-green `//` prefix + mono label. */
export function Kicker({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={'text-xs font-mono uppercase tracking-[0.25em] text-foreground/55 ' + className}>
      <span className="text-signature">// </span>
      {children}
    </p>
  );
}

/** Signature blinking terminal caret. Decorative; hidden from assistive tech. */
export function Caret() {
  return <span aria-hidden="true" className="kg-caret" />;
}

export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border bg-background p-4">
      <div className="text-xs font-mono uppercase text-foreground/50 mb-2">{label}</div>
      <div className="text-lg font-medium text-foreground">{value}</div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Cell glyph + state styling
 * ------------------------------------------------------------------------ */

export function cellClasses(state: CellState): string {
  switch (state) {
    case 'pass':
      return 'bg-[#24a148]/10 border-[#24a148]/40 text-[#0e6027] dark:text-[#42be65]';
    case 'fail':
      return 'bg-[#da1e28]/10 border-[#da1e28]/45 text-[#b81922] dark:text-[#fa4d56]';
    case 'partial':
      return 'bg-[#f1c21b]/12 border-[#f1c21b]/50 text-[#8e6a00] dark:text-[#f1c21b]';
    case 'skip':
      return 'border-dashed border-border text-foreground/40';
  }
}

export function CellGlyph({ state }: { state: CellState }) {
  const cls = 'w-3.5 h-3.5 shrink-0';
  if (state === 'pass') return <Check className={cls} strokeWidth={3} />;
  if (state === 'fail') return <X className={cls} strokeWidth={3} />;
  if (state === 'partial') return <AlertTriangle className={cls} strokeWidth={2.5} />;
  return <Minus className={cls} strokeWidth={3} />;
}

export function stateLabel(state: CellState): string {
  return state === 'partial' ? 'PART' : state.toUpperCase();
}

export function Legend() {
  const t = useBp();
  const items: Array<[CellState, string]> = [
    ['pass', 'PASS'],
    ['fail', 'FAIL'],
    ['partial', t.evidence.legendPartial],
    ['skip', 'SKIP'],
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {items.map(([s, label]) => (
        <span key={s} className="inline-flex items-center gap-2 text-xs font-mono text-foreground/70">
          <span className={'inline-flex items-center justify-center w-5 h-5 border ' + cellClasses(s)}>
            <CellGlyph state={s} />
          </span>
          {label}
        </span>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Interactive compatibility matrix with evidence drawer
 * ------------------------------------------------------------------------ */

export function CompatibilityMatrix({ animateOnView = true }: { animateOnView?: boolean }) {
  const t = useBp();
  const reduced = usePrefersReducedMotion();
  const [revealedCols, setRevealedCols] = useState(animateOnView && !reduced ? 0 : KERNELS.length);
  const [selected, setSelected] = useState<{ artifact: string; kernel: string } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!animateOnView || reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let c = 0;
          const tick = () => {
            c += 1;
            setRevealedCols(c);
            if (c < KERNELS.length) window.setTimeout(tick, 220);
          };
          window.setTimeout(tick, 200);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [animateOnView, reduced]);

  const sel = selected ? getResult(selected.artifact, selected.kernel) : null;
  const ev = sel && (sel.detail || sel.human) ? sel : null;
  const selKernel = selected ? KERNELS.find((k) => k.id === selected.kernel) : null;

  return (
    <div ref={ref}>
      <div className="border border-border bg-background overflow-x-auto">
        <table className="w-full border-collapse min-w-[680px]">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-background text-left p-3 align-bottom border-b border-border">
                <span className="text-xs font-mono uppercase text-foreground/50">artifact × kernel</span>
              </th>
              {KERNELS.map((k, ci) => (
                <th key={k.id} className="p-3 border-b border-l border-border align-bottom text-left">
                  <div className="text-xs font-mono text-foreground">{k.distro}</div>
                  <div className="text-xs font-mono text-foreground/50">
                    {k.version}
                    {k.arch === 'arm64' && (
                      <span className="ml-1 px-1 border border-border text-[10px]">ARM64</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ARTIFACTS.map((a) => (
              <tr key={a.name}>
                <td className="sticky left-0 z-10 bg-background p-3 border-b border-border whitespace-nowrap">
                  <div className="text-sm font-mono text-foreground">{a.name}</div>
                  <span className="text-[10px] font-mono text-foreground/50 border border-border px-1 mt-1 inline-block">
                    {a.kind}
                  </span>
                </td>
                {KERNELS.map((k, ci) => {
                  const result = getResult(a.name, k.id);
                  const state = result?.state ?? 'skip';
                  const hasEv = !!(result && (result.detail || result.human));
                  const shown = ci < revealedCols;
                  const isSel = selected?.artifact === a.name && selected?.kernel === k.id;
                  return (
                    <td key={k.id} className="p-2 border-b border-l border-border">
                      <button
                        type="button"
                        disabled={!hasEv}
                        onClick={() => hasEv && setSelected(isSel ? null : { artifact: a.name, kernel: k.id })}
                        aria-label={`${a.name} on ${k.distro} ${k.version}${k.arch === 'arm64' ? ' arm64' : ''}: ${stateLabel(state)}`}
                        className={
                          'w-full min-h-[44px] flex items-center justify-center gap-1.5 border text-xs font-mono ' +
                          'transition-all duration-200 ' +
                          (shown ? 'opacity-100 ' : 'opacity-0 ') +
                          cellClasses(state) + ' ' +
                          (hasEv ? 'cursor-pointer hover:brightness-95 ' : 'cursor-default ') +
                          (isSel ? 'ring-2 ring-primary ' : '')
                        }
                      >
                        <CellGlyph state={state} />
                        {stateLabel(state)}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* tally bar */}
      <div className="flex flex-wrap items-center gap-3 mt-3 text-sm font-mono text-foreground/70">
        <span>{PASS_COUNT} PASS</span>
        <span className="text-foreground/30">·</span>
        <span>{FAIL_COUNT} FAIL</span>
        <span className="text-foreground/30">·</span>
        <span>{PARTIAL_COUNT} PARTIAL</span>
        <span className="text-foreground/30">→</span>
        {HAS_REGRESSION ? (
          <>
            <span className="px-2 py-0.5 border border-[#da1e28]/50 text-[#b81922] dark:text-[#fa4d56]">exit 2</span>
            <span className="text-foreground/40 normal-case">{t.evidence.tallyRegression}</span>
          </>
        ) : (
          <>
            <span className="px-2 py-0.5 border border-[#24a148]/50 text-[#0e6027] dark:text-[#42be65]">exit 0</span>
            <span className="text-foreground/40 normal-case">{t.evidence.tallyOk}</span>
          </>
        )}
      </div>

      {/* evidence drawer */}
      {ev && selKernel && (
        <div className="mt-4 border border-border border-l-4 border-l-primary bg-surface">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border">
            <span className="text-xs font-mono uppercase text-foreground/60">
              {ev.artifact} × {selKernel.distro} {selKernel.version}
              {selKernel.arch === 'arm64' ? ' arm64' : ''} · {t.evidence.drawerGate}: {REPORT.gate}
            </span>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="text-foreground/50 hover:text-foreground"
              aria-label="Close evidence"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-5 font-mono text-xs leading-relaxed text-foreground/80 space-y-1">
            <div><span className="text-foreground/50">verdict:</span> {stateLabel(ev.state)}</div>
            {ev.stage && <div><span className="text-foreground/50">stage:</span> {ev.stage}</div>}
            {ev.btf && <div><span className="text-foreground/50">btf:</span> {ev.btf}</div>}
            {ev.coreRelocations && <div><span className="text-foreground/50">core_relocations:</span> {ev.coreRelocations}</div>}
            {ev.caps && <div><span className="text-foreground/50">capabilities:</span> {ev.caps}</div>}
            {ev.detail && <div className="pt-1 text-foreground"><span className="text-foreground/50">detail:</span> {ev.detail}</div>}
          </div>
          {ev.human && (
            <div className="px-5 pb-5 text-sm font-light text-foreground/70 not-italic">
              {ev.human}
            </div>
          )}
        </div>
      )}
      {!ev && (
        <p className="mt-4 text-sm font-light text-foreground/50">
          {t.evidence.selectHint.pre}
          <span className="text-[#b81922] dark:text-[#fa4d56]">FAIL</span>,{' '}
          <span className="text-[#8e6a00] dark:text-[#f1c21b]">PARTIAL</span>
          {t.evidence.selectHint.mid}
          <span className="text-[#0e6027] dark:text-[#42be65]">PASS</span>
          {t.evidence.selectHint.post}
        </p>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Animated "SIMULATED RUN" terminal with a mini-matrix finale
 * ------------------------------------------------------------------------ */

interface TermLine { text: string; tone: 'cmd' | 'dim' | 'ok' | 'warn' | 'fail'; }

const TERM_LINES: TermLine[] = [
  { text: '$ bpfcompat suite run example-collection.yaml', tone: 'cmd' },
  { text: 'boot  ubuntu-20.04  5.4    overlay vm up (1.4s)', tone: 'dim' },
  { text: 'boot  ubuntu-20.10  5.8    overlay vm up (1.5s)', tone: 'dim' },
  { text: 'boot  ubuntu-24.04  6.8    overlay vm up (1.6s)', tone: 'dim' },
  { text: 'load  perfbuf_fallback.bpf.o ........ ok', tone: 'ok' },
  { text: 'load  ringbuf_modern.bpf.o ... unsupported (ringbuf, 5.4)', tone: 'fail' },
  { text: 'aggregate → artifact × kernel matrix', tone: 'dim' },
];

// Mini matrix: first 3 artifacts × first 4 kernels, kept in sync with report.json.
const MINI_ARTS = ARTIFACTS.slice(0, 3);
const MINI_KERN = KERNELS.slice(0, 4);
const MINI: CellState[][] = MINI_ARTS.map((a) =>
  MINI_KERN.map((k) => getResult(a.name, k.id)?.state ?? 'skip'),
);
const MINI_ARTIFACTS = MINI_ARTS.map((a) => a.name.replace('.bpf.o', ''));
const MINI_KERNELS = MINI_KERN.map((k) => (k.arch === 'arm64' ? 'a64' : k.version));

function toneColor(tone: TermLine['tone']): string {
  switch (tone) {
    case 'cmd': return 'text-gray-200';
    case 'dim': return 'text-[#78a9ff]';
    case 'ok': return 'text-[#42be65]';
    case 'warn': return 'text-[#f1c21b]';
    case 'fail': return 'text-[#ff8389]';
  }
}

export function MatrixTerminal({ compact = false }: { compact?: boolean }) {
  const reduced = usePrefersReducedMotion();
  const totalSteps = TERM_LINES.length + MINI[0].length + 1; // lines + matrix columns + tally
  const [step, setStep] = useState(reduced ? totalSteps : 0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused) return;
    if (step > totalSteps + 6) {
      const t = window.setTimeout(() => setStep(0), 100);
      return () => clearTimeout(t);
    }
    const delay = step < TERM_LINES.length ? 360 : step === totalSteps + 6 ? 2600 : 180;
    const t = window.setTimeout(() => setStep((s) => s + 1), delay);
    return () => clearTimeout(t);
  }, [step, paused, reduced, totalSteps]);

  const linesShown = Math.min(step, TERM_LINES.length);
  const colsShown = Math.max(0, Math.min(step - TERM_LINES.length, MINI[0].length));
  const showTally = step >= totalSteps;

  return (
    <div className="w-full border border-border bg-[#161616] overflow-hidden">
      {/* Carbon toolbar header (no traffic lights) */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#393939] bg-[#262626]">
        <span className="w-2 h-2 bg-[#fa4d56]" />
        <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">simulated run</span>
        <span className="text-[11px] font-mono text-gray-500">bpfcompat {BPFCOMPAT_VERSION}</span>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="ml-auto text-gray-400 hover:text-gray-200"
          aria-label={paused ? 'Play' : 'Pause'}
        >
          {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      <div className={'p-4 font-mono text-[13px] leading-relaxed ' + (compact ? 'min-h-[260px]' : 'min-h-[300px]')}>
        {TERM_LINES.slice(0, linesShown).map((l, i) => (
          <div key={i} className={toneColor(l.tone)}>{l.text}</div>
        ))}

        {colsShown > 0 && (
          <div className="mt-3 inline-block">
            <div className="flex gap-1.5 mb-1" style={{ paddingLeft: '9.5rem' }}>
              {MINI_KERNELS.map((k, i) => (
                <span
                  key={i}
                  className={'w-10 text-center text-[10px] text-gray-500 transition-opacity ' + (i < colsShown ? 'opacity-100' : 'opacity-0')}
                >
                  {k}
                </span>
              ))}
            </div>
            {MINI.map((row, ri) => (
              <div key={ri} className="flex items-center gap-1.5 mb-1">
                <span className="w-36 text-[11px] text-gray-400 truncate">{MINI_ARTIFACTS[ri]}</span>
                {row.map((state, ci) => (
                  <span
                    key={ci}
                    className={
                      'w-10 h-6 flex items-center justify-center border text-[10px] transition-opacity duration-150 ' +
                      cellClasses(state) + ' ' + (ci < colsShown ? 'opacity-100' : 'opacity-0')
                    }
                  >
                    <CellGlyph state={state} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}

        {showTally && (
          <div className="mt-3 text-gray-300">
            <span className="text-[#fa4d56]">exit 2</span> — compatibility regression
            <span className="ml-1 inline-block w-2 h-4 bg-gray-300/70 align-middle animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Adoption tabs (CLI / GitHub Action / Web UI)
 * ------------------------------------------------------------------------ */

function CopyButton({ text }: { text: string }) {
  const s = useBp();
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(text).then(() => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        });
      }}
      className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 border border-[#393939] text-gray-300 hover:text-white text-[11px] font-mono uppercase"
      aria-live="polite"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? s.adopt.copied : s.adopt.copy}
    </button>
  );
}

const CLI_SNIPPET = `$ go install github.com/kernel-guard/bpfcompat/cmd/bpfcompat@${BPFCOMPAT_VERSION}
$ bpfcompat test --artifact build/probe.bpf.o --matrix matrices/mvp.yaml --out report.json
$ bpfcompat suite --suite suite.yaml --out suite.json`;

const ACTION_SNIPPET = `- uses: Kernel-Guard/bpfcompat@${BPFCOMPAT_VERSION}
  with:
    suite: ./bpf/suite.yaml
    suite-out: reports/suite.json
    validation-mode: load_attach`;

export function AdoptionTabs() {
  const s = useBp();
  const tabs = ['CLI', 'GitHub Action', 'Web UI'] as const;
  const [active, setActive] = useState<(typeof tabs)[number]>('CLI');

  return (
    <div>
      <div className="flex border-b border-border" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={active === tab}
            onClick={() => setActive(tab)}
            className={
              'px-5 py-3 text-sm font-mono uppercase tracking-wider transition-colors ' +
              (active === tab
                ? 'border-b-2 border-primary text-foreground'
                : 'text-foreground/50 hover:text-foreground/80')
            }
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="border border-t-0 border-border bg-surface p-6 md:p-8">
        {active === 'CLI' && (
          <div>
            <div className="relative bg-[#161616] border border-[#393939] p-5 pr-24 font-mono text-[13px] text-gray-200 overflow-x-auto whitespace-pre">
              <CopyButton text={CLI_SNIPPET} />
              {CLI_SNIPPET}
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className="border border-border bg-background p-3">
                <span className="text-[#24a148] dark:text-[#42be65]">exit 0</span>
                <span className="block text-foreground/60 mt-1 normal-case">{s.adopt.exitCompatible}</span>
              </div>
              <div className="border border-border bg-background p-3">
                <span className="text-foreground/70">exit 1</span>
                <span className="block text-foreground/60 mt-1 normal-case">{s.adopt.exitError}</span>
              </div>
              <div className="border border-border bg-background p-3">
                <span className="text-[#b81922] dark:text-[#fa4d56]">exit 2</span>
                <span className="block text-foreground/60 mt-1 normal-case">{s.adopt.exitRegression}</span>
              </div>
            </div>
          </div>
        )}

        {active === 'GitHub Action' && (
          <div>
            <div className="relative bg-[#161616] border border-[#393939] p-5 pr-24 font-mono text-[13px] text-gray-200 overflow-x-auto whitespace-pre">
              <CopyButton text={ACTION_SNIPPET} />
              {ACTION_SNIPPET}
            </div>
            <p className="mt-4 text-sm font-light text-foreground/70">{s.adopt.actionNote}</p>
          </div>
        )}

        {active === 'Web UI' && (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ol className="space-y-4 text-sm font-light text-foreground/80">
              {s.adopt.webSteps.map((step, i) => (
                <li key={i}><span className="font-mono text-primary mr-2">{i + 1}</span>{step}</li>
              ))}
            </ol>
            <div>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-64"
              >
                <span className="font-medium">{s.adopt.webButton}</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="mt-3 text-xs font-mono text-foreground/50 normal-case">{s.adopt.webNote}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Install — three verified paths, each with a real terminal screenshot
 * ------------------------------------------------------------------------ */

const INSTALL_BASE = '/images/projects/bpfcompat/install';

const INSTALL_METHODS = [
  {
    cmd: `VER=${BPFCOMPAT_VERSION}
base=https://github.com/Kernel-Guard/bpfcompat/releases/download/$VER
curl -fsSLO "$base/bpfcompat-linux-amd64"
curl -fsSLO "$base/bpfcompat-validator-static-linux-amd64"
curl -fsSLO "$base/SHA256SUMS"
sha256sum -c SHA256SUMS --ignore-missing
sudo install -m 0755 bpfcompat-linux-amd64 /usr/local/bin/bpfcompat`,
    img: `${INSTALL_BASE}/install-release-binary.png`,
  },
  {
    cmd: `git clone https://github.com/Kernel-Guard/bpfcompat
cd bpfcompat
make build && make validator-static`,
    img: `${INSTALL_BASE}/install-from-source.png`,
  },
  {
    cmd: `go install github.com/kernel-guard/bpfcompat/cmd/bpfcompat@${BPFCOMPAT_VERSION}`,
    img: `${INSTALL_BASE}/install-go-install.png`,
  },
];

export function InstallSection() {
  const t = useBp();
  return (
    <div className="space-y-16">
      {t.install.methods.map((m, i) => (
        <div key={i} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs font-mono text-foreground/40 mb-2">{`0${i + 1}`}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{m.title}</h3>
            <p className="mt-3 text-sm font-light text-foreground/70 leading-relaxed">{m.note}</p>
            <div className="relative mt-5 bg-[#161616] border border-[#393939] p-4 pr-24 font-mono text-[12px] leading-relaxed text-gray-200 overflow-x-auto whitespace-pre">
              <CopyButton text={INSTALL_METHODS[i].cmd} />
              {INSTALL_METHODS[i].cmd}
            </div>
          </div>
          <div className="lg:col-span-7">
            <img
              src={INSTALL_METHODS[i].img}
              alt={m.alt}
              loading="lazy"
              width={1108}
              className="w-full rounded-lg border border-border shadow-sm"
            />
          </div>
        </div>
      ))}

      <div className="pt-12 border-t border-border">
        <div className="max-w-2xl">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{t.install.runHeading}</h3>
          <p className="mt-3 text-sm font-light text-foreground/70 leading-relaxed">{t.install.runNote}</p>
        </div>
        <img
          src={`${INSTALL_BASE}/live-validation.png`}
          alt={t.install.runAlt}
          loading="lazy"
          width={1108}
          className="mt-6 w-full max-w-4xl rounded-lg border border-border shadow-sm"
        />
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Three ways to use it — each under 10 minutes (CLI / Action / Library)
 * ------------------------------------------------------------------------ */

export function UsageWays() {
  const t = useBp();
  // Built here (not module scope) so LIBRARY_SNIPPET, declared further down, is
  // already initialized by render time.
  const snippets = [
    `go install github.com/kernel-guard/bpfcompat/cmd/bpfcompat@${BPFCOMPAT_VERSION}
bpfcompat test --artifact ./probe.bpf.o --quick`,
    ACTION_SNIPPET,
    LIBRARY_SNIPPET,
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {t.ways.items.map((w, i) => (
        <div key={w.title} className="flex flex-col border border-border bg-background p-6">
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground tracking-tight">{w.title}</h3>
            <span className="text-xs font-mono uppercase tracking-wider text-primary">{w.time}</span>
          </div>
          <p className="text-sm font-light text-foreground/70 leading-relaxed mb-4">{w.note}</p>
          <div className="relative mt-auto bg-[#161616] border border-[#393939] p-4 pr-16 font-mono text-[11px] leading-relaxed text-gray-200 overflow-x-auto whitespace-pre">
            <CopyButton text={snippets[i]} />
            {snippets[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
 * What's new — release highlights
 * ------------------------------------------------------------------------ */

export function WhatsNewSection() {
  const t = useBp();
  const releaseUrl = `${GITHUB_URL}/releases/tag/${BPFCOMPAT_VERSION}`;
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {t.whatsNew.items.map((item, i) => (
          <div key={item.title} className="border border-border bg-background p-6 hover:border-primary transition-colors">
            <div className="text-xs font-mono text-foreground/40 mb-3">{`0${i + 1}`}</div>
            <h3 className="text-base font-semibold text-foreground tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm font-light text-foreground/70 leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <a
          href={releaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {t.whatsNew.cta} <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Coverage — full-VM validation, distros covered, backports
 * ------------------------------------------------------------------------ */

const DISTROS = [
  { name: 'Ubuntu', detail: '16.04 → 25.10' },
  { name: 'Debian', detail: '11 · 12 · 13' },
  { name: 'RHEL / AlmaLinux / Rocky', detail: '8 · 9 · 10' },
  { name: 'CentOS Stream', detail: '9 · 10' },
  { name: 'Oracle Linux (UEK)', detail: 'UEK 7 · UEK 8' },
  { name: 'Amazon Linux', detail: '2 · 2023' },
  { name: 'SUSE / openSUSE Leap', detail: '15.6' },
  { name: 'Upstream mainline', detail: 'kernel.org 5.x–6.x' },
];

export function CoverageSection() {
  const t = useBp();
  return (
    <div className="space-y-12">
      {/* full-VM, not static */}
      <div className="border border-border bg-surface p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{t.coverage.vmHeading}</h3>
        <p className="mt-3 text-sm md:text-base font-light text-foreground/70 leading-relaxed max-w-3xl">{t.coverage.vmBody}</p>
      </div>

      {/* distributions covered */}
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{t.coverage.distrosHeading}</h3>
        <p className="mt-3 text-sm font-light text-foreground/70 leading-relaxed max-w-3xl">{t.coverage.distrosBody}</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {DISTROS.map((d) => (
            <div key={d.name} className="border border-border bg-background p-4">
              <div className="text-sm font-semibold text-foreground">{d.name}</div>
              <div className="mt-1 text-xs font-mono text-foreground/50">{d.detail}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs font-mono uppercase tracking-wider text-foreground/50">{t.coverage.archNote}</p>
      </div>

      {/* kernel version != feature support */}
      <div className="border-l-2 border-primary pl-6">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{t.coverage.backportHeading}</h3>
        <p className="mt-3 text-sm md:text-base font-light text-foreground/70 leading-relaxed max-w-3xl">{t.coverage.backportBody}</p>
        <p className="mt-3 text-sm font-light text-foreground/60 leading-relaxed max-w-3xl">{t.coverage.backportExample}</p>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Library mode — embeddable ValidateBeforeLoad pre-load gate
 * ------------------------------------------------------------------------ */

const LIBRARY_BASE = '/images/projects/bpfcompat/library';

const LIBRARY_SNIPPET = `import "github.com/kernel-guard/bpfcompat/pkg/bpfcompat"

res, err := bpfcompat.ValidateBeforeLoad(ctx, "probe.bpf.o")
if err != nil {
    return err
}
if !res.OK() {
    return fmt.Errorf("won't load on %s: [%s] %s",
        res.Kernel.Release, res.Classification.Code, res.Classification.Reason)
}
// safe to load`;

export function LibrarySection() {
  const t = useBp();
  return (
    <div className="space-y-12">
      {/* embeddable API snippet */}
      <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="lg:col-span-5">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">{t.library.apiHeading}</h3>
          <p className="mt-3 text-sm font-light text-foreground/70 leading-relaxed">{t.library.apiBody}</p>
        </div>
        <div className="lg:col-span-7">
          <div className="relative bg-[#161616] border border-[#393939] p-4 pr-24 font-mono text-[12px] leading-relaxed text-gray-200 overflow-x-auto whitespace-pre">
            <CopyButton text={LIBRARY_SNIPPET} />
            {LIBRARY_SNIPPET}
          </div>
        </div>
      </div>

      {/* three properties */}
      <div className="grid md:grid-cols-3 gap-4">
        {t.library.points.map((p) => (
          <div key={p.title} className="border border-border bg-background p-6">
            <h4 className="text-sm font-semibold text-foreground tracking-tight">{p.title}</h4>
            <p className="mt-2 text-sm font-light text-foreground/70 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      {/* pass + fail screenshots */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-base font-semibold text-foreground tracking-tight">{t.library.passHeading}</h4>
          <p className="mt-2 text-sm font-light text-foreground/70 leading-relaxed">{t.library.passBody}</p>
          <img
            src={`${LIBRARY_BASE}/library-validate-pass.png`}
            alt={t.library.passAlt}
            loading="lazy"
            width={1132}
            className="mt-4 w-full rounded-lg border border-border shadow-sm"
          />
        </div>
        <div>
          <h4 className="text-base font-semibold text-foreground tracking-tight">{t.library.failHeading}</h4>
          <p className="mt-2 text-sm font-light text-foreground/70 leading-relaxed">{t.library.failBody}</p>
          <img
            src={`${LIBRARY_BASE}/library-validate-fail.png`}
            alt={t.library.failAlt}
            loading="lazy"
            width={1132}
            className="mt-4 w-full rounded-lg border border-border shadow-sm"
          />
        </div>
      </div>

      <p className="text-xs font-mono text-foreground/50 normal-case">{t.library.footnote}</p>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * How-it-works four-stage frame
 * ------------------------------------------------------------------------ */

const STAGE_META = [
  { n: '01', icon: FileCode2, micro: 'suite.yaml · CLI · GitHub Action' },
  { n: '02', icon: Boxes, micro: 'Ubuntu · Fedora · 5.x–6.x · ARM64' },
  { n: '03', icon: ShieldCheck, micro: 'BTF · CO-RE relocations · capabilities' },
  { n: '04', icon: Table2, micro: 'JSON · Markdown · job summary · static site' },
];

export function HowItWorks() {
  const t = useBp();
  return (
    <div className="border border-border">
      <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x divide-y md:divide-y-0 divide-border">
        {STAGE_META.map((m, i) => {
          const Icon = m.icon;
          const stage = t.how.stages[i];
          return (
            <div key={m.n} className="bg-surface p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-mono font-light text-foreground/25">{m.n}</span>
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">{stage.title}</h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-4">{stage.body}</p>
              <div className="text-xs font-mono uppercase text-foreground/45 tracking-wide">{m.micro}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Problem cards (real libbpf error lines)
 * ------------------------------------------------------------------------ */

// Error lines are literal libbpf output — never translated.
const PROBLEM_ERRORS = [
  'libbpf: failed to find valid kernel BTF',
  "libbpf: prog 'guard_exec': relo #3: failed to relocate",
  'map create failed: invalid argument (ringbuf, kernel < 5.8)',
];

export function ProblemCards() {
  const t = useBp();
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {t.problem.cards.map((p, i) => (
        <div key={p.label} className="border border-border bg-background p-6">
          <div className="text-xs font-mono uppercase text-foreground/50 mb-3 tracking-wider">{p.label}</div>
          <p className="text-sm font-light text-foreground/80 leading-relaxed mb-4">{p.sentence}</p>
          <div className="border border-border bg-surface px-3 py-2 text-xs font-mono text-[#b81922] dark:text-[#fa4d56] overflow-x-auto">
            {PROBLEM_ERRORS[i]}
          </div>
        </div>
      ))}
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Scope panel + toolchain band + repo evidence + final CTA
 * ------------------------------------------------------------------------ */

export function ScopePanel() {
  const t = useBp();
  return (
    <div>
      <div className="border border-border grid md:grid-cols-2 md:divide-x divide-y md:divide-y-0 divide-border">
        <div className="p-8 bg-surface">
          <div className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-5">{t.scope.isLabel}</div>
          <ul className="space-y-3">
            {t.scope.isList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-light text-foreground/80">
                <span className="mt-1 w-3 h-3 bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 bg-surface">
          <div className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-5">{t.scope.isNotLabel}</div>
          <ul className="space-y-3">
            {t.scope.isNotList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-light text-foreground/70">
                <span className="mt-1 w-3 h-3 border border-foreground/40 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm font-mono text-foreground/50 normal-case">{t.scope.footer}</p>
    </div>
  );
}

export function WhyBuilt() {
  const t = useBp();
  const refs = [
    { label: 'little-vm-helper (Cilium)', href: 'https://github.com/cilium/little-vm-helper' },
    { label: 'falcosecurity/kernel-testing', href: 'https://github.com/falcosecurity/kernel-testing' },
    { label: 'bpfvalidator', href: 'https://github.com/Andreagit97/bpfvalidator' },
  ];
  return (
    <div className="max-w-3xl mx-auto text-center">
      <Kicker className="mb-5">{t.why.eyebrow}</Kicker>
      <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.why.heading}</h2>
      <p className="mt-6 text-lg font-light text-foreground/70 leading-relaxed">{t.why.body}</p>
      <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
        <span className="text-xs font-mono uppercase tracking-wider text-foreground/40">{t.why.sources}:</span>
        {refs.map((r) => (
          <a
            key={r.href}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-primary hover:underline normal-case"
          >
            {r.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function ComparisonTable() {
  const t = useBp();
  const cols = ['bpfcompat', 'LVH (Cilium)', 'bpfvalidator', t.compare.colDiy];
  const glyph = (c: string) => {
    if (c === '✓') return <span className="text-primary" aria-label="yes">✓</span>;
    if (c === '–') return <span className="text-foreground/25" aria-label="no">–</span>;
    if (c === '~') return <span className="text-foreground/50" aria-label="partial">~</span>;
    return <span className="text-foreground/80 font-light">{c}</span>;
  };
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-10">
        <Kicker className="mb-5">{t.compare.eyebrow}</Kicker>
        <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.compare.heading}</h2>
      </div>
      <div className="overflow-x-auto border border-border">
        <table className="w-full min-w-[720px] text-sm border-collapse">
          <thead>
            <tr className="bg-surface">
              <th className="text-left p-4 font-mono text-xs uppercase tracking-wider text-foreground/50 font-normal" />
              {cols.map((c, i) => (
                <th
                  key={c}
                  className={`text-left p-4 font-mono text-xs uppercase tracking-wider font-normal ${i === 0 ? 'text-primary' : 'text-foreground/50'}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {t.compare.rows.map((row) => (
              <tr key={row.label} className="border-t border-border">
                <td className="p-4 text-foreground/80 font-light">{row.label}</td>
                {row.cells.map((cell, i) => (
                  <td key={`${row.label}-${i}`} className={`p-4 ${i === 0 ? 'bg-primary/5' : ''}`}>
                    {glyph(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm font-mono text-foreground/50 normal-case">{t.compare.note}</p>
    </div>
  );
}

export function ToolchainBand() {
  const t = useBp();
  const prefix = useLangPrefix();
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 relative">
        <div className="border border-border bg-background p-8">
          <div className="text-xs font-mono uppercase tracking-wider text-foreground/50 mb-3">{t.toolchain.beforeShip}</div>
          <div className="text-2xl font-semibold text-foreground mb-2">bpfcompat</div>
          <p className="text-sm font-light text-foreground/70">{t.toolchain.bpfDesc}</p>
          <span className="inline-block mt-4 text-xs font-mono uppercase text-foreground/40">{t.toolchain.youAreHere}</span>
        </div>
        <div className="border border-border bg-background p-8 hover:border-primary transition-colors">
          <div className="text-xs font-mono uppercase tracking-wider text-foreground/50 mb-3">{t.toolchain.atRuntime}</div>
          <div className="text-2xl font-light text-foreground mb-2">Aegis-BPF</div>
          <p className="text-sm font-light text-foreground/70 mb-4">{t.toolchain.aegisDesc}</p>
          <NavLink to={`${prefix}/projects/aegis-bpf/`} className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1">
            {t.toolchain.viewProject} <ExternalLink className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-light text-foreground/60">{t.toolchain.footer}</p>
    </div>
  );
}

export function RepoEvidence() {
  const t = useBp();
  return (
    <div className="border border-border bg-surface p-8">
      <div className="flex flex-col gap-3 mb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-light">{t.repo.title}</h2>
          <p className="mt-2 text-sm text-foreground/60 font-mono">{t.repo.measured}</p>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark">
          {t.repo.github} <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard label={t.repo.labels.primaryLanguage} value="Go (84%)" />
        <MetricCard label={t.repo.labels.license} value="Apache-2.0" />
        <MetricCard label={t.repo.labels.latestRelease} value={BPFCOMPAT_VERSION} />
        <MetricCard label={t.repo.labels.kernelRange} value="5.x – 6.x · x86_64 + ARM64" />
      </div>
      <div className="mt-6">
        <div className="text-xs font-mono uppercase text-foreground/50 mb-3">{t.repo.languageMix}</div>
        <div className="flex flex-wrap gap-2">
          {['Go', 'Shell', 'C'].map((l) => (
            <span key={l} className="border border-border bg-background px-3 py-1 text-xs text-foreground">{l}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FinalCta({ headline }: { headline: string }) {
  return (
    <div className="border-t border-border pt-12">
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 max-w-2xl">{headline}</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-64">
          <span className="font-medium">Run the live demo</span>
          <ExternalLink className="w-5 h-5" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64">
          <span className="font-medium">View on GitHub</span>
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="mt-8 text-xs font-mono uppercase tracking-wider text-foreground/50">Apache-2.0 · {BPFCOMPAT_VERSION} · Technical Preview</p>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Hero CTA button group (shared across concepts)
 * ------------------------------------------------------------------------ */

export function HeroCtas({ onActionScroll }: { onActionScroll?: () => void }) {
  const t = useBp();
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4">
      <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-64">
        <span className="font-medium">{t.hero.ctaDemo}</span>
        <ExternalLink className="w-5 h-5" />
      </a>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64">
        <span className="font-medium">{t.hero.ctaGithub}</span>
        <Github className="w-5 h-5" />
      </a>
      {onActionScroll && (
        <button onClick={onActionScroll} className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-border text-foreground hover:bg-surface transition-colors w-full sm:w-64">
          <span className="font-medium">{t.hero.ctaAction}</span>
          <TerminalIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Preview concept switcher (sticky bar so the founder can compare)
 * ------------------------------------------------------------------------ */

const LANG_PREFIX = /^\/(tr|de|ja|zh-cn|es|fr|ko)(?=\/)/;

/** Returns the active language prefix from the URL (e.g. "/tr"), or "" for the default (English). */
export function useLangPrefix(): string {
  const { pathname } = useLocation();
  const m = pathname.match(LANG_PREFIX);
  return m ? m[0] : '';
}

export function PreviewSwitcher() {
  const { pathname } = useLocation();
  const prefix = useLangPrefix();
  const concepts = [
    { seg: '/preview/bpfcompat/launch', label: 'Launch', tag: 'apple-style' },
    { seg: '/preview/bpfcompat/verdict', label: 'Verdict Matrix', tag: 'recommended' },
    { seg: '/preview/bpfcompat/proof-loop', label: 'Proof Loop', tag: 'animated' },
    { seg: '/preview/bpfcompat/narrative', label: 'Narrative', tag: 'scroll story' },
  ];
  return (
    <div className="sticky top-16 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto">
        <NavLink to={`${prefix}/preview/bpfcompat`} className="text-xs font-mono uppercase tracking-wider text-foreground/50 hover:text-foreground py-3 pr-4 whitespace-nowrap">
          ← previews
        </NavLink>
        {concepts.map((c) => {
          const active = pathname.replace(/\/$/, '').endsWith(c.seg);
          return (
            <NavLink
              key={c.seg}
              to={`${prefix}${c.seg}`}
              className={
                'py-3 px-4 text-sm font-mono whitespace-nowrap border-b-2 transition-colors ' +
                (active ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground/80')
              }
            >
              {c.label}
              <span className="ml-2 text-[10px] uppercase text-foreground/40">{c.tag}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export function PreviewNote() {
  return (
    <div className="border border-dashed border-border bg-surface px-4 py-3 text-xs font-mono text-foreground/55 normal-case">
      Design preview · sample compatibility data shown for layout. The shipped page renders a real,
      dated <span className="text-foreground/80">report.json</span> with published failures.
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Apple-launch building blocks: scroll reveal, breadcrumb, big stats, docs
 * ------------------------------------------------------------------------ */

/**
 * Fade + rise into view once. SSR/prerender-safe: content renders visible by
 * default, so the static HTML is never blank. Only elements that are below the
 * fold at mount are "armed" (hidden, then revealed on scroll), so the user never
 * sees a hide→show flash. Instant for prefers-reduced-motion.
 */
export function Reveal({
  children, className = '', delayMs = 0,
}: { children: ReactNode; className?: string; delayMs?: number }) {
  const reduced = usePrefersReducedMotion();
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    // Above-the-fold elements stay visible (no animation, no flash of hidden content).
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    setArmed(true);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setShown(true); obs.disconnect(); }
      });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced]);

  const hidden = armed && !shown;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delayMs}ms` : '0ms' }}
      className={
        'transition-all duration-700 ease-out ' +
        (hidden ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0') + ' ' + className
      }
    >
      {children}
    </div>
  );
}

export function ProjectBreadcrumb() {
  const t = useBp();
  const prefix = useLangPrefix();
  return (
    <NavLink
      to={`${prefix}/projects/`}
      className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors font-medium text-sm"
    >
      <ArrowLeft className="w-4 h-4" />
      {t.breadcrumb}
    </NavLink>
  );
}

/** Large display statistic for the Apple-style "by the numbers" band. */
export function BigStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-light text-foreground tracking-tight">{value}</div>
      <div className="mt-2 text-xs font-mono uppercase tracking-wider text-foreground/50">{label}</div>
    </div>
  );
}

const DOC_META = [
  { icon: Boxes, href: `${DOC_BASE}/docs/architecture.md` },
  { icon: Cpu, href: `${DOC_BASE}/docs/validator.md` },
  { icon: Server, href: `${DOC_BASE}/docs/profile-catalog.md` },
  { icon: FileCode2, href: `${DOC_BASE}/docs/project-compatibility-suite.md` },
  { icon: Network, href: `${DOC_BASE}/docs/api-web-ui.md` },
  { icon: ShieldCheck, href: `${DOC_BASE}/docs/security-model.md` },
];

export function DocsSection() {
  const t = useBp();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DOC_META.map((d, i) => {
          const Icon = d.icon;
          const item = t.docs.items[i];
          return (
            <a
              key={item.title}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border bg-background p-6 flex flex-col hover:border-primary transition-colors"
            >
              <Icon className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">{item.title}</h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-5">{item.desc}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {t.docs.read} <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          );
        })}
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href={DOCS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-72"
        >
          <span className="font-medium">{t.docs.browseAll}</span>
          <BookOpen className="w-5 h-5" />
        </a>
        <a
          href={`${DOC_BASE}/README.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-72"
        >
          <span className="font-medium">{t.docs.readReadme}</span>
          <ScrollText className="w-5 h-5" />
        </a>
      </div>
      <p className="mt-4 text-xs font-mono text-foreground/50 normal-case">{t.docs.footnote}</p>
    </div>
  );
}

/** Final CTA variant that also surfaces documentation. */
export function FinalCtaWithDocs({ headline }: { headline: string }) {
  const t = useBp();
  return (
    <div className="border-t border-border pt-12">
      <h2 className="text-3xl md:text-5xl font-light text-foreground mb-10 max-w-3xl tracking-tight">{headline}</h2>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 kg-action-primary w-full sm:w-64">
          <span className="font-medium">{t.finalCta.ctaDemo}</span>
          <ExternalLink className="w-5 h-5" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors w-full sm:w-64">
          <span className="font-medium">{t.finalCta.ctaSource}</span>
          <Github className="w-5 h-5" />
        </a>
        <a href={DOCS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-border text-foreground hover:bg-surface transition-colors w-full sm:w-64">
          <span className="font-medium">{t.finalCta.ctaDocs}</span>
          <FileText className="w-5 h-5" />
        </a>
      </div>
      <p className="mt-8 text-xs font-mono uppercase tracking-wider text-foreground/50">Apache-2.0 · {BPFCOMPAT_VERSION} · Technical Preview</p>
    </div>
  );
}
