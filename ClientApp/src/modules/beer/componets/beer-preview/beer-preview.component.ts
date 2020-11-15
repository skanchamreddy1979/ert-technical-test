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

  private DEFAULT_BEER_COUNT: number = 4;

  constructor(private _beerService: BeerService) {
  }

  beers : Beer[] = [];

  ngOnInit() {
     this._beerService.getRandomBeers(this.DEFAULT_BEER_COUNT)
       .subscribe(result => this.beers = result);
  }

}
