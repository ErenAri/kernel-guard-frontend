import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';
import { buildCanonicalUrl, DEFAULT_SITE_URL, normalizeCanonicalPath, normalizeSiteUrl } from '../config/site';
import { localizePath, stripLanguagePrefix } from '../i18n/route';
import { buildBreadcrumbSchema, type JsonLdNode } from '../lib/schema';

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
  schema?: JsonLdNode | JsonLdNode[];
}

function normalizeSchemaItems(schema?: JsonLdNode | JsonLdNode[]): JsonLdNode[] {
  if (!schema) {
    return [];
  }

  return Array.isArray(schema) ? schema : [schema];
}

export default function SEO({ 
  title = 'Kernel Guard | Secure Web Development & Cybersecurity', 
  description = 'Kernel Guard specializes in building high-performance, secure web applications, hardened backend architectures, and post-quantum cryptography solutions.', 
  keywords,
  type = 'website', 
  name = 'Kernel Guard',
  image = '/og/default.svg',
  imageAlt = 'Kernel Guard - Secure & Scalable Web Engineering',
  path,
  noIndex = false,
  noFollow = false,
  schema,
}: SEOProps) {
  const { language } = useLanguage();
  const location = useLocation();
  const currentPath = normalizeCanonicalPath(path || location.pathname);
  const siteUrl = normalizeSiteUrl(DEFAULT_SITE_URL);
  const canonicalUrl = buildCanonicalUrl(siteUrl, currentPath);
  const robotsContent = noIndex
    ? (noFollow ? 'noindex, nofollow' : 'noindex, follow')
    : (noFollow ? 'index, nofollow' : 'index, follow');
  const locale = language === 'tr' ? 'tr_TR' : 'en_US';
  const alternateLocale = language === 'tr' ? 'en_US' : 'tr_TR';

  // hreflang requires absolute URLs that resolve to each language's variant
  // of the same logical page. Strip any inbound /en prefix first so we always
  // start from the canonical TR path before re-localizing per language.
  const logicalPath = stripLanguagePrefix(currentPath);
  const trUrl = buildCanonicalUrl(siteUrl, normalizeCanonicalPath(localizePath(logicalPath, 'tr')));
  const enUrl = buildCanonicalUrl(siteUrl, normalizeCanonicalPath(localizePath(logicalPath, 'en')));

  // Resolve a relative image path to an absolute URL so social platforms can fetch it.
  const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`;
  const schemaItems = normalizeSchemaItems(schema);
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;

  const breadcrumb = buildBreadcrumbSchema(
    currentPath,
    language,
    siteUrl,
    (p) => normalizeCanonicalPath(localizePath(p, language)),
  );

  // Keep JSON-LD aligned with visible metadata to avoid structured-data mismatch issues.
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name,
        url: `${siteUrl}/`,
        logo: absoluteImage,
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
        ...(breadcrumb ? { breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` } } : {}),
      },
      ...(breadcrumb ? [{ ...breadcrumb, '@id': `${canonicalUrl}#breadcrumb` }] : []),
      ...schemaItems,
    ],
  };

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='robots' content={robotsContent} />
      <meta name='googlebot' content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang alternates for international SEO. */}
      <link rel="alternate" hrefLang="tr" href={trUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={trUrl} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content="@kernelguard" />
      <meta name="twitter:site" content="@kernelguard" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
