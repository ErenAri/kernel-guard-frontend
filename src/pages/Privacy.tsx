import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { SITE_EMAILS, mailto } from '../config/site';

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

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Service providers</h2>
            <p>
              Kernel Guard uses infrastructure and workflow providers to operate the website, process contact
              requests, protect the admin workflow, and host source code. These may include Cloudflare, Web3Forms,
              GitHub, and Google Workspace, depending on the feature being used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Retention</h2>
            <p>
              Contact form submissions and business correspondence are kept only as long as needed to answer the
              request, maintain business records, protect the service, or comply with legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Your requests</h2>
            <p>
              You can request access, correction, deletion, or restriction of personal information associated with
              your inquiry. We may need to retain limited records where required for security, fraud prevention, or
              legal compliance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-foreground mb-4">Privacy contact</h2>
            <p>
              For privacy requests or data protection questions, email{' '}
              <a className="text-primary hover:underline" href={mailto(SITE_EMAILS.privacy)}>
                {SITE_EMAILS.privacy}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
