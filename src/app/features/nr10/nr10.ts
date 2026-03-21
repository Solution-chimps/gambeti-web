import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Nr10HeaderComponent} from './nr10-header/nr10-header';
import {Nr10ProntuarioComponent} from './nr10-prontuario/nr10-prontuario';
import {Nr10PieComponent} from './nr10-PIE/nr10-pie';
import {Nr10ServicesComponent} from './nr10-services/nr10-services';
import {Nr10ProcessoComponent} from './nr10-processo/nr10-processo';
import {Nr10ObrigacoesComponent} from './nr10-obrigacoes/nr10-obrigacoes';
import {Nr10ChecklistComponent} from './nr10-checklist/nr10-checklist';
import {Nr10SobreComponent} from './nr10-sobre/nr10-sobre/nr10-sobre';

// Import all child components


@Component({
  selector: 'app-nr10',
  standalone: true,
  imports: [
    CommonModule,
    Nr10HeaderComponent,
    Nr10ProntuarioComponent,
    Nr10PieComponent,
    Nr10ServicesComponent,
    Nr10ProcessoComponent,
    Nr10ObrigacoesComponent,
    Nr10ChecklistComponent,
    Nr10SobreComponent
  ],
  templateUrl: './nr10.html',
  styleUrls: ['./nr10.scss']
})
export class Nr10Component implements OnInit {
  activeTab: string = 'laudo5410';
  activeFaq: number | null = null;
  isMobileMenuOpen: boolean = false;
  showBackToTop: boolean = false;

  faqItems = [
    {
      question: 'O que é o PIE e quem é obrigado a ter?',
      answer: 'O Prontuário das Instalações Elétricas (PIE) é o conjunto organizado de documentos técnicos que comprova a segurança das instalações elétricas. É obrigatório pela NR-10 (item 10.2.4) para todas as empresas e estabelecimentos com carga instalada superior a 75 kW.'
    },
    {
      question: 'Quais documentos compõem o PIE?',
      answer: 'O PIE deve conter: diagrama unifilar atualizado, especificação dos EPIs e EPCs, procedimentos de trabalho, laudo das instalações elétricas (NBR 5410), laudo do SPDA (NBR 5419), relatório de termografia, laudo de aterramento, documentação de treinamentos NR-10 e ARTs.'
    },
    {
      question: 'Qual a periodicidade do Laudo Elétrico (NBR 5410)?',
      answer: 'Recomenda-se atualizar o laudo a cada 1 a 3 anos, ou imediatamente após qualquer modificação significativa na instalação.'
    },
    {
      question: 'Qual a periodicidade do Laudo SPDA (NBR 5419)?',
      answer: 'A NBR 5419 estabelece inspeção visual anual e inspeção completa a cada 1 ano para níveis I e II, e a cada 3 anos para níveis III e IV.'
    },
    {
      question: 'A termografia é obrigatória?',
      answer: 'A termografia é a ferramenta mais eficaz para detecção precoce de falhas e é exigida por muitas seguradoras como condição para a apólice.'
    },
    {
      question: 'O que acontece se a empresa não tiver o PIE?',
      answer: 'Multas, interdição, responsabilização civil e criminal, além da possibilidade da seguradora negar o pagamento de indenização em caso de sinistro.'
    }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
    this.checkHashOnLoad();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 500;
  }

  private setupIntersectionObserver() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
      }, 0);
    }
  }

  private checkHashOnLoad() {
    if (typeof window !== 'undefined' && window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    if (typeof window === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    this.isMobileMenuOpen = false;
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
