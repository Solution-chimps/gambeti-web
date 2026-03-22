import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SERVICES_LIST } from './constants/services.constants';
import { SERVICES_CONTENT } from './constants/services-content.constants';

@Component({
  selector: 'app-nr10-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nr10-services.html',
  styleUrls: ['./nr10-services.scss']
})
export class Nr10ServicesComponent {
  // Importa a lista de serviços das constants
  servicesList = SERVICES_LIST;

  // Serviço atualmente selecionado
  selectedService: string = 'laudo-eletrico';

  constructor() {}

  selectService(serviceId: string): void {
    this.selectedService = serviceId;
  }

  getCurrentContent() {
    return SERVICES_CONTENT[this.selectedService];
  }
}
