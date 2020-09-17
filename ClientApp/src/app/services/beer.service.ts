import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private _http: HttpClient) { }

  getBeers(pageIndex: number, pageSize: number, beerNameFilter?: string): Observable<Beer[]> {
    let params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('per_page', pageSize.toString());

    if (beerNameFilter != null) {
      params = params.set('beer_name', beerNameFilter);
    }

    return this._http.get<Beer[]>('https://api.punkapi.com/v2/beers', { params }).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
