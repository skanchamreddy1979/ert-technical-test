import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Beer } from '../models/beer.model';
import { HttpClientService } from '../shared/services/httpclient.service';

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  constructor(private httpClientService: HttpClientService) { }

  private apiUrl = environment.apiUrl;
  getBeers(beerName: string = ''): Observable<Beer[]> {
    let queryString = null;
    if (!(beerName === null || beerName === '')) {
      queryString = 'beer_name=' + beerName;
    }
    let urlPath = queryString === null ? environment.apiUrl + '/beers' : environment.apiUrl + '/beers?' + queryString;
    return this.httpClientService.get(urlPath);
  }
  getBeerById(id: number): Observable<Beer> {
    return this.httpClientService.get( this.apiUrl + '/beers/' + id).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.message);
  }
}
