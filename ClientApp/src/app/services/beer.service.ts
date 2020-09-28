import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IBeer } from '../models/beer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BeerService{

    private beersApiUrl = 'https://api.punkapi.com/v2/beers';

    constructor(private http: HttpClient){}

    getBeers(): Observable<IBeer[]> {
        return this.http.get<IBeer[]>(this.beersApiUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getBeer(id: number): Observable<IBeer | undefined> {
        return this.getBeers()
        .pipe(
            map((beers: IBeer[]) => beers.find(p => p.id === id))
        );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;

        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        console.error(errorMessage);
        return throwError(errorMessage);
    }
}

