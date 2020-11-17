import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBeer } from '../beer-models/beer/beer.model';

@Injectable({ providedIn: 'root' })
export class BeerService {

  private beersApiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getBeers(): Observable<IBeer[]>{
    return this.http.get<IBeer[]>(this.beersApiUrl);
  }

  getBeer(id: number) {
    console.log(this.http.get(this.beersApiUrl + '/' + id));
    return this.http.get(this.beersApiUrl + '/' + id);

  }
}
