import { beerItemsSelector } from './../../store/beer/beer.selector';
import { fetchBeerAction } from './../../store/beer/beer.action';
import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';

@Injectable()
export default class BeerService{

  selectBeers() {
    return this.store$.select(beerItemsSelector);
  }

  constructor(private store$: Store){}

  loadBeers(){
    this.store$.dispatch(fetchBeerAction());
  }
}