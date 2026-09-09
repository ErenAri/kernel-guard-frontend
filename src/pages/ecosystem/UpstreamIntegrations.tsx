import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';
import { localizePath } from '../../i18n/route';
import { brandLogos, ecosystemCopy, type IntegrationId } from './content';
import BrandMarks from './BrandMarks';

const integrationIds: IntegrationId[] = ['falco', 'inspektor-gadget'];

export default function UpstreamIntegrations() {
  const { language } = useLanguage();
  const copy = ecosystemCopy[language];

  return (
    <div className="flex flex-col bg-background">
      <SEO
        title={copy.index.title1 + ' ' + copy.index.title2 + ' | Kernel Guard'}
        description={copy.index.description}
        keywords="Kernel Guard ecosystem, upstream integrations, cybersecurity infrastructure, Falco, Inspektor Gadget, BPFCompat"
        path={localizePath('/ecosystem/upstream-integrations/', language)}
        imageAlt="Kernel Guard upstream cybersecurity integrations"
      />

      <section className="kg-dot-grid pt-32 pb-20 md:pt-44 md:pb-28 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
                {copy.index.kicker}
              </div>
              <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.06]">
                {copy.index.title1}
                <br />
                <span className="font-semibold">{copy.index.title2}</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg md:text-xl text-foreground/75 font-light leading-relaxed">
                {copy.index.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-light">{copy.index.whyTitle}</h2>
            </div>
            <div className="lg:col-span-8 space-y-7 text-lg text-foreground/75 leading-relaxed font-light">
              <p>{copy.index.whyP1}</p>
              <p>{copy.index.whyP2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
                FLOW
              </div>
              <h2 className="text-3xl md:text-4xl font-light">{copy.index.chainTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 border border-border bg-surface">
                {copy.index.chainSteps.map((step, index) => (
                  <div
                    key={step}
                    className={'min-h-40 p-6 flex flex-col justify-between ' + (index > 0 ? 'border-t md:border-t-0 md:border-l border-border' : '')}
                  >
                    <span className="font-mono text-xs text-primary">0{index + 1}</span>
                    <span className="text-lg font-medium text-foreground">{step}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-foreground/55 font-mono">
                {copy.index.downstreamDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-light mb-5">{copy.index.integrationsTitle}</h2>
              <p className="text-lg text-foreground/70 font-light leading-relaxed">
                {copy.index.integrationsDescription}
              </p>
            </div>
          </div>

          <div className="border border-border bg-background">
            {integrationIds.map((id, index) => {
              const item = copy.integrations[id];
              return (
                <Link
                  key={id}
                  to={localizePath('/ecosystem/upstream-integrations/' + id + '/', language)}
                  className={'group grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-10 hover:bg-surface transition-colors ' + (index > 0 ? 'border-t border-border' : '')}
                >
                  <div className="lg:col-span-3">
                    <BrandMarks logos={[item.logo]} size="lg" className="mb-7" />
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-foreground/50">
                      {copy.labels.upstreamIntegration}
                    </div>
                    <div className="mt-4 text-3xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="font-mono text-xs uppercase tracking-[0.12em] text-primary mb-4">
                      {item.kicker}
                    </div>
                    <p className="text-lg font-light leading-relaxed text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2 flex lg:justify-end lg:items-center">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      {copy.index.view}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light">{copy.index.downstreamTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/75 leading-relaxed font-light mb-8">
                {copy.index.downstreamDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://falco.org/blog/falco-applies-for-graduation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-surface p-6 group hover:border-primary/50 transition-colors"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">Falco ecosystem</span>
                  <BrandMarks
                    logos={[brandLogos.aws, brandLogos.qonto, brandLogos.shopify]}
                    size="md"
                    className="mt-5"
                  />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-medium">AWS · Qonto · Shopify</span>
                    <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-primary" />
                  </div>
                </a>
                <a
                  href="https://learn.microsoft.com/en-us/azure/aks/inspektor-gadget-configure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-surface p-6 group hover:border-primary/50 transition-colors"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-foreground/50">Inspektor Gadget ecosystem</span>
                  <BrandMarks logos={[brandLogos.azure]} size="md" className="mt-5" />
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-medium">Microsoft Azure · AKS</span>
                    <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-primary" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">CLAIMS</div>
              <h2 className="text-3xl font-light">{copy.index.claimTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                {copy.index.claimBody}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
