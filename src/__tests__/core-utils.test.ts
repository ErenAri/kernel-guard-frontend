import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { localizedText } from '../i18n/text';
import { normalizeCanonicalPath } from '../config/site';
import type { Language } from '../context/LanguageContext';
import { articleSlugs, articles, getEnglishArticleContent } from '../data/articles';
import { articleTranslations } from '../data/articleTranslations';
import { growthServiceSlugs, growthServicePages, getEnglishGrowthServiceContent } from '../data/growthServices';
import { growthServiceTranslations } from '../data/growthServiceTranslations';
import { SUPPORTED_LANGUAGES, localizePath } from '../i18n/route';
import { prerenderRoutes, sitemapRoutes } from '../data/seoRoutes';
import { onRequest } from '../../functions/_middleware.js';

const nonEnglishLanguages = SUPPORTED_LANGUAGES.filter(
  (language): language is Exclude<Language, 'en'> => language !== 'en',
);

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

  it('publishes an MTA-STS testing policy for Google Workspace mail', () => {
    const mtaSts = readFileSync(resolve('public/.well-known/mta-sts.txt'), 'utf8');

    expect(mtaSts).toContain('version: STSv1');
    expect(mtaSts).toContain('mode: testing');
    expect(mtaSts).toContain('mx: smtp.google.com');
    expect(mtaSts).toContain('max_age: 604800');
  });
});

describe('edge middleware', () => {
  it('redirects the apex host to the canonical www host', () => {
    const response = onRequest({
      request: new Request('http://kernelguard.net/en/articles/?ref=test'),
      next: () => new Response('next'),
    });

    expect(response.status).toBe(301);
    expect(response.headers.get('Location')).toBe('https://www.kernelguard.net/en/articles/?ref=test');
  });

  it('passes canonical host traffic through unchanged', async () => {
    const response = await onRequest({
      request: new Request('https://www.kernelguard.net/en/articles/'),
      next: () => new Response('next'),
    });

    expect(response.status).toBe(200);
    expect(await response.text()).toBe('next');
  });
});

describe('growth SEO routes', () => {
  it('keeps article and service slugs unique', () => {
    expect(new Set(articleSlugs).size).toBe(articleSlugs.length);
    expect(new Set(growthServiceSlugs).size).toBe(growthServiceSlugs.length);
  });

  it('indexes localized growth pages for every supported language', () => {
    for (const language of SUPPORTED_LANGUAGES) {
      expect(sitemapRoutes).toContain(localizePath('/articles', language));
      expect(prerenderRoutes).toContain(localizePath('/articles', language));

      for (const slug of articleSlugs) {
        const path = localizePath(`/articles/${slug}`, language);
        expect(sitemapRoutes).toContain(path);
        expect(prerenderRoutes).toContain(path);
      }

      for (const slug of growthServiceSlugs) {
        const path = localizePath(`/services/${slug}`, language);
        expect(sitemapRoutes).toContain(path);
        expect(prerenderRoutes).toContain(path);
      }
    }
  });

  it('keeps article translations structurally complete', () => {
    for (const article of articles) {
      const english = getEnglishArticleContent(article.slug);
      expect(english).toBeTruthy();

      for (const language of nonEnglishLanguages) {
        const translation = articleTranslations[article.slug]?.[language];
        if (!english || !translation) {
          throw new Error(`Missing ${language} article translation for ${article.slug}`);
        }

        expect(translation.title).not.toBe(english.title);
        expect(translation.description).toBeTruthy();
        expect(translation.tags.length).toBeGreaterThan(0);
        expect(translation.summary).toHaveLength(english.summary.length);
        expect(translation.sections).toHaveLength(english.sections.length);
        expect(translation.references).toHaveLength(english.references.length);

        translation.sections.forEach((section, index) => {
          const englishSection = english.sections[index];
          expect(section.heading).toBeTruthy();
          expect(section.paragraphs ?? []).toHaveLength(englishSection?.paragraphs?.length ?? 0);
          expect(section.bullets ?? []).toHaveLength(englishSection?.bullets?.length ?? 0);
        });
      }
    }
  });

  it('keeps service translations structurally complete', () => {
    for (const service of growthServicePages) {
      const english = getEnglishGrowthServiceContent(service.slug);
      expect(english).toBeTruthy();

      for (const language of nonEnglishLanguages) {
        const translation = growthServiceTranslations[service.slug]?.[language];
        if (!english || !translation) {
          throw new Error(`Missing ${language} growth service translation for ${service.slug}`);
        }

        expect(translation.title).toBeTruthy();
        expect(translation.shortTitle).toBeTruthy();
        expect(translation.description).toBeTruthy();
        expect(translation.keywords).toBeTruthy();
        expect(translation.outcomes).toHaveLength(english.outcomes.length);
        expect(translation.deliverables).toHaveLength(english.deliverables.length);
        expect(translation.process).toHaveLength(english.process.length);
        expect(translation.proofPoints).toHaveLength(english.proofPoints.length);
      }
    }
  });
});
