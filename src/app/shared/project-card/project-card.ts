import { Component, input } from '@angular/core';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  styleUrl: './project-card.css',
  standalone: false,
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly project = input.required<Project>();

}
