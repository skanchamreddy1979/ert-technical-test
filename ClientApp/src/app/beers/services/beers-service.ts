import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BeersService {
  constructor(private httpClient: HttpClient) { }

  listbeers(pageIndex: number, pageSize: number = 30): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/beers?page=' + pageIndex + '&per_page=' + pageSize);
  }

  openbeer(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/beers/' + id);
  }

  searchbeer(name: string): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/beers?beer_name=' + name);
  }

}
