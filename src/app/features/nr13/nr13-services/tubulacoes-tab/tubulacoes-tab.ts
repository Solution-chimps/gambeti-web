import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-tubulacoes-tab',
  imports: [AutoScrollDirective],
  templateUrl: './tubulacoes-tab.html',
  styleUrl: './tubulacoes-tab.scss',
})
export class TubulacoesTab {

  public readonly redirectMessage = output<ContactKey>();


}
