import {Component, Input, OnInit} from '@angular/core';

import {Beer} from '../../models/beer.model';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent {

  imageNotFoundUrl = 'https://ctl.s6img.com/society6/img/oNDDqke9K4f19vLYGDnTDdrXk8U/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/e035b39bdf1f4c8abd5884384c4f74b4/~~/error-404-beer-not-found-prints.jpg';

  @Input() beer: Beer;

  constructor() {
  }
}
