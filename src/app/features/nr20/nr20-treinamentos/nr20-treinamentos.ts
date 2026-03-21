import { Component, output } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr20-treinamentos',
  imports: [AutoScrollDirective],
  templateUrl: './nr20-treinamentos.html',
  styleUrl: './nr20-treinamentos.scss',
})
export class Nr20Treinamentos {

  public readonly redirectMessage = output<ContactKey>();


}
