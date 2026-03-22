import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIE_CARDS } from './constants/pie-cards.constants';

@Component({
  selector: 'app-nr10-pie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nr10-pie.html',
  styleUrls: ['./nr10-pie.scss']
})
export class Nr10PieComponent {

  pieCards = PIE_CARDS;

  @Output() cardClick = new EventEmitter<string>();

  onCardClick(cardId: string) {
    this.cardClick.emit(cardId);
  }
}
