import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { ProjectDetail } from './pages/project-detail/project-detail';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home, title: 'Accueil — Portfolio' },
  { path: 'projets', component: Projects, title: 'Projets — Portfolio' },
  { path: 'projets/:id', component: ProjectDetail, title: 'Détail du projet — Portfolio' },
  { path: 'contact', component: Contact, title: 'Contact — Portfolio' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}