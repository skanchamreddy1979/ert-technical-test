import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, range } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Beer } from '../models/beer.model';
import {
  ADD_TO_FAVORITES_URL,
  API_GET_FAVORITES_URL,
  BEERS_URL,
  ONE_BEER_URL,
  RANDOM_BEER_URL
} from './api/beer-api-constants';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private _httpClient: HttpClient) {
  }

  public getRandomBeers(count: number): Observable<Beer[]> {
    const beers: Beer[] = [];
    const favoriteBeers: Beer[] = [];

    range(1, count)
      .pipe(mergeMap(_ => this._httpClient.get<Beer[]>(RANDOM_BEER_URL)))
      .subscribe(beer => beers.push(beer.find(i => i.id)));

    return of(beers);
  }

  public getBeers(beerName?: string): Observable<Beer[]> {
    let params;
    if (beerName) {
      params = { 'beer_name': beerName };
    }

    return this._httpClient.get<Beer[]>(BEERS_URL, { params });
  }

  public getOneBeer(id: number): Observable<Beer> {
    return this._httpClient.get<Beer[]>(`${ONE_BEER_URL}/${id}`)
      .pipe(map(v => v.shift()));
  }

  public getFavorites(name?: string): Observable<Beer[]> {
    let params;

    return this._httpClient.get<number[]>(API_GET_FAVORITES_URL)
      .pipe(mergeMap(ids => {
        params = {
          'ids': ids.join('|'),
        };

        if (name) {
          params.beer_name = name;
        }

        return this._httpClient.get<Beer[]>(BEERS_URL, { params });
      }));
  }

  public addToFavorites(id: number) {
    this._httpClient.post(ADD_TO_FAVORITES_URL, id).subscribe();
  }
}
