import { Component } from '@angular/core';

import { ContactOrder } from '../../shared/components/contact-order/contact-order';
import { AutoScrollDirective } from '../../shared/directives/auto-scroll/auto-scroll.directive';
import { Nr13Header } from './nr13-header/nr13-header';
import { Nr13Services } from './nr13-services/nr13-services';
import { Nr13StatsGrid } from './nr13-stats-grid/nr13-stats-grid';

@Component({
  selector: 'gb-nr13',
  imports: [ContactOrder, AutoScrollDirective, Nr13Header, Nr13StatsGrid, Nr13Services],
  templateUrl: './nr13.html',
  styleUrl: './nr13.scss',
})
export class Nr13 {

}
