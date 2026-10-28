import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  services = [
    {
      title: 'Design UI/UX',
      text: 'Conception d’interfaces intuitives et création de maquettes interactives haute fidélité sur Figma, centrées sur l’expérience utilisateur.',
    },
    {
      title: 'Applications Mobiles',
      text: 'Développement d’applications cross-platform (iOS & Android) avec Ionic et Capacitor, optimisées pour les contraintes du terrain et le mode hors ligne.',
    },
    {
      title: 'Applications Web Angular',
      text: 'Architecture et développement d’interfaces web performantes, modulaires et faciles à maintenir, du tableau de bord complexe à l’outil métier.',
    },
    {
      title: 'Intégration d’Interfaces',
      text: 'Conversion rigoureuse de maquettes en écrans fluides, 100 % responsifs, accessibles et stylisés de manière moderne avec Tailwind CSS.',
    },
    {
      title: 'Composants Réutilisables avec Stencil',
      text: 'Création de composants web natifs, agnostiques et hautement personnalisés avec Stencil.js pour rationaliser vos architectures frontend.',
    },
    {
      title: 'Développement de Bibliothèques TypeScript',
      text: 'Conception de packages et SDK robustes en TypeScript, développés en étroite collaboration avec les équipes Backend pour simplifier les intégrations.',
    },
  ];
}
