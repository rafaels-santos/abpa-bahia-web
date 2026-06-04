import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="animate-fade-in">Como Ajudar</h1>
        <p class="subtitle animate-fade-in">Sua doação salva vidas e mantém o Abrigo São Francisco de Assis</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="donate-intro text-center">
          <h2>Nós precisamos de você!</h2>
          <p class="lead" style="max-width: 800px; margin: 0 auto 3rem;">
            A ABPA Bahia não recebe auxílio financeiro governamental. Nossa força motriz vem exclusivamente da 
            solidariedade de nossos associados e doadores.
          </p>
        </div>

        <div class="donate-grid">
          <!-- PIX Donation (Primary) -->
          <div class="donate-card primary glass-panel">
            <div class="card-badge">Mais Rápido</div>
            <div class="donate-icon">💸</div>
            <h3>Doação via PIX</h3>
            <p>A forma mais rápida e direta de ajudar a comprar ração e remédios hoje.</p>
            
            <div class="pix-box">
              <span class="pix-label">Chave PIX (E-mail)</span>
              <div class="pix-key-container">
                <code class="pix-key">dindodinda&#64;abpabahia.org.br</code>
                <button class="btn-copy" (click)="copyPix()" [class.copied]="copied" title="Copiar PIX">
                  {{ copied ? 'Copiado!' : 'Copiar' }}
                </button>
              </div>
            </div>
          </div>

          <!-- Transfer Donation -->
          <div class="donate-card glass-panel">
            <div class="donate-icon">🏦</div>
            <h3>Transferência Bancária</h3>
            <p>Para doações diretas em nossa conta institucional ou doações internacionais.</p>
            
            <ul class="bank-details">
              <li><strong>Titular:</strong> Associação Brasileira Protetora dos Animais</li>
              <li><strong>CNPJ:</strong> 13.974.795/0001-52</li>
              <li style="margin-top: 10px; font-size: 0.9rem; color: var(--text-muted);">
                <strong>Código IBAN:</strong><br>
                BR31 6074 6948 0066 2000 0043 540C 1
              </li>
            </ul>
          </div>
        </div>

        <!-- Other ways to help -->
        <h3 class="text-center" style="margin: 4rem 0 2rem; font-size: 2rem;">Outras formas de ajudar</h3>
        
        <div class="other-ways-grid">
          <div class="way-card">
            <div class="way-icon">🍖</div>
            <h4>Ração e Insumos</h4>
            <p>Aceitamos doações de ração (cães e gatos), medicamentos veterinários, produtos de limpeza, toalhas e jornais entregues diretamente no abrigo.</p>
          </div>
          
          <div class="way-card">
            <div class="way-icon">🤝</div>
            <h4>Seja Voluntário</h4>
            <p>Doe seu tempo! Precisamos de ajuda para banhos, passeios, limpeza e organização de eventos de adoção. Entre em contato para saber como participar.</p>
          </div>
          
          <div class="way-card">
            <div class="way-icon">📢</div>
            <h4>Divulgação</h4>
            <p>Compartilhar nossas redes sociais e animais disponíveis para adoção não custa nada e tem um impacto gigante na vida deles!</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, var(--accent-hover), var(--accent-color));
      padding: 120px 0 60px;
      text-align: center;
      color: var(--text-light);
    }
    
    .page-header h1 {
      color: var(--text-light);
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
    }
    
    .text-center {
      text-align: center;
    }

    .lead {
      font-size: 1.2rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .donate-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-top: 2rem;
    }

    .donate-card {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      position: relative;
      border-top: 5px solid var(--primary-color);
      transition: transform var(--transition-normal);
    }

    .donate-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .donate-card.primary {
      border-top-color: var(--secondary-color);
      transform: scale(1.02);
    }

    .donate-card.primary:hover {
      transform: scale(1.02) translateY(-5px);
    }

    .card-badge {
      position: absolute;
      top: -15px;
      right: 30px;
      background: var(--secondary-color);
      color: white;
      padding: 5px 15px;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: var(--shadow-sm);
    }

    .donate-icon {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .donate-card h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: var(--primary-dark);
    }

    .donate-card p {
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    /* PIX Box */
    .pix-box {
      background: #F0F4F1;
      padding: 1.5rem;
      border-radius: var(--radius-md);
      border: 1px dashed var(--primary-light);
    }

    .pix-label {
      display: block;
      font-size: 0.9rem;
      color: var(--primary-dark);
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }

    .pix-key-container {
      display: flex;
      align-items: center;
      gap: 10px;
      background: white;
      padding: 0.5rem;
      border-radius: var(--radius-sm);
      border: 1px solid #ddd;
    }

    .pix-key {
      flex: 1;
      font-family: monospace;
      font-size: 1.1rem;
      color: var(--text-main);
      overflow-wrap: anywhere;
    }

    .btn-copy {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition-fast);
    }

    .btn-copy:hover {
      background: var(--primary-dark);
    }

    .btn-copy.copied {
      background: var(--secondary-color);
    }

    .bank-details {
      list-style: none;
      padding: 0;
    }

    .bank-details li {
      padding: 0.8rem 0;
      border-bottom: 1px solid #eee;
    }

    .bank-details li:last-child {
      border-bottom: none;
    }

    /* Other Ways */
    .other-ways-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .way-card {
      text-align: center;
      padding: 2rem;
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
    }

    .way-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .way-card h4 {
      font-size: 1.2rem;
      color: var(--primary-dark);
    }

    .way-card p {
      font-size: 0.95rem;
      color: var(--text-muted);
    }

    @media (max-width: 992px) {
      .donate-grid {
        grid-template-columns: 1fr;
      }
      .donate-card.primary {
        transform: none;
      }
      .donate-card.primary:hover {
        transform: translateY(-5px);
      }
      .other-ways-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class DonateComponent implements OnInit {
  copied = false;
  pixKey = 'dindodinda@abpabahia.org.br';

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  copyPix() {
    navigator.clipboard.writeText(this.pixKey).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2000);
    });
  }
}
