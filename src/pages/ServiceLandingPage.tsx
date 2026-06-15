import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_EMAILS, mailto } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedArticle } from '../data/articles';
import { getLocalizedGrowthServicePage } from '../data/growthServices';
import { serviceLandingCopy } from '../i18n/growthContent';
import { localizePath } from '../i18n/route';
import { buildServiceSchema } from '../lib/schema';
import { prefetchRoute } from '../routes/pageLoaders';
import NotFound from './NotFound';

export default function ServiceLandingPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const copy = serviceLandingCopy[language];
  const service = getLocalizedGrowthServicePage(slug, language);

  if (!service) {
    return <NotFound />;
  }

  const canonicalPath = localizePath(`/services/${service.slug}/`, language);
  const relatedArticles = service.relatedArticleSlugs
    .map((articleSlug) => getLocalizedArticle(articleSlug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <SEO
        title={`${service.title} | Kernel Guard`}
        description={service.description}
        keywords={service.keywords}
        path={canonicalPath}
        schema={buildServiceSchema({
          name: service.title,
          description: service.description,
          path: canonicalPath,
          language,
          serviceType: service.serviceType,
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
              <ShieldCheck className="h-3.5 w-3.5" />
              {copy.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-light leading-tight text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="lg:col-span-4 border border-border bg-surface p-6">
            <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-4">
              {copy.bestFit}
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6">{service.intent}</p>
            <a
              href={mailto(SITE_EMAILS.sales)}
              className="inline-flex w-full items-center justify-between px-5 py-3 kg-action-primary transition-colors"
            >
              <span className="font-medium">{copy.discussService}</span>
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light text-foreground mb-4">{copy.outcomes}</h2>
            <p className="text-foreground/65 leading-relaxed">
              {copy.outcomesDescription}
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="border border-border bg-surface p-5">
                <CheckCircle2 className="h-5 w-5 text-primary mb-5" />
                <p className="text-sm leading-relaxed text-foreground/75">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light text-foreground mb-4">{copy.deliverables}</h2>
            <p className="text-foreground/65 leading-relaxed">
              {copy.deliverablesDescription}
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {service.deliverables.map((deliverable) => (
                <div key={deliverable} className="flex gap-3 border-b border-border pb-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                  <span className="text-foreground/80 leading-relaxed">{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light text-foreground mb-4">{copy.process}</h2>
            <p className="text-foreground/65 leading-relaxed">
              {copy.processDescription}
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {service.process.map((step, index) => (
              <div key={step.title} className="border border-border bg-background p-5">
                <div className="font-mono text-sm text-primary mb-5">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light text-foreground mb-4">{copy.evidence}</h2>
            <p className="text-foreground/65 leading-relaxed">
              {copy.evidenceDescription}
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.proofPoints.map((point) => (
                <li key={point} className="border border-border bg-surface p-5 text-sm leading-relaxed text-foreground/75">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {relatedArticles.length > 0 ? (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-border pt-12 mb-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light text-foreground mb-4">{copy.relatedReading}</h2>
              <p className="text-foreground/65 leading-relaxed">
                {copy.relatedReadingDescription}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  to={localizePath(`/articles/${article.slug}/`, language)}
                  onPointerEnter={() => prefetchRoute('articlePage')}
                  onFocus={() => prefetchRoute('articlePage')}
                  className="group block border border-border bg-surface p-5 hover:border-primary/50 transition-colors"
                >
                  <span className="block text-xs font-mono uppercase tracking-widest text-foreground/55 mb-3">
                    {article.readingMinutes} {copy.minRead}
                  </span>
                  <span className="block text-xl font-light text-foreground group-hover:text-primary transition-colors mb-2">
                    {article.title}
                  </span>
                  <span className="block text-sm leading-relaxed text-foreground/65">
                    {article.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="border border-border bg-surface p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h2 className="text-3xl font-light text-foreground mb-4">{copy.ctaTitle}</h2>
              <p className="text-foreground/70 leading-relaxed">
                {copy.ctaDescription}
              </p>
            </div>
            <div className="md:col-span-4">
              <a
                href={mailto(SITE_EMAILS.sales)}
                className="inline-flex w-full items-center justify-between px-6 py-4 kg-action-primary transition-colors"
              >
                <span className="font-medium">{copy.emailSales}</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
