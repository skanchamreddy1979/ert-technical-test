import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBeerList } from '../beerlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrewdogserService {

  private URL = 'https://api.punkapi.com/v2/beers/';
  constructor(private http: HttpClient) { }

  getBeerList(): Observable<IBeerList[]>
  {
    return this.http.get<IBeerList[]>(this.URL);
  }
  getBeerById(id: number): Observable<IBeerList[]>
  {

    return this.http.get<IBeerList[]>(this.URL + id);
  }
}
