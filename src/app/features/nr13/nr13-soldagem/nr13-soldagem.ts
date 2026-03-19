import { Component, output } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr13-soldagem',
  imports: [AutoScrollDirective],
  templateUrl: './nr13-soldagem.html',
  styleUrl: './nr13-soldagem.scss',
})
export class Nr13Soldagem {

  public readonly redirectMessage = output<ContactKey>();


}
