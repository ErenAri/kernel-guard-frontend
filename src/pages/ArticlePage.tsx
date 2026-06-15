import { ArrowRight, CalendarDays, Clock, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedArticle } from '../data/articles';
import { getLocalizedGrowthServicePage } from '../data/growthServices';
import { articleDetailCopy, formatLocalizedDate } from '../i18n/growthContent';
import { localizePath } from '../i18n/route';
import { buildArticleSchema } from '../lib/schema';
import { prefetchRoute } from '../routes/pageLoaders';
import NotFound from './NotFound';

export default function ArticlePage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const copy = articleDetailCopy[language];
  const article = getLocalizedArticle(slug, language);

  if (!article) {
    return <NotFound />;
  }

  const canonicalPath = localizePath(`/articles/${article.slug}/`, language);
  const relatedServices = article.relatedServiceSlugs
    .map((serviceSlug) => getLocalizedGrowthServicePage(serviceSlug, language))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <article className="min-h-screen bg-background pt-32 pb-20">
      <SEO
        title={`${article.title} | Kernel Guard`}
        description={article.description}
        keywords={article.tags.join(', ')}
        path={canonicalPath}
        type="article"
        schema={buildArticleSchema({
          title: article.title,
          description: article.description,
          path: canonicalPath,
          language,
          publishedAt: article.publishedAt,
          updatedAt: article.updatedAt,
          keywords: article.tags,
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-14">
          <Link
            to={localizePath('/articles/', language)}
            onPointerEnter={() => prefetchRoute('articles')}
            onFocus={() => prefetchRoute('articles')}
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            {copy.articles}
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/55">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5" />
              {copy.updated} {formatLocalizedDate(article.updatedAt, language)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              {article.readingMinutes} {copy.minRead}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-light leading-tight text-foreground mb-6">
            {article.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            {article.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <section className="border-y border-border py-8 mb-10">
              <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5">
                {copy.keyPoints}
              </h2>
              <ul className="space-y-3">
                {article.summary.map((point) => (
                  <li key={point} className="flex gap-3 text-foreground/80 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="space-y-12">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl md:text-3xl font-light text-foreground mb-5">
                    {section.heading}
                  </h2>
                  <div className="space-y-5 text-base md:text-lg text-foreground/75 leading-relaxed font-light">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="space-y-3 text-base md:text-lg">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            {article.references.length > 0 ? (
              <section className="mt-14 border-t border-border pt-8">
                <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5">
                  {copy.references}
                </h2>
                <ul className="space-y-3">
                  {article.references.map((reference) => (
                    <li key={reference.url}>
                      <a
                        href={reference.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        {reference.label}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="border border-border bg-surface p-6">
                <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5">
                  {copy.tags}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="border border-border px-2.5 py-1 text-xs text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {relatedServices.length > 0 ? (
                <div className="border border-border bg-surface p-6">
                  <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5">
                    {copy.services}
                  </h2>
                  <div className="space-y-4">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.slug}
                        to={localizePath(`/services/${service.slug}/`, language)}
                        onPointerEnter={() => prefetchRoute('serviceLandingPage')}
                        onFocus={() => prefetchRoute('serviceLandingPage')}
                        className="group block"
                      >
                        <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {service.shortTitle}
                        </span>
                        <span className="mt-1 block text-sm text-foreground/60 leading-relaxed">
                          {service.intent}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
