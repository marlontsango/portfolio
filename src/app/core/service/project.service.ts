// src/app/core/services/project.service.ts
import { Injectable, computed, signal } from '@angular/core';
import { PROJECTS } from '../data/projects';
import { Project, ProjectCategory } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private readonly projects = signal<Project[]>(PROJECTS);
  private readonly filter = signal<ProjectCategory | 'all'>('all');

  readonly filteredProjects = computed(() => {
    const filter = this.filter();
    return this.projects().filter(
      project => filter === 'all' || project.category === filter
    );
  });

/*  readonly featuredProjects = computed(() =>
    this.projects().filter(project => project.featured)
  );
*/
  setFilter(filter: ProjectCategory | 'all'): void {
    this.filter.set(filter);
  }

  getBySlug(slug: string): Project | undefined {
    return this.projects().find(project => project.slug === slug);
  }
}