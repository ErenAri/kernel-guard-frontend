import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { mailto } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import { enterprisePages, type EnterprisePageKey } from '../data/enterprisePages';

function renderSectionItem(item: string) {
  if (item.startsWith('Email: ')) {
    const email = item.replace('Email: ', '');

    return (
      <>
        Email:{' '}
        <a className="text-primary hover:underline" href={mailto(email)}>
          {email}
        </a>
      </>
    );
  }

  return item;
}

export default function EnterprisePage({ pageKey }: { pageKey: EnterprisePageKey }) {
  const { language } = useLanguage();
  const page = enterprisePages[language].pages[pageKey];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO title={page.seoTitle} description={page.seoDescription} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
            {page.badge}
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">{page.title}</h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            {page.description}
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {page.facts.map((fact) => (
            <div key={fact.label} className="border border-border bg-surface p-6">
              <div className="font-mono text-xs uppercase text-foreground/50 mb-6">{fact.label}</div>
              <div className="text-3xl font-mono text-foreground mb-3">{fact.value}</div>
              <p className="text-sm text-foreground/70 leading-relaxed">{fact.detail}</p>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {page.sections.map((section) => (
            <article key={section.title} className="border border-border bg-surface p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">{section.title}</h2>
              <p className="text-foreground/70 leading-relaxed font-light mb-8">{section.body}</p>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{renderSectionItem(item)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
