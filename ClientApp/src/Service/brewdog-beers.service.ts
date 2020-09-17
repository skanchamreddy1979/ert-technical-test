import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BrewdogBeers } from '../Interface/brewdog-beers';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrewdogBeersService {

  constructor(private http: HttpClient) { }

  private API_URL = environment.API_URL;
  getAllBrewdogBeers(): Observable<BrewdogBeers[]> {
    return this.http.get<BrewdogBeers[]>(this.API_URL).pipe(catchError(this.handleError));
  }
  getBrewdogBeerDetail(id: number): Observable<BrewdogBeers[]> {
    return this.http.get<BrewdogBeers[]>(`${this.API_URL}/${id}`).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.message || 'server error.');
  }

}
