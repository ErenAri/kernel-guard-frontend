/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Concept C — "Narrative / Will It Load". A scroll story built on the pain:
 * it works on your kernel — will it load on your customer's?
 */

import { useRef } from 'react';
import {
  Chip, Eyebrow, HeroCtas, CompatibilityMatrix, Legend, HowItWorks, ProblemCards,
  AdoptionTabs, RepoEvidence, ScopePanel, ToolchainBand, FinalCta,
  PreviewSwitcher, PreviewNote,
} from '../bpfcompat/parts';

export default function BpfcompatNarrative() {
  const adoptRef = useRef<HTMLDivElement>(null);
  const scrollToAdopt = () => adoptRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-background">
      <PreviewSwitcher />

      {/* 1 — Hero: the pain, stated */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-32 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10"><PreviewNote /></div>
          <div className="flex flex-wrap gap-2 mb-8">
            <Chip>Apache-2.0</Chip>
            <Chip>Go</Chip>
            <Chip>eBPF</Chip>
            <Chip>CI</Chip>
            <Chip accent>Technical Preview</Chip>
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.05] mb-8">
            It loads on your kernel.<br />
            <span className="font-semibold">Prove it loads on every kernel you ship to.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-3xl mb-10">
            A kernel-level program can compile cleanly, pass every unit test, and still refuse to load
            on a customer's machine. bpfcompat catches that in CI — by actually loading your program on
            every kernel you support.
          </p>
          <HeroCtas onActionScroll={scrollToAdopt} />
        </div>
      </section>

      {/* anchor subnav */}
      <div className="hidden md:block sticky top-[7.25rem] z-30 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 py-3 text-xs font-mono uppercase tracking-wider text-foreground/50">
          <a href="#problem" className="hover:text-foreground">Problem</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#evidence" className="hover:text-foreground">Evidence</a>
          <a href="#get-started" className="hover:text-foreground">Get started</a>
        </div>
      </div>

      {/* 2 — The problem (the heart of the narrative) */}
      <section id="problem" className="py-24 bg-surface border-b border-border scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground leading-snug max-w-2xl">
            None of these failures show up at compile time.
          </h2>
          <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed max-w-2xl">
            They show up on your customer's kernel — usually in production. Here is what the kernel
            actually says when an eBPF program won't load.
          </p>
          <div className="mt-6 border border-border bg-background p-4 inline-block">
            <span className="text-xs font-mono uppercase text-foreground/50 mr-2">Definition</span>
            <span className="text-sm font-light text-foreground/80">
              eBPF — sandboxed programs that run inside the Linux kernel.
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProblemCards />
          <p className="mt-8 text-lg font-light text-foreground/80 max-w-3xl">
            bpfcompat moves every one of these into your pipeline, where a failure costs minutes
            instead of an incident.
          </p>
        </div>
      </section>

      {/* 3 — How it works */}
      <section id="how" className="py-24 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>How it answers the question</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Four stages. <span className="font-semibold">Real kernels. Real loads.</span>
          </h2>
          <HowItWorks />
        </div>
      </section>

      {/* 4 — Evidence */}
      <section id="evidence" className="py-24 bg-surface border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <Eyebrow>The evidence</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-light text-foreground max-w-xl">
                The output is a verdict, not a log file.
              </h2>
            </div>
            <span className="text-xs font-mono uppercase text-foreground/50">
              sample run · v0.1.5 · source: report.json
            </span>
          </div>
          <CompatibilityMatrix />
          <div className="mt-8"><Legend /></div>
        </div>
      </section>

      {/* 5 — Get started */}
      <section id="get-started" ref={adoptRef} className="py-24 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Three ways in. <span className="font-semibold">Each under ten minutes.</span>
          </h2>
          <AdoptionTabs />
        </div>
      </section>

      {/* 6 — Repo evidence */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RepoEvidence />
        </div>
      </section>

      {/* 7 — Status */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Honest scope</Eyebrow>
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
