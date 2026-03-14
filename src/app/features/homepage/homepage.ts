import { Component, signal } from '@angular/core';

import { ABOUT_CHECKS } from '../../core/constants/about-checks.constants';
import { SERVICE_CARDS } from '../../core/constants/service-cards.constants';

@Component({
  selector: 'gb-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

  public readonly cards = signal(SERVICE_CARDS);
  public readonly aboutChecks = signal(ABOUT_CHECKS);

}
