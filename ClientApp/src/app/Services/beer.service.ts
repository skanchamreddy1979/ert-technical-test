import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../Models/beer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getBeersWithPagination(page: number, perPage: number){
    return this.http.get('https://api.punkapi.com/v2/beers', { params: { page: `${page}`, per_page: `${perPage}` } });
  }

  getBeersWithFilter(brewedBefore: Date, abvGt: number) {
    return this.http.get('https://api.punkapi.com/v2/beers', { params: { brewed_before: `${brewedBefore}`, abv_gt: `${abvGt}` } });
  }

  getBeerById(id: string){
    return this.http.get( `https://api.punkapi.com/v2/beers/${id}`);
  }

  getBeer() {
   return this.http.get('https://api.punkapi.com/v2/beers')
  }

}
