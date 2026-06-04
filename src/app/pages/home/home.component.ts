import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-text animate-fade-in">
          <h1>Amor e Proteção para quem mais precisa</h1>
          <p>
            Desde 1939, a ABPA Bahia transforma a vida de milhares de animais em situação de rua em Salvador. 
            Conheça nosso trabalho e ajude a escrever novos finais felizes.
          </p>
          <div class="hero-buttons">
            <a routerLink="/adocao" class="btn btn-primary">Quero Adotar</a>
            <a routerLink="/doacoes" class="btn btn-accent">Fazer uma Doação</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Counters Section -->
    <section class="impact-section section">
      <div class="container">
        <div class="counters-grid">
          <div class="counter-card glass-panel">
            <div class="counter-icon">🏥</div>
            <div class="counter-number">1939</div>
            <div class="counter-label">Ano de Fundação</div>
            <p>Pioneirismo na Bahia</p>
          </div>
          
          <div class="counter-card glass-panel">
            <div class="counter-icon">🐕</div>
            <div class="counter-number">~400</div>
            <div class="counter-label">Animais Abrigados</div>
            <p>Aguardando um lar no Abrigo São Francisco</p>
          </div>
          
          <div class="counter-card glass-panel">
            <div class="counter-icon">❤️</div>
            <div class="counter-number">100%</div>
            <div class="counter-label">Amor e Dedicação</div>
            <p>Mantidos exclusivamente por doações</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Snippet Section -->
    <section class="about-snippet section bg-light">
      <div class="container">
        <div class="about-grid">
          <div class="about-image glass-panel">
            <img src="/assets/images/dog1.png" alt="Cachorro resgatado no abrigo" class="img-fluid rounded">
          </div>
          <div class="about-text">
            <h2 class="section-title" style="text-align: left;">
              Nossa Missão é Salvar Vidas
            </h2>
            <p>
              O Abrigo São Francisco de Assis acolhe centenas de cães e gatos vítimas de abandono e maus-tratos nas ruas de Salvador.
            </p>
            <p>
              Nosso objetivo central é promover condições dignas de vida, oferecendo assistência veterinária, alimentação, medicamentos, vacinação, e, principalmente, <strong>reabilitar e encontrar lares responsáveis por meio de campanhas de adoção</strong>.
            </p>
            <a routerLink="/sobre" class="btn btn-outline" style="margin-top: 1.5rem;">Conheça Nossa História</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Adoption Carousel -->
    <section class="adoption-snippet section">
      <div class="container">
        <div class="section-title">
          <h2>Prontos para Adoção</h2>
          <p>Eles já estão vacinados, castrados e cheios de amor para dar. Dê uma chance!</p>
        </div>
        
        <div class="adoption-grid">
          <!-- Pet Card 1 -->
          <div class="pet-card">
            <div class="pet-image">
              <img src="/assets/images/dog1.png" alt="Cachorro Caramelo">
              <span class="pet-badge">Cão</span>
            </div>
            <div class="pet-info">
              <h3>Caramelo</h3>
              <p class="pet-desc">Macho, Jovem, Porte Médio</p>
              <p class="pet-bio">Muito brincalhão e dócil. Adora correr e brincar com bolinhas.</p>
              <a routerLink="/adocao" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Conhecer</a>
            </div>
          </div>

          <!-- Pet Card 2 -->
          <div class="pet-card">
            <div class="pet-image">
              <img src="/assets/images/cat1.png" alt="Gato Frajola">
              <span class="pet-badge cat">Gato</span>
            </div>
            <div class="pet-info">
              <h3>Mia</h3>
              <p class="pet-desc">Fêmea, Adulta, Porte Pequeno</p>
              <p class="pet-bio">Calma e carinhosa. Procura um lar tranquilo para dormir no sofá.</p>
              <a routerLink="/adocao" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Conhecer</a>
            </div>
          </div>
          
          <!-- Pet Card 3 (Placeholder for illustration) -->
          <div class="pet-card">
            <div class="pet-image" style="background-color: var(--primary-light); display: flex; align-items: center; justify-content: center; height: 250px;">
              <span style="font-size: 4rem;">🐕</span>
              <span class="pet-badge">Cão</span>
            </div>
            <div class="pet-info">
              <h3>Thor</h3>
              <p class="pet-desc">Macho, Adulto, Porte Grande</p>
              <p class="pet-bio">Protetor e leal. Excelente companhia para famílias com quintal.</p>
              <a routerLink="/adocao" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">Conhecer</a>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
          <a routerLink="/adocao" class="btn btn-outline">Ver Todos os Animais</a>
        </div>
      </div>
    </section>

    <!-- Donation CTA Section -->
    <section class="cta-donate section">
      <div class="container">
        <div class="cta-box glass-panel">
          <div class="cta-content">
            <h2>Não pode adotar? Você ainda pode ajudar!</h2>
            <p>
              Não recebemos ajuda governamental. O Abrigo São Francisco de Assis se mantém <strong>exclusivamente</strong> através de doações de pessoas como você.
            </p>
            <div class="pix-highlight">
              <span>PIX:</span> <strong>dindodinda&#64;abpabahia.org.br</strong>
            </div>
            <a routerLink="/doacoes" class="btn btn-accent btn-lg">Descubra outras formas de doar</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      background-image: url('/assets/images/hero.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed; /* Parallax effect */
      margin-top: -80px; /* Offset navbar height */
      padding-top: 80px;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, rgba(27, 42, 30, 0.9) 0%, rgba(27, 42, 30, 0.4) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 10;
    }

    .hero-text {
      max-width: 650px;
      color: var(--text-light);
    }

    .hero-text h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;
      color: var(--text-light);
      text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    }

    .hero-text p {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      line-height: 1.6;
      opacity: 0.9;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn-lg {
      padding: 1rem 2rem;
      font-size: 1.1rem;
    }

    /* Counters Section */
    .impact-section {
      background-color: var(--bg-color);
      margin-top: -60px;
      position: relative;
      z-index: 20;
      padding-top: 0;
    }

    .counters-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .counter-card {
      padding: 2.5rem 1.5rem;
      text-align: center;
      background: #ffffff;
      transition: transform var(--transition-normal);
    }

    .counter-card:hover {
      transform: translateY(-10px);
    }

    .counter-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .counter-number {
      font-family: var(--font-heading);
      font-size: 3rem;
      font-weight: 800;
      color: var(--primary-color);
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .counter-label {
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--secondary-color);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .counter-card p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    /* About Snippet */
    .bg-light {
      background-color: #F0F4F1;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .about-image {
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-xl);
    }
    
    .about-image img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.5s ease;
    }
    
    .about-image:hover img {
      transform: scale(1.05);
    }

    .about-text p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }

    /* Adoption Section */
    .adoption-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 2.5rem;
    }

    .pet-card {
      background: #ffffff;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      border: 1px solid rgba(0,0,0,0.05);
    }

    .pet-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .pet-image {
      position: relative;
      height: 250px;
      overflow: hidden;
    }

    .pet-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .pet-card:hover .pet-image img {
      transform: scale(1.08);
    }

    .pet-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: var(--primary-color);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    .pet-badge.cat {
      background: var(--secondary-color);
    }

    .pet-info {
      padding: 1.5rem;
    }

    .pet-info h3 {
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
      color: var(--primary-dark);
    }

    .pet-desc {
      color: var(--secondary-color);
      font-weight: 600;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .pet-bio {
      color: var(--text-muted);
      font-size: 0.95rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Donate CTA */
    .cta-donate {
      background-image: url('/assets/images/dog1.png');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      position: relative;
    }
    
    .cta-donate::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(27, 42, 30, 0.85);
    }

    .cta-box {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding: 4rem;
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .cta-content h2 {
      color: var(--text-light);
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    .cta-content p {
      color: rgba(255,255,255,0.9);
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }

    .pix-highlight {
      display: inline-block;
      background: var(--glass-bg);
      padding: 1rem 2rem;
      border-radius: var(--radius-full);
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: var(--primary-dark);
    }

    .pix-highlight span {
      color: var(--secondary-color);
      font-weight: 700;
    }

    .pix-highlight strong {
      font-family: monospace;
    }

    /* Responsive */
    @media (max-width: 992px) {
      .hero-text h1 {
        font-size: 2.8rem;
      }
      .about-grid {
        grid-template-columns: 1fr;
      }
      .counters-grid {
        grid-template-columns: 1fr;
      }
      .impact-section {
        margin-top: 2rem;
        padding-top: 2rem;
      }
    }

    @media (max-width: 768px) {
      .hero-text h1 {
        font-size: 2.2rem;
      }
      .hero-buttons {
        flex-direction: column;
      }
      .btn {
        width: 100%;
      }
      .cta-box {
        padding: 2rem 1.5rem;
      }
      .cta-content h2 {
        font-size: 2rem;
      }
      .pix-highlight {
        font-size: 1rem;
        padding: 0.8rem 1.2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
