import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
  standalone: false
})
export class Header {
    menuOpen = false;
  active = 'home';

  links = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
  ];

  select(id: string): void {
    this.active = id;
    this.menuOpen = false;
  }
}
