import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class BeersService {
  constructor(private httpClient: HttpClient) { }

  listbeers(name: string, pageIndex: number, pageSize: number = 30): Observable<any> {
    let urlParams = null;
    if (name === null || name === '') {
      urlParams = 'page=' + pageIndex + '&per_page=' + pageSize;
    } else {
      urlParams = 'beer_name=' + name;
    }
    return this.httpClient.get(environment.apiUrl + '/beers?' + urlParams);
  }

  openbeer(id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + '/beers/' + id);
  }

}
