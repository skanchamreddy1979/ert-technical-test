import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { configuration } from "../configuration";
import { Beer } from "../model/beer.model";

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(configuration.allBeersUrl);
  }

  getBeerById(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(`${configuration.beerUrl}${id}`);
  }

  getFavorites(email: string): Observable<Beer> {
    return this.httpClient.get<Beer>(`${configuration.favoritesUrl}${email}`);
  }

  addFavorites(email: string, ids: number[]): Observable<Beer> {
    return this.httpClient.post<Beer>(configuration.favoritesUrl, {email: email, ids : ids});
  }
}
