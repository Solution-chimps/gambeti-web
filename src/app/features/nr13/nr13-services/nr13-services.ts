import { Component, signal } from '@angular/core';

import { Tab } from '../../../core/interfaces/tab.interface';
import { Tabs } from '../../../shared/components/tabs/tabs';
import { CaldeirasTab } from './caldeiras-tab/caldeiras-tab';
import { TanquesTab } from './tanques-tab/tanques-tab';
import { TubulacoesTab } from './tubulacoes-tab/tubulacoes-tab';
import { VasosTab } from './vasos-tab/vasos-tab';

@Component({
  selector: 'gb-nr13-services',
  imports: [Tabs],
  templateUrl: './nr13-services.html',
  styleUrl: './nr13-services.scss',
})
export class Nr13Services {

  public readonly tabs = signal<Tab[]>([
    {
      active: true,
      icon: 'fa-fire',
      title: 'Caldeiras',
      component: CaldeirasTab
    },
    {
      title: 'Vasos de Pressão',
      icon: 'fa-circle-dot',
      component: VasosTab
    },
    {
      title: 'Tubulações',
      icon: 'fa-grip-lines',
      component: TubulacoesTab
    },
    {
      title: 'Tanques Metálicos',
      icon: 'fa-database',
      component: TanquesTab
    },
  ])

}
