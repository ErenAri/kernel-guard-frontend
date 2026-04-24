import type { Language } from '../context/LanguageContext';
import { DEFAULT_SITE_URL, normalizeCanonicalPath, normalizeSiteUrl } from '../config/site';
import { localizePath, stripLanguagePrefix } from '../i18n/route';

const SITE_URL = normalizeSiteUrl(DEFAULT_SITE_URL);
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

function absoluteUrl(path: string, language: Language): string {
  return `${SITE_URL}${normalizeCanonicalPath(localizePath(path, language))}`;
}

export type JsonLdNode = Record<string, unknown>;

interface BreadcrumbLabels {
  home: string;
  services: string;
  projects: string;
  completedProjects: string;
  terms: string;
  privacy: string;
  cookies: string;
  notFound: string;
  serviceDetails: {
    'secure-frontend': string;
    'hardened-backend': string;
    'data-protection': string;
    'high-performance': string;
  };
}

const LABELS: Record<Language, BreadcrumbLabels> = {
  tr: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    projects: 'Açık Kaynak Projeler',
    completedProjects: 'Tamamlanan Projeler',
    terms: 'Kullanım Koşulları',
    privacy: 'Gizlilik Politikası',
    cookies: 'Çerez Tercihleri',
    notFound: 'Sayfa Bulunamadı',
    serviceDetails: {
      'secure-frontend': 'Güvenli Frontend',
      'hardened-backend': 'Güçlendirilmiş Backend',
      'data-protection': 'Veri Koruma',
      'high-performance': 'Yüksek Performans',
    },
  },
  en: {
    home: 'Home',
    services: 'Services',
    projects: 'Open Source Projects',
    completedProjects: 'Completed Projects',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Preferences',
    notFound: 'Not Found',
    serviceDetails: {
      'secure-frontend': 'Secure Frontend',
      'hardened-backend': 'Hardened Backend',
      'data-protection': 'Data Protection',
      'high-performance': 'High Performance',
    },
  },
};

interface BreadcrumbItem {
  name: string;
  path: string;
}

function buildBreadcrumbItems(pathname: string, language: Language): BreadcrumbItem[] | null {
  // Always strip /en before classifying so we share one routing table.
  const logical = stripLanguagePrefix(pathname).replace(/\/+$/, '') || '/';
  const labels = LABELS[language];

  if (logical === '/') return null;

  const home: BreadcrumbItem = { name: labels.home, path: '/' };

  // /services
  if (logical === '/services') {
    return [home, { name: labels.services, path: '/services/' }];
  }

  // /services/<slug>
  const serviceMatch = logical.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const slug = serviceMatch[1] as keyof BreadcrumbLabels['serviceDetails'];
    const detailLabel = labels.serviceDetails[slug];
    if (!detailLabel) return null;
    return [
      home,
      { name: labels.services, path: '/services/' },
      { name: detailLabel, path: `/services/${slug}/` },
    ];
  }

  // /projects
  if (logical === '/projects') {
    return [home, { name: labels.projects, path: '/projects/' }];
  }

  // /projects/<slug>
  const projectMatch = logical.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    return [
      home,
      { name: labels.projects, path: '/projects/' },
      { name: projectMatch[1], path: `/projects/${projectMatch[1]}/` },
    ];
  }

  // /completed-projects
  if (logical === '/completed-projects') {
    return [home, { name: labels.completedProjects, path: '/completed-projects/' }];
  }

  // /completed-projects/<slug>
  const completedMatch = logical.match(/^\/completed-projects\/([^/]+)$/);
  if (completedMatch) {
    return [
      home,
      { name: labels.completedProjects, path: '/completed-projects/' },
      { name: completedMatch[1], path: `/completed-projects/${completedMatch[1]}/` },
    ];
  }

  if (logical === '/terms') return [home, { name: labels.terms, path: '/terms/' }];
  if (logical === '/privacy') return [home, { name: labels.privacy, path: '/privacy/' }];
  if (logical === '/cookies') return [home, { name: labels.cookies, path: '/cookies/' }];
  if (logical === '/not-found') return [home, { name: labels.notFound, path: '/not-found/' }];

  return null;
}

export function buildBreadcrumbSchema(
  pathname: string,
  language: Language,
  siteUrl: string,
  localizeForSchema: (path: string) => string,
): JsonLdNode | null {
  const items = buildBreadcrumbItems(pathname, language);
  if (!items) return null;

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${localizeForSchema(item.path)}`,
    })),
  };
}

interface ServiceInput {
  name: string;
  description: string;
  path: string;
  language: Language;
  serviceType: string;
}

export function buildServiceSchema({
  name,
  description,
  path,
  language,
  serviceType,
}: ServiceInput): JsonLdNode {
  return {
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path, language),
    serviceType,
    provider: { '@id': ORGANIZATION_ID },
    areaServed: 'Worldwide',
    inLanguage: language,
  };
}

interface SoftwareSourceCodeInput {
  name: string;
  description: string;
  path: string;
  language: Language;
  codeRepository?: string;
  programmingLanguage?: string[];
}

export function buildSoftwareSourceCodeSchema({
  name,
  description,
  path,
  language,
  codeRepository,
  programmingLanguage,
}: SoftwareSourceCodeInput): JsonLdNode {
  const node: JsonLdNode = {
    '@type': 'SoftwareSourceCode',
    name,
    description,
    url: absoluteUrl(path, language),
    author: { '@id': ORGANIZATION_ID },
    maintainer: { '@id': ORGANIZATION_ID },
    inLanguage: language,
  };

  if (codeRepository) {
    node.codeRepository = codeRepository;
  }
  if (programmingLanguage && programmingLanguage.length > 0) {
    node.programmingLanguage = programmingLanguage;
  }

  return node;
}
