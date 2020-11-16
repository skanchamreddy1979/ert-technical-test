import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BeerService } from '../../services/beer.service';
import { Beer } from '../../models/beer.model';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent implements OnInit {

  beer: Beer;
  canAddToFavorite: boolean;

  constructor(
    private route: ActivatedRoute,
    private _beerService: BeerService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this._beerService.getOneBeer(id)
      .subscribe(result => {
        this.beer = result;
      });

    this.checkCanAddToFavorite();
  }

  checkCanAddToFavorite() {
    const id = this.route.snapshot.paramMap.get('id');
    this._beerService.getFavorites()
      .pipe(map(value => value))
      .subscribe(beers => {
        this.canAddToFavorite = beers.some(i => i.id === id);
      });
  }

  public addToFavorites() {
    const id = +this.route.snapshot.paramMap.get('id');
    this._beerService.addToFavorites(id);
    this.checkCanAddToFavorite();
  }

}
