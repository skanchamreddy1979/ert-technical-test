import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {BeerService} from '../../services/beer.service';
import {Beer} from '../../models/beer.model';

@Component({
  selector: 'app-beer-preview',
  templateUrl: './beer-preview.component.html',
  styleUrls: ['./beer-preview.component.css']
})
export class BeerPreviewComponent implements OnInit {

  private DEFAULT_BEER_COUNT = 4;

  constructor(
    private _beerService: BeerService) {
  }

  beers = new Observable<Beer[]>();

  ngOnInit() {
    this.beers = this._beerService.getRandomBeers(this.DEFAULT_BEER_COUNT);
  }

}
