import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nr10-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nr10-services.html',
  styleUrls: ['./nr10-services.scss']
})
export class Nr10ServicesComponent {
  activeTab: string = 'laudo5410';

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }

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
