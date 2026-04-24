import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { buildServiceSchema } from '../lib/schema';

export default function SecureFrontend() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO
        title={`${t.home.features.frontend.title} - Kernel Guard`}
        description={t.home.features.frontend.desc}
        path="/services/secure-frontend/"
        schema={buildServiceSchema({
          name: t.home.features.frontend.title,
          description: t.home.features.frontend.desc,
          path: '/services/secure-frontend/',
          language,
          serviceType: 'Secure Frontend Engineering',
        })}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
          {t.home.features.frontend.title}
        </h1>
        <p className="text-xl text-foreground/80 font-light leading-relaxed mb-12">
          {t.home.features.frontend.desc}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Approach</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              At Kernel Guard, we believe that security should never compromise user experience. Our frontend architectures are built using modern frameworks like React, ensuring lightning-fast, responsive interfaces.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light">
              We implement strict Content Security Policies (CSP), sanitize all user inputs to prevent Cross-Site Scripting (XSS), and utilize secure authentication flows to protect client-side state.
            </p>
          </section>

          <section className="bg-surface p-8 border-l-4 border-primary">
            <h2 className="text-2xl font-medium mb-4">Featured Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Ref Atelier</h3>
                <p className="text-foreground/80 text-sm font-light">
                  A modern corporate portfolio platform showcasing our ability to deliver highly polished, secure, and accessible user interfaces. Built with React and fortified against common web vulnerabilities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Dershane Management</h3>
                <p className="text-foreground/80 text-sm font-light">
                  A comprehensive SaaS platform requiring complex state management and secure role-based UI rendering to ensure students and administrators only see what they are authorized to access.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
