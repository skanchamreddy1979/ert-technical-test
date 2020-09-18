import { Paging } from './../../store/paging/paging.interface';
import { pagingSelector } from './../../store/paging/paging.selector';
import { beerCountSelector, beersPagedSelector } from './../../store/beer/beer.selector';
import { fetchBeerAction } from './../../store/beer/beer.action';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { skip, take, map } from 'rxjs/operators';

@Injectable()
export default class BeerService {
  paging: Paging;

  selectBeers() {
    return (this.store$.select(beersPagedSelector));
  }

  selectBeersCount() {
    return this.store$.select(beerCountSelector);
  }

  constructor(private store$: Store) {
    store$.select(pagingSelector).subscribe(value => this.paging = value);
  }

  loadBeers() {
    this.store$.dispatch(fetchBeerAction());
  }
}
