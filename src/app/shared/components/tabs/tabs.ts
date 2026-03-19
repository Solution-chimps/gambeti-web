import {
  AfterViewInit,
  Component,
  effect,
  EventEmitter,
  inject,
  input,
  OutputEmitterRef,
  signal,
  ViewContainerRef,
} from '@angular/core';

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
  public readonly activeTab = signal<Tab | undefined>(undefined);

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
          this.activeTab.set(tab)
          const ref = this.viewContainerRef.createComponent(current.component!);
          const data = current.data;
          Object.entries(data?.outputs || {}).forEach(([key, value]) => {
            value && (ref.instance?.[key as unknown as keyof typeof ref.instance] as unknown as EventEmitter<unknown> | OutputEmitterRef<unknown>)?.subscribe(value as (...args: unknown[]) => void)
          });
          Object.entries(data?.inputs || {}).forEach(([key, value]) => {
            ref.setInput(key, value)
          })
        }
        return current;
      })
    })
  }

}
