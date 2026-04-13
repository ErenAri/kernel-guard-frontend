import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${t.privacy.title} | Kernel-Guard`}
        description={t.privacy.section1.content}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
          {t.privacy.title}
        </h1>
        <p className="text-foreground/60 text-sm mb-12 font-mono">
          {t.privacy.lastUpdated}
        </p>

        <div className="space-y-12 text-foreground/80 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.privacy.section1.title}</h2>
            <p>{t.privacy.section1.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.privacy.section2.title}</h2>
            <p>{t.privacy.section2.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">{t.privacy.section3.title}</h2>
            <p>{t.privacy.section3.content}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
