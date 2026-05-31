export const engineeringEvidence = {
  measuredAt: '2026-05-31',
  delivery: {
    prerenderedRoutes: 100,
    indexableUrls: 80,
    supportedLanguages: 5,
  },
  lighthouse: {
    desktop: {
      performance: 91,
      accessibility: 100,
      bestPractices: 96,
      seo: 92,
      totalBlockingTime: '0 ms',
      cumulativeLayoutShift: '0.001',
    },
    mobile: {
      performance: 72,
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
