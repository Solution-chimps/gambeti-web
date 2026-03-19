import { Component, output } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr13-prontuario',
  imports: [AutoScrollDirective],
  templateUrl: './nr13-prontuario.html',
  styleUrl: './nr13-prontuario.scss',
})
export class Nr13Prontuario {

  public readonly redirectMessage = output<ContactKey>()

}
