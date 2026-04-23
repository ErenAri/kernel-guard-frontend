import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { DEFAULT_SITE_URL, normalizeSiteUrl } from '../config/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  type?: string;
  name?: string;
  image?: string;
  imageAlt?: string;
  path?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function normalizePath(inputPath: string): string {
  const withoutQuery = inputPath.split('?')[0]?.split('#')[0] ?? '/';
  const prefixed = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
  const deduped = prefixed.replace(/\/+/g, '/');

  if (deduped.length > 1 && deduped.endsWith('/')) {
    return deduped.slice(0, -1);
  }

  return deduped;
}

export default function SEO({ 
  title = 'Kernel Guard | Secure Web Development & Cybersecurity', 
  description = 'Kernel Guard specializes in building high-performance, secure web applications, hardened backend architectures, and post-quantum cryptography solutions.', 
  keywords,
  type = 'website', 
  name = 'Kernel Guard',
  image = 'https://storage.googleapis.com/m-infra-ais-prod-399110920482.europe-west2.run.app/ais-dev-3b2rqidgrlxxfxo5fs4lfr-399110920482.europe-west2.run.app/attachments/86903e05-950c-403d-b472-132984136a87.png',
  imageAlt = 'Kernel Guard secure engineering platform',
  path,
  noIndex = false,
  noFollow = false,
  schema,
}: SEOProps) {
  const { language } = useLanguage();
  const location = useLocation();
  const currentPath = normalizePath(path || location.pathname);
  const siteUrl = normalizeSiteUrl(DEFAULT_SITE_URL);
  const canonicalUrl = `${siteUrl}${currentPath === '/' ? '' : currentPath}`;
  const robotsContent = noIndex
    ? (noFollow ? 'noindex, nofollow' : 'noindex, follow')
    : (noFollow ? 'index, nofollow' : 'index, follow');
  const locale = language === 'tr' ? 'tr_TR' : 'en_US';
  const alternateLocale = language === 'tr' ? 'en_US' : 'tr_TR';
  const schemaItems = Array.isArray(schema) ? schema : schema ? [schema] : [];
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  // Keep JSON-LD aligned with visible metadata to avoid structured-data mismatch issues.
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name,
        url: `${siteUrl}/`,
        logo: image,
        sameAs: [
          'https://github.com/Kernel-Guard',
          'https://www.linkedin.com/company/kernel-guard/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${siteUrl}/`,
        name,
        inLanguage: language,
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        inLanguage: language,
        isPartOf: {
          '@id': websiteId,
        },
      },
      ...schemaItems,
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      {keywords ? <meta name='keywords' content={keywords} /> : null}
      <meta name='robots' content={robotsContent} />
      <meta name='googlebot' content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* OpenGraph tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@kernelguard" />
      <meta name="twitter:site" content="@kernelguard" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
