/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * bpfcompat — bespoke flagship product page. Apple-launch presentation inside
 * the IBM Carbon system. Rendered for /projects/bpfcompat/, ahead of the
 * generic project template. Fully localized via ./content.
 */

import { useRef } from 'react';
import { BPFCOMPAT_VERSION } from '../../data/version';
import { useLanguage } from '../../context/LanguageContext';
import SEO from '../../components/SEO';
import { buildSoftwareSourceCodeSchema } from '../../lib/schema';
import { BpStringsProvider, getBpStrings } from './content';
import {
  Chip, HeroCtas, MatrixTerminal, CompatibilityMatrix, Legend, HowItWorks,
  ProblemCards, AdoptionTabs, InstallSection, CoverageSection, LibrarySection, WhatsNewSection, UsageWays, RepoEvidence, ScopePanel, ToolchainBand,
  Reveal, BigStat, DocsSection, ProjectBreadcrumb, FinalCtaWithDocs,
  WhyBuilt, ComparisonTable,
  Kicker, Caret, GITHUB_URL, DEMO_URL, REPORT,
} from './parts';

const DESCRIPTION =
  'bpfcompat is an open-source tool that proves whether your compiled eBPF programs load and ' +
  'run across the Linux kernels you ship to — by booting real kernels in disposable VMs and ' +
  'gating your CI on the results.';

