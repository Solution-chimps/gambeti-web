import { Component, output, OutputEmitterRef, signal } from '@angular/core';

import { ContactKey } from '../../../core/constants/contact.constants';
import { Tab } from '../../../core/interfaces/tab.interface';
import { Tabs } from '../../../shared/components/tabs/tabs';
import { CaldeirasTab } from './caldeiras-tab/caldeiras-tab';
import { TanquesTab } from './tanques-tab/tanques-tab';
import { TubulacoesTab } from './tubulacoes-tab/tubulacoes-tab';
import { VasosTab } from './vasos-tab/vasos-tab';

interface TabGenericComponent {
  redirectMessage: OutputEmitterRef<ContactKey>
}

@Component({
  selector: 'gb-nr13-services',
  imports: [Tabs],
  templateUrl: './nr13-services.html',
  styleUrl: './nr13-services.scss',
})
export class Nr13Services {

  public readonly tabs = signal<Tab<TabGenericComponent>[]>([]);



  public readonly redirectMessage = output<ContactKey>();

  constructor() {
    this.tabs.set([
    {
      active: true,
      icon: 'fa-fire',
      title: 'Caldeiras',
        component: CaldeirasTab,
        data: {
          outputs: {
            redirectMessage: event => this.redirectMessage.emit(event)
          }
        }
      },
    {
      title: 'Vasos de Pressão',
      icon: 'fa-circle-dot',
      component: VasosTab,
      data: {
        outputs: {
          redirectMessage: event => this.redirectMessage.emit(event)
        }
      }
    },
    {
      title: 'Tubulações',
      icon: 'fa-grip-lines',
      component: TubulacoesTab,
      data: {
        outputs: {
          redirectMessage: event => this.redirectMessage.emit(event)
        }
      }
    },
    {
      title: 'Tanques Metálicos',
      icon: 'fa-database',
      component: TanquesTab,
      data: {
        outputs: {
          redirectMessage: event => this.redirectMessage.emit(event)
        }
      }
    },
  ])
  }


}
