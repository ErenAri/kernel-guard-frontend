export interface GrowthServicePage {
  slug: string;
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
  relatedArticleSlugs: string[];
}

export const growthServicePages: GrowthServicePage[] = [
  {
    slug: 'cybersecurity-consulting',
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
    relatedArticleSlugs: [
      'security-headers-cloudflare-pages-react',
      'spf-dkim-dmarc-google-workspace-security-domain',
      'vulnerability-disclosure-security-txt-website',
    ],
  },
  {
    slug: 'secure-web-development',
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
    relatedArticleSlugs: [
      'react-contact-form-spam-abuse-hardening',
      'security-headers-cloudflare-pages-react',
    ],
  },
  {
    slug: 'cloudflare-security-hardening',
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
    relatedArticleSlugs: [
      'security-headers-cloudflare-pages-react',
      'spf-dkim-dmarc-google-workspace-security-domain',
    ],
  },
  {
    slug: 'react-security-audit',
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
    relatedArticleSlugs: [
      'react-contact-form-spam-abuse-hardening',
      'security-headers-cloudflare-pages-react',
    ],
  },
  {
    slug: 'backend-api-hardening',
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
