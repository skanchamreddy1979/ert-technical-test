import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeerList } from '../Beer/beerlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewdogserService {

   // URL to access external API
  private URL = 'https://api.punkapi.com/v2/beers/';
  constructor(private http: HttpClient) { }

   // Service to get beer list observable and cast it into IBeerList array
  getBeerList(): Observable<IBeerList[]>
  {
    return this.http.get<IBeerList[]>(this.URL);
  }

   // Service to get beer details by id observable and cast it into IBeerList array
  getBeerById(id: number): Observable<IBeerList[]>
  {
    return this.http.get<IBeerList[]>(this.URL + id);
  }

   // To be implemented ; save the list of favourite beers
  saveFavBeer(): any
  {
    // ToDo
  }
}
