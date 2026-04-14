import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ShieldCheck, User, KeyRound } from 'lucide-react';
import { completedProjects } from '../data/completedProjects';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function CompletedProjectDetails() {
  const { id } = useParams();
  const { language, t } = useLanguage();
  
  const project = completedProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-mono text-foreground mb-4">404_PROJECT_NOT_FOUND</h1>
          <Link to="/completed-projects" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {t.nav.completedProjects}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${project.title} - Kernel Guard`}
        description={project.description[language]}
        keywords={`${project.tags.join(', ')}, Kernel Guard, secure web project, case study`}
        path={`/completed-projects/${project.id}`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/completed-projects" 
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-12 font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.nav.completedProjects}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono bg-surface border border-border text-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-xl text-foreground/80 font-light leading-relaxed">
                {project.longDescription[language as keyof typeof project.longDescription]}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-surface border border-border p-6">
              <h3 className="text-sm font-mono text-foreground/50 uppercase tracking-wider mb-6">
                {t.completedProjects.links}
              </h3>
              <div className="space-y-4">
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-primary text-white hover:bg-primary-dark transition-colors group"
                >
                  <span className="font-medium">{t.completedProjects.visit}</span>
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div className="bg-surface border border-border p-6 text-sm">
              <div className="flex items-center gap-2 text-foreground/50 mb-6 uppercase tracking-wider text-xs font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>{t.completedProjects.credentials}</span>
              </div>
              
              {project.accounts.length === 0 ? (
                <div className="flex items-center gap-2 text-foreground/70 italic">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.completedProjects.noAccount}</span>
                </div>
              ) : (
                <div className="space-y-4">
                  {project.accounts.map((acc, accIdx) => (
                    <div 
                      key={accIdx} 
                      className="bg-background border border-border p-4 flex flex-col gap-3 hover:border-primary/50 transition-colors"
                    >
                      {acc.role && (
                        <div className="flex items-center gap-1.5 text-xs text-primary uppercase tracking-wider font-mono">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {acc.role}
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-foreground/40 shrink-0 mt-0.5" />
                        <span className="text-foreground font-mono break-all">{acc.email}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <KeyRound className="w-4 h-4 text-foreground/40 shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-mono break-all">{acc.password}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
