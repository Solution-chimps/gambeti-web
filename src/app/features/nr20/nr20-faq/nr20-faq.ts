import { Component, signal } from '@angular/core';

import { FAQ_TYPE_NR20 } from '../../../core/constants/faq-type-20constants';
import { DropdownDirective } from '../../../shared/directives/dropdown/dropdown.directive';

@Component({
  selector: 'gb-nr20-faq',
  imports: [DropdownDirective],
  templateUrl: './nr20-faq.html',
  styleUrl: './nr20-faq.scss',
})
export class Nr20Faq {

  public readonly faqs = signal(FAQ_TYPE_NR20);

}
