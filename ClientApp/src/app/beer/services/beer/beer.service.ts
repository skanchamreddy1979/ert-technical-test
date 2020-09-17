import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpService: HttpService) { }

  getAllBeers(): Observable<any> {
    return this.httpService.get('/beers');
  }
  getBeerById(id: number): Observable<any> {
    return this.httpService.get('/beers/' + id);
  }
}
