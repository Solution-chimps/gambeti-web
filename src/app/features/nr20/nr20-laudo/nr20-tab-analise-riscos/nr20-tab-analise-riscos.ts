import { Component, output } from '@angular/core';

import { ContactKey } from '../../../../core/constants/contact.constants';
import { TabGenericComponent } from '../../../../core/interfaces/tab-generic-components.interface';

@Component({
  selector: 'gb-nr20-tab-analise-riscos',
  imports: [],
  templateUrl: './nr20-tab-analise-riscos.html',
  styleUrl: './nr20-tab-analise-riscos.scss',
})
export class Nr20TabAnaliseRiscos implements TabGenericComponent {

  public readonly redirectMessage = output<ContactKey>();


}
