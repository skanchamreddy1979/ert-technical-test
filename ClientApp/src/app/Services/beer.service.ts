import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../Models/beer';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeersWithPagination(page: number, perPage: number) {
    return this.http.get(`${environment.apiUrl}beers`, { params: { page: `${page}`, per_page: `${perPage}` } });
  }

  getBeersWithFilter(brewedBefore: Date, abvGt: number) {
    return this.http.get(`${environment.apiUrl}beers`, { params: { brewed_before: `${brewedBefore}`, abv_gt: `${abvGt}` } });
  }

  getBeerById(id: string) {
    return this.http.get( `${environment.apiUrl}beers/${id}`);
  }

  getBeer() {
   return this.http.get(`${environment.apiUrl}beers`);
  }

}
