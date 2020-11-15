import {Injectable} from '@angular/core';
import {Observable, of, range} from "rxjs";
import {Beer} from '../models/beer.model';
import {HttpClient} from "@angular/common/http";
import {RANDOM_BEER_URL} from "./api/beer-api-constants";
import {map, mergeMap} from "rxjs/operators";

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
}
