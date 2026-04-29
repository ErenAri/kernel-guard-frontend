import completedProjectsData from './completedProjects.json';

export interface Account {
  email: string;
  password?: string;
  role: string;
}

export interface CompletedProject {
  id: string;
  title: string;
  description: {
    en: string;
    tr: string;
  };
  longDescription: {
    en: string;
    tr: string;
  };
  url?: string;
  github?: string;
  image?: string;
  tags: string[];
  accounts: Account[];
}

export const completedProjects: CompletedProject[] = completedProjectsData.items as CompletedProject[];
