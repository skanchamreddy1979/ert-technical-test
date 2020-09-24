import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteBeerRequest } from '../models/favorite_beers.model';
import { internalApiUrls } from '../shared/app.constants';

@Injectable()
export class InternalApiService {
    constructor(private _httpClient: HttpClient) {}

    saveFavoriteBeers(request: FavoriteBeerRequest) {
        console.log(request);
        return this._httpClient.post(internalApiUrls.favoriteBeersUrl, request);
    }

    getFavoriteBeers(email: string): Observable<number[]> {
        const params = new HttpParams().set('email', email);
        return this._httpClient.get<number[]>(internalApiUrls.favoriteBeersUrl, { params });
    }
}
