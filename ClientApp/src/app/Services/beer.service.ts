import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { tap } from 'rxjs/operators';
import { IBeer } from "../beer.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeer(id: number): Observable<IBeer> {
    return this
      .http
      .get<IBeer>('/api/beer/'+id);
  }
  getBeers(): Observable<IBeer[]> {
    return this
      .http
      .get<IBeer[]>('/api/beer/');
  }
  getFavorites(): Observable<IBeer[]> {
    return this
      .http
      .get<IBeer[]>('/api/beer/Favorites');
  }
  setFavorite(beer: IBeer): Observable<IBeer> {
    return this
      .http
      .post<IBeer>('/api/beer/Favorites', beer);
  }
}
