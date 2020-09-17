import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }
  getBeers(): Observable<any> {
    return this.http.get(environment.apiUrl + '/beers');
  }
  getBeerById(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/beers/' + id);
  }
}
