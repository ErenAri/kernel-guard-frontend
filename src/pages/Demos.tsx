import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { demos } from '../data/demos';

export default function Demos() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
            {t.demos.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
            {t.demos.title1} <span className="font-semibold">{t.demos.title2}</span>
          </h1>
          <p className="text-foreground text-xl leading-relaxed font-light">
            {t.demos.desc}
          </p>
        </div>

        {/* Directory List View */}
        <div className="border-t border-border">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b-2 border-foreground bg-surface text-sm font-semibold text-foreground">
            <div className="col-span-3 pl-4">{t.demos.colName}</div>
            <div className="col-span-5">{t.demos.colDesc}</div>
            <div className="col-span-3">{t.demos.colTags}</div>
            <div className="col-span-1 text-right pr-4">{t.demos.colLinks}</div>
          </div>

          {/* Demo Rows */}
          <div className="divide-y divide-border">
            {demos.map((demo) => (
              <div 
                key={demo.id} 
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 hover:bg-surface transition-colors items-start"
              >
                <div className="md:col-span-3 pl-4">
                  <Link 
                    to={`/demos/${demo.id}`} 
                    className="text-lg font-medium text-primary hover:underline flex items-center gap-2"
                  >
                    {demo.title}
                  </Link>
                  <p className="md:hidden text-sm text-foreground/80 mt-2 font-light">
                    {demo.description[language as keyof typeof demo.description]}
                  </p>
                </div>

                <div className="hidden md:block md:col-span-5 text-base text-foreground/80 pr-4 font-light">
                  {demo.description[language as keyof typeof demo.description]}
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-2 mt-4 md:mt-0">
                  {demo.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs bg-border text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="md:col-span-1 flex items-center justify-start md:justify-end gap-4 mt-4 md:mt-0 pr-4">
                  <a 
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium"
                    title={t.demos.visit}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
