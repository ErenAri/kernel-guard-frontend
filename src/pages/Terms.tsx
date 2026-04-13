import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${t.terms.title} | Kernel-Guard`}
        description={t.terms.section1.content}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
          {t.terms.title}
        </h1>
        <p className="text-foreground/60 text-sm mb-12 font-mono">
          {t.terms.lastUpdated}
        </p>

        <div className="space-y-12 text-foreground/80 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.terms.section1.title}</h2>
            <p>{t.terms.section1.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.terms.section2.title}</h2>
            <p>{t.terms.section2.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.terms.section3.title}</h2>
            <p>{t.terms.section3.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
