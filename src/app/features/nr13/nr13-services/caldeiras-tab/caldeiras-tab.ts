import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-caldeiras-tab',
  imports: [AutoScrollDirective],
  templateUrl: './caldeiras-tab.html',
  styleUrl: './caldeiras-tab.scss',
})
export class CaldeirasTab {

  public readonly redirectMessage = output<ContactKey>()
}
