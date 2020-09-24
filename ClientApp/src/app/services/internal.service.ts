import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { internalApiUrls } from "../shared/app.constants";

@Injectable()
export class InternalApiService {
    constructor(private _httpClient: HttpClient) {}

    setFavoriteBeers(email: string, ids: string[]) {
        const body = {email: email, beerids: ids};
        console.log(internalApiUrls.favoriteBeersUrl, body);
        return this._httpClient.post(internalApiUrls.favoriteBeersUrl, body);
    }

    getFavoriteBeers(email: string) : Observable<number[]> {
        let params = new HttpParams().set('email', email);
        return this._httpClient.get<number[]>(internalApiUrls.favoriteBeersUrl, { params });
    }
}