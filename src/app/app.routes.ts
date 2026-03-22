import { Routes } from '@angular/router';

import { Homepage } from './features/homepage/homepage';
import { Nr13 } from './features/nr13/nr13';
import { Nr20 } from './features/nr20/nr20';
import {Nr10Component} from './features/nr10/nr10';
import { Treinamentos } from './features/treinamentos/treinamentos';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'nr13',
    component: Nr13
  },
  {
    path: 'nr10',
    component: Nr10Component
  },
  {
    path: 'nr20',
    component: Nr20
  },
  {
    path: 'training',
    component: Treinamentos
  }
];
