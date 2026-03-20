import { Component, input } from '@angular/core';

import { StatItem } from '../../../core/interfaces/stat-item.interface';

@Component({
  selector: 'gb-stats',
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  public readonly items = input.required<StatItem[]>();

}
