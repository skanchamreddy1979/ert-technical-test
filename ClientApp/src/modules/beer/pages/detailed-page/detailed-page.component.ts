import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/internal/operators/map';
import {Observable, Subscription} from 'rxjs';

import {BeerService} from '../../services/beer.service';
import {Beer} from '../../models/beer.model';


@Component({
  selector: 'app-detailed-page',
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.css']
})
export class DetailedPageComponent implements OnInit, OnDestroy {
  private getOneBeerSubscription: Subscription;

  beer: Beer;
  canAddToFavorite = new Observable<boolean>();

  constructor(
    private route: ActivatedRoute,
    private _beerService: BeerService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.getOneBeerSubscription = this._beerService.getOneBeer(id)
      .subscribe(result => {
        this.beer = result;
      });

    this.checkCanAddToFavorite();
  }

  checkCanAddToFavorite() {
    this.canAddToFavorite = this._beerService.getFavorites()
      .pipe(map(beers => beers.some(i => i.id === this.beer.id)));
  }

  public addToFavorites() {
    this._beerService.addToFavorites(+this.beer.id);
    this.checkCanAddToFavorite();
  }

  ngOnDestroy(): void {
    this.getOneBeerSubscription.unsubscribe();
  }

}
