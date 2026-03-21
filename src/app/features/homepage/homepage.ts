import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ABOUT_CHECKS } from '../../core/constants/about-checks.constants';
import { DIFFERENTIALS } from '../../core/constants/diferentials.constants';
import { FAQS } from '../../core/constants/faqs.constants';
import { NRS } from '../../core/constants/nr-ids.constants';
import { SECTORS } from '../../core/constants/sectors.constants';
import { SERVICE_CARDS } from '../../core/constants/service-cards.constants';
import { ContactOrder } from '../../shared/components/contact-order/contact-order';
import { AutoScrollDirective } from '../../shared/directives/auto-scroll/auto-scroll.directive';
import { DropdownDirective } from '../../shared/directives/dropdown/dropdown.directive';

@Component({
  selector: 'gb-homepage',
  imports: [DropdownDirective, AutoScrollDirective, ContactOrder, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
  })

export class Homepage {

  public readonly cards = signal(SERVICE_CARDS);
  public readonly aboutChecks = signal(ABOUT_CHECKS);
  public readonly differentials = signal(DIFFERENTIALS);
  public readonly sectors = signal(SECTORS);
  public readonly nrs = signal(NRS);
  public readonly faqs = signal(FAQS);

  public handleNavigate(link: string): void {
    window.open(link, '__blank')
  }

}
