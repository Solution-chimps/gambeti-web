import { Component } from '@angular/core';
import {HeaderComponent} from '../headerpage/header/header';
import {FooterComponent} from '../headerpage/footer/footer/footer';

@Component({
  selector: 'gb-homepage',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {

}
