import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../Models/beer';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  private _beers: Beer[];

  getBeersWithPagination(page: number, per_page: number){
    return this.http.get('https://api.punkapi.com/v2/beers', { params: { page: `${page}`, per_page: `${per_page}` } });
  }

  getBeersWithFilter(brewed_before: Date, abv_gt: number) {
    return this.http.get('https://api.punkapi.com/v2/beers', { params: { brewed_before: `${brewed_before}`, abv_gt: `${abv_gt}` } });
  }

  getBeerById(id: string){
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`);
  }

  getBeer() {
   return this.http.get('https://api.punkapi.com/v2/beers')
  }

}
