import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { Beer } from '../../interface/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly bearUrl = '/beers';
  private readonly bearByIdUrl = '/beers/';
  constructor(private httpService: HttpService) { }

  public getAllBeers = (): Observable<Beer[]> => {
    return this.httpService.get(this.bearUrl);
  }
  public getBeerById = (id: number): Observable<Beer[]> => {
    return this.httpService.get(this.bearByIdUrl + id);
  }
}
