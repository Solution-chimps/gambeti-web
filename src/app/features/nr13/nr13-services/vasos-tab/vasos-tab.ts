import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-vasos-tab',
  imports: [AutoScrollDirective],
  templateUrl: './vasos-tab.html',
  styleUrl: './vasos-tab.scss',
})
export class VasosTab {

  public readonly redirectMessage = output<ContactKey>();


}
