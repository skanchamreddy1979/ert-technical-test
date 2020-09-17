import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../beer.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private _punkapiUrl = 'https://api.punkapi.com/v2';

  constructor(private _httpClient: HttpClient) { }

  getBeerList(): Observable<Beer[]> {
    const params = new HttpParams()
    // .set('apiKey', this._apiKey)
    // .set('sources', newsSourceId);

    return this._httpClient.get<Beer[]>(`${this._punkapiUrl}/beers`, { params }).pipe(map(beerList => {
      return beerList.map(item => Beer.fromDto(item));
    }));
  }

}
