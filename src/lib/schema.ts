import type { Language } from '../context/LanguageContext';
import { DEFAULT_SITE_URL, normalizeCanonicalPath, normalizeSiteUrl } from '../config/site';
import { localizePath, stripLanguagePrefix } from '../i18n/route';
import { getLocalizedArticle } from '../data/articles';
import { getLocalizedGrowthServicePage } from '../data/growthServices';

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
  security: string;
  engineering: string;
  status: string;
  changelog: string;
  articles: string;
  notFound: string;
  serviceDetails: {
    'secure-frontend': string;
    'hardened-backend': string;
    'data-protection': string;
    'high-performance': string;
    [slug: string]: string;
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
  security: 'Security',
  engineering: 'Engineering',
  status: 'Status',
  changelog: 'Changelog',
  articles: 'Articles',
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
    security: 'Guvenlik',
    engineering: 'Muhendislik',
    status: 'Durum',
    changelog: 'Degisiklikler',
    articles: 'Makaleler',
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
    security: 'Sicherheit',
    engineering: 'Engineering',
    status: 'Status',
    changelog: 'Changelog',
    articles: 'Artikel',
    notFound: 'Nicht gefunden',
    serviceDetails: {
      'secure-frontend': 'Sicheres Frontend',
      'hardened-backend': 'Gehaertetes Backend',
      'data-protection': 'Datenschutz',
      'high-performance': 'Hohe Performance',
    },
  },
  ja: {
    home: 'ホーム',
    services: 'サービス',
    projects: 'オープンソースプロジェクト',
    completedProjects: '完了プロジェクト',
    terms: '利用規約',
    privacy: 'プライバシーポリシー',
    cookies: 'Cookie設定',
    contact: 'お問い合わせ',
    security: 'セキュリティ',
    engineering: 'エンジニアリング',
    status: 'ステータス',
    changelog: '変更履歴',
    articles: '記事',
    notFound: '見つかりません',
    serviceDetails: {
      'secure-frontend': 'セキュアフロントエンド',
      'hardened-backend': '強化バックエンド',
      'data-protection': 'データ保護',
      'high-performance': '高性能',
    },
  },
  'zh-CN': {
    home: '首页',
    services: '服务',
    projects: '开源项目',
    completedProjects: '已完成项目',
    terms: '服务条款',
    privacy: '隐私政策',
    cookies: 'Cookie 偏好',
    contact: '联系',
    security: '安全',
    engineering: '工程',
    status: '状态',
    changelog: '更新日志',
    articles: '文章',
    notFound: '未找到',
    serviceDetails: {
      'secure-frontend': '安全前端',
      'hardened-backend': '加固后端',
      'data-protection': '数据保护',
      'high-performance': '高性能',
    },
  },
  es: {
    home: 'Inicio',
    services: 'Servicios',
    projects: 'Proyectos open source',
    completedProjects: 'Proyectos completados',
    terms: 'Términos del servicio',
    privacy: 'Política de privacidad',
    cookies: 'Preferencias de cookies',
    contact: 'Contacto',
    security: 'Seguridad',
    engineering: 'Ingeniería',
    status: 'Estado',
    changelog: 'Cambios',
    articles: 'Artículos',
    notFound: 'No encontrado',
    serviceDetails: {
      'secure-frontend': 'Frontend seguro',
      'hardened-backend': 'Backend endurecido',
      'data-protection': 'Protección de datos',
      'high-performance': 'Alto rendimiento',
    },
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    projects: 'Projets open source',
    completedProjects: 'Projets terminés',
    terms: 'Conditions d’utilisation',
    privacy: 'Politique de confidentialité',
    cookies: 'Préférences cookies',
    contact: 'Contact',
    security: 'Sécurité',
    engineering: 'Ingénierie',
    status: 'Statut',
    changelog: 'Journal des changements',
    articles: 'Articles',
    notFound: 'Introuvable',
    serviceDetails: {
      'secure-frontend': 'Frontend sécurisé',
      'hardened-backend': 'Backend durci',
      'data-protection': 'Protection des données',
      'high-performance': 'Haute performance',
    },
  },
  ko: {
    home: '홈',
    services: '서비스',
    projects: '오픈소스 프로젝트',
    completedProjects: '완료 프로젝트',
    terms: '서비스 약관',
    privacy: '개인정보 처리방침',
    cookies: '쿠키 설정',
    contact: '문의',
    security: '보안',
    engineering: '엔지니어링',
    status: '상태',
    changelog: '변경 내역',
    articles: '아티클',
    notFound: '찾을 수 없음',
    serviceDetails: {
      'secure-frontend': '안전한 프론트엔드',
      'hardened-backend': '하드닝된 백엔드',
      'data-protection': '데이터 보호',
      'high-performance': '고성능',
    },
  },
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
    const slug = serviceMatch[1];
    const detailLabel = labels.serviceDetails[slug] ?? getLocalizedGrowthServicePage(slug, language)?.shortTitle;
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

  if (logical === '/articles') {
    return [home, { name: labels.articles, path: '/articles/' }];
  }

  const articleMatch = logical.match(/^\/articles\/([^/]+)$/);
  if (articleMatch) {
    const article = getLocalizedArticle(articleMatch[1], language);
    if (!article) return null;
    return [
      home,
      { name: labels.articles, path: '/articles/' },
      { name: article.title, path: `/articles/${article.slug}/` },
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
  if (logical === '/security') return [home, { name: labels.security, path: '/security/' }];
  if (logical === '/engineering') return [home, { name: labels.engineering, path: '/engineering/' }];
  if (logical === '/status') return [home, { name: labels.status, path: '/status/' }];
  if (logical === '/changelog') return [home, { name: labels.changelog, path: '/changelog/' }];
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

interface ArticleInput {
  title: string;
  description: string;
  path: string;
  language: Language;
  publishedAt: string;
  updatedAt: string;
  keywords?: string[];
}

export function buildArticleSchema({
  title,
  description,
  path,
  language,
  publishedAt,
  updatedAt,
  keywords,
}: ArticleInput): JsonLdNode {
  return {
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path, language),
    mainEntityOfPage: absoluteUrl(path, language),
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: language,
    ...(keywords && keywords.length > 0 ? { keywords: keywords.join(', ') } : {}),
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
