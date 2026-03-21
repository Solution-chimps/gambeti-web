import { Component, output } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr20-obrigacoes',
  imports: [AutoScrollDirective],
  templateUrl: './nr20-obrigacoes.html',
  styleUrl: './nr20-obrigacoes.scss',
})
export class Nr20Obrigacoes {

  public readonly redirectMessage = output<ContactKey>();


}
