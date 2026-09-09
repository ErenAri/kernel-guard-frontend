import {
  ArrowRight,
  Box,
  CheckCircle2,
  ExternalLink,
  GitBranch,
  Server,
  ShieldCheck,
  SquareTerminal,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { localizePath } from '../i18n/route';
import { evidenceHomeCopy } from '../i18n/evidenceHome';

const kernelFamilies = [
  'Ubuntu',
  'Debian',
  'RHEL family',
  'Rocky Linux',
  'AlmaLinux',
  'CentOS Stream',
  'Amazon Linux',
  'Oracle Linux',
  'SUSE / openSUSE',
  'Fedora CoreOS',
  'RHCOS / OpenShift BYO',
  'Linux mainline',
];

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary">
      <span className="h-px w-6 bg-primary" aria-hidden="true" />
      {children}
    </div>
  );
}

function KernelMatrixTerminal({ label }: { label: string }) {
  const rows = [
    ['ubuntu-20.04', '5.4', 'FAIL', 'ringbuf unsupported', false],
    ['almalinux-8', '4.18', 'PASS', 'vendor backport', true],
    ['ubuntu-22.04', '5.15', 'PASS', 'load + attach', true],
  ] as const;

  return (
    <div className="border border-[#30363d] bg-[#0b0d10] text-[#e6edf3] shadow-2xl shadow-black/20">
      <div className="flex h-11 items-center justify-between border-b border-[#252b34] px-4">
        <span className="font-mono text-[11px] text-[#8b949e]">{label}</span>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#343b46]" />
          <span className="h-2 w-2 rounded-full bg-[#343b46]" />
          <span className="h-2 w-2 rounded-full bg-[#343b46]" />
        </div>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-xs leading-7">
        <div className="min-w-[510px]">
          <div>
            <span className="text-[#9aa8ff]">$</span>{' '}
            bpfcompat test --artifact ringbuf.bpf.o --matrix matrices/quirk-library.yaml
          </div>
          <div className="mb-3 text-[#7d8794]">booting disposable vendor-kernel VMs...</div>
          {rows.map(([target, kernel, status, detail, pass]) => (
            <div
              key={target}
              className="grid grid-cols-[150px_70px_65px_1fr] gap-3 border-t border-[#1d222a] py-1.5"
            >
              <span>{target}</span>
              <span className="text-[#9aa3af]">{kernel}</span>
              <span className={pass ? 'text-[#65c998]' : 'text-[#ff858d]'}>{status}</span>
              <span className="text-[#a7b0bd]">{detail}</span>
            </div>
          ))}
          <div className="mt-4 text-[#8b949e]">
            evidence → report.json · serial.log · verifier output
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { language } = useLanguage();
  const copy = evidenceHomeCopy[language];

  const productCards = [
    {
      phase: copy.products.preDeployment,
      status: copy.products.openSource,
      title: 'BPFCompat',
      description: copy.products.bpfDesc,
      href: localizePath('/projects/bpfcompat/', language),
      bullets: [
        'Disposable QEMU/KVM validation',
        'CLI · GitHub Action · Go library',
        'Real project-loader command mode',
        'JSON / Markdown compatibility evidence',
      ],
      statusClass: 'border-emerald-600/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300',
    },
    {
      phase: copy.products.runtime,
      status: copy.products.preview,
      title: 'AegisBPF',
      description: copy.products.aegisDesc,
      href: localizePath('/projects/aegis-bpf/', language),
      bullets: [
        'BPF LSM enforcement',
        'Cgroup-scoped policy controls',
        'Audit fallback + forensic events',
        'Kubernetes deployment paths',
      ],
      statusClass: 'border-amber-600/30 bg-amber-500/5 text-amber-700 dark:text-amber-300',
    },
  ];

  const proofItems = [
    [copy.proof.upstreamLabel, copy.proof.upstreamValue],
    [copy.proof.executionLabel, copy.proof.executionValue],
    [copy.proof.architecturesLabel, copy.proof.architecturesValue],
    [copy.proof.provenanceLabel, copy.proof.provenanceValue],
  ];

  const trustIcons = [Server, Box, ShieldCheck, GitBranch, CheckCircle2, SquareTerminal];

  return (
    <div className="flex flex-col bg-background">
      <SEO
        title={copy.seoTitle}
        description={copy.seoDescription}
        keywords="eBPF compatibility, Linux kernel compatibility, BPF LSM, runtime security, BPFCompat, AegisBPF"
        imageAlt="Kernel Guard — eBPF compatibility evidence and runtime enforcement"
      />

      <section className="kg-dot-grid overflow-hidden border-b border-border pt-28 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div className="relative z-10">
              <SectionEyebrow>{copy.hero.eyebrow}</SectionEyebrow>
              <h1 className="mt-7 max-w-4xl text-5xl font-light leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl">
                {copy.hero.titleBefore}{' '}
                <span className="font-medium text-primary">{copy.hero.titleEvidence}</span>{' '}
                {copy.hero.titleAfter}
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
                {copy.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={localizePath('/projects/bpfcompat/', language)}
                  className="kg-action-primary inline-flex min-h-12 items-center justify-between gap-8 px-5 py-3 font-medium transition-colors"
                >
                  {copy.hero.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://github.com/Kernel-Guard/bpfcompat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-between gap-8 border border-foreground px-5 py-3 font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  {copy.hero.secondaryCta}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 font-mono text-xs leading-relaxed text-foreground/50">{copy.hero.note}</p>
            </div>

            <KernelMatrixTerminal label={copy.hero.terminalLabel} />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {proofItems.map(([label, value], index) => (
            <div
              key={label}
              className={`flex min-h-28 flex-col justify-center py-6 sm:px-6 ${
                index > 0 ? 'border-t border-border sm:border-t-0 lg:border-l' : ''
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/50">
                {label}
              </span>
              <span className="mt-2 text-lg font-medium tracking-tight text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>{copy.problem.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
            {copy.problem.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-foreground/65">
            {copy.problem.description}
          </p>

          <div className="mt-12 grid grid-cols-1 border border-border md:grid-cols-3">
            {copy.problem.cards.map((card, index) => (
              <article
                key={card.title}
                className={`min-h-64 bg-surface p-7 ${
                  index > 0 ? 'border-t border-border md:border-l md:border-t-0' : ''
                }`}
              >
                <span className="font-mono text-xs text-primary">0{index + 1}</span>
                <h3 className="mt-10 text-2xl font-normal tracking-tight">{card.title}</h3>
                <p className="mt-4 font-light leading-relaxed text-foreground/65">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>{copy.products.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
            {copy.products.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-light text-foreground/65">{copy.products.description}</p>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {productCards.map((product) => (
              <article
                key={product.title}
                className="relative flex min-h-[440px] flex-col overflow-hidden border border-border bg-background p-8 md:p-10"
              >
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.14em] text-foreground/50">
                    {product.phase}
                  </span>
                  <span className={`border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${product.statusClass}`}>
                    {product.status}
                  </span>
                </div>
                <h3 className="relative z-10 mt-12 text-5xl font-light tracking-[-0.045em]">{product.title}</h3>
                <p className="relative z-10 mt-5 max-w-xl text-lg font-light leading-relaxed text-foreground/65">
                  {product.description}
                </p>
                <ul className="relative z-10 mt-7">
                  {product.bullets.map((bullet) => (
                    <li key={bullet} className="border-t border-border py-2.5 font-mono text-xs text-foreground/60">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="relative z-10 mt-auto pt-7">
                  <Link
                    to={product.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {copy.products.explore} {product.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div
                  className="pointer-events-none absolute -right-28 -bottom-36 h-80 w-80 rotate-45 border border-border"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#2a3039] bg-[#0b0d10] py-24 text-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>{copy.lifecycle.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
            {copy.lifecycle.title}
          </h2>
          <div className="mt-12 grid grid-cols-1 border border-[#252b34] md:grid-cols-5">
            {copy.lifecycle.stages.map((stage, index) => {
              const highlighted = index === 1 || index === 4;
              return (
                <div
                  key={stage.label}
                  className={`min-h-44 p-6 ${
                    highlighted ? 'bg-[#111731]' : 'bg-[#0b0d10]'
                  } ${index > 0 ? 'border-t border-[#252b34] md:border-l md:border-t-0' : ''}`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#7f8996]">
                    {stage.label}
                  </span>
                  <h3 className="mt-8 text-xl font-normal">{stage.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#939daa]">{stage.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="integrations" className="border-b border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>{copy.integrations.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
            {copy.integrations.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-light text-foreground/65">{copy.integrations.description}</p>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article className="border border-border bg-surface p-8">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-foreground/50">CNCF ecosystem</span>
              <h3 className="mt-4 text-3xl font-normal tracking-tight">Falco</h3>
              <p className="mt-4 font-light leading-relaxed text-foreground/65">{copy.integrations.falco}</p>
              <div className="mt-7 flex flex-wrap gap-5">
                <a
                  href="https://github.com/falcosecurity/libs/pull/3024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {copy.integrations.evidenceLink} #3024
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/falcosecurity/libs/pull/3061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {copy.integrations.evidenceLink} #3061
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>

            <article className="border border-border bg-surface p-8">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-foreground/50">CNCF ecosystem</span>
              <h3 className="mt-4 text-3xl font-normal tracking-tight">Inspektor Gadget</h3>
              <p className="mt-4 font-light leading-relaxed text-foreground/65">{copy.integrations.gadget}</p>
              <a
                href="https://github.com/inspektor-gadget/inspektor-gadget/pull/5708"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                {copy.integrations.evidenceLink} #5708
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          </div>

          <p className="mt-5 max-w-3xl font-mono text-xs leading-relaxed text-foreground/50">
            {copy.integrations.disclaimer}
          </p>
        </div>
      </section>

      <section className="border-b border-[#2a3039] bg-[#0b0d10] py-24 text-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>{copy.trust.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
            {copy.trust.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-light text-[#9ba5b2]">{copy.trust.description}</p>

          <div className="mt-12 grid grid-cols-1 border border-[#252b34] sm:grid-cols-2 lg:grid-cols-3">
            {copy.trust.items.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <article
                  key={item.title}
                  className={`min-h-52 bg-[#0b0d10] p-7 ${
                    index > 0 ? 'border-t border-[#252b34] sm:border-l sm:border-t-0' : ''
                  } ${
                    index >= 2 ? 'sm:border-t' : ''
                  } ${
                    index % 2 === 0 && index > 0 ? 'sm:border-l-0 lg:border-l' : ''
                  }`}
                >
                  <Icon className="h-5 w-5 text-[#9aa8ff]" />
                  <h3 className="mt-8 text-lg font-normal">{item.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-[#8f99a6]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div>
            <SectionEyebrow>{copy.quickstart.eyebrow}</SectionEyebrow>
            <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.035em] md:text-5xl">
              {copy.quickstart.title}
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-foreground/65">{copy.quickstart.description}</p>
            <a
              href="https://github.com/Kernel-Guard/bpfcompat/blob/main/docs/quickstart.md"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {copy.quickstart.docs}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <pre className="overflow-x-auto border border-[#30363d] bg-[#101318] p-7 font-mono text-xs leading-7 text-[#eef2f6]">
            <span className="text-[#aab5ff]">$</span> bpfcompat test \
{'
'}  --artifact ghcr.io/inspektor-gadget/gadget/trace_open:latest \
{'
'}  --quick
{'

'}<span className="text-[#65c998]">PASS</span>  evidence written to report.json
          </pre>
        </div>
      </section>

      <section className="border-b border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow>{copy.kernels.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-[-0.035em] md:text-6xl">
            {copy.kernels.title}
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-light text-foreground/65">{copy.kernels.description}</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {kernelFamilies.map((family) => (
              <span key={family} className="border border-border bg-surface px-4 py-3 font-mono text-xs text-foreground/70">
                {family}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/Kernel-Guard/bpfcompat/blob/main/docs/profile-catalog.md"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            {copy.kernels.catalog}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-4 sm:px-6 lg:flex-row lg:items-end lg:px-8">
          <div>
            <h2 className="max-w-3xl text-5xl font-light leading-none tracking-[-0.045em] md:text-6xl">
              {copy.final.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/80">{copy.final.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to={localizePath('/projects/bpfcompat/', language)}
              className="inline-flex min-h-12 items-center justify-between gap-8 bg-white px-5 py-3 font-medium text-[#111318] transition-colors hover:bg-white/90"
            >
              {copy.final.primary}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to={localizePath('/contact/', language)}
              className="inline-flex min-h-12 items-center justify-between gap-8 border border-white/50 px-5 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              {copy.final.secondary}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
