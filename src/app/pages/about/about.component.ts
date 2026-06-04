import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="animate-fade-in">Quem Somos</h1>
        <p class="subtitle animate-fade-in">Nossa história de dedicação aos animais da Bahia</p>
      </div>
    </div>

    <!-- History Section -->
    <section class="section">
      <div class="container">
        <div class="history-grid">
          <div class="history-text">
            <h2>Pioneirismo na Proteção Animal</h2>
            <p class="lead">
              A Associação Brasileira Protetora dos Animais – Seção Bahia (ABPA-BA) é uma organização sem fins lucrativos, 
              fundada em <strong>1939</strong>, sendo uma das pioneiras na causa animal no estado da Bahia.
            </p>
            <p>
              Em mais de 80 anos de história, resgatamos, tratamos e reabilitamos milhares de cães e gatos que sofreram 
              abuso, abandono ou negligência nas ruas de Salvador. Todo o nosso trabalho é voltado para garantir que esses 
              seres recebam o amor, o cuidado e o respeito que merecem.
            </p>
            <p>
              Não recebemos nenhum tipo de auxílio financeiro governamental. Nossa força motriz vem exclusivamente da 
              solidariedade de nossos associados, voluntários e simpatizantes da causa animal.
            </p>
          </div>
          <div class="history-image">
            <div class="image-wrapper glass-panel">
              <img src="/assets/images/hero.png" alt="Animais no Abrigo São Francisco" class="img-fluid rounded">
              <div class="foundation-badge">
                <span>Desde</span>
                <strong>1939</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shelter Section -->
    <section class="section bg-light">
      <div class="container">
        <div class="section-title">
          <h2>O Abrigo São Francisco de Assis</h2>
          <p>Nosso santuário e lar temporário para centenas de animais</p>
        </div>
        
        <div class="shelter-info">
          <p class="text-center" style="max-width: 800px; margin: 0 auto 3rem; font-size: 1.1rem;">
            A ABPA-BA é mantenedora do <strong>Abrigo São Francisco de Assis</strong>, que acolhe atualmente cerca de 400 cães e gatos.
            Aqui, os animais encontram segurança, alimentação e, mais importante, a esperança de uma nova família.
          </p>
          
          <div class="features-grid">
            <div class="feature-card glass-panel">
              <div class="feature-icon">🩺</div>
              <h3>Cuidado Veterinário</h3>
              <p>Todos os animais resgatados passam por atendimento veterinário regular, tanto no local quanto em clínicas parceiras, para tratamento de traumas físicos e doenças.</p>
            </div>
            
            <div class="feature-card glass-panel">
              <div class="feature-icon">💉</div>
              <h3>Saúde Preventiva</h3>
              <p>Garantimos que 100% dos nossos abrigados sejam alimentados com ração de qualidade, recebam todas as vacinas necessárias e vermífugos periódicos.</p>
            </div>
            
            <div class="feature-card glass-panel">
              <div class="feature-icon">✂️</div>
              <h3>Castração</h3>
              <p>Para combater a superpopulação e o abandono futuro, todos os nossos animais, sejam cães ou gatos, são castrados antes de estarem disponíveis para adoção.</p>
            </div>
            
            <div class="feature-card glass-panel">
              <div class="feature-icon">🏡</div>
              <h3>Adoção Responsável</h3>
              <p>Promovemos campanhas regulares para encontrar lares onde eles serão membros da família, acompanhando o processo para garantir uma adaptação feliz.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
      padding: 120px 0 60px;
      text-align: center;
      color: var(--text-light);
    }
    
    .page-header h1 {
      color: var(--text-light);
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
    }
    
    .page-header .subtitle {
      font-size: 1.2rem;
      opacity: 0.9;
    }
    
    .history-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    .history-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: var(--primary-dark);
    }
    
    .history-text p {
      font-size: 1.1rem;
      margin-bottom: 1.2rem;
      line-height: 1.7;
    }
    
    .history-text .lead {
      font-size: 1.3rem;
      color: var(--secondary-color);
      font-weight: 600;
      margin-bottom: 2rem;
    }
    
    .image-wrapper {
      position: relative;
      padding: 1rem;
      background: white;
    }
    
    .image-wrapper img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: var(--radius-md);
    }
    
    .foundation-badge {
      position: absolute;
      bottom: -20px;
      left: -20px;
      background: var(--accent-color);
      color: white;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-lg);
      border: 4px solid white;
    }
    
    .foundation-badge span {
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: 600;
      opacity: 0.9;
    }
    
    .foundation-badge strong {
      font-size: 2rem;
      font-family: var(--font-heading);
      line-height: 1;
    }
    
    .bg-light {
      background-color: #F0F4F1;
    }
    
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }
    
    .feature-card {
      padding: 2rem;
      background: white;
      text-align: center;
      transition: transform var(--transition-normal);
      border-top: 4px solid var(--secondary-color);
    }
    
    .feature-card:hover {
      transform: translateY(-10px);
    }
    
    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    .feature-card h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    
    .feature-card p {
      color: var(--text-muted);
      font-size: 0.95rem;
    }
    
    @media (max-width: 992px) {
      .history-grid {
        grid-template-columns: 1fr;
      }
      .foundation-badge {
        left: 20px;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
