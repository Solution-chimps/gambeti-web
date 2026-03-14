import { Directive, HostListener, input } from '@angular/core';

@Directive({
  selector: '[autoScrollTo]'
})
export class AutoScrollDirective {
  public readonly id = input.required<string>({
    alias: 'autoScrollTo'
  });

  private element!: HTMLElement | null;;

  @HostListener('click')
  public onClick() {
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
  }
}
