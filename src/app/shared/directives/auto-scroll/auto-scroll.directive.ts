import { Directive, HostListener, input } from '@angular/core';
import { take, timer } from 'rxjs';

@Directive({
  selector: '[autoScrollTo]'
})
export class AutoScrollDirective {
  public readonly id = input.required<string>({
    alias: 'autoScrollTo'
  });

  public readonly delay = input(0)

  private element!: HTMLElement | null;;

  @HostListener('click')
  public onClick() {
    timer(this.delay()).pipe(take(1)).subscribe(() => {
    if (!this.element) {
      let element: HTMLElement | null;
      if (this.id().startsWith('.')) {
        element = document.querySelector(this.id());
      } else {
        element = document.getElementById(this.id());
      }
      this.element = element;
    }
      this.element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }
}
