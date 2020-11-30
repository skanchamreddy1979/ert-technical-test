import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})

export class PunkAPIService {

  private beerApiUrl = 'https://api.punkapi.com/v2/';  // URL to Core web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // Return all beer set
  getAllBeers(): Observable<any> {
    return this.http.get<Beer>(this.beerApiUrl + 'beers').pipe(
      catchError(this.handleError)
    );
  }

  // Get and return by id
  getBeerbyId(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.beerApiUrl}beers/${id}`).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // Handling the HTTP Response Error
  handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `ERROR: ${error.error.message}`;
    } else {
      errorMessage = `SERVER ERROR: ${error.status} with message: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  private log(message: string) {
    this.messageService.add(`BeerService: ${message}`);
  }

}
