export const engineeringEvidence = {
  measuredAt: '2026-06-14',
  delivery: {
    prerenderedRoutes: 211,
    indexableUrls: 179,
    supportedLanguages: 8,
  },
  lighthouse: {
    desktop: {
      performance: 100,
      accessibility: 100,
      bestPractices: 96,
      seo: 92,
      totalBlockingTime: '0 ms',
      cumulativeLayoutShift: '0.001',
    },
    mobile: {
      performance: 91,
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
