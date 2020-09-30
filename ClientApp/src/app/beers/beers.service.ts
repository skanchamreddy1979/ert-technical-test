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

  getBeers(page: number, pageSize: number, searchString: string) {
    let url = `${this.plunkAPIRootUrl}beers?page=${page}&per_page=${pageSize}`;
    if (searchString.length > 0) {
      url = `${url}&beer_name=${searchString}`;
    }
    return this.httpClient.get(url).toPromise();
  }
}
