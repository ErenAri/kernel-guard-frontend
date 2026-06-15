import type { Language } from '../context/LanguageContext';
import { growthServiceTranslations, type NonEnglishLanguage } from './growthServiceTranslations';

export interface GrowthServicePage {
  slug: string;
  relatedArticleSlugs: string[];
}

export interface GrowthServiceContent {
  title: string;
  shortTitle: string;
  description: string;
  keywords: string;
  serviceType: string;
  intent: string;
  outcomes: string[];
  deliverables: string[];
  process: Array<{
    title: string;
    description: string;
  }>;
  proofPoints: string[];
  detailTitle?: string;
  detailDescription?: string;
  assuranceSections?: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
}

export type LocalizedGrowthServicePage = GrowthServicePage & GrowthServiceContent;

const englishGrowthServiceContent: Record<string, GrowthServiceContent> = {
  'cybersecurity-consulting': {
    title: 'Cybersecurity Consulting for Web Platforms',
    shortTitle: 'Cybersecurity Consulting',
    description:
      'Practical cybersecurity consulting for web applications, APIs, cloud edges, and public-facing business systems.',
    keywords:
      'cybersecurity consulting, web application security consulting, API security consulting, cloud security consultant',
    serviceType: 'Cybersecurity consulting',
    intent:
      'For teams that need a clear security plan before launching, scaling, or exposing a new web system.',
    outcomes: [
      'A prioritized security roadmap tied to business risk and implementation cost.',
      'Concrete fixes for authentication, authorization, data exposure, headers, and abuse controls.',
      'A sharper security posture that can be explained to customers, partners, and auditors.',
    ],
    deliverables: [
      'Architecture and threat-model review',
      'Risk-ranked findings with remediation notes',
      'Security header, DNS, and email authentication review',
      'Launch readiness checklist for production systems',
      'Follow-up implementation support for critical fixes',
    ],
    process: [
      {
        title: 'Assess',
        description:
          'Review the live surface, repository structure, authentication flows, API boundaries, DNS, and deployment platform.',
      },
      {
        title: 'Prioritize',
        description:
          'Separate urgent exposure from hardening work so engineering time is spent where it changes risk.',
      },
      {
        title: 'Harden',
        description:
          'Implement or guide fixes, then verify them with repeatable checks that can stay in CI.',
      },
    ],
    proofPoints: [
      'Security.txt disclosure workflow',
      'SPF, DKIM, and DMARC alignment',
      'Strict security headers and no wildcard CORS policy in static headers',
    ],
    detailTitle: 'Methodology, scope, and evidence',
    detailDescription:
      'A consulting engagement is useful only when the scope, standards, and output are clear before work starts.',
    assuranceSections: [
      {
        title: 'Scope',
        description: 'Security review across the web application, APIs, cloud edge, DNS, email trust, and launch workflow.',
        items: ['Threat model and architecture review', 'Authentication and authorization boundary review', 'Public exposure and abuse-control review'],
      },
      {
        title: 'Standards',
        description: 'Findings are mapped to practical controls instead of vague best-practice language.',
        items: ['OWASP ASVS and OWASP Top 10', 'CIS Controls and NIST CSF alignment', 'Cloudflare and Google Workspace hardening guidance'],
      },
      {
        title: 'Sample report',
        description: 'The report is structured so engineering can turn it into tickets without translation.',
        items: ['Executive risk summary', 'Severity-ranked findings with evidence and reproduction', '30/60/90 remediation roadmap'],
      },
      {
        title: 'Service level',
        description: 'Response targets are explicit so urgent risk is not buried in normal project cadence.',
        items: ['Critical exposure notification as soon as verified', 'Initial engagement summary within 2 business days', 'Final report inside the agreed review window'],
      },
    ],
  },
  'secure-web-development': {
    title: 'Secure Web Development Services',
    shortTitle: 'Secure Web Development',
    description:
      'Secure React, TypeScript, and API development for teams that need production-grade web applications.',
    keywords:
      'secure web development, secure React development, secure TypeScript development, production web application security',
    serviceType: 'Secure web development',
    intent:
      'For founders and teams that need a web product built with security, performance, and maintainability from the start.',
    outcomes: [
      'A fast web application with clear trust signals, strong metadata, and production deployment discipline.',
      'Frontend and backend boundaries that reduce common injection, abuse, and data-leak risks.',
      'A codebase that future engineers can understand, test, and extend.',
    ],
    deliverables: [
      'React and TypeScript application development',
      'Security-aware contact, lead, and account workflows',
      'SEO, accessibility, and structured data implementation',
      'CI checks for type safety, tests, build, and dependency risk',
      'Deployment support for Cloudflare Pages, Vercel, or similar platforms',
    ],
    process: [
      {
        title: 'Shape',
        description:
          'Define the product surface, critical conversion paths, trust requirements, and launch constraints.',
      },
      {
        title: 'Build',
        description:
          'Ship the application in small, reviewable changes with security and accessibility checks included.',
      },
      {
        title: 'Verify',
        description:
          'Run build, route, metadata, and browser checks before public release.',
      },
    ],
    proofPoints: [
      'Server-side prerendered pages',
      'Canonical and hreflang metadata',
      'Contact workflows routed to company email aliases',
    ],
    detailTitle: 'Build scope and acceptance criteria',
    detailDescription:
      'Secure web development work is defined by the controls, handoff artifacts, and launch evidence needed for production.',
    assuranceSections: [
      {
        title: 'Scope',
        description: 'Product implementation for public pages, contact flows, admin boundaries, metadata, and deployment readiness.',
        items: ['React and TypeScript application surface', 'Secure form and role-inbox routing', 'SEO, accessibility, and localization support'],
      },
      {
        title: 'Standards',
        description: 'Implementation choices are held to maintainability and security standards that survive launch pressure.',
        items: ['Strict TypeScript and CI checks', 'WCAG-oriented interface states', 'Security headers, canonical URLs, and structured data'],
      },
      {
        title: 'Sample handoff',
        description: 'The handoff includes enough evidence for another engineer to operate the site confidently.',
        items: ['Deployment and rollback notes', 'Environment variable inventory', 'Route, metadata, and form verification checklist'],
      },
      {
        title: 'Service level',
        description: 'Delivery cadence is based on small, reviewable releases with visible verification.',
        items: ['Weekly implementation checkpoint for active builds', 'Same-day escalation for launch blockers where feasible', 'Post-launch defect triage window by agreement'],
      },
    ],
  },
  'cloudflare-security-hardening': {
    title: 'Cloudflare Security Hardening',
    shortTitle: 'Cloudflare Hardening',
    description:
      'Cloudflare security hardening for websites, DNS, email authentication, headers, and edge configuration.',
    keywords:
      'Cloudflare security hardening, Cloudflare Pages security, Cloudflare DNS security, website security headers',
    serviceType: 'Cloudflare security hardening',
    intent:
      'For sites already using Cloudflare that need tighter headers, cleaner DNS, safer edge rules, and better launch hygiene.',
    outcomes: [
      'A more defensible Cloudflare configuration with fewer accidental exposure paths.',
      'DNS and email records that reduce spoofing and brand-abuse risk.',
      'Headers and cache behavior that match the application instead of relying on broad defaults.',
    ],
    deliverables: [
      'DNS and proxy configuration review',
      'Security header policy for static and dynamic responses',
      'SPF, DKIM, DMARC, and reporting mailbox verification',
      'Redirect and canonical URL review',
      'Deployment and rollback checklist',
    ],
    process: [
      {
        title: 'Inventory',
        description:
          'Map active DNS records, proxied routes, redirects, headers, and deployment outputs.',
      },
      {
        title: 'Tighten',
        description:
          'Adjust records, headers, and edge rules with the smallest changes required to reduce risk.',
      },
      {
        title: 'Confirm',
        description:
          'Verify live responses and capture a short operational record for future changes.',
      },
    ],
    proofPoints: [
      'Cloudflare Pages header policy',
      'Robots and sitemap publication',
      'DMARC reporting mailbox support',
    ],
    detailTitle: 'Cloudflare hardening record',
    detailDescription:
      'The work produces a concise operational record of what changed, why it changed, and how to roll it back.',
    assuranceSections: [
      {
        title: 'Scope',
        description: 'Cloudflare DNS, proxy behavior, redirects, headers, caching, and mail-authentication records.',
        items: ['DNS and proxy inventory', 'Security headers and cache behavior', 'SPF, DKIM, DMARC, MTA-STS, and TLS-RPT review'],
      },
      {
        title: 'Standards',
        description: 'Configuration is checked against Cloudflare deployment behavior and public web trust expectations.',
        items: ['HSTS and CSP rollout discipline', 'Explicit CORS and preview-origin control', 'DMARC monitoring before enforcement'],
      },
      {
        title: 'Sample report',
        description: 'Outputs are useful for future operators, not only the person making the change.',
        items: ['Before/after DNS and header table', 'Risk notes for changed records', 'Rollback checklist and verification commands'],
      },
      {
        title: 'Service level',
        description: 'DNS and edge changes are sequenced to reduce downtime and avoid mail-delivery surprises.',
        items: ['Propagation-aware change windows', 'Rollback-ready changes for proxied records', 'Report review after DMARC or TLS-RPT changes'],
      },
    ],
  },
  'react-security-audit': {
    title: 'React Security Audit',
    shortTitle: 'React Security Audit',
    description:
      'React security audits for frontend codebases, contact forms, routing, metadata, dependency risk, and client-side exposure.',
    keywords:
      'React security audit, frontend security audit, TypeScript security review, web application security audit',
    serviceType: 'React security audit',
    intent:
      'For teams that already have a React application and need a focused review before launch or investor/customer review.',
    outcomes: [
      'A short, actionable audit report that engineering can turn into tickets.',
      'Reduced risk from exposed secrets, unsafe rendering, weak form controls, and routing mistakes.',
      'Improved credibility through tested metadata, accessibility, and visible trust pages.',
    ],
    deliverables: [
      'Client-side code and route review',
      'Dependency and build configuration review',
      'Form abuse and bot-control review',
      'SEO and structured data sanity check',
      'Risk-ranked remediation plan',
    ],
    process: [
      {
        title: 'Review',
        description:
          'Read the codebase, deployment configuration, and live behavior with attention to user-controlled data.',
      },
      {
        title: 'Test',
        description:
          'Run the existing checks and add focused assertions where a failure would be costly.',
      },
      {
        title: 'Report',
        description:
          'Document the fixes in priority order, including exact files, URLs, and verification steps.',
      },
    ],
    proofPoints: [
      'TypeScript no-emit checks',
      'Vitest route and utility tests',
      'Browser verification for key pages',
    ],
    detailTitle: 'Audit evidence package',
    detailDescription:
      'The audit is written for engineering action: each issue includes impact, location, and verification steps.',
    assuranceSections: [
      {
        title: 'Scope',
        description: 'Frontend routes, forms, client storage, dependency risk, metadata, and deployment configuration.',
        items: ['Secret and token exposure review', 'Unsafe rendering and user-controlled data review', 'Routing, SEO, and trust-page review'],
      },
      {
        title: 'Standards',
        description: 'Findings are mapped to widely understood frontend and web application risk categories.',
        items: ['OWASP Top 10 and ASVS-relevant controls', 'React and TypeScript safety patterns', 'Accessibility and browser security expectations'],
      },
      {
        title: 'Sample report',
        description: 'The output is concise enough to execute but detailed enough to verify.',
        items: ['Finding title, severity, and affected file or URL', 'Reproduction and remediation steps', 'Suggested regression test or CI gate'],
      },
      {
        title: 'Service level',
        description: 'Audit timing is scoped around the risk of the release being reviewed.',
        items: ['Initial risk readout after review completion', 'Critical issue escalation before final report', 'Retest support for remediated high-impact findings'],
      },
    ],
  },
  'backend-api-hardening': {
    title: 'Backend API Hardening',
    shortTitle: 'Backend API Hardening',
    description:
      'Backend and API hardening for authentication, authorization, validation, rate limits, logging, and deployment readiness.',
    keywords:
      'backend API hardening, API security, backend security review, Node API security, cloud API hardening',
    serviceType: 'Backend API hardening',
    intent:
      'For teams exposing APIs to customers, partner integrations, dashboards, or public contact workflows.',
    outcomes: [
      'API routes with clearer authorization boundaries and safer input handling.',
      'Abuse controls that protect contact, lead, login, and operational endpoints.',
      'Operational checks that make future regressions easier to catch.',
    ],
    deliverables: [
      'API route and data-flow review',
      'Authentication and authorization boundary review',
      'Validation, rate limiting, and abuse-control guidance',
      'Logging and incident-readiness checklist',
      'CI-friendly regression checks for critical routes',
    ],
    process: [
      {
        title: 'Map',
        description:
          'Identify public routes, privileged routes, external integrations, and data paths.',
      },
      {
        title: 'Reduce',
        description:
          'Remove avoidable exposure and add controls around the routes most likely to be abused.',
      },
      {
        title: 'Monitor',
        description:
          'Add practical logging and verification so issues are visible after launch.',
      },
    ],
    proofPoints: [
      'Contact endpoint verification',
      'Email alias routing for support and security',
      'Security-focused launch checklist',
    ],
    detailTitle: 'API hardening blueprint',
    detailDescription:
      'Backend work is scoped around trust boundaries, abuse cases, and operational evidence for privileged routes.',
    assuranceSections: [
      {
        title: 'Scope',
        description: 'Authentication, authorization, validation, rate limiting, logging, and external-service integrations.',
        items: ['Public and privileged route inventory', 'Data-flow and trust-boundary review', 'Error handling and observability review'],
      },
      {
        title: 'Standards',
        description: 'Controls are mapped to practical API security requirements and deployment constraints.',
        items: ['OWASP API Security Top 10', 'Least-privilege service credentials', 'Secure cookie and CORS patterns'],
      },
      {
        title: 'Sample report',
        description: 'The report gives backend engineers exact controls to implement and verify.',
        items: ['Endpoint risk table', 'Authentication and authorization gap analysis', 'Rate-limit, logging, and incident-readiness checklist'],
      },
      {
        title: 'Service level',
        description: 'Hardening support prioritizes routes where abuse or data exposure would be most costly.',
        items: ['Critical route triage first', 'Verification notes for each accepted fix', 'Follow-up review for auth or session changes'],
      },
    ],
  },
};

