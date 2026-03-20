import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { TabGenericComponent } from '../../../../core/interfaces/tab-generic-components.interface';

@Component({
  selector: 'gb-nr20-tab-plano-emergencia',
  imports: [],
  templateUrl: './nr20-tab-plano-emergencia.html',
  styleUrl: './nr20-tab-plano-emergencia.scss',
})
export class Nr20TabPlanoEmergencia implements TabGenericComponent {

  public readonly redirectMessage = output<ContactKey>();


}
