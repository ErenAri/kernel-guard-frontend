import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  name?: string;
  image?: string;
  path?: string;
}

export default function SEO({ 
  title = 'Kernel Guard | Secure Web Development & Cybersecurity', 
  description = 'Kernel Guard specializes in building high-performance, secure web applications, hardened backend architectures, and post-quantum cryptography solutions.', 
  keywords = 'Kernel Guard, cybersecurity, secure web development, hardened backend, post-quantum cryptography, React security, eBPF security', 
  type = 'website', 
  name = 'Kernel Guard',
  image = 'https://storage.googleapis.com/m-infra-ais-prod-399110920482.europe-west2.run.app/ais-dev-3b2rqidgrlxxfxo5fs4lfr-399110920482.europe-west2.run.app/attachments/86903e05-950c-403d-b472-132984136a87.png',
  path
}: SEOProps) {
  const { language } = useLanguage();
  const location = useLocation();
  const currentPath = path || location.pathname;
  const siteUrl = 'https://kernel-guard.com'; // Replace with actual domain when deployed
  const canonicalUrl = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;

  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kernel Guard",
    "url": siteUrl,
    "logo": image,
    "description": description,
    "sameAs": [
      "https://github.com/Kernel-Guard",
      "https://www.linkedin.com/company/kernel-guard/"
    ]
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@kernelguard" />
      <meta name="twitter:site" content="@kernelguard" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
