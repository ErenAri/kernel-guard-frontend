export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ArticleReference {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  tags: string[];
  summary: string[];
  sections: ArticleSection[];
  references: ArticleReference[];
  relatedServiceSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: 'spf-dkim-dmarc-google-workspace-security-domain',
    title: 'SPF, DKIM, and DMARC Setup for a Google Workspace Security Domain',
    description:
      'A practical guide to Google Workspace email authentication for company domains that need stronger trust and lower spoofing risk.',
    publishedAt: '2026-06-14',
    updatedAt: '2026-06-14',
    readingMinutes: 6,
    tags: ['Email Security', 'Google Workspace', 'DMARC', 'DNS'],
    summary: [
      'SPF authorizes the mail servers that can send for the domain.',
      'DKIM signs messages so receivers can verify that content was not changed in transit.',
      'DMARC tells receivers what to do when SPF or DKIM alignment fails and where to send reports.',
    ],
    sections: [
      {
        heading: 'Why this matters for a young company domain',
        paragraphs: [
          'A company website can look professional while its email domain is still easy to impersonate. SPF, DKIM, and DMARC close that gap by giving receivers evidence about who is allowed to send mail and how failures should be handled.',
          'For a security-focused company, this is not optional polish. It is part of the public trust surface, especially when the site publishes contact, support, security, privacy, legal, and sales mailboxes.',
        ],
      },
      {
        heading: 'Recommended rollout order',
        bullets: [
          'Create the operational mailboxes first, including a DMARC reporting mailbox such as dmarc@example.com.',
          'Publish SPF for the active sender, for example Google Workspace.',
          'Enable Google Workspace DKIM signing and publish the DKIM TXT record.',
          'Start DMARC with p=none and reporting enabled so failures can be observed before enforcement.',
          'Move to quarantine or reject only after legitimate senders are aligned.',
        ],
      },
      {
        heading: 'What to verify',
        paragraphs: [
          'Verification should happen from both DNS and real message headers. DNS confirms that the records exist. Message headers confirm that mail sent through the production path is actually passing SPF, DKIM, and DMARC alignment.',
        ],
        bullets: [
          'SPF includes only services that actually send mail for the domain.',
          'DKIM uses a current selector and shows pass in received messages.',
          'DMARC reports are delivered to a monitored mailbox.',
          'The policy is documented so future mail tools do not break deliverability.',
        ],
      },
      {
        heading: 'Company-grade next step',
        paragraphs: [
          'After reports look clean, tighten DMARC gradually. The strongest end state is reject, but the right timeline depends on whether newsletters, transactional mail, CRM tools, or support tools also send from the domain.',
        ],
      },
    ],
    references: [
      {
        label: 'Google Workspace email authentication help',
        url: 'https://support.google.com/a/topic/2759254',
      },
      {
        label: 'DMARC specification overview',
        url: 'https://dmarc.org/',
      },
    ],
    relatedServiceSlugs: ['cybersecurity-consulting', 'cloudflare-security-hardening'],
  },
  {
    slug: 'security-headers-cloudflare-pages-react',
    title: 'Security Headers for Cloudflare Pages and React Sites',
    description:
      'How to use security headers, canonical metadata, and response verification to reduce common browser-side risks on static React deployments.',
    publishedAt: '2026-06-14',
    updatedAt: '2026-06-14',
    readingMinutes: 7,
    tags: ['Cloudflare', 'React', 'Security Headers', 'Frontend Security'],
    summary: [
      'Security headers should be treated as deployment configuration, not just code comments.',
      'Cloudflare Pages supports static header rules that can be tested before release.',
      'Wildcard CORS is usually too broad for public static responses unless there is a specific cross-origin use case.',
    ],
    sections: [
      {
        heading: 'The baseline header set',
        paragraphs: [
          'A hardened React site should set browser behavior explicitly. The exact policy depends on the app, but the baseline usually includes content type protection, clickjacking protection, referrer control, permissions policy, and a carefully chosen content security policy.',
          'Static hosts make this easy to forget because the app still renders without headers. The security work has to be verified at the HTTP response layer.',
        ],
      },
      {
        heading: 'Cloudflare Pages considerations',
        bullets: [
          'Keep header rules close to the repository when possible so changes are reviewed with code.',
          'Avoid dashboard-only changes unless they are documented, because they are harder for future maintainers to audit.',
          'Verify both www and apex domains if both are served.',
          'Check that redirects do not strip important headers from the final response.',
        ],
      },
      {
        heading: 'CORS should be intentional',
        paragraphs: [
          'Access-Control-Allow-Origin: * is often copied into sites without a reason. For normal web pages, broad CORS usually does not help visitors and can make accidental data exposure easier if future endpoints are added under the same policy.',
        ],
      },
      {
        heading: 'What to automate',
        bullets: [
          'A test that rejects wildcard CORS in static header configuration.',
          'A build step that publishes sitemap and robots files.',
          'A preview check that confirms critical pages render and metadata is present.',
          'A live-response check after deployment for production domains.',
        ],
      },
    ],
    references: [
      {
        label: 'Cloudflare Pages headers documentation',
        url: 'https://developers.cloudflare.com/pages/configuration/headers/',
      },
      {
        label: 'MDN HTTP security headers overview',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers',
      },
    ],
    relatedServiceSlugs: [
      'cloudflare-security-hardening',
      'react-security-audit',
      'cybersecurity-consulting',
    ],
  },
  {
    slug: 'vulnerability-disclosure-security-txt-website',
    title: 'Vulnerability Disclosure and security.txt for Company Websites',
    description:
      'A practical security.txt and vulnerability disclosure workflow for small companies that want a credible security contact path.',
    publishedAt: '2026-06-14',
    updatedAt: '2026-06-14',
    readingMinutes: 5,
    tags: ['Vulnerability Disclosure', 'security.txt', 'Trust'],
    summary: [
      'security.txt gives researchers a predictable place to find a security contact.',
      'The mailbox behind that contact must be monitored and routed internally.',
      'A public policy reduces confusion before an incident happens.',
    ],
    sections: [
      {
        heading: 'What security.txt solves',
        paragraphs: [
          'Researchers and customers should not have to guess whether security issues belong in a contact form, a support inbox, or a social media message. A security.txt file creates a standard path for reporting vulnerabilities.',
          'The file is small, but it signals operational maturity when it includes a real contact, canonical URL, policy URL, and preferred language.',
        ],
      },
      {
        heading: 'Minimum practical setup',
        bullets: [
          'Publish /.well-known/security.txt on the canonical domain.',
          'Use a monitored security mailbox, such as security@example.com.',
          'Link to a vulnerability disclosure policy or security page.',
          'Make sure support and contact teams know where to forward security reports.',
        ],
      },
      {
        heading: 'Response workflow',
        paragraphs: [
          'The website is only the entry point. A company-grade setup also needs a response owner, severity triage, evidence capture, fix tracking, and a short communication template for acknowledging valid reports.',
        ],
      },
      {
        heading: 'Common mistakes',
        bullets: [
          'Publishing a security mailbox that nobody monitors.',
          'Using a personal email address instead of a company alias.',
          'Forgetting to update the canonical URL after a domain migration.',
          'Treating disclosure handling as a legal page only instead of an operational workflow.',
        ],
      },
    ],
    references: [
      {
        label: 'RFC 9116 security.txt',
        url: 'https://www.rfc-editor.org/rfc/rfc9116',
      },
    ],
    relatedServiceSlugs: ['cybersecurity-consulting', 'backend-api-hardening'],
  },
  {
    slug: 'react-contact-form-spam-abuse-hardening',
    title: 'Hardening React Contact Forms Against Spam and Abuse',
    description:
      'How to protect a React contact page with validation, bot controls, routing discipline, and safer email handling.',
    publishedAt: '2026-06-14',
    updatedAt: '2026-06-14',
    readingMinutes: 6,
    tags: ['React', 'Contact Forms', 'Abuse Controls', 'Email'],
    summary: [
      'Contact forms are public write endpoints and should be treated as abuse targets.',
      'Bot controls help, but validation, rate limits, and destination routing still matter.',
      'Operational mailboxes make it easier to separate sales, support, privacy, legal, and security messages.',
    ],
    sections: [
      {
        heading: 'The risk surface',
        paragraphs: [
          'A contact page looks simple, but it often becomes the first public endpoint attackers can write to. Spam, phishing payloads, oversized submissions, and automated probes can all target the same workflow.',
          'The frontend can improve quality and reduce noise, but server-side validation and rate limiting remain necessary for any real mail-sending endpoint.',
        ],
      },
      {
        heading: 'Frontend controls',
        bullets: [
          'Validate required fields and expected lengths before submission.',
          'Avoid exposing provider secrets or private API keys in client-side code.',
          'Use clear success and failure states so users do not submit repeatedly.',
          'Load bot protection only where needed to reduce page weight.',
        ],
      },
      {
        heading: 'Backend and email controls',
        bullets: [
          'Rate limit by IP, fingerprint, or session where your platform allows it.',
          'Normalize and validate payloads before composing email.',
          'Route messages to role-based mailboxes instead of personal addresses.',
          'Log enough context to investigate abuse without collecting unnecessary personal data.',
        ],
      },
      {
        heading: 'Professional routing',
        paragraphs: [
          'Company aliases make the workflow easier to operate. Support questions can go to support, vulnerability reports to security, privacy requests to privacy, legal requests to legal, and sales leads to sales. That separation also looks more credible on the public site.',
        ],
      },
    ],
    references: [
      {
        label: 'OWASP automated threats overview',
        url: 'https://owasp.org/www-project-automated-threats-to-web-applications/',
      },
    ],
    relatedServiceSlugs: ['secure-web-development', 'react-security-audit', 'backend-api-hardening'],
  },
  {
    slug: 'ebpf-compatibility-testing-ci',
    title: 'eBPF Compatibility Testing in CI for Kernel-Sensitive Projects',
    description:
      'How compatibility reports, repeatable checks, and CI evidence help teams ship kernel-sensitive eBPF work with more confidence.',
    publishedAt: '2026-06-14',
    updatedAt: '2026-06-14',
    readingMinutes: 7,
    tags: ['eBPF', 'CI', 'Kernel Security', 'Open Source'],
    summary: [
      'Kernel-sensitive tools need compatibility evidence, not only a successful local build.',
      'CI reports make verifier, helper, and kernel-version assumptions easier to review.',
      'Publishing the evidence improves trust for open-source security projects.',
    ],
    sections: [
      {
        heading: 'Why compatibility evidence matters',
        paragraphs: [
          'eBPF programs depend on kernel behavior, helper availability, verifier constraints, and runtime environment details. A tool can work on one developer machine and still fail for users on another kernel line.',
          'Compatibility testing makes those assumptions visible. It also gives maintainers a way to catch regressions before a release.',
        ],
      },
      {
        heading: 'What a useful report should include',
        bullets: [
          'Kernel version and architecture under test.',
          'Program load status and verifier output when relevant.',
          'Helper, map, and feature assumptions.',
          'A clear pass, fail, or partial-support verdict.',
          'Links to the code and CI run that produced the result.',
        ],
      },
      {
        heading: 'CI integration pattern',
        paragraphs: [
          'The CI job should generate a human-readable report and a machine-readable artifact. The website can then publish a summarized version so users and contributors can inspect the project without digging through raw workflow logs.',
        ],
      },
      {
        heading: 'Trust benefit',
        paragraphs: [
          'For a security engineering company, open compatibility evidence does two jobs. It helps users decide whether a tool fits their environment, and it demonstrates that engineering claims are backed by repeatable checks.',
        ],
      },
    ],
    references: [
      {
        label: 'Kernel eBPF documentation',
        url: 'https://docs.kernel.org/bpf/',
      },
    ],
    relatedServiceSlugs: ['cybersecurity-consulting'],
  },
];

export const articleSlugs = articles.map((article) => article.slug);

export function getArticle(slug: string | undefined): Article | undefined {
  if (!slug) {
    return undefined;
  }

  return articles.find((article) => article.slug === slug);
}
