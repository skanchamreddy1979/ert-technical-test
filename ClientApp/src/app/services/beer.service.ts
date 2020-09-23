import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../model/beer.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpClient: HttpClient) { }

  getBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(`${environment.apiUrl}`);
  }

  getBeerById(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(`${environment.apiUrl}/${id}`);
  }
}
