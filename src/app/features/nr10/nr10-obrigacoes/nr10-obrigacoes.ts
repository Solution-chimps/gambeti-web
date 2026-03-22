import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nr10-obrigacoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nr10-obrigacoes.html',
  styleUrls: ['./nr10-obrigacoes.scss']
})
export class Nr10ObrigacoesComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}
