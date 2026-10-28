// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Requis pour faire fonctionner routerLink
import { ProjectCard } from './project-card/project-card';

@NgModule({
  declarations: [
    ProjectCard // Déclaré ici
  ],
  imports: [
    CommonModule,
    RouterModule // Fournit routerLink à ProjectCardComponent
  ],
  exports: [
    ProjectCard // Exporté pour être utilisé dans d'autres modules
  ]
})
export class SharedModule { }
