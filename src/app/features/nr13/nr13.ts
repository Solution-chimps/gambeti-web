import { Component, signal } from '@angular/core';

import { ContactKey } from '../../core/constants/contact.constants';
import { STATS_NR13 } from '../../core/constants/stats-nr13.constants';
import { ContactOrder } from '../../shared/components/contact-order/contact-order';
import { Stats } from '../../shared/components/stats/stats';
import { Nr13Faq } from './nr13-faq/nr13-faq';
import { Nr13Header } from './nr13-header/nr13-header';
import { Nr13Processo } from './nr13-processo/nr13-processo';
import { Nr13Prontuario } from './nr13-prontuario/nr13-prontuario';
import { Nr13Services } from './nr13-services/nr13-services';
import { Nr13Soldagem } from './nr13-soldagem/nr13-soldagem';

@Component({
  selector: 'gb-nr13',
  imports: [ContactOrder, Nr13Header, Stats, Nr13Services, Nr13Processo, Nr13Soldagem, Nr13Prontuario, Nr13Faq],
  templateUrl: './nr13.html',
  styleUrl: './nr13.scss',
})
export class Nr13 {

  public readonly redirectMessage = signal<ContactKey>('CONTATO_GERAL');

  public readonly statsItems = STATS_NR13;

  public updateContact(event: ContactKey) {
    this.redirectMessage.set(event);
  }
}
