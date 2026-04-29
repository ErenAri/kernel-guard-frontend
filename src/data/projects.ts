import projectsData from './projects.json';

export interface Project {
  id: string;
  title: string;
  description: {
    en: string;
    tr: string;
  };
  technicalDetails: {
    en: string;
    tr: string;
  };
  marketingDetails: {
    en: string;
    tr: string;
  };
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  diagram?: string;
}

export const projects: Project[] = projectsData.items as Project[];
