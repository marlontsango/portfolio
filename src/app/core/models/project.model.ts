/**
 * Modèle de données d'un projet du portfolio.
 * Adaptez librement ces types selon vos besoins.
 */

/** Catégories possibles d'un projet. */
export const PROJECT_CATEGORIES = ['web', 'mobile', 'outil', 'design'] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface Project {
  /** Identifiant unique, utilisé dans l'URL : /projets/:id */
  id: string;
  title: string;
  description: string;
  cover: string;
  subtitle: string;
  featured: boolean;
  role: string;
  screenshots:string[];
  slug: string;
  category: ProjectCategory;
  /** Technologies affichées sous forme de chips (ex. Angular, Ionic). */
  technologies: string[];
  /** Année de réalisation. */
  year: number;
  links: ProjectLink[];
  /** Lien vers la démo en ligne (optionnel). */
  demoUrl?: string;
  /** Lien vers le code source (optionnel). */
  sourceUrl?: string;
  metrics?: string[];
}

/** Libellés lisibles des catégories, utilisés dans l'UI. */
export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: 'Web',
  mobile: 'Mobile',
  outil: 'Outil',
  design: 'UI / Design',
};
export interface ProjectLink {
  label: string;
  url: string;
  icon?: 'github' | 'play' | 'apple' | 'external' | 'gitlab';
}
