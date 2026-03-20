import { Component } from '@angular/core';

import { STATS_NR20 } from '../../core/constants/stats-nr-20.constants';
import { Stats } from '../../shared/components/stats/stats';
import { Nr13Prontuario } from '../nr13/nr13-prontuario/nr13-prontuario';
import { Nr20Classification } from './nr20-classification/nr20-classification';
import { Nr20Header } from './nr20-header/nr20-header';
import { Nr20Laudo } from './nr20-laudo/nr20-laudo';
import { Nr20Prontuario } from './nr20-prontuario/nr20-prontuario';
import { Nr20Sobre } from './nr20-sobre/nr20-sobre';

@Component({
  selector: 'gb-nr20',
  imports: [Nr20Header, Stats, Nr20Sobre, Nr20Classification, Nr20Prontuario, Nr13Prontuario, Nr20Laudo],
  templateUrl: './nr20.html',
  styleUrl: './nr20.scss',
})
export class Nr20 {

  public readonly stats = STATS_NR20;

}
