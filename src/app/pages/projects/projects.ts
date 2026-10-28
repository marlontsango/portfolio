import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProjectCategory } from '../../core/models/project.model';
import { ProjectsStore } from '../../services/projects-store';

@Component({
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class Projects {
  readonly projectService = inject(ProjectsStore);
  readonly filters: (ProjectCategory | 'all')[] = ['all', 'web', 'mobile', 'design'];

  setFilter(filter: ProjectCategory | 'all'): void {
    this.projectService.setFilter(filter);
  }
}
