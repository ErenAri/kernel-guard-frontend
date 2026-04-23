import { Suspense, lazy } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Terminal, Target, GitMerge } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Mermaid = lazy(() => import('../components/Mermaid'));

export default function ProjectDetails() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/not-found/" replace />;
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${project.title} - Kernel Guard`}
        description={project.description[language]}
        keywords={`${project.tags.join(', ')}, Kernel Guard, open source security`}
        path={`/projects/${project.id}/`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/projects/" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-12 font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.projectDetails.backToProjects}
        </Link>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
            {project.title}
          </h1>
          <p className="text-foreground/80 text-xl leading-relaxed font-light">
            {project.description[language]}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs bg-surface border border-border text-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.diagram && (
          <div className="mb-16 bg-surface p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <GitMerge className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-light">{language === 'tr' ? 'Sistem Mimarisi' : 'System Architecture'}</h2>
            </div>
            <Suspense
              fallback={
                <div className="font-mono text-xs uppercase tracking-wider text-foreground/60">
                  Loading diagram
                </div>
              }
            >
              <Mermaid chart={project.diagram} />
            </Suspense>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Technical Section */}
          <div className="bg-surface p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-light">{t.projectDetails.technicalOverview}</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed font-light">
              {project.technicalDetails[language]}
            </p>
          </div>

          {/* Marketing Section */}
          <div className="bg-surface p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-light">{t.projectDetails.marketingOverview}</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed font-light">
              {project.marketingDetails[language]}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 border-t border-border pt-12">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-6 py-4 bg-primary text-white hover:bg-primary-dark transition-colors w-full sm:w-64"
            >
              <span className="font-medium">{t.projectDetails.viewSource}</span>
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between px-6 py-4 bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors w-full sm:w-64"
            >
              <span className="font-medium">{t.projectDetails.liveDemo}</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
