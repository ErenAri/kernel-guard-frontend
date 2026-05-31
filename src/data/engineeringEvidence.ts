export const engineeringEvidence = {
  measuredAt: '2026-06-01',
  delivery: {
    prerenderedRoutes: 192,
    indexableUrls: 160,
    supportedLanguages: 8,
  },
  lighthouse: {
    desktop: {
      performance: 100,
      accessibility: 95,
      bestPractices: 96,
      seo: 92,
      totalBlockingTime: '0 ms',
      cumulativeLayoutShift: '0.001',
    },
    mobile: {
      performance: 98,
      accessibility: 100,
      bestPractices: 96,
      seo: 92,
      totalBlockingTime: '0 ms',
      cumulativeLayoutShift: '0',
    },
  },
  github: {
    publicRepositories: 7,
    featuredRepositories: 3,
    latestPublicUpdate: '2026-05-29',
    primaryLanguages: ['Python', 'Rust', 'C++', 'TypeScript', 'Go'],
  },
} as const;
