import type { Language } from '../context/LanguageContext';

export const SUPPORTED_LANGUAGES: readonly Language[] = ['tr', 'en'] as const;

// Turkish is served at the canonical root; English mirrors live under /en/*.
// Keeping TR un-prefixed preserves all existing inbound links and SEO authority.
const EN_PREFIX = '/en';

export function detectLanguageFromPath(pathname: string): Language {
  if (pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`)) {
    return 'en';
  }
  return 'tr';
}

export function stripLanguagePrefix(pathname: string): string {
  if (pathname === EN_PREFIX) return '/';
  if (pathname.startsWith(`${EN_PREFIX}/`)) {
    const rest = pathname.slice(EN_PREFIX.length);
    return rest === '' ? '/' : rest;
  }
  return pathname;
}

export function localizePath(path: string, lang: Language): string {
  const stripped = stripLanguagePrefix(path);

  if (lang === 'tr') {
    return stripped;
  }

  if (stripped === '/') {
    return `${EN_PREFIX}/`;
  }

  return `${EN_PREFIX}${stripped.startsWith('/') ? '' : '/'}${stripped}`;
}

export function alternateLanguagePath(currentPath: string, currentLang: Language): string {
  const otherLang: Language = currentLang === 'tr' ? 'en' : 'tr';
  return localizePath(currentPath, otherLang);
}
