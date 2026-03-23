import { Component } from '@angular/core';

import { GESTAO_SST_STATS } from '../../core/constants/stats-gestao-sst.constants';
import { ContactOrder } from '../../shared/components/contact-order/contact-order';
import { Stats } from '../../shared/components/stats/stats';
import { GestaoSstEsocial } from './gestao-sst-esocial/gestao-sst-esocial';
import { GestaoSstFaq } from './gestao-sst-faq/gestao-sst-faq';
import { GestaoSstHeader } from './gestao-sst-header/gestao-sst-header';
import { GestaoSstNr16 } from './gestao-sst-nr-16/gestao-sst-nr-16';
import { GestaoSstObrigatoriedade } from './gestao-sst-obrigatoriedade/gestao-sst-obrigatoriedade';
import { GestaoSstProcesso } from './gestao-sst-processo/gestao-sst-processo';

@Component({
  selector: 'gb-gestao-sst',
  imports: [GestaoSstHeader, GestaoSstObrigatoriedade, GestaoSstNr16, GestaoSstEsocial, GestaoSstProcesso, GestaoSstFaq, Stats, ContactOrder],
  templateUrl: './gestao-sst.html',
  styleUrl: './gestao-sst.scss',
})
export class GestaoSst {

  public readonly stats = GESTAO_SST_STATS;

}
