/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Concept D — "Launch". The Narrative story, presented as an Apple-style product
 * launch (cinematic spacing, centred display type, sequential reveals) while
 * staying inside the IBM Carbon system and the site's open-source project family.
 */

import { useRef } from 'react';
import { BPFCOMPAT_VERSION } from '../../data/version';
import {
  Chip, HeroCtas, MatrixTerminal, CompatibilityMatrix, Legend, HowItWorks,
  ProblemCards, AdoptionTabs, RepoEvidence, ScopePanel, ToolchainBand,
  Reveal, BigStat, DocsSection, ProjectBreadcrumb, FinalCtaWithDocs,
  Kicker, Caret, PreviewSwitcher, PreviewNote, DEMO_URL,
} from '../bpfcompat/parts';

export default function BpfcompatLaunch() {
  const adoptRef = useRef<HTMLDivElement>(null);
  const scrollToAdopt = () => adoptRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-background">
      <PreviewSwitcher />

      {/* breadcrumb — native to the project family */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ProjectBreadcrumb />
        <div className="mt-6"><PreviewNote /></div>
      </div>

      {/* 1 — Hero: centred, cinematic */}
      <section className="kg-dot-grid pt-16 pb-24 md:pt-24 md:pb-32 border-b border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Kicker className="mb-6">Open-source eBPF compatibility validation</Kicker>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              <Chip>Apache-2.0</Chip>
              <Chip>Go</Chip>
              <Chip>{BPFCOMPAT_VERSION}</Chip>
              <Chip accent>Technical Preview</Chip>
            </div>
          </Reveal>
          <Reveal delayMs={80}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.02] tracking-tight">
              Kernel compatibility,
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.02] tracking-tight mt-1">
              proven before production.<Caret />
            </h1>
          </Reveal>
          <Reveal delayMs={160}>
            <p className="mt-8 text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
              Test your eBPF programs on every Linux kernel you ship to — before your users do.
            </p>
          </Reveal>
          <Reveal delayMs={240}>
            <div className="mt-10 flex justify-center">
              <HeroCtas onActionScroll={scrollToAdopt} />
            </div>
          </Reveal>

          {/* the product shot, centred */}
          <Reveal delayMs={320} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <MatrixTerminal />
              <p className="mt-3 text-xs font-mono text-foreground/50 normal-case">
                Simulated output, looping.{' '}
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Run it yourself in the demo →
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — one-line statement (Apple "big idea" beat) */}
      <section className="py-28 md:py-36 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/50 mb-6">In plain terms</p>
            <p className="text-3xl md:text-5xl font-light text-foreground leading-snug tracking-tight">
              eBPF programs run inside the Linux kernel. Different kernels accept different programs —
              so software that runs on one server can <span className="text-foreground/40">fail to start</span> on another.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — the problem, real errors */}
      <section className="py-24 md:py-28 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl mb-14 text-center mx-auto">
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              None of these show up at compile time.
            </h2>
            <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">
              They show up on your customer's kernel — usually in production. Here is what the kernel
              actually says.
            </p>
          </Reveal>
          <Reveal delayMs={120}><ProblemCards /></Reveal>
        </div>
      </section>

      {/* 4 — by the numbers */}
      <section className="py-24 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <BigStat value="5.x–6.x" label="Kernel range tested" />
              <BigStat value="x86_64 · ARM64" label="Architectures" />
              <BigStat value="4 formats" label="JSON · MD · CI · site" />
              <BigStat value="exit 2" label="The CI gate" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — how it works */}
      <section className="py-24 md:py-28 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              Four stages. Real kernels. Real loads.
            </h2>
          </Reveal>
          <Reveal delayMs={120}><HowItWorks /></Reveal>
        </div>
      </section>

      {/* 6 — the evidence / matrix */}
      <section className="py-24 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/50 mb-5">The evidence</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              The output is a verdict, not a log file.
            </h2>
            <p className="mt-5 text-lg font-light text-foreground/70">
              Every cell is a load that actually happened, on that exact kernel, in a real VM.
            </p>
          </Reveal>
          <Reveal delayMs={120}>
            <div className="flex justify-end mb-4">
              <span className="text-xs font-mono uppercase text-foreground/50">sample run · {BPFCOMPAT_VERSION} · source: report.json</span>
            </div>
            <CompatibilityMatrix />
            <div className="mt-8"><Legend /></div>
          </Reveal>
        </div>
      </section>

      {/* 7 — documentation */}
      <section className="py-24 md:py-28 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/50 mb-5">Documentation</p>
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              Documented like production software.
            </h2>
            <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">
              Architecture, the in-guest validator, kernel profiles, the security model, and the
              CI integration are all written down — and open.
            </p>
          </Reveal>
          <Reveal delayMs={120}><DocsSection /></Reveal>
        </div>
      </section>

      {/* 8 — adopt */}
      <section ref={adoptRef} className="py-24 md:py-28 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              Three ways in. Each under ten minutes.
            </h2>
          </Reveal>
          <Reveal delayMs={120}><AdoptionTabs /></Reveal>
        </div>
      </section>

      {/* 9 — repository evidence (native project element) */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal><RepoEvidence /></Reveal>
        </div>
      </section>

      {/* 10 — honest scope */}
      <section className="py-24 md:py-28 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              What it is — and what it is not yet.
            </h2>
          </Reveal>
          <Reveal delayMs={120}><ScopePanel /></Reveal>
        </div>
      </section>

      {/* 11 — toolchain */}
      <section className="py-24 md:py-28 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">
              One toolchain for the kernel boundary.
            </h2>
          </Reveal>
          <Reveal delayMs={120}><ToolchainBand /></Reveal>
        </div>
      </section>

      {/* 12 — final CTA with docs */}
      <section className="py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <FinalCtaWithDocs headline="Stop discovering kernel incompatibilities in production." />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
