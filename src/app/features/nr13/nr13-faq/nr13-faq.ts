import { Component, signal } from '@angular/core';

import { FAQ_TYPE } from '../../../core/constants/faq-type.constants';
import { DropdownDirective } from '../../../shared/directives/dropdown/dropdown.directive';

@Component({
  selector: 'gb-nr13-faq',
  imports: [DropdownDirective],
  templateUrl: './nr13-faq.html',
  styleUrl: './nr13-faq.scss',
})
export class Nr13Faq {

  public readonly faqs = signal(FAQ_TYPE);

}
