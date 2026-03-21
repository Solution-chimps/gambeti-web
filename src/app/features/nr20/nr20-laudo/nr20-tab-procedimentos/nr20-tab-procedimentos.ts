import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { TabGenericComponent } from '../../../../core/interfaces/tab-generic-components.interface';
import { AutoScrollDirective } from '../../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-nr20-tab-procedimentos',
  imports: [AutoScrollDirective],
  templateUrl: './nr20-tab-procedimentos.html',
  styleUrl: './nr20-tab-procedimentos.scss',
})
export class Nr20TabProcedimentos implements TabGenericComponent {

  public readonly redirectMessage = output<ContactKey>();


}
