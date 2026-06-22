/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Concept B — "The Proof Loop". The hero IS the product running: a large,
 * looping simulated validation run dominates the first screen.
 */

import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import {
  Chip, Eyebrow, HeroCtas, MatrixTerminal, CompatibilityMatrix, Legend,
  HowItWorks, AdoptionTabs, RepoEvidence, ScopePanel, ToolchainBand, FinalCta,
  PreviewSwitcher, PreviewNote, DEMO_URL,
} from '../bpfcompat/parts';

export default function BpfcompatProofLoop() {
  const adoptRef = useRef<HTMLDivElement>(null);
  const scrollToAdopt = () => adoptRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="bg-background">
      <PreviewSwitcher />

      {/* 1 — Hero: the run performs the product */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8"><PreviewNote /></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="flex flex-wrap gap-2 mb-8">
                <Chip>Apache-2.0</Chip>
                <Chip>Go</Chip>
                <Chip>v0.1.6</Chip>
                <Chip accent>Technical Preview</Chip>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-foreground leading-[1.05] mb-8">
                Watch it load on<br />
                <span className="font-semibold">every kernel.</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-10">
                bpfcompat boots real Linux kernels, loads your compiled eBPF programs inside each one,
                and turns the result into a pass/fail matrix your CI can gate on. Here it is, running.
              </p>
              <HeroCtas onActionScroll={scrollToAdopt} />
            </div>
            <div className="lg:col-span-7">
              <MatrixTerminal />
              <p className="mt-3 text-xs font-mono text-foreground/50 normal-case">
                Simulated output, looping.{' '}
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Run it yourself in the demo →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Plain words (full-width band) */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/50 mb-4">In plain terms</div>
          <p className="text-lg md:text-xl font-light text-foreground/85 leading-relaxed">
            eBPF programs run inside the Linux kernel. Each kernel version accepts different programs,
            so software that works on one server can fail to start on another. bpfcompat tests your
            programs against every kernel you depend on — automatically, before release.
          </p>
        </div>
      </section>

      {/* 3 — The same run, read as evidence */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <Eyebrow>Every cell is evidence</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-light text-foreground max-w-xl">
                A green cell isn't a guess. It's a load that happened.
              </h2>
            </div>
            <span className="text-xs font-mono uppercase text-foreground/50">
              sample run · v0.1.6 · source: report.json
            </span>
          </div>
          <p className="text-base font-light text-foreground/70 max-w-3xl mb-8">
            The matrix you watched fill in the hero is interactive here. A green cell means the program
            was actually loaded — and attached — on that exact kernel in a real VM, and the proof was
            recorded. Click any failure to read its structured reason.
          </p>
          <CompatibilityMatrix />
          <div className="mt-8"><Legend /></div>
        </div>
      </section>

      {/* 4 — How it works */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Pipeline</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            One command, <span className="font-semibold">four stages.</span>
          </h2>
          <HowItWorks />
        </div>
      </section>

      {/* 5 — exit 2 band */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4">
            <div className="text-7xl md:text-8xl font-mono font-light text-foreground inline-block border-b-2 border-[#da1e28] pb-2">
              exit 2
            </div>
            <div className="mt-4 text-xs font-mono uppercase tracking-wider text-foreground/50">
              compatibility regression detected
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg font-light text-foreground/80 leading-relaxed">
              When any cell regresses from PASS to FAIL, bpfcompat exits with code 2 and the pipeline
              stops. The matrix is written to the job summary, the JSON report is uploaded as an
              artifact, and the merge waits until compatibility is restored. Kernel coverage becomes a
              requirement you can review — not an incident you respond to.
            </p>
          </div>
        </div>
      </section>

      {/* 6 — Run it */}
      <section ref={adoptRef} className="py-24 border-b border-border scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Adopt it</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Three ways to run it.
          </h2>
          <AdoptionTabs />
        </div>
      </section>

      {/* 7 — Repo evidence */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RepoEvidence />
        </div>
      </section>

      {/* 8 — Status */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Status</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Technical Preview, measured.
          </h2>
          <ScopePanel />
        </div>
      </section>

      {/* 9 — Toolchain */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>Kernel Guard eBPF toolchain</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-12 max-w-2xl">
            Prove it before you ship. Protect it while it runs.
          </h2>
          <ToolchainBand />
        </div>
      </section>

      {/* 10 — Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FinalCta headline="See the FAIL before your users do." />
          <div className="mt-8 flex justify-center text-foreground/30">
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}
