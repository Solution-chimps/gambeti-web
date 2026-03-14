import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  activeSection: string = 'home';

  menuItems = [
    { label: 'HOME', link: 'home' },
    { label: 'SOBRE', link: 'about' },
    { label: 'SERVIÇOS', link: 'services' },
    { label: 'TREINAMENTOS', link: 'training' },
    { label: 'FAQ', link: 'faq' },
    { label: 'ORÇAMENTO', link: 'budget', highlight: true }
  ];

  constructor() {}

  ngOnInit() {
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });


      history.pushState(null, '', `#${sectionId}`);

      this.activeSection = sectionId;
    }

    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
