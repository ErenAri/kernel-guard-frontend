import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function Projects() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={t.seo.projects.title}
        description={t.seo.projects.description}
        keywords={t.seo.projects.keywords}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-foreground">
            {t.projects.title1} <span className="font-semibold">{t.projects.title2}</span>
          </h1>
          <p className="text-foreground text-xl leading-relaxed font-light">
            {t.projects.desc}
          </p>
        </div>

        {/* Directory List View - IBM Carbon Style */}
        <div className="border-t border-border">
          {/* Table Header (Hidden on mobile) */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b-2 border-foreground bg-surface text-sm font-semibold text-foreground">
            <div className="col-span-3 pl-4">{t.projects.colName}</div>
            <div className="col-span-5">{t.projects.colDesc}</div>
            <div className="col-span-3">{t.projects.colTech}</div>
            <div className="col-span-1 text-right pr-4">{t.projects.colLinks}</div>
          </div>

          {/* Project Rows */}
          <div className="divide-y divide-border">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 hover:bg-surface transition-colors items-start"
              >
                {/* Project Name & Mobile Description */}
                <div className="md:col-span-3 pl-4">
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-lg font-medium text-primary hover:underline flex items-center gap-2"
                  >
                    {project.title}
                  </Link>
                  {/* Mobile-only description */}
                  <p className="md:hidden text-sm text-foreground/80 mt-2 font-light">
                    {project.description[language]}
                  </p>
                </div>

                {/* Desktop Description */}
                <div className="hidden md:block md:col-span-5 text-base text-foreground/80 pr-4 font-light">
                  {project.description[language]}
                </div>

                {/* Tags */}
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

                {/* Links */}
                <div className="md:col-span-1 flex items-center justify-start md:justify-end gap-4 mt-4 md:mt-0 pr-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium"
                      title="View Source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors flex items-center gap-1 text-sm font-medium"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
