import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

import { TRAININGS_CATEGORY } from '../../../core/constants/training-category.constants';
import { TrainingCategoryEnum } from '../../../core/enums/training-category.enum';
import { TrainingItem } from '../../../core/interfaces/training-item.interface';

@Component({
  selector: 'gb-training-catalog',
  imports: [CommonModule],
  templateUrl: './training-catalog.html',
  styleUrl: './training-catalog.scss',
})
export class TrainingCatalog implements OnInit {

  public readonly category = signal<TrainingItem[]>(TRAININGS_CATEGORY); public type = TrainingCategoryEnum;
  public readonly selected = signal<TrainingCategoryEnum | 'ALL'>('ALL')

  public ngOnInit(): void {
    this.handleTraining(TrainingCategoryEnum.NR05)
  }

  public handleTraining(type: TrainingCategoryEnum | 'ALL'): void {
    this.selected.set(type)
    if (type === 'ALL') {
      this.category.set(TRAININGS_CATEGORY);
      return;
    }
    const trainings = TRAININGS_CATEGORY.filter(training => training.category === type);
    if (trainings.length) {
      this.category.set(trainings);
    }
  }

  public getRgbColor(color: string) {
    if (color.startsWith('var(')) {
      return color.replace(')', '-rgb)')
    }
    return color
  }

}
