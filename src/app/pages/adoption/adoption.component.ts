import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pet {
  id: number;
  name: string;
  type: 'Cão' | 'Gato';
  gender: 'Macho' | 'Fêmea';
  age: string;
  size: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <div class="container">
        <h1 class="animate-fade-in">Adoção Responsável</h1>
        <p class="subtitle animate-fade-in">Encontre seu novo melhor amigo e mude uma vida para sempre</p>
      </div>
    </div>

    <section class="section bg-light">
      <div class="container">
        <!-- Adoption Process -->
        <div class="process-wrapper glass-panel">
          <h2 class="text-center" style="margin-bottom: 2rem;">Como funciona a adoção?</h2>
          <div class="process-steps">
            <div class="step">
              <div class="step-number">1</div>
              <h3>Escolha</h3>
              <p>Conheça os animais disponíveis no site ou visite o abrigo.</p>
            </div>
            <div class="step-line"></div>
            <div class="step">
              <div class="step-number">2</div>
              <h3>Entrevista</h3>
              <p>Preencha o formulário e passe por uma breve entrevista com nossa equipe.</p>
            </div>
            <div class="step-line"></div>
            <div class="step">
              <div class="step-number">3</div>
              <h3>Adoção</h3>
              <p>Assine o termo de responsabilidade e leve muito amor para casa!</p>
            </div>
          </div>
        </div>

        <!-- Filters (Visual only for mockup) -->
        <div class="filters-container">
          <button class="filter-btn active">Todos</button>
          <button class="filter-btn">Cães</button>
          <button class="filter-btn">Gatos</button>
        </div>

        <!-- Pets Grid -->
        <div class="adoption-grid">
          <div *ngFor="let pet of pets" class="pet-card">
            <div class="pet-image">
              <img [src]="pet.imageUrl" [alt]="pet.name">
              <span class="pet-badge" [class.cat]="pet.type === 'Gato'">{{ pet.type }}</span>
            </div>
            <div class="pet-info">
              <h3>{{ pet.name }}</h3>
              <p class="pet-desc">{{ pet.gender }}, {{ pet.age }}, Porte {{ pet.size }}</p>
              <p class="pet-bio">{{ pet.description }}</p>
              <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" (click)="openForm(pet)">
                Quero Adotar
              </button>
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
    
    .bg-light {
      background-color: #F0F4F1;
    }

    .process-wrapper {
      background: white;
      padding: 3rem;
      border-radius: var(--radius-lg);
      margin-bottom: 4rem;
      margin-top: -80px;
      position: relative;
      z-index: 10;
    }

    .process-steps {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      text-align: center;
    }

    .step {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .step-number {
      width: 60px;
      height: 60px;
      background: var(--secondary-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 800;
      font-family: var(--font-heading);
      margin-bottom: 1rem;
      box-shadow: 0 4px 10px rgba(255, 143, 0, 0.3);
    }

    .step h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    .step p {
      color: var(--text-muted);
      font-size: 0.95rem;
      max-width: 250px;
    }

    .step-line {
      flex: 1;
      height: 2px;
      background: var(--secondary-color);
      opacity: 0.3;
      margin-top: 30px;
    }

    .filters-container {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .filter-btn {
      padding: 0.5rem 1.5rem;
      border-radius: var(--radius-full);
      border: 2px solid var(--primary-color);
      background: transparent;
      color: var(--primary-color);
      font-weight: 600;
      transition: all var(--transition-fast);
    }

    .filter-btn:hover, .filter-btn.active {
      background: var(--primary-color);
      color: white;
    }

    /* Adoption Grid (reused styles) */
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
      background: var(--primary-light);
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
    }

    @media (max-width: 768px) {
      .process-steps {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
      .step-line {
        display: none;
      }
    }
  `]
})
export class AdoptionComponent implements OnInit {
  pets: Pet[] = [
    {
      id: 1,
      name: 'Caramelo',
      type: 'Cão',
      gender: 'Macho',
      age: 'Jovem',
      size: 'Médio',
      description: 'Muito brincalhão e dócil. Adora correr e brincar com bolinhas. Perfeito para famílias com crianças.',
      imageUrl: '/assets/images/dog1.png'
    },
    {
      id: 2,
      name: 'Mia',
      type: 'Gato',
      gender: 'Fêmea',
      age: 'Adulta',
      size: 'Pequeno',
      description: 'Calma e carinhosa. Procura um lar tranquilo para dormir no sofá e receber cafuné o dia todo.',
      imageUrl: '/assets/images/cat1.png'
    },
    {
      id: 3,
      name: 'Thor',
      type: 'Cão',
      gender: 'Macho',
      age: 'Adulto',
      size: 'Grande',
      description: 'Protetor e leal. Excelente companhia para famílias com quintal espaçoso.',
      imageUrl: '/assets/images/dog1.png'
    },
    {
      id: 4,
      name: 'Luna',
      type: 'Gato',
      gender: 'Fêmea',
      age: 'Filhote',
      size: 'Pequeno',
      description: 'Cheia de energia, curiosa e muito sapeca. Pronta para alegrar qualquer ambiente.',
      imageUrl: '/assets/images/cat1.png'
    },
    {
      id: 5,
      name: 'Bidu',
      type: 'Cão',
      gender: 'Macho',
      age: 'Idoso',
      size: 'Pequeno',
      description: 'Um senhorzinho muito tranquilo. Só quer uma caminha macia e um pouco de paz.',
      imageUrl: '/assets/images/dog1.png'
    },
    {
      id: 6,
      name: 'Nina',
      type: 'Cão',
      gender: 'Fêmea',
      age: 'Jovem',
      size: 'Médio',
      description: 'Tímida no início, mas extremamente amorosa quando ganha confiança.',
      imageUrl: '/assets/images/dog1.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  openForm(pet: Pet) {
    alert(`Obrigado pelo interesse no ${pet.name}! Em um sistema real, isso abriria um formulário de adoção ou redirecionaria para o WhatsApp.`);
  }
}
