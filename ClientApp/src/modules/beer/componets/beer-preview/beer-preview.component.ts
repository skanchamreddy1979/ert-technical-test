import {Component, OnInit} from '@angular/core';
import {BeerService} from "../../services/beer.service";
import {Beer} from "../../models/beer.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-beer-preview',
  templateUrl: './beer-preview.component.html',
  styleUrls: ['./beer-preview.component.css']
})
export class BeerPreviewComponent implements OnInit {

  constructor(private _beerService: BeerService) {
  }

  beers = new Observable<Beer[]>();

  ngOnInit() {
    this.beers = this._beerService.getRandomBeers(4);
  }

}
