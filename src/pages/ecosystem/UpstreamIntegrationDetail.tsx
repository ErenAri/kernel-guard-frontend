import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';
import { localizePath } from '../../i18n/route';
import { ecosystemCopy, integrationEvidence, type IntegrationId } from './content';
import BrandMarks from './BrandMarks';

const validIds: IntegrationId[] = ['falco', 'inspektor-gadget'];

export default function UpstreamIntegrationDetail() {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();

  if (!id || !validIds.includes(id as IntegrationId)) {
    return <Navigate to={localizePath('/ecosystem/upstream-integrations/', language)} replace />;
  }

  const integrationId = id as IntegrationId;
  const copy = ecosystemCopy[language];
  const item = copy.integrations[integrationId];
  const evidence = integrationEvidence[integrationId];
  const logicalPath = '/ecosystem/upstream-integrations/' + integrationId + '/';

  return (
    <div className="flex flex-col bg-background">
      <SEO
        title={item.name + ' Integration | Kernel Guard'}
        description={item.description}
        keywords={'Kernel Guard, ' + item.name + ', BPFCompat, upstream integration, cybersecurity infrastructure, eBPF compatibility'}
        path={localizePath(logicalPath, language)}
        imageAlt={'Kernel Guard ' + item.name + ' upstream integration'}
      />

      <section className="kg-dot-grid pt-28 pb-20 md:pt-36 md:pb-24 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={localizePath('/ecosystem/upstream-integrations/', language)}
            className="inline-flex items-center gap-2 text-sm text-foreground/65 hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {copy.labels.back}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <BrandMarks logos={[item.logo]} size="lg" className="mb-8" />
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary mb-5">
                {item.kicker}
              </div>
              <h1 className="text-5xl md:text-7xl font-light leading-[1.05] text-foreground">
                {item.name}
                <br />
                <span className="font-semibold">{copy.labels.upstreamIntegration}</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg md:text-xl text-foreground/75 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-light">{item.whatTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/75 font-light leading-relaxed">{item.whatBody}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
                {copy.labels.merged}
              </div>
              <h2 className="text-3xl md:text-4xl font-light">{item.contributionTitle}</h2>
            </div>
            <div className="lg:col-span-8 border-t border-border">
              {item.contribution.map((line, index) => (
                <div key={line} className="grid grid-cols-[56px_1fr] gap-4 py-6 border-b border-border">
                  <span className="font-mono text-xs text-primary">0{index + 1}</span>
                  <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-light">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-light">{item.whyTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 border border-border bg-background">
                {item.why.map((line, index) => (
                  <div
                    key={line}
                    className={'p-6 md:p-7 min-h-56 ' + (index > 0 ? 'border-t md:border-t-0 md:border-l border-border' : '')}
                  >
                    <div className="font-mono text-xs text-primary mb-10">0{index + 1}</div>
                    <p className="text-base leading-relaxed text-foreground/75">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
                {copy.labels.downstream}
              </div>
              <h2 className="text-3xl md:text-4xl font-light">{item.downstreamTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/70 font-light leading-relaxed">{item.downstreamIntro}</p>
            </div>
          </div>

          <div className="border border-border bg-surface">
            {item.downstream.map((relationship, index) => (
              <div
                key={relationship.name}
                className={'grid grid-cols-1 lg:grid-cols-12 gap-7 p-7 md:p-8 ' + (index > 0 ? 'border-t border-border' : '')}
              >
                <div className="lg:col-span-3">
                  {relationship.logos && relationship.logos.length > 0 ? (
                    <BrandMarks logos={relationship.logos} size="md" className="mb-5" />
                  ) : null}
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/45 mb-3">
                    {relationship.category}
                  </div>
                  <div className="text-xl font-medium text-foreground">{relationship.name}</div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-base text-foreground/70 leading-relaxed">{relationship.relationship}</p>
                </div>
                <div className="lg:col-span-2 lg:text-right">
                  <a
                    href={relationship.evidenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {relationship.evidenceLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
                {copy.labels.publicEvidence}
              </div>
              <h2 className="text-3xl font-light">{item.evidenceTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-lg text-foreground/70 font-light leading-relaxed mb-8">{item.evidenceIntro}</p>
              <div className="border-t border-border">
                {evidence.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-6 py-5 border-b border-border group"
                  >
                    <span className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                    <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">CLAIMS</div>
              <h2 className="text-3xl font-light">{item.claimTitle}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed font-light">
                {item.claimBody}
              </p>
              <Link
                to={localizePath('/projects/bpfcompat/', language)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                BPFCompat
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