export const growthServicePages: GrowthServicePage[] = [
  {
    slug: 'cybersecurity-consulting',
    relatedArticleSlugs: [
      'security-headers-cloudflare-pages-react',
      'spf-dkim-dmarc-google-workspace-security-domain',
      'vulnerability-disclosure-security-txt-website',
    ],
  },
  {
    slug: 'secure-web-development',
    relatedArticleSlugs: [
      'react-contact-form-spam-abuse-hardening',
      'security-headers-cloudflare-pages-react',
    ],
  },
  {
    slug: 'cloudflare-security-hardening',
    relatedArticleSlugs: [
      'security-headers-cloudflare-pages-react',
      'spf-dkim-dmarc-google-workspace-security-domain',
    ],
  },
  {
    slug: 'react-security-audit',
    relatedArticleSlugs: [
      'react-contact-form-spam-abuse-hardening',
      'security-headers-cloudflare-pages-react',
    ],
  },
  {
    slug: 'backend-api-hardening',
    relatedArticleSlugs: [
      'react-contact-form-spam-abuse-hardening',
      'vulnerability-disclosure-security-txt-website',
    ],
  },
];

export const growthServiceSlugs = growthServicePages.map((service) => service.slug);

export function getGrowthServicePage(slug: string | undefined): GrowthServicePage | undefined {
  if (!slug) {
    return undefined;
  }

  return growthServicePages.find((service) => service.slug === slug);
}

export function localizeGrowthServicePage(
  service: GrowthServicePage,
  language: Language,
): LocalizedGrowthServicePage {
  const fallbackContent = englishGrowthServiceContent[service.slug];
  if (!fallbackContent) {
    throw new Error(`Missing English growth service content for slug: ${service.slug}`);
  }

  const translatedContent =
    language === 'en'
      ? fallbackContent
      : growthServiceTranslations[service.slug]?.[language as NonEnglishLanguage];
  const content = translatedContent ?? fallbackContent;

  return {
    ...service,
    ...fallbackContent,
    ...content,
  };
}

export function getLocalizedGrowthServicePage(
  slug: string | undefined,
  language: Language,
): LocalizedGrowthServicePage | undefined {
  const service = getGrowthServicePage(slug);
  return service ? localizeGrowthServicePage(service, language) : undefined;
}

export function getEnglishGrowthServiceContent(slug: string): GrowthServiceContent | undefined {
  return englishGrowthServiceContent[slug];
}
