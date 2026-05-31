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
  contact: string;
  notFound: string;
  serviceDetails: {
    'secure-frontend': string;
    'hardened-backend': string;
    'data-protection': string;
    'high-performance': string;
  };
}

const englishLabels: BreadcrumbLabels = {
  home: 'Home',
  services: 'Services',
  projects: 'Open Source Projects',
  completedProjects: 'Completed Projects',
  terms: 'Terms of Service',
  privacy: 'Privacy Policy',
  cookies: 'Cookie Preferences',
  contact: 'Contact',
  notFound: 'Not Found',
  serviceDetails: {
    'secure-frontend': 'Secure Frontend',
    'hardened-backend': 'Hardened Backend',
    'data-protection': 'Data Protection',
    'high-performance': 'High Performance',
  },
};

const LABELS: Record<Language, BreadcrumbLabels> = {
  tr: {
    home: 'Ana Sayfa',
    services: 'Hizmetler',
    projects: 'Acik Kaynak Projeler',
    completedProjects: 'Tamamlanan Projeler',
    terms: 'Kullanim Kosullari',
    privacy: 'Gizlilik Politikasi',
    cookies: 'Cerez Tercihleri',
    contact: 'Iletisim',
    notFound: 'Sayfa Bulunamadi',
    serviceDetails: {
      'secure-frontend': 'Guvenli Frontend',
      'hardened-backend': 'Guclendirilmis Backend',
      'data-protection': 'Veri Koruma',
      'high-performance': 'Yuksek Performans',
    },
  },
  en: englishLabels,
  de: {
    home: 'Startseite',
    services: 'Leistungen',
    projects: 'Open Source Projekte',
    completedProjects: 'Referenzen',
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutz',
    cookies: 'Cookie-Einstellungen',
    contact: 'Kontakt',
    notFound: 'Nicht gefunden',
    serviceDetails: {
      'secure-frontend': 'Sicheres Frontend',
      'hardened-backend': 'Gehaertetes Backend',
      'data-protection': 'Datenschutz',
      'high-performance': 'Hohe Performance',
    },
  },
  ja: englishLabels,
  'zh-CN': englishLabels,
};

interface BreadcrumbItem {
  name: string;
  path: string;
}

function buildBreadcrumbItems(pathname: string, language: Language): BreadcrumbItem[] | null {
  const logical = stripLanguagePrefix(pathname).replace(/\/+$/, '') || '/';
  const labels = LABELS[language];

  if (logical === '/') return null;

  const home: BreadcrumbItem = { name: labels.home, path: '/' };

  if (logical === '/services') {
    return [home, { name: labels.services, path: '/services/' }];
  }

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

  if (logical === '/projects') {
    return [home, { name: labels.projects, path: '/projects/' }];
  }

  const projectMatch = logical.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    return [
      home,
      { name: labels.projects, path: '/projects/' },
      { name: projectMatch[1], path: `/projects/${projectMatch[1]}/` },
    ];
  }

  if (logical === '/completed-projects') {
    return [home, { name: labels.completedProjects, path: '/completed-projects/' }];
  }

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
  if (logical === '/contact') return [home, { name: labels.contact, path: '/contact/' }];
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
