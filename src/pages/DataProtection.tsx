import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function DataProtection() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${t.home.features.data.title} - Kernel Guard`}
        description={t.home.features.data.desc}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
          {t.home.features.data.title}
        </h1>
        <p className="text-xl text-foreground/80 font-light leading-relaxed mb-12">
          {t.home.features.data.desc}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Approach</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              Data is your most valuable asset. We implement state-of-the-art encryption both at rest and in transit. Our database practices ensure that sensitive user information remains confidential and tamper-proof.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light">
              We go beyond standard encryption by exploring and implementing advanced cryptographic techniques, ensuring that the systems we build today remain secure against the computational threats of tomorrow.
            </p>
          </section>

          <section className="bg-surface p-8 border-l-4 border-primary">
            <h2 className="text-2xl font-medium mb-4">Featured Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Post-Quantum Messaging App</h3>
                <p className="text-foreground/80 text-sm font-light">
                  A secure messaging application implemented in Rust. It utilizes NIST-approved post-quantum cryptographic algorithms (like CRYSTALS-Kyber) to secure message exchanges against future attacks from quantum computers.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
