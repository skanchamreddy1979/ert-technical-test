import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Beer } from './beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  endpoint: string = "https://api.punkapi.com/v2";
  constructor(private http: HttpClient) { }

  list(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.endpoint}/beers`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getBeer(id: string): Observable<Beer> {
    return this.http.get<Beer>(`${this.endpoint}/beers/${id}`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `ERROR: ${error.error.message}`;
    }
    else {
      errorMessage = `SERVER ERROR: ${error.status} with message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
