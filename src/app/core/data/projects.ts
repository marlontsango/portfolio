// src/app/core/data/projects.ts
import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'dashboard-wenlo',
    title: 'Wenlo Analytics Dashboard',
    subtitle: 'Plateforme de gestion de comptes publicitaires multi-plateformes pour les agences',
    description:
      'Dashboard Angular avec graphiques interactifs, gestion des comptes, authentification et export de rapports.',
    category: 'web',
    cover: 'assets/screenshots/wenlo-cover.png',
    screenshots: [
      'assets/screenshots/Wenlo-Dashboard.png',
      'assets/screenshots/wenlo-dashboard-2.png',
    ],
    technologies: ['Angular', 'TypeScript', 'NgRx', 'Chart.js', 'NestJS'],
    role: 'Développeur Front-End',
    year: 2024,
    featured: true,
    links: [
      { label: 'Démo live', url: 'https://wenlo-ecru.vercel.app/dashboard', icon: 'external' },
      { label: 'GitHub', url: 'https://github.com/marlontsango/Wenlo.git', icon: 'github' },
    ],
    metrics: [
      'Temps de chargement réduit de 38 %',
      'Plus de 1 200 utilisateurs actifs',
      'Score Lighthouse : 96',
    ],
  },
  {
    id: '2',
    slug: 'iSA POS',
    title: 'iSA POS Mobile',
    subtitle:
      'Application de gestion des points de vente et suivie des agents commerciaux sur le terrain',
    description:
      'Application mobile cross-platform avec suivi des transactions, statistiques, notifications et mode hors ligne.',
    category: 'mobile',
    cover: 'assets/screenshots/isa-cover.png',
    screenshots: ['assets/screenshots/Isa_Home.png', 'assets/screenshots/Isa-saleRepRoutine.png'],
    technologies: ['Ionic Angular', 'Capacitor', 'Firebase', 'TypeScript'],
    role: 'Développeur Mobile',
    year: 2026,
    featured: true,
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=org.isnov.isa&pcampaignid=web_share',
        icon: 'play',
      },
      //  { label: 'App Store', url: 'https://apps.apple.com/app/id...', icon: 'apple' },
      {
        label: 'GitHub',
        url: 'https://gitlab.digitalbusinov.com/mobile_dev/ISNOV.MSB.UI.iSA.git',
        icon: 'github',
      },
    ],
    metrics: ['1 000+ téléchargements', 'Note moyenne : 4,7/5', 'Synchronisation hors ligne'],
  },
  {
    id: '3',
    slug: 'isa-libraries',
    title: 'iSA POS Libraries',
    subtitle:
      'Écosystème de gestion de points de vente et suivi des agents commerciaux sur le terrain',
    description:
      'Conception et architecture d’une bibliothèque logicielle robuste en TypeScript pour propulser une application mobile cross-platform. Intègre une gestion de base de données SQL (SQLite) locale hautement performante pour garantir un suivi des transactions fluide, des statistiques avancées et un mode hors ligne total avec synchronisation intelligente.',
    category: 'mobile',
    cover: 'assets/screenshots/Isa-saleRepRoutine.png',
    screenshots: ['assets/screenshots/Isa-saleRepRoutine.png'],
    technologies: ['TypeScript', 'SQLite', 'Ionic Angular', 'Capacitor', 'INOV ERP'],
    role: 'Architecte & Développeur Mobile',
    year: 2026,
    featured: true,
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=org.isnov.isa&pcampaignid=web_share',
        icon: 'play',
      },
      {
        label: 'GitLab',
        url: 'https://gitlab.digitalbusinov.com/mobile_dev/ISNOV.MSB.Model.iSA.git',
        icon: 'gitlab',
      },
    ],
    metrics: [
      'Architecture TypeScript modulaire et typée',
      'Moteur de requêtes SQL & SQLite optimisé',
      '1 000+ téléchargements sur Google Play',
      'Synchronisation hors ligne en temps réel',
    ],
  },
];
