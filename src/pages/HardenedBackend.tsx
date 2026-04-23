import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function HardenedBackend() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${t.home.features.backend.title} - Kernel Guard`}
        description={t.home.features.backend.desc}
        keywords="hardened backend, zero-trust architecture, secure APIs, DDoS protection, Rust backend, C++ security, Kernel Guard"
        path="/services/hardened-backend/"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
          {t.home.features.backend.title}
        </h1>
        <p className="text-xl text-foreground/80 font-light leading-relaxed mb-12">
          {t.home.features.backend.desc}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Approach</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              A secure application requires a fortress-like backend. We design scalable server architectures and APIs strictly adhering to zero-trust principles. Every request is authenticated, authorized, and validated.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light">
              From implementing rate limiting and DDoS protection to utilizing memory-safe languages like Rust and C++ for critical infrastructure, our backends are engineered to withstand sophisticated attacks.
            </p>
          </section>

          <section className="bg-surface p-8 border-l-4 border-primary">
            <h2 className="text-2xl font-medium mb-4">Featured Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Aegis BPF CO-RE Enforcement</h3>
                <p className="text-foreground/80 text-sm font-light">
                  A cutting-edge prototype developed in C++ using eBPF technology. It provides low-overhead, kernel-level security enforcement, demonstrating our capability to secure systems at the lowest possible level.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">TechNova HR Portal</h3>
                <p className="text-foreground/80 text-sm font-light">
                  An enterprise human resources management system featuring a hardened backend API with multi-role employee access, ensuring strict data isolation and secure authentication flows.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
