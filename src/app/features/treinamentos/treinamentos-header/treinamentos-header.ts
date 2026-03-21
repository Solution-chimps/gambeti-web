import { Component } from '@angular/core';

import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-treinamentos-header',
  imports: [AutoScrollDirective],
  templateUrl: './treinamentos-header.html',
  styleUrl: './treinamentos-header.scss',
})
export class TreinamentosHeader {

}
