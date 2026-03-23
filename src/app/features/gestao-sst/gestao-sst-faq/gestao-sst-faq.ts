import { Component, signal } from '@angular/core';

import { FAQ_SST_TYPE } from '../../../core/constants/faq-type-sst.constants';
import { DropdownDirective } from '../../../shared/directives/dropdown/dropdown.directive';

@Component({
  selector: 'gb-gestao-sst-faq',
  imports: [DropdownDirective],
  templateUrl: './gestao-sst-faq.html',
  styleUrl: './gestao-sst-faq.scss',
})
export class GestaoSstFaq {

  public readonly faqs = signal(FAQ_SST_TYPE)

}
