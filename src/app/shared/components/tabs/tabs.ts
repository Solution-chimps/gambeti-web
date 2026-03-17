import { AfterViewInit, Component, effect, inject, input, signal, ViewContainerRef } from '@angular/core';

import { Tab } from '../../../core/interfaces/tab.interface';

@Component({
  selector: 'gb-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs implements AfterViewInit {

  public readonly tabs = input.required<Tab[]>();

  public cloneTabs = signal<Tab[]>([]);
  private readonly viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      this.cloneTabs.set(this.tabs());
    });
  }

  public ngAfterViewInit(): void {
    this.handleClickTab(this.cloneTabs().find(curr => curr.active)!)
  }

  public handleClickTab(tab: Tab): void {
    if (!tab) {
      return;
    }
    this.cloneTabs.update((clone) => {
      return clone.map(current => {
        current.active = current.title === tab.title;
        if (current.active && current.component) {
          this.viewContainerRef.clear();
          this.viewContainerRef.createComponent(current.component!);
        }
        return current;
      })
    })
  }

}
