import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-tanques-tab',
  imports: [AutoScrollDirective],
  templateUrl: './tanques-tab.html',
  styleUrl: './tanques-tab.scss',
})
export class TanquesTab {

  public readonly redirectMessage = output<ContactKey>();

}
