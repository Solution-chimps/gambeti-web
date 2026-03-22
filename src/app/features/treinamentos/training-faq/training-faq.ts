import { Component, signal } from '@angular/core';

import { TRAINING_FAQ_TYPE } from '../../../core/constants/faq-type-training.constants';
import { DropdownDirective } from '../../../shared/directives/dropdown/dropdown.directive';

@Component({
  selector: 'gb-training-faq',
  imports: [DropdownDirective],
  templateUrl: './training-faq.html',
  styleUrl: './training-faq.scss',
})
export class TrainingFaq {

  public readonly faqs = signal(TRAINING_FAQ_TYPE);

}
