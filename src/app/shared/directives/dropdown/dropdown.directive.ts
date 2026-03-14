import { AfterViewInit, Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective implements AfterViewInit {
  private readonly el: ElementRef<HTMLElement> = inject(ElementRef);

  public readonly maxHeightPx = input(500);

  private get isHidden(): boolean {
    return (this.el.nativeElement.nextSibling as HTMLElement)?.style.maxHeight === '0px';
  }

  public ngAfterViewInit(): void {
    const next = this.el.nativeElement.nextSibling as HTMLElement;
    this.hideElement(next);
  }

  @HostListener('click', ['$event.target'])
  public onClick(target: EventTarget | null): void {
    const element = (target as HTMLElement).nextSibling as HTMLElement;
    if (!element) {
      return;
    }
    this.isHidden ? this.showElement(element) : this.hideElement(element)
  }


  private hideElement(next: HTMLElement) {
    next.classList.remove('open');
    Object.assign(next.style, {
      maxHeight: '0px',
    } as CSSStyleDeclaration);
  }

  private showElement(next: HTMLElement) {
    next.classList.add('open');
    Object.assign(next.style, {
      maxHeight: `${this.maxHeightPx()}px`
    } as CSSStyleDeclaration);
  }

}
