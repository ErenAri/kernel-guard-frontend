import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();

  const copy = language === 'tr'
    ? {
        title: 'Sayfa Bulunamadi | Kernel Guard',
        description: 'Istediginiz sayfa mevcut degil veya tasinmis olabilir.',
        headline: '404_SAYFA_BULUNAMADI',
        body: 'Aradiginiz sayfa mevcut degil veya URL degismis olabilir.',
        backLabel: 'Ana Sayfaya Don',
      }
    : {
        title: 'Page Not Found | Kernel Guard',
        description: 'The requested page does not exist or may have moved.',
        headline: '404_PAGE_NOT_FOUND',
        body: 'The requested page does not exist or the URL may have changed.',
        backLabel: 'Back to Home',
      };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 flex items-center justify-center">
      <SEO
        title={copy.title}
        description={copy.description}
        path="/not-found/"
        noIndex
      />

      <div className="text-center max-w-xl px-6">
        <h1 className="text-2xl md:text-3xl font-mono text-foreground mb-4">{copy.headline}</h1>
        <p className="text-foreground/70 mb-8 leading-relaxed">{copy.body}</p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground hover:bg-surface transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {copy.backLabel}
        </Link>
      </div>
    </div>
  );
}
