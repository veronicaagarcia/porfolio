// Types para el portfolio

export interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  tags: string[];
  colaboration?: string;
  colaborationLink?: string;
}

export interface SocialLink {
  name: string;
  href: string;
  ariaLabel: string;
  title?: string;
  text: {
    hero: string;
    contact: string;
  };
}

export interface ExperienceItem {
  title: string;
  date: string;
  description: string;
  list?: string[];
}
