import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Cookies() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${t.cookies.title} | Kernel-Guard`}
        description={t.cookies.desc}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-light mb-4 text-foreground">
          {t.cookies.title}
        </h1>
        <p className="text-foreground/60 text-sm mb-12 font-mono">
          {t.cookies.lastUpdated}
        </p>

        <div className="space-y-12 text-foreground/80 leading-relaxed font-light">
          <p className="text-lg">{t.cookies.desc}</p>

          <section className="p-6 border border-border bg-surface rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-medium text-foreground mb-1">{t.cookies.essential.title}</h2>
                <p className="text-sm text-foreground/70">{t.cookies.essential.desc}</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-6 bg-primary rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
                <span className="ml-3 text-sm font-medium">Always Active</span>
              </div>
            </div>
          </section>

          <section className="p-6 border border-border bg-surface rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-medium text-foreground mb-1">{t.cookies.analytics.title}</h2>
                <p className="text-sm text-foreground/70">{t.cookies.analytics.desc}</p>
              </div>
              <div className="flex items-center">
                <button className="w-12 h-6 bg-border rounded-full relative transition-colors hover:bg-gray-400">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                </button>
              </div>
            </div>
          </section>

          <button className="px-8 py-4 bg-primary text-white hover:bg-primary-dark transition-colors font-medium">
            {t.cookies.save}
          </button>
        </div>
      </div>
    </div>
  );
}
