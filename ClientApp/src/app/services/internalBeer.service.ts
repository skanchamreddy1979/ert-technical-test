import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Beer } from "../models/beer.model";

@Injectable({
  providedIn: "root"
})
export class InternalBeerService {
    constructor(private _httpClient: HttpClient) {}

    saveFavourites(email: string, beers: Beer[]) {
        return this._httpClient.post(`${environment.localBeerServiceUrl.baseUrl}/${environment.localBeerServiceUrl.beerPath}`, { listBeer: beers, userEmail: email });
    }

    getFavourites(email: string): Observable<Beer[]> {
        const params = new HttpParams().set("email", email);

        return this._httpClient.get<Beer[]>(`${environment.localBeerServiceUrl.baseUrl}/${environment.localBeerServiceUrl.beerPath}`, { params })
            .pipe(map(beer => { return beer } ));
    }
}
