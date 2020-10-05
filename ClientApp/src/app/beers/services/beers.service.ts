import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private httpClient: HttpClient) { }

  Get(value, pageIndex: number, pageSize: number = 40): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}beers${this.buildQuery(value, pageIndex, pageSize)}`);
  }

  GetById(id: number): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}beers/${id}`);
  }

  buildQuery(name: string, pageIndex: number, pageSize: number) {
    let query = '';
    if (name == null || name === '') {
      query = `?page=${pageIndex}&per_page=${pageSize}`;
    } else {
      query = `?beer_name=${name}`;
    }
    return query;
  }



}
