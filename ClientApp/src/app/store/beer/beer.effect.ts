import { HttpClient } from '@angular/common/http';
import { fetchBeerAction, fetchBeerActionSuccess, fetchBeerActionFailure } from './beer.action';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';

import { catchError, mergeMap, map, debounceTime } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { beerName } from './beer.name';
import { Beer } from 'src/app/beer.model';
import FilterService from 'src/app/services/filter/filter.service';

@Injectable()
export default class BeerEffect{
  private filter: string = '';
  private url = 'https://api.punkapi.com/v2/beers';

  constructor(private actions$: Actions, private http: HttpClient, filterService: FilterService){
    filterService.selectFilter().subscribe(text => this.filter = text);
  }


  getUrl(){
    if(this.filter === ''){
      return this.url;
    }
    let url = `${this.url}?beer_name=${this.filter}`;
    return url;
  }
  
  @Effect()
  fetchBeers() {
    return this.actions$.pipe(
      ofType(fetchBeerAction),
      mergeMap(() => this.http.get(this.getUrl())
        .pipe(
          map(
            (beers: Beer[]) => fetchBeerActionSuccess({[beerName]: beers})
            ),
          catchError(() => EMPTY)
        ))
    );
  }
}