import {Component, effect, inject, input, OnInit, signal} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContactDataService } from '../../../../shared/components/contact-order/contact-data';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';
import {CONTACT_MESSAGES, ContactKey} from '../../../../core/constants/contact.constants';

@Component({
  selector: 'gb-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  standalone: true
})
export class FooterComponent  implements OnInit{

  public readonly message = input<ContactKey>('CONTATO_GERAL');
  public readonly messageSignal = signal(this.message());

  constructor() {
    effect(() => {
      this.messageSignal.set(this.message())
    });
  }

  ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

  public readonly contactService = inject(ContactDataService);

  public buildEmailLink() {
    return `mailto:comercial@gambeti.com.br?subject=${encodeURIComponent('Solicitação de Orçamento — Gambeti Engenharia')}&body=${this.encode().email}`;
  }

  public handleOrder(): void {
    this.contactService.dispatchUpdateContactData('CONTATO_GERAL')
  }

  public handleNavigate(link: string): void {
    window.open(link, '__blank')
  }

  public encode() {
    const message = this.getMessageContent();
    return {
      wa: encodeURIComponent(message.whatsapp),
      email: encodeURIComponent(message.email.replace(/\n/g, '\r\n'))
    }
  }

  private getMessageContent() {
    return CONTACT_MESSAGES[this.messageSignal()];
  };
}
