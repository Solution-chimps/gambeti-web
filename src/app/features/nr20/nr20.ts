import { Component, signal } from '@angular/core';

import { ContactKey } from '../../core/constants/contact.constants';
import { STATS_NR20 } from '../../core/constants/stats-nr-20.constants';
import { ContactOrder } from '../../shared/components/contact-order/contact-order';
import { Stats } from '../../shared/components/stats/stats';
import { Nr20Classification } from './nr20-classification/nr20-classification';
import { Nr20Faq } from './nr20-faq/nr20-faq';
import { Nr20Header } from './nr20-header/nr20-header';
import { Nr20Laudo } from './nr20-laudo/nr20-laudo';
import { Nr20Obrigacoes } from './nr20-obrigacoes/nr20-obrigacoes';
import { Nr20Prontuario } from './nr20-prontuario/nr20-prontuario';
import { Nr20Sobre } from './nr20-sobre/nr20-sobre';
import { Nr20Treinamentos } from './nr20-treinamentos/nr20-treinamentos';

@Component({
  selector: 'gb-nr20',
  imports: [Nr20Header, Stats, Nr20Sobre, Nr20Classification, Nr20Prontuario, Nr20Laudo, Nr20Treinamentos, Nr20Obrigacoes
    , ContactOrder, Nr20Faq],
  templateUrl: './nr20.html',
  styleUrl: './nr20.scss',
})
export class Nr20 {

  public readonly stats = STATS_NR20;

  public readonly redirectMessage = signal<ContactKey>('CONTATO_GERAL');


}
