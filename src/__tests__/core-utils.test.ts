import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { localizedText } from '../i18n/text';
import { normalizeCanonicalPath } from '../config/site';
import { articleSlugs } from '../data/articles';
import { growthServiceSlugs } from '../data/growthServices';
import { prerenderRoutes, sitemapRoutes } from '../data/seoRoutes';

describe('localizedText', () => {
  it('returns the requested language when present', () => {
    expect(localizedText({ en: 'Hello', tr: 'Merhaba' }, 'tr')).toBe('Merhaba');
  });
  it('falls back to English when the language is missing', () => {
    expect(localizedText({ en: 'Hello', tr: 'Merhaba' }, 'de')).toBe('Hello');
  });
  it('returns empty string when nothing is available', () => {
    expect(localizedText({}, 'en')).toBe('');
  });
});

describe('normalizeCanonicalPath', () => {
  it('keeps the root as "/"', () => {
    expect(normalizeCanonicalPath('/')).toBe('/');
  });
  it('appends a trailing slash', () => {
    expect(normalizeCanonicalPath('/projects/bpfcompat')).toBe('/projects/bpfcompat/');
  });
  it('leaves an already-normalized path unchanged', () => {
    expect(normalizeCanonicalPath('/projects/bpfcompat/')).toBe('/projects/bpfcompat/');
  });
  it('collapses duplicate slashes', () => {
    expect(normalizeCanonicalPath('/projects//bpfcompat')).toBe('/projects/bpfcompat/');
  });
});

describe('public trust files', () => {
  it('publishes a security.txt disclosure contact', () => {
    const securityTxt = readFileSync(resolve('public/.well-known/security.txt'), 'utf8');

    expect(securityTxt).toContain('Contact: mailto:security@kernelguard.net');
    expect(securityTxt).toContain('Canonical: https://www.kernelguard.net/.well-known/security.txt');
    expect(securityTxt).toContain('Policy: https://www.kernelguard.net/security/');
  });

  it('does not configure wildcard CORS for static responses', () => {
    const headers = readFileSync(resolve('public/_headers'), 'utf8');

    expect(headers).not.toMatch(/Access-Control-Allow-Origin:\s*\*/i);
  });
});

describe('growth SEO routes', () => {
  it('keeps article and service slugs unique', () => {
    expect(new Set(articleSlugs).size).toBe(articleSlugs.length);
    expect(new Set(growthServiceSlugs).size).toBe(growthServiceSlugs.length);
  });

  it('indexes English-first growth pages without default-language duplicates', () => {
    expect(sitemapRoutes).toContain('/en/articles');
    expect(prerenderRoutes).not.toContain('/articles');

    for (const slug of articleSlugs) {
      expect(sitemapRoutes).toContain(`/en/articles/${slug}`);
      expect(prerenderRoutes).not.toContain(`/articles/${slug}`);
    }

    for (const slug of growthServiceSlugs) {
      expect(sitemapRoutes).toContain(`/en/services/${slug}`);
      expect(prerenderRoutes).not.toContain(`/services/${slug}`);
    }
  });
});
