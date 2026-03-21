import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { TabGenericComponent } from '../../../../core/interfaces/tab-generic-components.interface';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr20-tab-inventario',
  imports: [AutoScrollDirective],
  templateUrl: './nr20-tab-inventario.html',
  styleUrl: './nr20-tab-inventario.scss',
})
export class Nr20TabInventario implements TabGenericComponent {

  public readonly redirectMessage = output<ContactKey>();


}
