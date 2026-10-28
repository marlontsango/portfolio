import { Component, computed, inject, input } from '@angular/core';
import { ProjectsStore } from '../../services/projects-store';
import { CATEGORY_LABELS } from '../../core/models/project.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PROJECTS } from '../../core/data/projects';

@Component({
  imports: [RouterLink],
  selector: 'app-project-detail',
  styleUrl: './project-detail.css',
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  protected readonly store = inject(ProjectsStore);
  private readonly route = inject(ActivatedRoute);

  /** Paramètre de route `:id`, injecté automatiquement. */
  readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), {
    initialValue: '',
  });

  /** Projet correspondant, ou undefined si l'identifiant est inconnu. */
  readonly project = computed(() => PROJECTS.find((p) => p.id === this.id()));

  /** Libellé de la catégorie du projet courant. */
  protected readonly categoryLabel = computed(() => {
    const project = this.project();
    return project ? CATEGORY_LABELS[project.category] : '';
  });
}
