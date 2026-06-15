import { ArrowRight, Clock, Tags } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { articles, localizeArticle } from '../data/articles';
import { growthServicePages, localizeGrowthServicePage } from '../data/growthServices';
import { articleIndexCopy, formatLocalizedDate } from '../i18n/growthContent';
import { localizePath } from '../i18n/route';
import { prefetchRoute } from '../routes/pageLoaders';

export default function Articles() {
  const { language } = useLanguage();
  const copy = articleIndexCopy[language];
  const localizedArticles = articles.map((article) => localizeArticle(article, language));
  const localizedServices = growthServicePages.map((service) => localizeGrowthServicePage(service, language));

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <SEO
        title={copy.seoTitle}
        description={copy.seoDescription}
        keywords={copy.seoKeywords}
        path={localizePath('/articles/', language)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
            {copy.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-foreground mb-6">
            {copy.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            {copy.description}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            {localizedArticles.map((article) => (
              <article key={article.slug} className="border border-border bg-surface p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/55">
                  <span>{formatLocalizedDate(article.updatedAt, language, 'short')}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readingMinutes} {copy.minRead}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  <Link
                    to={localizePath(`/articles/${article.slug}/`, language)}
                    onPointerEnter={() => prefetchRoute('articlePage')}
                    onFocus={() => prefetchRoute('articlePage')}
                    className="hover:text-primary transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-base text-foreground/70 leading-relaxed mb-6">{article.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 text-xs text-foreground/65">
                      <Tags className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={localizePath(`/articles/${article.slug}/`, language)}
                  onPointerEnter={() => prefetchRoute('articlePage')}
                  onFocus={() => prefetchRoute('articlePage')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {copy.readArticle}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 border border-border bg-background p-6">
              <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5">
                {copy.relatedServices}
              </h2>
              <div className="space-y-4">
                {localizedServices.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    to={localizePath(`/services/${service.slug}/`, language)}
                    onPointerEnter={() => prefetchRoute('serviceLandingPage')}
                    onFocus={() => prefetchRoute('serviceLandingPage')}
                    className="group block border-l border-border pl-4 hover:border-primary transition-colors"
                  >
                    <span className="block text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {service.shortTitle}
                    </span>
                    <span className="mt-1 block text-sm text-foreground/60 leading-relaxed">
                      {service.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
