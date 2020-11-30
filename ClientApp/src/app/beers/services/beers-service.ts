import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BeersService {
  constructor(private http: HttpClient) { }
  getBeerList(): Observable<Beer[]> {
    return this.http.get<Beer[]>(environment.apiUrl);
  }
// Below method is used to fetch Beer name by its id.
  getBeerById(id: string): Observable<Beer[]> {
    const url = environment.apiUrl + '/' + id;
    return this.http.get<Beer[]>(url);
  }
// Below method is used to fetch beer information by its name
  searchBeerName(beername: string): Observable<any> {
    return this.http.get(environment.apiUrl + '?beer_name=' + beername);
  }
}
