import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AutoScrollDirective, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  activeSection: string = 'home';

  menuItems = [
    { label: 'HOME', link: 'home' },
    { label: 'SOBRE', link: 'about-gambeti-engenharia' },
    { label: 'SERVIÇOS', link: 'servicos-engenharia-seguranca-trabalho' },
    { label: 'TREINAMENTOS', link: 'treinamentos-nr-seguranca-trabalho' },
    { label: 'FAQ', link: 'perguntas-frequentes' },
    { label: 'ORÇAMENTO', link: 'contato-orcamento', highlight: true, icon: 'fab fa-whatsapp' }
  ];


  constructor() {}

  public ngOnInit() {
    this.checkActiveSectionOnLoad();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.updateActiveSection();
  }

  private checkActiveSectionOnLoad() {
    if (window.location.hash) {
      const section = window.location.hash.replace('#', '');
      this.activeSection = section;
    }
  }

  private updateActiveSection() {
    const sections = this.menuItems.map(item => item.link);

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = 100;


        if (rect.top <= offset && rect.bottom >= offset) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
