import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/http/http.service';
import { RequestType } from 'src/app/core/RequestType';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly beerUrl = 'beers';
  private readonly beerByIdUrl = 'beers/';
  constructor(private httpService: HttpService) { }

  public getAllBeers(): Observable<Beer[]> {
    return this.httpService.execute<Beer[]>(RequestType.GET, this.beerUrl, null, null);
  }

  public getBeerById(id: number): Observable<Beer[]> {
    return this.httpService.execute<Beer[]>(RequestType.GET, this.beerByIdUrl + id, null, null);
  }
}
