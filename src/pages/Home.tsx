import { ArrowRight, Check, ExternalLink, Minus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizePath } from '../i18n/route';
import { evidenceHomeCopy } from '../i18n/evidenceHome';
import report from '../data/bpfcompatReport.json';

type PreviewState = 'pass' | 'fail' | 'partial' | 'skip';

function resultFor(artifact: string, kernel: string) {
  return report.results.find((result) => result.artifact === artifact && result.kernel === kernel);
}

function StateMark({ state }: { state: PreviewState }) {
  if (state === 'pass') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#198038] dark:text-[#42be65]">
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
        PASS
      </span>
    );
  }

  if (state === 'fail') {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#da1e28] dark:text-[#fa4d56]">
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
        FAIL
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 text-foreground/45">
      <Minus className="h-3.5 w-3.5" />
      {state === 'partial' ? 'PARTIAL' : 'SKIP'}
    </span>
  );
}

function EvidencePreview() {
  const kernels = report.kernels.slice(0, 4);
  const artifacts = report.artifacts.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl border border-border bg-background text-left">
      <div className="flex flex-col justify-between gap-3 border-b border-border px-5 py-4 sm:flex-row sm:items-center">
        <div>
          <div className="font-mono text-xs text-foreground">bpfcompat / report.json</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/45">
            Representative report · {report.version} · {report.generatedAt}
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/45">
          gate: {report.gate}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr>
              <th className="w-[250px] border-b border-border px-5 py-4 text-left font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-foreground/45">
                artifact × kernel
              </th>
              {kernels.map((kernel) => (
                <th
                  key={kernel.id}
                  className="border-b border-l border-border px-4 py-4 text-left font-normal"
                >
                  <div className="font-mono text-xs text-foreground">{kernel.distro}</div>
                  <div className="mt-1 font-mono text-[10px] text-foreground/45">
                    {kernel.version} · {kernel.arch}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {artifacts.map((artifact) => (
              <tr key={artifact.name}>
                <td className="border-b border-border px-5 py-4">
                  <div className="font-mono text-xs text-foreground">{artifact.name}</div>
                  <div className="mt-1 font-mono text-[10px] text-foreground/40">{artifact.kind}</div>
                </td>
                {kernels.map((kernel) => {
                  const result = resultFor(artifact.name, kernel.id);
                  const state = (result?.state ?? 'skip') as PreviewState;
                  return (
                    <td key={kernel.id} className="border-b border-l border-border px-4 py-4 font-mono text-[10px]">
                      <StateMark state={state} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col justify-between gap-2 px-5 py-4 sm:flex-row sm:items-center">
        <span className="font-mono text-[10px] text-foreground/45">
          {report.note}
        </span>
        <Link
          to="/projects/bpfcompat/"
          className="shrink-0 text-sm font-medium text-primary hover:underline"
        >
          Open the full matrix
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const copy = evidenceHomeCopy[language];

  return (
    <div className="bg-background">
      <SEO
        title={copy.seoTitle}
        description={copy.seoDescription}
        keywords="eBPF compatibility, Linux kernel compatibility, BPF LSM, runtime security, BPFCompat, AegisBPF"
        imageAlt="Kernel Guard — Linux and eBPF infrastructure"
      />

      {/* Apple-like hierarchy: one idea, one product visual, very little chrome. */}
      <section className="border-b border-border pt-32 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/45">
            Kernel Guard · Linux / eBPF
          </p>

          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] text-foreground sm:text-6xl md:text-8xl">
            {copy.hero.titleBefore}{' '}
            <span className="text-primary">{copy.hero.titleEvidence}</span>{' '}
            {copy.hero.titleAfter}
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/62 md:text-xl">
            {copy.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
            <Link
              to={localizePath('/projects/bpfcompat/', language)}
              className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
            >
              {copy.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-base font-medium text-primary hover:underline"
            >
              {copy.hero.secondaryCta}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-16 md:mt-20">
            <EvidencePreview />
          </div>
        </div>
      </section>

      {/* Large editorial statement instead of a grid of marketing cards. */}
      <section className="border-b border-border py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-4xl font-medium leading-[1.08] tracking-[-0.04em] text-foreground md:text-6xl lg:text-7xl">
            Before production, <span className="text-foreground/35">compatibility.</span>
            <br />
            At runtime, <span className="text-foreground/35">enforcement.</span>
          </p>
        </div>
      </section>

      {/* Product 01 — generous Apple-style storytelling, IBM-aligned 12-column grid. */}
      <section className="border-b border-border bg-[#f5f5f7] py-24 dark:bg-[#1d1d1f] md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">
              01 · {copy.products.preDeployment}
            </p>
            <h2 className="mt-5 text-5xl font-medium tracking-[-0.045em] text-foreground md:text-7xl">
              BPFCompat
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-foreground/62 md:text-2xl">
              {copy.products.bpfDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <Link
                to={localizePath('/projects/bpfcompat/', language)}
                className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
              >
                {copy.products.explore} BPFCompat
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/Kernel-Guard/bpfcompat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
              >
                GitHub
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="flex items-end lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-md border-t border-foreground/20 pt-5">
              <dl className="space-y-5">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-sm text-foreground/45">Execution</dt>
                  <dd className="text-right text-sm font-medium text-foreground">Real vendor kernels</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-foreground/10 pt-5">
                  <dt className="text-sm text-foreground/45">Interfaces</dt>
                  <dd className="text-right text-sm font-medium text-foreground">CLI · Action · Go library</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-foreground/10 pt-5">
                  <dt className="text-sm text-foreground/45">Architectures</dt>
                  <dd className="text-right text-sm font-medium text-foreground">x86_64 · ARM64</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Product 02 — one purposeful dark moment, not alternating dashboard bands. */}
      <section className="border-b border-black bg-[#161616] py-24 text-white md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-white/45">
              02 · {copy.products.runtime}
            </p>
            <h2 className="mt-5 text-5xl font-medium tracking-[-0.045em] md:text-7xl">
              AegisBPF
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-relaxed text-white/62 md:text-2xl">
              {copy.products.aegisDesc}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                to={localizePath('/projects/aegis-bpf/', language)}
                className="inline-flex items-center gap-1.5 font-medium text-[#78a9ff] hover:underline"
              >
                {copy.products.explore} AegisBPF
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                Preview
              </span>
            </div>
          </div>

          <div className="flex items-end lg:col-span-5 lg:justify-end">
            <div className="w-full max-w-md border-t border-white/20 pt-5">
              <dl className="space-y-5">
                <div className="flex items-baseline justify-between gap-6">
                  <dt className="text-sm text-white/40">Enforcement</dt>
                  <dd className="text-right text-sm font-medium text-white">BPF LSM</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-white/10 pt-5">
                  <dt className="text-sm text-white/40">Scope</dt>
                  <dd className="text-right text-sm font-medium text-white">Cgroup-aware policy</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-t border-white/10 pt-5">
                  <dt className="text-sm text-white/40">Operations</dt>
                  <dd className="text-right text-sm font-medium text-white">Events · metrics · Kubernetes</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof presented as editorial evidence, not logo/cards. */}
      <section className="border-b border-border py-28 md:py-40">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/45">
            {copy.integrations.eyebrow}
          </p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-foreground md:text-6xl lg:text-7xl">
            Running upstream in
            <br />
            Falco and Inspektor Gadget.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-foreground/58">
            {copy.integrations.disclaimer}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
            <a
              href="https://github.com/falcosecurity/libs/pull/3024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Falco PR #3024
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://github.com/inspektor-gadget/inspektor-gadget/pull/5708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              Inspektor Gadget PR #5708
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* IBM 2x-grid discipline for the technical lifecycle. */}
      <section className="border-b border-border bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">
                {copy.lifecycle.eyebrow}
              </p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] text-foreground md:text-5xl">
                {copy.lifecycle.title}
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 border-t border-l border-border sm:grid-cols-2">
                {copy.lifecycle.stages.slice(0, 4).map((stage) => (
                  <div key={stage.label} className="min-h-48 border-r border-b border-border p-6 md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
                      {stage.label}
                    </div>
                    <h3 className="mt-8 text-xl font-medium text-foreground">{stage.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/55">
                      {stage.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-r border-b border-l border-border p-6 md:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                  05 · AegisBPF
                </div>
                <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <h3 className="text-xl font-medium text-foreground">Enforce at runtime.</h3>
                    <p className="mt-2 text-sm text-foreground/55">
                      Runtime policy stays close to the kernel after compatibility has been proven.
                    </p>
                  </div>
                  <Link
                    to={localizePath('/projects/aegis-bpf/', language)}
                    className="shrink-0 text-sm font-medium text-primary hover:underline"
                  >
                    View AegisBPF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-foreground md:text-6xl">
            {copy.final.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/58">
            {copy.final.description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
            <Link
              to={localizePath('/projects/bpfcompat/', language)}
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              {copy.final.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={localizePath('/contact/', language)}
              className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              {copy.final.secondary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
