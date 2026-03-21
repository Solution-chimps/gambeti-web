import { Component, signal } from '@angular/core';

import { TRAINING_STATS } from '../../core/constants/stats-training.constants';
import { ContactOrder } from '../../shared/components/contact-order/contact-order';
import { Stats } from '../../shared/components/stats/stats';
import { TrainingCatalog } from './training-catalog/training-catalog';
import { TrainingFaq } from './training-faq/training-faq';
import { TrainingMetodology } from './training-metodology/training-metodology';
import { TrainingOverview } from './training-overview/training-overview';
import { TrainingResume } from './training-resume/training-resume';
import { TreinamentosHeader } from './treinamentos-header/treinamentos-header';

@Component({
  selector: 'gb-treinamentos',
  imports: [TreinamentosHeader, Stats, TrainingCatalog, TrainingMetodology, TrainingResume, TrainingOverview, TrainingFaq, ContactOrder],
  templateUrl: './treinamentos.html',
  styleUrl: './treinamentos.scss',
})
export class Treinamentos {

  public readonly stats = signal(TRAINING_STATS)

}
