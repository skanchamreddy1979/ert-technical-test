import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { HttpService } from '../http/http.service';
import { RequestType } from '../RequestType';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private readonly beerUrl = '/beers';
  private readonly beerByIdUrl = '/beers/';
  constructor(private httpService: HttpService) { }

  public getAllBeers(): Observable<Beer[]> {
    return this.httpService.execute<Beer[]>(RequestType.GET, this.beerUrl, null, null);
  }
  public getBeerById(id: number): Observable<Beer> {1
    return this.httpService.execute<Beer>(RequestType.GET, this.beerByIdUrl + id, null, null);
  }
}
