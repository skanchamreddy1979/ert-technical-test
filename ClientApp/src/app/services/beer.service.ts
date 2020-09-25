import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) {
  }

  getBeers(): Observable<any> {
    return this.http.get(environment.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBeerDetail(beerId: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/' + beerId)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message);

    } else {
      console.log(error.status);
    }
    return throwError(
      console.log('Something is wrong!'));
  }

}
