// ============================================
// TYPE DEFINITIONS
// These define the shape of your data
// ============================================

export interface Article {
  id: string;
  emoji: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  url: string;
}

export interface Publication {
  id: string;
  type: 'Conference Paper' | 'Journal Article' | 'Workshop Paper' | 'Preprint' | 'Book Chapter';
  title: string;
  authors: string; // Use **Name** for bold
  venue: string;
  date: string;
  abstract?: string;
  links: {
    label: string;
    url: string;
  }[];
}

export interface Project {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  emoji: string;
  title: string;
  provider: string;
  date: string;
  url: string;
}

export interface Education {
  id: string;
  years: string;
  degree: string;
  school: string;
  rank?: string;
}

export interface Skill {
  category: string;
  emoji: string;
  items: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