export default function BpfcompatPage() {
  const { language } = useLanguage();
  const t = getBpStrings(language);
  const adoptRef = useRef<HTMLDivElement>(null);
  const scrollToAdopt = () => adoptRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <BpStringsProvider language={language}>
      <div className="bg-background">
        <SEO
          title="bpfcompat — eBPF Compatibility Validator | Kernel Guard"
          description={DESCRIPTION}
          path="/projects/bpfcompat/"
          schema={buildSoftwareSourceCodeSchema({
            name: 'bpfcompat',
            description: DESCRIPTION,
            path: '/projects/bpfcompat/',
            language,
            codeRepository: GITHUB_URL,
            programmingLanguage: ['Go', 'C'],
          })}
        />

        {/* breadcrumb — native to the project family */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
          <ProjectBreadcrumb />
        </div>

        {/* 1 — Hero: centred, cinematic */}
        <section className="kg-dot-grid pt-12 pb-24 md:pt-16 md:pb-32 border-b border-border overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <Kicker className="mb-6">{t.hero.eyebrow}</Kicker>
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <Chip>Apache-2.0</Chip>
                <Chip>Go</Chip>
                <Chip>{BPFCOMPAT_VERSION}</Chip>
                <Chip accent>{t.hero.chipPreview}</Chip>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.02] tracking-tight">
                {t.hero.h1a}
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground leading-[1.02] tracking-tight mt-1">
                {t.hero.h1b}<Caret />
              </h1>
            </Reveal>
            <Reveal delayMs={160}>
              <p className="mt-8 text-xl md:text-2xl text-foreground/70 font-light leading-relaxed max-w-2xl mx-auto">
                {t.hero.subline}
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="mt-10 flex justify-center">
                <HeroCtas onActionScroll={scrollToAdopt} />
              </div>
            </Reveal>
            <Reveal delayMs={320} className="mt-16">
              <div className="max-w-3xl mx-auto">
                <MatrixTerminal />
                <p className="mt-3 text-xs font-mono text-foreground/50 normal-case">
                  {t.hero.termSimulated}{' '}
                  <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {t.hero.termRunLink}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 1b — what's new in this release */}
        <section className="py-20 md:py-24 border-b border-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-12">
              <Kicker className="mb-5">{t.whatsNew.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.whatsNew.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">{t.whatsNew.subline}</p>
            </Reveal>
            <Reveal delayMs={120}><WhatsNewSection /></Reveal>
          </div>
        </section>

        {/* 2 — plain-terms big idea */}
        <section className="py-28 md:py-36 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-foreground/50 mb-6">{t.plain.eyebrow}</p>
              <p className="text-3xl md:text-5xl font-light text-foreground leading-snug tracking-tight">
                {t.plain.pre}<span className="text-foreground/40">{t.plain.emph}</span>{t.plain.post}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 2b — get started: three ways, each under 10 minutes */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <Kicker className="mb-5">{t.ways.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.ways.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">{t.ways.subline}</p>
            </Reveal>
            <Reveal delayMs={120}><UsageWays /></Reveal>
          </div>
        </section>

        {/* 3 — the problem, real errors */}
        <section className="py-24 md:py-28 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl mb-14 text-center mx-auto">
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.problem.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">{t.problem.subline}</p>
            </Reveal>
            <Reveal delayMs={120}><ProblemCards /></Reveal>
          </div>
        </section>

        {/* 3b — why this exists */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal><WhyBuilt /></Reveal>
          </div>
        </section>

        {/* 4 — by the numbers */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {t.stats.map((stat) => (
                  <div key={stat.label}>
                    <BigStat value={stat.value} label={stat.label} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5 — how it works */}
        <section className="py-24 md:py-28 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.how.heading}</h2>
            </Reveal>
            <Reveal delayMs={120}><HowItWorks /></Reveal>
          </div>
        </section>

        {/* 5b — coverage: full VM, distros, backports */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <Kicker className="mb-5">{t.coverage.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.coverage.heading}</h2>
            </Reveal>
            <Reveal delayMs={120}><CoverageSection /></Reveal>
          </div>
        </section>

        {/* 5c — library mode: validate before you load */}
        <section className="py-24 md:py-28 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <Kicker className="mb-5">{t.library.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.library.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">{t.library.subline}</p>
            </Reveal>
            <Reveal delayMs={120}><LibrarySection /></Reveal>
          </div>
        </section>

        {/* 6 — the evidence / matrix */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-12">
              <Kicker className="mb-5">{t.evidence.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.evidence.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70">{t.evidence.subline}</p>
            </Reveal>
            <Reveal delayMs={120}>
              <div className="flex justify-end mb-4">
                <span className="text-xs font-mono uppercase text-foreground/50">
                  {REPORT.source} · bpfcompat {BPFCOMPAT_VERSION} · gate: {REPORT.gate} · source: report.json
                </span>
              </div>
              <CompatibilityMatrix animateOnView={false} />
              <div className="mt-8"><Legend /></div>
            </Reveal>
          </div>
        </section>

        {/* 7 — documentation */}
        <section className="py-24 md:py-28 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <Kicker className="mb-5">{t.docs.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.docs.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">{t.docs.subline}</p>
            </Reveal>
            <Reveal delayMs={120}><DocsSection /></Reveal>
          </div>
        </section>

        {/* 8 — adopt */}
        <section ref={adoptRef} className="py-24 md:py-28 border-b border-border scroll-mt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.adopt.heading}</h2>
            </Reveal>
            <Reveal delayMs={120}><AdoptionTabs /></Reveal>
          </div>
        </section>

        {/* 8b — install the CLI */}
        <section className="py-24 md:py-28 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <Kicker className="mb-5">{t.install.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.install.heading}</h2>
              <p className="mt-5 text-lg font-light text-foreground/70 leading-relaxed">{t.install.subline}</p>
            </Reveal>
            <Reveal delayMs={120}><InstallSection /></Reveal>
          </div>
        </section>

        {/* 9 — repository evidence */}
        <section className="py-24 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal><RepoEvidence /></Reveal>
          </div>
        </section>

        {/* 9b — how it compares */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal><ComparisonTable /></Reveal>
          </div>
        </section>

        {/* 10 — honest scope */}
        <section className="py-24 md:py-28 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.scope.heading}</h2>
            </Reveal>
            <Reveal delayMs={120}><ScopePanel /></Reveal>
          </div>
        </section>

        {/* 11 — toolchain */}
        <section className="py-24 md:py-28 bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <Kicker className="mb-5">{t.toolchain.eyebrow}</Kicker>
              <h2 className="text-3xl md:text-5xl font-light text-foreground tracking-tight">{t.toolchain.heading}</h2>
            </Reveal>
            <Reveal delayMs={120}><ToolchainBand /></Reveal>
          </div>
        </section>

        {/* 12 — final CTA with docs */}
        <section className="py-24 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <FinalCtaWithDocs headline={t.finalCta.headline} />
            </Reveal>
          </div>
        </section>
      </div>
    </BpStringsProvider>
  );
}
