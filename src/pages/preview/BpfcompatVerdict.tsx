/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Concept A — "The Verdict Matrix" (recommended). Evidence-first flagship page.
 */

import { useRef } from 'react';
import {
  Chip, Eyebrow, HeroCtas, MatrixTerminal, CompatibilityMatrix, Legend,
  HowItWorks, ProblemCards, AdoptionTabs, RepoEvidence, ScopePanel,
  ToolchainBand, FinalCta, PreviewSwitcher, PreviewNote, GITHUB_URL, DEMO_URL,
} from '../bpfcompat/parts';

export default function BpfcompatVerdict() {
  const adoptRef = useRef<HTMLDivElement>(null);
  const scrollToAdopt = () => adoptRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-background">
      <PreviewSwitcher />

      {/* 1 — Hero */}
      <section className="pt-20 pb-20 md:pt-28 md:pb-28 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><PreviewNote /></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-8">
                <Chip>Apache-2.0</Chip>
                <Chip>Go</Chip>
                <Chip>v0.1.6</Chip>
                <Chip accent>Technical Preview</Chip>
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.05] mb-8">
                Kernel compatibility,<br />
                <span className="font-semibold">proven before production.</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-2xl mb-10">
                Test your kernel-level programs against every Linux kernel you ship to —
                before your users do.
              </p>
              <HeroCtas onActionScroll={scrollToAdopt} />
            </div>
            <div className="hidden lg:block">
              <MatrixTerminal />
              <p className="mt-3 text-xs font-mono text-foreground/50 normal-case">
                Simulated output.{' '}
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Run it yourself in the demo →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* anchor subnav */}
      <div className="hidden md:block sticky top-[7.25rem] z-30 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 py-3 text-xs font-mono uppercase tracking-wider text-foreground/50">
          <a href="#why" className="hover:text-foreground">Why this exists</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#matrix" className="hover:text-foreground">The matrix</a>
          <a href="#run" className="hover:text-foreground">Run it</a>
          <a href="#status" className="hover:text-foreground">Status</a>
        </div>
      </div>

      {/* 2 — Why this exists */}
      <section id="why" className="py-24 bg-surface border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Eyebrow>Why this exists</Eyebrow>
            <h2 className="text-3xl font-light text-foreground leading-snug">
              It compiled. It still won't load.
            </h2>
            <p className="mt-5 text-base font-light text-foreground/70 leading-relaxed">
              Programs that run inside the Linux kernel depend on the exact kernel version they run on.
              A program that works on one machine can refuse to load on another — and most teams find
              out in production. bpfcompat moves that discovery into CI.
            </p>
            <div className="mt-6 border border-border bg-background p-4">
              <div className="text-xs font-mono uppercase text-foreground/50 mb-2">Definition</div>
              <p className="text-sm font-light text-foreground/80">
                eBPF — sandboxed programs that run inside the Linux kernel. Used by security,
                networking, and observability tools.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ProblemCards />
          </div>
        </div>
      </section>

      {/* 3 — How it works */}
      <section id="how" className="py-24 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Four stages. <span className="font-semibold">Real kernels. Real loads.</span>
          </h2>
          <HowItWorks />
        </div>
      </section>

      {/* 4 — The matrix */}
      <section id="matrix" className="py-24 bg-surface border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <Eyebrow>The output</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-light text-foreground max-w-xl">
                One matrix. Every kernel you ship to.
              </h2>
            </div>
            <span className="text-xs font-mono uppercase text-foreground/50">
              sample run · v0.1.6 · source: report.json
            </span>
          </div>
          <CompatibilityMatrix />
          <div className="mt-8"><Legend /></div>
        </div>
      </section>

      {/* 5 — Run it */}
      <section id="run" ref={adoptRef} className="py-24 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Adopt it</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Three ways in. <span className="font-semibold">Pick yours.</span>
          </h2>
          <AdoptionTabs />
        </div>
      </section>

      {/* 6 — Repository evidence */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RepoEvidence />
        </div>
      </section>

      {/* 7 — Status */}
      <section id="status" className="py-24 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Status</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            What it is — and what it is not yet.
          </h2>
          <ScopePanel />
        </div>
      </section>

      {/* 8 — Toolchain */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Kernel Guard eBPF toolchain</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            One toolchain for the kernel boundary.
          </h2>
          <ToolchainBand />
        </div>
      </section>

      {/* 9 — Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinalCta headline="Stop discovering kernel incompatibilities in production." />
        </div>
      </section>
    </div>
  );
}
