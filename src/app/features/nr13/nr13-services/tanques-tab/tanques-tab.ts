import { Component } from '@angular/core';

import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-tanques-tab',
  imports: [AutoScrollDirective],
  templateUrl: './tanques-tab.html',
  styleUrl: './tanques-tab.scss',
})
export class TanquesTab {

}
