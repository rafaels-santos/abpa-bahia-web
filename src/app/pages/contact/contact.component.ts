import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="animate-fade-in">Fale Conosco</h1>
        <p class="subtitle animate-fade-in">Estamos aqui para responder suas dúvidas sobre adoção, doações ou voluntariado.</p>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info">
            <h2>Informações de Contato</h2>
            <p style="margin-bottom: 2rem; color: var(--text-muted);">
              Sinta-se à vontade para nos visitar ou entrar em contato através dos canais abaixo.
            </p>
            
            <div class="info-card glass-panel">
              <div class="info-icon">📍</div>
              <div class="info-text">
                <h3>Endereço</h3>
                <p>Rua Marques de Olinda, 160</p>
                <p>Paripe, Salvador - BA</p>
              </div>
            </div>
            
            <div class="info-card glass-panel">
              <div class="info-icon">📞</div>
              <div class="info-text">
                <h3>Telefone</h3>
                <p>(71) 3346-6321</p>
              </div>
            </div>
            
            <div class="info-card glass-panel">
              <div class="info-icon">✉️</div>
              <div class="info-text">
                <h3>E-mail</h3>
                <p>contato&#64;abpabahia.org.br</p>
              </div>
            </div>

            <div class="social-contact">
              <h3>Redes Sociais</h3>
              <div class="social-links">
                <a href="https://www.instagram.com/abpabahia/" target="_blank" class="social-btn instagram">Instagram</a>
                <a href="https://www.facebook.com/ABPA.ba/" target="_blank" class="social-btn facebook">Facebook</a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container glass-panel">
            <h2>Envie uma Mensagem</h2>
            <form class="contact-form" (submit)="onSubmit($event)">
              <div class="form-group">
                <label for="name">Nome Completo</label>
                <input type="text" id="name" name="name" required placeholder="Seu nome">
              </div>
              
              <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" required placeholder="seu@email.com">
              </div>
              
              <div class="form-group">
                <label for="subject">Assunto</label>
                <select id="subject" name="subject" required>
                  <option value="" disabled selected>Selecione um assunto</option>
                  <option value="adoption">Dúvida sobre Adoção</option>
                  <option value="donation">Doações</option>
                  <option value="volunteer">Voluntariado</option>
                  <option value="other">Outros</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mensagem</label>
                <textarea id="message" name="message" rows="5" required placeholder="Como podemos ajudar?"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%;">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <!-- Simulated map for the mockup -->
      <div class="map-placeholder">
        <div class="map-content">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
          <h3>Abrigo São Francisco de Assis</h3>
          <p>Rua Marques de Olinda, 160, Paripe, Salvador - BA</p>
          <button class="btn btn-primary" style="margin-top: 1rem;">Abrir no Google Maps</button>
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
    }

    .contact-info h2, .contact-form-container h2 {
      font-size: 2rem;
      color: var(--primary-dark);
      margin-bottom: 1rem;
    }

    .info-card {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      padding: 1.5rem;
      background: white;
      border-radius: var(--radius-md);
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow-sm);
      border-left: 4px solid var(--secondary-color);
      transition: transform var(--transition-fast);
    }

    .info-card:hover {
      transform: translateX(5px);
    }

    .info-icon {
      font-size: 2rem;
    }

    .info-text h3 {
      font-size: 1.1rem;
      margin-bottom: 0.2rem;
      color: var(--primary-color);
    }

    .info-text p {
      color: var(--text-main);
      margin: 0;
      line-height: 1.4;
    }

    .social-contact {
      margin-top: 3rem;
    }

    .social-contact h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-btn {
      padding: 0.8rem 1.5rem;
      border-radius: var(--radius-full);
      color: white;
      font-weight: 600;
      text-decoration: none;
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    .social-btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .instagram {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    }

    .facebook {
      background: #1877F2;
    }

    /* Form Styles */
    .contact-form-container {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: var(--primary-dark);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: var(--radius-md);
      font-family: var(--font-body);
      font-size: 1rem;
      background: #fafafa;
      transition: all var(--transition-fast);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
      background: white;
    }

    /* Map */
    .map-section {
      height: 400px;
      width: 100%;
      background: #e0e0e0;
      position: relative;
    }

    .map-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px);
      background-size: 20px 20px;
      background-color: #f5f5f5;
    }

    .map-content {
      text-align: center;
      background: rgba(255, 255, 255, 0.9);
      padding: 2rem;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }

    @media (max-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
      .contact-form-container {
        padding: 2rem;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
    (event.target as HTMLFormElement).reset();
  }
}
