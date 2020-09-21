import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer.model';
import { url_configuration } from '../url_configuration';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(url_configuration.allBeersUrl);
  }

  getBeerById(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(`${url_configuration.beerUrl}${id}`);
  }
}
