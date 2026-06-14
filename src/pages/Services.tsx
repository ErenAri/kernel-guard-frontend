import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { SITE_EMAILS, mailto } from '../config/site';
import { Layout, Shield, Code, Globe, Box, Lock, Cloud, Server, Database, ArrowRight } from 'lucide-react';
import { growthServicePages } from '../data/growthServices';
import { prefetchRoute } from '../routes/pageLoaders';

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  code: <Code className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  box: <Box className="w-8 h-8" />,
  lock: <Lock className="w-8 h-8" />,
  cloud: <Cloud className="w-8 h-8" />,
  server: <Server className="w-8 h-8" />,
  database: <Database className="w-8 h-8" />
};

export default function Services() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <SEO 
        title={t.seo.services.title}
        description={t.seo.services.description}
        keywords={t.seo.services.keywords}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            {t.servicesPage.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed">
            {t.servicesPage.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {t.servicesPage.services.map((service, index) => (
            <div
              key={index}
              className="group relative block h-full p-8 bg-surface border border-border hover:border-primary/50 transition-colors overflow-hidden rounded-sm"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-primary/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 text-primary">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">{service.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed font-light flex-grow">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {language === 'en' ? (
          <section className="mb-32 border-t border-border pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
                  Search-Focused Services
                </div>
                <h2 className="text-3xl md:text-4xl font-light mb-5">
                  Focused engagements for security-minded teams.
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  These pages map common buying intent to concrete outcomes, deliverables, and proof points.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {growthServicePages.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/en/services/${service.slug}/`}
                    onPointerEnter={() => prefetchRoute('serviceLandingPage')}
                    onFocus={() => prefetchRoute('serviceLandingPage')}
                    className="group border border-border bg-surface p-6 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm leading-relaxed text-foreground/70 mb-5">{service.intent}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                      View service
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* CTA Section */}
        <div className="relative overflow-hidden border border-border bg-surface p-12 md:p-20 text-center">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light mb-6">{t.servicesPage.ctaTitle}</h2>
            <p className="text-lg text-foreground/70 font-light mb-10">{t.servicesPage.ctaDesc}</p>
            <a 
              href={mailto(SITE_EMAILS.sales)}
              className="inline-flex items-center justify-between px-8 py-4 kg-action-primary transition-colors w-full sm:w-auto min-w-[200px]"
            >
              <span className="font-medium">{t.servicesPage.ctaButton}</span>
              <ArrowRight className="w-5 h-5 ml-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
