import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled">
      <div class="container nav-container">
        <a routerLink="/" class="logo">
          <div class="logo-icon">🐾</div>
          <div class="logo-text">
            <span class="logo-title">ABPA</span>
            <span class="logo-subtitle">Bahia</span>
          </div>
        </a>
        
        <nav class="desktop-nav">
          <ul class="nav-links">
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Início</a></li>
            <li><a routerLink="/sobre" routerLinkActive="active">Quem Somos</a></li>
            <li><a routerLink="/adocao" routerLinkActive="active">Adoção</a></li>
            <li><a routerLink="/contato" routerLinkActive="active">Contato</a></li>
          </ul>
          <a routerLink="/doacoes" class="btn btn-accent nav-btn">Doe Agora ❤️</a>
        </nav>

        <button class="mobile-toggle" (click)="toggleMenu()" [class.active]="isMenuOpen" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-nav" [class.open]="isMenuOpen">
        <ul class="mobile-links">
          <li><a routerLink="/" (click)="closeMenu()">Início</a></li>
          <li><a routerLink="/sobre" (click)="closeMenu()">Quem Somos</a></li>
          <li><a routerLink="/adocao" (click)="closeMenu()">Adoção</a></li>
          <li><a routerLink="/doacoes" (click)="closeMenu()" class="mobile-donate">Doe Agora ❤️</a></li>
          <li><a routerLink="/contato" (click)="closeMenu()">Contato</a></li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: transparent;
      padding: 1.5rem 0;
      z-index: 1000;
      transition: all var(--transition-normal);
    }
    
    .navbar.scrolled {
      background: var(--glass-bg);
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
      box-shadow: var(--shadow-sm);
      padding: 1rem 0;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .logo-icon {
      font-size: 2.5rem;
      color: var(--primary-color);
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1;
    }
    
    .logo-title {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.5rem;
      color: var(--primary-dark);
    }
    
    .logo-subtitle {
      font-family: var(--font-body);
      font-size: 0.9rem;
      color: var(--secondary-color);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .desktop-nav {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    .nav-links {
      display: flex;
      list-style: none;
      gap: 1.5rem;
    }
    
    .nav-links a {
      font-weight: 600;
      color: var(--text-main);
      position: relative;
      padding: 0.5rem 0;
    }
    
    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: var(--secondary-color);
      border-radius: 2px;
      transition: width var(--transition-normal);
    }
    
    .nav-links a:hover::after, .nav-links a.active::after {
      width: 100%;
    }
    
    .nav-links a.active {
      color: var(--primary-color);
    }
    
    /* Mobile Toggle */
    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 1001;
    }
    
    .mobile-toggle span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--primary-dark);
      border-radius: 3px;
      transition: all 0.3s ease;
    }
    
    .mobile-toggle.active span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    
    .mobile-toggle.active span:nth-child(2) {
      opacity: 0;
    }
    
    .mobile-toggle.active span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }
    
    /* Mobile Nav */
    .mobile-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: var(--bg-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateY(-100%);
      transition: transform 0.4s cubic-bezier(0.77, 0, 0.175, 1);
      z-index: 999;
    }
    
    .mobile-nav.open {
      transform: translateY(0);
    }
    
    .mobile-links {
      list-style: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    
    .mobile-links a {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-dark);
    }
    
    .mobile-donate {
      color: var(--accent-color) !important;
    }
    
    @media (max-width: 768px) {
      .desktop-nav {
        display: none;
      }
      .mobile-toggle {
        display: flex;
      }
      .navbar {
        padding: 1rem 0;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto';
  }
}
