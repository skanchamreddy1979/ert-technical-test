import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../models/beer.model';
import { punkApiUrls } from '../shared/app.constants';

@Injectable()
export class PunkApiService {
    constructor(private _httpClient: HttpClient) {}

    getBeers(pageNumber: number, pageSize: number, searchingBeerName?: string): Observable<Beer[]> {
        let params = new HttpParams();

        if (pageNumber > 0) {
            params = params.set('page', pageNumber.toString());
        }

        if (pageSize > 0) {
            params = params.set('per_page', pageSize.toString());
        }

        if (searchingBeerName != null && searchingBeerName.length > 1) {
            params = params.set('beer_name', searchingBeerName);
        }

        return this._httpClient.get<Beer[]>(punkApiUrls.punkApiBeersUrl, { params });
    }

    getBeerById(beerId: number): Observable<Beer> {
        const params = new HttpParams().set('ids', beerId.toString());
        return this._httpClient.get<Beer>(punkApiUrls.punkApiBeersUrl, { params })
            .pipe(map(beers => {
                return beers[0];
            }));
    }

}
