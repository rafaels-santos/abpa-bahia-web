import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'sobre', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: 'adocao', 
    loadComponent: () => import('./pages/adoption/adoption.component').then(m => m.AdoptionComponent) 
  },
  { 
    path: 'doacoes', 
    loadComponent: () => import('./pages/donate/donate.component').then(m => m.DonateComponent) 
  },
  { 
    path: 'contato', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) 
  },
  { path: '**', redirectTo: '' }
];
