import { describe, it, expect } from 'vitest';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_PREFIXES,
  SUPPORTED_LANGUAGES,
  detectLanguageFromPath,
  localizePath,
  stripLanguagePrefix,
} from '../i18n/route';
import { prerenderRoutes, sitemapAlternates } from '../data/seoRoutes';

/**
 * Locks the locale-routing contract: English is the default, unprefixed locale
 * served at the root, and Turkish lives under /tr. These invariants drive the
 * router (App / entry-server), canonical/hreflang emission, the sitemap, and
 * prerendering — flipping any of them silently breaks SEO, so guard them here.
 */
describe('locale routing contract', () => {
  it('uses English as the default, unprefixed locale', () => {
    expect(DEFAULT_LANGUAGE).toBe('en');
    expect(LANGUAGE_PREFIXES.en).toBe('');
  });

  it('serves Turkish under the /tr prefix', () => {
    expect(LANGUAGE_PREFIXES.tr).toBe('/tr');
  });

  it('leaves exactly one language unprefixed — the default', () => {
    const unprefixed = SUPPORTED_LANGUAGES.filter((lang) => LANGUAGE_PREFIXES[lang] === '');
    expect(unprefixed).toEqual([DEFAULT_LANGUAGE]);
  });

  describe('localizePath', () => {
    it('keeps English paths at the root', () => {
      expect(localizePath('/', 'en')).toBe('/');
      expect(localizePath('/articles', 'en')).toBe('/articles');
    });

    it('prefixes Turkish paths with /tr', () => {
      expect(localizePath('/', 'tr')).toBe('/tr/');
      expect(localizePath('/articles', 'tr')).toBe('/tr/articles');
    });

    it('re-localizes an already-prefixed path instead of stacking prefixes', () => {
      expect(localizePath('/tr/articles', 'en')).toBe('/articles');
      expect(localizePath('/articles', 'tr')).toBe('/tr/articles');
      expect(localizePath('/de/articles', 'tr')).toBe('/tr/articles');
    });
  });

  describe('detectLanguageFromPath', () => {
    it('treats unprefixed paths as English', () => {
      expect(detectLanguageFromPath('/')).toBe('en');
      expect(detectLanguageFromPath('/articles/some-slug')).toBe('en');
    });

    it('detects the /tr prefix as Turkish', () => {
      expect(detectLanguageFromPath('/tr')).toBe('tr');
      expect(detectLanguageFromPath('/tr/articles')).toBe('tr');
    });

    it('does not mistake a slug that merely starts with "tr" for the /tr locale', () => {
      expect(detectLanguageFromPath('/transit')).toBe('en');
      expect(detectLanguageFromPath('/treaty/details')).toBe('en');
    });
  });

  it('round-trips strip(localize(path)) back to the logical path for every locale', () => {
    const logicalPath = '/services/secure-frontend';
    for (const lang of SUPPORTED_LANGUAGES) {
      expect(stripLanguagePrefix(localizePath(logicalPath, lang))).toBe(logicalPath);
    }
  });

  it('prerenders the English root and the Turkish root, never a legacy /en/', () => {
    expect(prerenderRoutes).toContain('/');
    expect(prerenderRoutes).toContain('/tr/');
    expect(prerenderRoutes).not.toContain('/en/');
  });

  it('anchors the home page hreflang map to the unprefixed English URL', () => {
    // generate-sitemap.ts emits routes.en as the x-default target.
    const home = sitemapAlternates.find((entry) => entry.routes.en === '/');
    expect(home, 'home page must be present in sitemap alternates').toBeTruthy();
    expect(home!.routes.tr).toBe('/tr/');
  });
});
