import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;
  getBeers(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(catchError(this.handleError));
  }
  getBeerById(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(error.message);
  }

}
