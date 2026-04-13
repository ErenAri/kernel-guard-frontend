import { ExternalLink } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { completedProjects } from '../data/completedProjects';
import SEO from '../components/SEO';

export default function CompletedProjects() {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={t.seo.completedProjects.title}
        description={t.seo.completedProjects.description}
        keywords={t.seo.completedProjects.keywords}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 border border-border text-xs font-mono tracking-widest text-foreground/70 uppercase">
            {t.completedProjects.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
            {t.completedProjects.title1} <span className="font-semibold">{t.completedProjects.title2}</span>
          </h1>
          <p className="text-foreground text-xl leading-relaxed font-light">
            {t.completedProjects.desc}
          </p>
        </div>

        {/* Directory List View */}
        <div className="border-t border-border">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b-2 border-foreground bg-surface text-sm font-semibold text-foreground">
            <div className="col-span-3 pl-4">{t.completedProjects.colName}</div>
            <div className="col-span-5">{t.completedProjects.colDesc}</div>
            <div className="col-span-3">{t.completedProjects.colTags}</div>
            <div className="col-span-1 text-right pr-4">{t.completedProjects.colLinks}</div>
          </div>

          {/* Project Rows */}
          <div className="divide-y divide-border">
            {completedProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => navigate(`/completed-projects/${project.id}`)}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 hover:bg-surface transition-colors items-start cursor-pointer"
              >
                <div className="md:col-span-3 pl-4">
                  <Link 
                    to={`/completed-projects/${project.id}`} 
                    onClick={(e) => e.stopPropagation()}
                    className="text-lg font-medium text-primary hover:underline flex items-center gap-2"
                  >
                    {project.title}
                  </Link>
                  <p className="md:hidden text-sm text-foreground/80 mt-2 font-light">
                    {project.description[language as keyof typeof project.description]}
                  </p>
                </div>

                <div className="hidden md:block md:col-span-5 text-base text-foreground/80 pr-4 font-light">
                  {project.description[language as keyof typeof project.description]}
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-2 mt-4 md:mt-0">
                  {project.tags.map(tag => (
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
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium"
                    title={t.completedProjects.visit}
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
