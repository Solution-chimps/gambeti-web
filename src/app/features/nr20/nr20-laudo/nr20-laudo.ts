import { Component, output, signal } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { TabGenericComponent } from '../../../core/interfaces/tab-generic-components.interface';
import { Tab } from '../../../core/interfaces/tab.interface';
import { Tabs } from '../../../shared/components/tabs/tabs';
import { Nr20TabAnaliseRiscos } from './nr20-tab-analise-riscos/nr20-tab-analise-riscos';
import { Nr20TabInventario } from './nr20-tab-inventario/nr20-tab-inventario';
import { Nr20TabPlanoEmergencia } from './nr20-tab-plano-emergencia/nr20-tab-plano-emergencia';
import { Nr20TabProcedimentos } from './nr20-tab-procedimentos/nr20-tab-procedimentos';

@Component({
  selector: 'gb-nr20-laudo',
  imports: [Tabs],
  templateUrl: './nr20-laudo.html',
  styleUrl: './nr20-laudo.scss',
})
export class Nr20Laudo {

  public readonly tabs = signal<Tab<TabGenericComponent>[]>([]);



  public readonly redirectMessage = output<ContactKey>();

  constructor() {
    this.tabs.set([
      {
        active: true,
        icon: 'fa-boxes-stacked',
        title: 'Inventário',
        component: Nr20TabInventario,
        data: {
          outputs: {
            redirectMessage: event => this.redirectMessage.emit(event)
          }
        }
      },
      {
        title: 'Análise de Riscos',
        icon: 'fa-triangle-exclamation',
        component: Nr20TabAnaliseRiscos,
        data: {
          outputs: {
            redirectMessage: event => this.redirectMessage.emit(event)
          }
        }
      },
      {
        title: 'Plano de Emergência',
        icon: 'fa-truck-medical',
        component: Nr20TabPlanoEmergencia,
        data: {
          outputs: {
            redirectMessage: event => this.redirectMessage.emit(event)
          }
        }
      },
      {
        title: 'Procedimentos',
        icon: 'fa-clipboard-list',
        component: Nr20TabProcedimentos,
        data: {
          outputs: {
            redirectMessage: event => this.redirectMessage.emit(event)
          }
        }
      }
    ]);
  }


}
