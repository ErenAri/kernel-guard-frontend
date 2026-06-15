import { FileText, Layers, ListChecks, ShieldCheck, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { caseStudyLabels, type ProjectCaseStudy } from '../data/projectCaseStudies';
import { localizedText } from '../i18n/text';

interface ProjectCaseStudySectionProps {
  caseStudy: ProjectCaseStudy;
  className?: string;
}

export default function ProjectCaseStudySection({ caseStudy, className = '' }: ProjectCaseStudySectionProps) {
  const { language } = useLanguage();
  const labels = caseStudyLabels[language] ?? caseStudyLabels.en;

  if (!labels) {
    return null;
  }

  const cards = [
    {
      label: labels.problem,
      value: localizedText(caseStudy.problem, language),
      Icon: FileText,
    },
    {
      label: labels.architecture,
      value: localizedText(caseStudy.architecture, language),
      Icon: Layers,
    },
    {
      label: labels.securityApproach,
      value: localizedText(caseStudy.securityApproach, language),
      Icon: ShieldCheck,
    },
    {
      label: labels.outcome,
      value: localizedText(caseStudy.outcome, language),
      Icon: TrendingUp,
    },
  ];

  return (
    <section className={`border-t border-border pt-12 ${className}`}>
      <div className="mb-8 flex items-center gap-3">
        <ListChecks className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-light text-foreground">{labels.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map(({ label, value, Icon }) => (
          <article key={label} className="border border-border bg-surface p-5">
            <div className="mb-5 flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <h3 className="mb-3 text-xs font-mono uppercase tracking-widest text-foreground/55">{label}</h3>
            <p className="text-sm leading-relaxed text-foreground/75">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="border border-border bg-background p-5">
          <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-foreground/55">{labels.metrics}</h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.metrics.map((metric) => (
              <span key={metric} className="border border-border bg-surface px-3 py-1 text-xs text-foreground/75">
                {metric}
              </span>
            ))}
          </div>
        </article>

        <article className="border border-border bg-background p-5">
          <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-foreground/55">{labels.lessons}</h3>
          <ul className="space-y-3">
            {caseStudy.lessons.map((lesson) => {
              const lessonText = localizedText(lesson, language);
              return (
                <li key={lessonText} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" aria-hidden="true" />
                  <span>{lessonText}</span>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}
