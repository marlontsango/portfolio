import { computed, Injectable, signal } from '@angular/core';
import {
  CATEGORY_LABELS,
  Project,
  PROJECT_CATEGORIES,
  ProjectCategory,
} from '../core/models/project.model';
import { PROJECTS } from '../core/data/projects';

@Injectable({ providedIn: 'root' })
export class ProjectsStore {
  private readonly _projects = signal<Project[]>(PROJECTS);
  private readonly _search = signal('');
  private readonly _category = signal<ProjectCategory | null>(null);
  private readonly _technology = signal<string | null>(null);
  private readonly filter = signal<ProjectCategory | 'all'>('all');

  /** Liste complète des projets (lecture seule). */
  readonly projects = this._projects.asReadonly();

  /** État des filtres (lecture seule). */
  readonly search = this._search.asReadonly();
  readonly category = this._category.asReadonly();
  readonly technology = this._technology.asReadonly();

  /** Catégories disponibles, déduites des données. */
  readonly categories = computed<ProjectCategory[]>(() =>
    PROJECT_CATEGORIES.filter((category) =>
      this._projects().some((project) => project.category === category),
    ),
  );

  /** Technologies disponibles, déduites des données et triées. */
  readonly technologies = computed<string[]>(() => {
    const all = new Set<string>();
    for (const project of this._projects()) {
      for (const technology of project.technologies) {
        all.add(technology);
      }
    }
    return [...all].sort((a, b) => a.localeCompare(b, 'fr'));
  });

  /** Libellés des catégories, exposés pour les templates. */
  readonly categoryLabels = CATEGORY_LABELS;

  /** Projets filtrés : catégorie ET technologie ET recherche textuelle. */
  readonly filteredProjects = computed<Project[]>(() => {
    const search = this._search().trim().toLowerCase();
    const category = this._category();
    const technology = this._technology();

    return this._projects().filter((project) => {
      const matchCategory = category === null || project.category === category;
      const matchTechnology = technology === null || project.technologies.includes(technology);
      const matchSearch =
        search === '' ||
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(search));

      return matchCategory && matchTechnology && matchSearch;
    });
  });

  setFilter(filter: ProjectCategory | 'all'): void {
    this.filter.set(filter);
  }

  /** Au moins un filtre actif ? */
  readonly hasActiveFilters = computed(
    () => this._search().trim() !== '' || this._category() !== null || this._technology() !== null,
  );

  /** Les 3 projets les plus récents, pour la page d'accueil. */
  readonly latestProjects = computed<Project[]>(() =>
    [...this._projects()].sort((a, b) => b.year - a.year).slice(0, 3),
  );

  /** Nombre total de projets, pour les statistiques. */
  readonly projectCount = computed(() => this._projects().length);

  /** Met à jour le terme de recherche. */
  setSearch(value: string): void {
    this._search.set(value);
  }

  /** Met à jour la catégorie sélectionnée (null = toutes). */
  setCategory(value: ProjectCategory | null): void {
    this._category.set(value);
  }

  /** Met à jour la technologie sélectionnée (null = toutes). */
  setTechnology(value: string | null): void {
    this._technology.set(value);
  }

  /** Réinitialise tous les filtres. */
  resetFilters(): void {
    this._search.set('');
    this._category.set(null);
    this._technology.set(null);
  }

  /** Recherche un projet par identifiant (utilisé par la page de détail). */
  projectById(id: string): Project | undefined {
    return this._projects().find((project) => project.id === id);
  }
}
