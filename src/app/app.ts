import { AfterContentInit, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, RouterOutlet } from '@angular/router';

import { FooterComponent } from './features/headerpage/footer/footer/footer';
import { HeaderComponent } from './features/headerpage/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterContentInit {

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  public ngAfterContentInit(): void {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.scrollToTop.bind(this))
    this.scrollToTop();
  }

  private scrollToTop() {
    requestAnimationFrame(() => {
      const section = document.querySelector('app-root section:first-of-type');
      section?.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
