import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Beer } from 'src/app/models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class InternalBeerService {
    baseUrl = environment.localBeerServiceUrl.baseUrl;

    constructor(private _httpClient: HttpClient) {}

    saveFavourites(email: string, beers: Beer[]) {
        return this._httpClient
            .post(`${this.baseUrl}/${environment.localBeerServiceUrl.beerPath}`, { listBeer: beers, userEmail: email });
    }

    getFavourites(email: string): Observable<Beer[]> {
        const params = new HttpParams().set('email', email);

        return this._httpClient
            .get<Beer[]>(`${this.baseUrl}/${environment.localBeerServiceUrl.beerPath}`, { params })
            .pipe(map(beer => beer ));
    }
}
