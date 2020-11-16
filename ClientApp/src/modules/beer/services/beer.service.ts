import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, range} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {Beer} from '../models/beer.model';
import {BEERS_URL, ONE_BEER_URL, RANDOM_BEER_URL} from './api/beer-api-constants';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private _httpClient: HttpClient) {
  }

  public getRandomBeers(count: number): Observable<Beer[]> {

    const beers: Beer[] = [];

    range(1, count)
      .pipe(
        mergeMap(_ => this._httpClient.get<Beer[]>(RANDOM_BEER_URL))
      )
      .subscribe(beer => beers.push(beer.find(i => i.id)));

    return of(beers);
  }

  public getBeers(beerName?: string): Observable<Beer[]> {
    let params;

    if (beerName) {
      params = {'beer_name': beerName};
    }

    return this._httpClient.get<Beer[]>(BEERS_URL, {params});
  }

  public getOneBeer(id: number): Observable<Beer> {
    return this._httpClient.get<Beer[]>(`${ONE_BEER_URL}/${id}`)
      .pipe(map(v => v.shift()));
  }
}
