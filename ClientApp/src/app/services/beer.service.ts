import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private _http: HttpClient) { }

  getBeers(beerNameFilter?: string): Observable<Beer[]> {

    let params = new HttpParams();

    if (beerNameFilter != null) {
      params = params.set('beer_name', beerNameFilter);
    }

    return this._http.get<Beer[]>('https://api.punkapi.com/v2/beers', { params });
  }
}
