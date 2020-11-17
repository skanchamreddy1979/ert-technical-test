import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { urlConfig } from '../app.config';
import { IBeer } from '../beer.model';

@Injectable({
  providedIn: 'root'
})

export class BeerService {

  constructor(private http: HttpClient) {}

  public getBeers(pageIndex: number, pageSize: number, filterValue?: string): Observable<IBeer[]> {
    let params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('per_page', pageSize.toString());

    if (filterValue && filterValue.length > 0) {
      params = params.set('beer_name', filterValue);
    }

    return this.http.get<IBeer[]>(urlConfig.beerApiUrl, { params });
  }

  public getBeerDetails(id: number): Observable<IBeer[]> {
    return this.http.get<IBeer[]>(`${urlConfig.beerApiUrl}/${id}`);
  }
}
