import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) {

  }

  public getAllBeers = (): Observable<any> => {
    return (this.http.get(environment.url));
  }

  public getSelectedBeer = (id: number): Observable<any> => {
    return this.http.get(environment.url + '?ids=' + id);
  }
}
