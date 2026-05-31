import completedProjectsData from './completedProjects.json';
import type { Language } from '../context/LanguageContext';

export type LocalizedTextMap = Partial<Record<Language, string>> & {
  en: string;
  tr: string;
};

export interface Account {
  email: string;
  role: string;
}

export interface CompletedProject {
  id: string;
  title: string;
  description: LocalizedTextMap;
  longDescription: LocalizedTextMap;
  url?: string;
  github?: string;
  image?: string;
  tags: string[];
  accounts: Account[];
}

export const completedProjects: CompletedProject[] = completedProjectsData.items as CompletedProject[];
