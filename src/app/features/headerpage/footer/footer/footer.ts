import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContactDataService } from '../../../../shared/components/contact-order/contact-data';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-footer',
  imports: [AutoScrollDirective, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {


  public readonly contactService = inject(ContactDataService);


  public handleOrder(): void {
    this.contactService.dispatchUpdateContactData('CONTATO_GERAL')
  }
}
