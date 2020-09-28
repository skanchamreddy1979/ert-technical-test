import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataService {
  constructor(private http: HttpClient) {
  }
  getBeer(page: string, take: string) {
    const result = this.http.get('api/beer/get/', { params: {beerName: '', page: page, take: take }});

    return result;
  }

  getBeerByName (beerName: string, page: string, take: string) {
    return this.http.get('api/beer/get/', { params: {beerName: beerName, page: page, take: take }});
  }
}
