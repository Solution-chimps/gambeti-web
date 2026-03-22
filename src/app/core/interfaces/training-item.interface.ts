import { TrainingCategoryEnum } from '../enums/training-category.enum';

export interface TrainingItem {
  category: TrainingCategoryEnum;
  nr: string;
  title: string;
  description: string;

  duration: string;
  recurrence?: string;

  color: string;
  tagIcon?: string;

  link: string;
}
