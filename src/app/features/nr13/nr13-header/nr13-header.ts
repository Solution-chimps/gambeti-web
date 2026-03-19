import { Component, output } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr13-header',
  imports: [AutoScrollDirective],
  templateUrl: './nr13-header.html',
  styleUrl: './nr13-header.scss',
})
export class Nr13Header {

  public readonly redirectMessage = output<ContactKey>()

}
