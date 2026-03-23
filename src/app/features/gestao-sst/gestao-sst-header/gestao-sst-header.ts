import { Component } from '@angular/core';

import { AutoScrollDirective } from '../../../shared/directives/auto-scroll/auto-scroll.directive';

@Component({
  selector: 'gb-gestao-sst-header',
  imports: [AutoScrollDirective],
  templateUrl: './gestao-sst-header.html',
  styleUrl: './gestao-sst-header.scss',
})
export class GestaoSstHeader {

}
