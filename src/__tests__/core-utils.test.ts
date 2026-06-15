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
import { onRequest as githubApiOnRequest } from '../../functions/api/github.js';
import { projects } from '../data/projects';
import { completedProjects } from '../data/completedProjects';
import { projectCaseStudies } from '../data/projectCaseStudies';

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
  it('does not ship a committed Web3Forms fallback key', () => {
    const formsConfig = readFileSync(resolve('src/config/forms.ts'), 'utf8');

    expect(formsConfig).not.toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i);
    expect(formsConfig).not.toMatch(/VITE_WEB3FORMS_ACCESS_KEY\s*\|\|\s*['"][^'"]+['"]/);
  });

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

  it('documents responsible disclosure, threat model, and release process', () => {
    const securityPolicy = readFileSync(resolve('SECURITY.md'), 'utf8');
    const threatModel = readFileSync(resolve('docs/security-threat-model.md'), 'utf8');
    const releaseProcess = readFileSync(resolve('docs/release-process.md'), 'utf8');

    expect(securityPolicy).toContain('security@kernelguard.net');
    expect(securityPolicy).toContain('HttpOnly, Secure, SameSite=Strict');
    expect(threatModel).toContain('Trust Boundaries');
    expect(threatModel).toContain('Residual Risks');
    expect(releaseProcess).toContain('Release Checklist');
    expect(releaseProcess).toContain('Rollback');
  });
});

describe('GitHub admin API security', () => {
  const env = {
    ADMIN_EMAIL: 'admin@example.com',
    ADMIN_PASSWORD: 'correct-password',
    ADMIN_SESSION_SECRET: 'test-session-secret',
    GITHUB_PAT: 'ghp_test',
  };

  it('rejects broad Cloudflare Pages preview origins', async () => {
    const response = await githubApiOnRequest({
      request: new Request('https://www.kernelguard.net/api/github', {
        method: 'OPTIONS',
        headers: {
          Origin: 'https://temporary-preview.pages.dev',
        },
      }),
      env,
    });

    expect(response.status).toBe(403);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBeNull();
  });

  it('creates admin sessions with an HttpOnly cookie instead of a JSON token', async () => {
    const response = await githubApiOnRequest({
      request: new Request('https://www.kernelguard.net/api/github', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://www.kernelguard.net',
        },
        body: JSON.stringify({
          action: 'createSession',
          email: env.ADMIN_EMAIL,
          password: env.ADMIN_PASSWORD,
        }),
      }),
      env,
    });

    const body = await response.json() as { success?: boolean; sessionToken?: string };
    const setCookie = response.headers.get('Set-Cookie') || '';

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.sessionToken).toBeUndefined();
    expect(setCookie).toContain('kg_admin_session=');
    expect(setCookie).toContain('HttpOnly');
    expect(setCookie).toContain('Secure');
    expect(setCookie).toContain('SameSite=Strict');
    expect(setCookie).toContain('Path=/api/github');
    expect(response.headers.get('Access-Control-Allow-Credentials')).toBe('true');
  });
});

describe('edge middleware', () => {
  it('redirects the apex host to the canonical www host', async () => {
    const response = await onRequest({
      request: new Request('http://kernelguard.net/articles/?ref=test'),
      next: () => new Response('next'),
    });

    expect(response.status).toBe(301);
    expect(response.headers.get('Location')).toBe('https://www.kernelguard.net/articles/?ref=test');
  });

  it('passes canonical host traffic through unchanged', async () => {
    const response = await onRequest({
      request: new Request('https://www.kernelguard.net/articles/'),
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

  it('keeps English service pages evidence-rich', () => {
    for (const service of growthServicePages) {
      const english = getEnglishGrowthServiceContent(service.slug);

      expect(english?.detailTitle).toBeTruthy();
      expect(english?.detailDescription).toBeTruthy();
      expect(english?.assuranceSections).toHaveLength(4);

      english?.assuranceSections?.forEach((section) => {
        expect(section.title).toBeTruthy();
        expect(section.description).toBeTruthy();
        expect(section.items.length).toBeGreaterThanOrEqual(3);
      });
    }
  });

  it('turns every project into a structured case study', () => {
    const allProjects = [...projects, ...completedProjects];

    for (const project of allProjects) {
      const caseStudy = projectCaseStudies[project.id];

      expect(caseStudy, `Missing case study for ${project.id}`).toBeTruthy();
      expect(caseStudy.problem.en).toBeTruthy();
      expect(caseStudy.architecture.en).toBeTruthy();
      expect(caseStudy.securityApproach.en).toBeTruthy();
      expect(caseStudy.outcome.en).toBeTruthy();
      expect(caseStudy.metrics.length).toBeGreaterThanOrEqual(3);
      expect(caseStudy.lessons.length).toBeGreaterThanOrEqual(2);
    }
  });
});
