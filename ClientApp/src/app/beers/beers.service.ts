import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer }  from "./beer.model";

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  plunkAPIRootUrl: string  

  constructor(private httpClient: HttpClient) {
    this.plunkAPIRootUrl = "https://api.punkapi.com/v2/"
  }

  // getBeers() {
  //   return this.httpClient.get(this.plunkAPIRootUrl + "beers").toPromise()
  // }

  getBeerById(id: number) {
    return this.httpClient.get(`${this.plunkAPIRootUrl}beers/${id}`).toPromise()
  }

  getByPage(page: number, pageSize: number) {
    return this.httpClient.get(`${this.plunkAPIRootUrl}beers?page=${page}&per_page=${pageSize}`).toPromise()
  }

  getBeers(page: number, pageSize: number, searchString: string) {    
    let url = `${this.plunkAPIRootUrl}beers?page=${page}&per_page=${pageSize}`;
    if(searchString.length > 0) {
        url =`${url}&beer_name=${searchString}`
    }
    return this.httpClient.get(url).toPromise()
  }

  getByName(searchStr: string) {
    return this.httpClient.get<Beer[]>(`${this.plunkAPIRootUrl}beers?beer_name=${searchStr}`).toPromise()
  }
}
