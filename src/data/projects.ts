import projectsData from './projects.json';
import type { Language } from '../context/LanguageContext';

export type LocalizedTextMap = Partial<Record<Language, string>> & {
  en: string;
  tr: string;
};

export interface Project {
  id: string;
  title: string;
  description: LocalizedTextMap;
  technicalDetails: LocalizedTextMap;
  marketingDetails: LocalizedTextMap;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  diagram?: string;
}

export const projects: Project[] = projectsData.items as Project[];
