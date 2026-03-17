import { Routes } from '@angular/router';

import { Homepage } from './features/homepage/homepage';
import { Nr13 } from './features/nr13/nr13';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'nr13',
    component: Nr13
  }
];
