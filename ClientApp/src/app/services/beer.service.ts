import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private _http: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this._http.get<Beer[]>('https://api.punkapi.com/v2/beers');
  }
}
