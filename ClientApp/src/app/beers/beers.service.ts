import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  plunkAPIRootUrl: string;

  constructor(private httpClient: HttpClient) {
    this.plunkAPIRootUrl = 'https://api.punkapi.com/v2/';
  }

  getBeerById(id: number) {
    return this.httpClient.get(`${this.plunkAPIRootUrl}beers/${id}`).toPromise();
  }

  getBeersByPage(page: number, pageSize: number) {
    return this.httpClient.get(`${this.plunkAPIRootUrl}beers?page=${page}&per_page=${pageSize}`).toPromise();
  }

  searchBeers(searchString: string) {
    return this.httpClient.get(`${this.plunkAPIRootUrl}beers?beer_name=${searchString}`).toPromise();
  }
}
