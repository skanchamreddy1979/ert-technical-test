import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class BeerService {
  constructor(private HttpClient: HttpClient) {}

  getAllBeers(): Observable<any> {
    let allBeers = this.HttpClient.get('https://api.punkapi.com/v2/beers');
    return allBeers;
  }

  getBeerById(id): Observable<any> {
    let beer = this.HttpClient.get('https://api.punkapi.com/v2/beers/' + id);
    return beer;
  }
}
