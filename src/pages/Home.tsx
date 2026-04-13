import { Layout, Server, Database, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SecurityTerminal from '../components/SecurityTerminal';
import SEO from '../components/SEO';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Layout className="w-6 h-6 text-primary" />,
      title: t.home.features.frontend.title,
      description: t.home.features.frontend.desc
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: t.home.features.backend.title,
      description: t.home.features.backend.desc
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: t.home.features.data.title,
      description: t.home.features.data.desc
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: t.home.features.performance.title,
      description: t.home.features.performance.desc
    }
  ];

  return (
    <div className="flex flex-col bg-background">
      <SEO 
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={t.seo.home.keywords}
      />
      {/* Hero Section - IBM Style */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-4xl relative z-10">
              <h1 className="text-5xl md:text-7xl font-light text-foreground leading-[1.1] mb-8">
                {t.home.heroTitle1} <br />
                <span className="font-semibold">{t.home.heroTitle2}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl leading-relaxed font-light">
                {t.home.heroDesc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-between px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors w-full sm:w-64"
                >
                  <span className="font-medium">{t.home.viewArch}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://github.com/Kernel-Guard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors w-full sm:w-64"
                >
                  <span className="font-medium">{t.home.githubRepo}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Animation Container */}
            <div className="hidden lg:flex justify-center items-center relative">
              <SecurityTerminal />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Editorial Style */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-light mb-6">{t.home.missionTitle}</h2>
            </div>
            <div className="lg:col-span-8 space-y-8 text-lg text-foreground leading-relaxed font-light">
              <p>{t.home.missionP1}</p>
              <p>{t.home.missionP2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Strict Grid */}
      <section className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
            {features.map((feature, index) => (
              <div key={index} className="p-8 hover:bg-surface transition-colors group cursor-pointer">
                <div className="mb-12">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section - Startup Focus */}
      <section className="py-24 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light mb-16 max-w-2xl">{t.home.principles.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border">
            {t.home.principles.items.map((item: any, index: number) => (
              <div key={index} className={`pt-8 md:pt-0 ${index === 0 ? 'md:pr-8' : index === 1 ? 'md:px-8' : 'md:pl-8'}`}>
                <div className="text-xl font-medium text-primary mb-4">{item.title}</div>
                <div className="text-base font-light leading-relaxed text-foreground/80">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section - Build in Public */}
      <section className="py-24 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-6">{t.home.community.title}</h2>
            <p className="text-xl font-light text-foreground/70 mb-10 leading-relaxed">
              {t.home.community.desc}
            </p>
            <a
              href="https://github.com/Kernel-Guard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors"
            >
              <span className="font-medium">{t.nav.github}</span>
              <ArrowRight className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
