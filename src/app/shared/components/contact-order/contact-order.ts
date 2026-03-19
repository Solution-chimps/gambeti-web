import { Component, DestroyRef, effect, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';

import { CONTACT_MESSAGES, ContactKey } from '../../../core/constants/contact.constants';
import { SERVICES_OPTIONS } from '../../../core/constants/services.constants';
import { ContactDataService } from './contact-data';

@Component({
  selector: 'gb-contact-order',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-order.html',
  styleUrl: './contact-order.scss',
  host: {
    id: 'contato-orcamento'
  }
})
export class ContactOrder implements OnInit {

  public readonly message = input<ContactKey>('CONTATO_GERAL');

  public readonly contactMask = signal('(00) 0000-00009');

  public readonly serviceOptions = signal(SERVICES_OPTIONS);

  public readonly contactDataService = inject(ContactDataService);
  public readonly destroyRef = inject(DestroyRef);

  public readonly messageSignal = signal(this.message());

  constructor() {
    effect(() => {
      this.messageSignal.set(this.message())
    });
  }


  public encode() {
    const message = this.getMessageContent();
    return {
      wa: encodeURIComponent(message.whatsapp),
      email: encodeURIComponent(message.email.replace(/\n/g, '\r\n'))
    }
  }

  public ngOnInit(): void {
    this.contactDataService.listenUpdateData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.messageSignal.set(data)
    })
  }

  public buildEmailLink() {
    return `mailto:comercial@gambeti.com.br?subject=${encodeURIComponent('Solicitação de Orçamento — Gambeti Engenharia')}&body=${this.encode().email}`;
  }

  private getMessageContent() {
    return CONTACT_MESSAGES[this.messageSignal()];
  };

}
