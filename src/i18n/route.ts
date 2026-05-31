import type { Language } from '../context/LanguageContext';

export const SUPPORTED_LANGUAGES: readonly Language[] = ['tr', 'en', 'de', 'ja', 'zh-CN', 'es', 'fr', 'ko'] as const;
export const LANGUAGE_PREFERENCE_STORAGE_KEY = 'kg_language_preference';
export const DEFAULT_LANGUAGE: Language = 'tr';
export const LANGUAGE_PREFIXES: Record<Language, string> = {
  tr: '',
  en: '/en',
  de: '/de',
  ja: '/ja',
  'zh-CN': '/zh-cn',
  es: '/es',
  fr: '/fr',
  ko: '/ko',
};
export const LANGUAGE_HREFLANGS: Record<Language, string> = {
  tr: 'tr',
  en: 'en',
  de: 'de',
  ja: 'ja',
  'zh-CN': 'zh-CN',
  es: 'es',
  fr: 'fr',
  ko: 'ko',
};
export const LANGUAGE_LABELS: Record<Language, string> = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
  ja: 'JA',
  'zh-CN': 'ZH',
  es: 'ES',
  fr: 'FR',
  ko: 'KO',
};

const PREFIX_LANGUAGE_ENTRIES = Object.entries(LANGUAGE_PREFIXES)
  .filter(([, prefix]) => prefix)
  .sort((a, b) => b[1].length - a[1].length) as Array<[Language, string]>;

export function detectLanguageFromPath(pathname: string): Language {
  for (const [language, prefix] of PREFIX_LANGUAGE_ENTRIES) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) {
      return language;
    }
  }
  return DEFAULT_LANGUAGE;
}

export function stripLanguagePrefix(pathname: string): string {
  for (const [, prefix] of PREFIX_LANGUAGE_ENTRIES) {
    if (pathname === prefix) return '/';
    if (pathname.startsWith(`${prefix}/`)) {
      const rest = pathname.slice(prefix.length);
      return rest === '' ? '/' : rest;
    }
  }
  return pathname;
}

export function localizePath(path: string, lang: Language): string {
  const stripped = stripLanguagePrefix(path);

  const prefix = LANGUAGE_PREFIXES[lang];

  if (!prefix) {
    return stripped;
  }

  if (stripped === '/') {
    return `${prefix}/`;
  }

  return `${prefix}${stripped.startsWith('/') ? '' : '/'}${stripped}`;
}

export function alternateLanguagePath(currentPath: string, currentLang: Language): string {
  const otherLang: Language = currentLang === 'tr' ? 'en' : 'tr';
  return localizePath(currentPath, otherLang);
}

export function getStoredLanguagePreference(): Language | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const value = window.localStorage.getItem(LANGUAGE_PREFERENCE_STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(value as Language) ? value as Language : null;
  } catch {
    return null;
  }
}

export function setStoredLanguagePreference(language: Language): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(LANGUAGE_PREFERENCE_STORAGE_KEY, language);
  } catch {
    // Ignore storage failures in private or sandboxed contexts.
  }
}

export function detectBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') {
    return 'tr';
  }

  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter(Boolean);

  const normalized = candidates.map((lang) => lang.toLowerCase());

  if (normalized.some((lang) => lang === 'zh' || lang.startsWith('zh-'))) {
    return 'zh-CN';
  }

  if (normalized.some((lang) => lang === 'ja' || lang.startsWith('ja-'))) {
    return 'ja';
  }

  if (normalized.some((lang) => lang === 'de' || lang.startsWith('de-'))) {
    return 'de';
  }

  if (normalized.some((lang) => lang === 'es' || lang.startsWith('es-'))) {
    return 'es';
  }

  if (normalized.some((lang) => lang === 'fr' || lang.startsWith('fr-'))) {
    return 'fr';
  }

  if (normalized.some((lang) => lang === 'ko' || lang.startsWith('ko-'))) {
    return 'ko';
  }

  if (normalized.some((lang) => lang === 'en' || lang.startsWith('en-'))) {
    return 'en';
  }

  return DEFAULT_LANGUAGE;
}
