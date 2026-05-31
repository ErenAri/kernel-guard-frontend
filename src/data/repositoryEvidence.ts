export interface RepositoryEvidence {
  primaryLanguage: string;
  lastPublicUpdate: string;
  trackedIssues: number;
  repositorySizeKb: number;
  languageMix: string[];
}

export const repositoryEvidence: Record<string, RepositoryEvidence> = {
  cathodex: {
    primaryLanguage: 'Python',
    lastPublicUpdate: '2026-04-13',
    trackedIssues: 1,
    repositorySizeKb: 24921,
    languageMix: ['Python', 'TypeScript', 'HTML', 'PowerShell', 'Shell'],
  },
  'post-quantum-messaging-app': {
    primaryLanguage: 'Rust',
    lastPublicUpdate: '2026-04-16',
    trackedIssues: 0,
    repositorySizeKb: 14381,
    languageMix: ['Rust', 'TypeScript', 'Kotlin', 'Python', 'Swift'],
  },
  'aegis-bpf': {
    primaryLanguage: 'C++',
    lastPublicUpdate: '2026-05-24',
    trackedIssues: 11,
    repositorySizeKb: 5575,
    languageMix: ['C++', 'Shell', 'C', 'Go', 'Python'],
  },
};

