import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beersUrl = 'beers';

  constructor(private http: HttpClient) { }

  getAllBeers() {
    return this.http.get(`${environment.baseBeerApiUrl}/${this.beersUrl}`);
  }
}
