import { ArrowRight, Clock, Tags } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { articles } from '../data/articles';
import { growthServicePages } from '../data/growthServices';
import { prefetchRoute } from '../routes/pageLoaders';

const ENGLISH_ONLY = ['en'] as const;

function formatDate(date: string): string {
  const [year, month, day] = date.split('-');
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = shortMonths[Number(month) - 1] ?? month;

  return `${monthName} ${Number(day)}, ${year}`;
}

export default function Articles() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <SEO
        title="Security Engineering Articles | Kernel Guard"
        description="Practical security engineering notes on web security, Cloudflare hardening, Google Workspace email authentication, React abuse controls, and eBPF compatibility."
        keywords="security engineering articles, web security, Cloudflare hardening, React security, DMARC setup, eBPF compatibility"
        path="/en/articles/"
        alternateLanguages={ENGLISH_ONLY}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
            Field Notes
          </div>
          <h1 className="text-4xl md:text-6xl font-light leading-tight text-foreground mb-6">
            Security engineering articles for production web teams.
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            Practical, implementation-focused writing that supports the same work Kernel Guard ships:
            secure web apps, hardened infrastructure, company-grade email trust, and repeatable evidence.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            {articles.map((article) => (
              <article key={article.slug} className="border border-border bg-surface p-6 md:p-8">
                <div className="mb-5 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/55">
                  <span>{formatDate(article.updatedAt)}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readingMinutes} min read
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                  <Link
                    to={`/en/articles/${article.slug}/`}
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
                  to={`/en/articles/${article.slug}/`}
                  onPointerEnter={() => prefetchRoute('articlePage')}
                  onFocus={() => prefetchRoute('articlePage')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 border border-border bg-background p-6">
              <h2 className="text-sm font-mono uppercase tracking-widest text-foreground/60 mb-5">
                Related Services
              </h2>
              <div className="space-y-4">
                {growthServicePages.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    to={`/en/services/${service.slug}/`}
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
