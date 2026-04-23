import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

export default function HighPerformance() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <SEO 
        title={`${t.home.features.performance.title} - Kernel Guard`}
        description={t.home.features.performance.desc}
        keywords="high performance web apps, optimized algorithms, edge computing, fast load times, secure performance, Kernel Guard"
        path="/services/high-performance/"
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-light mb-6 text-foreground">
          {t.home.features.performance.title}
        </h1>
        <p className="text-xl text-foreground/80 font-light leading-relaxed mb-12">
          {t.home.features.performance.desc}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-medium mb-4">Our Approach</h2>
            <p className="text-foreground/80 leading-relaxed font-light mb-4">
              Security should not come at the cost of speed. We optimize web applications to deliver lightning-fast load times while maintaining rigorous security checks.
            </p>
            <p className="text-foreground/80 leading-relaxed font-light">
              By leveraging efficient algorithms, edge computing, and optimized asset delivery, we ensure that our platforms can handle high-throughput workloads—from complex AI calculations to real-time data processing—without breaking a sweat.
            </p>
          </section>

          <section className="bg-surface p-8 border-l-4 border-primary">
            <h2 className="text-2xl font-medium mb-4">Featured Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">CathodeX</h3>
                <p className="text-foreground/80 text-sm font-light">
                  An AI-powered material screening platform. It leverages high-throughput screening algorithms and Graph Neural Networks (GNNs) in PyTorch to rapidly predict battery material properties, drastically reducing discovery time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Algo Eğitim</h3>
                <p className="text-foreground/80 text-sm font-light">
                  An advanced algorithmic education platform featuring a high-performance student learning dashboard that processes and visualizes complex educational metrics in real-time.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
