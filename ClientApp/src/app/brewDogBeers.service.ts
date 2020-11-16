import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Beer } from "./beer.model";
import { requestUrls } from "./app.config";

@Injectable()
export class BrewDogBeerService {

    constructor(private http: HttpClient) { }

    getBeers(pageSize: number, pageNumber: number, searchByNameString?: string): Observable<Beer[]> {
        let params = new HttpParams();

        if (searchByNameString != null && searchByNameString != '') {
            params = params
                .set('beer_name', searchByNameString);
        }

        params = params
            .set('page', pageNumber.toString())
            .set('per_page', pageSize.toString());

        return this.http.get<Beer[]>(requestUrls.beersUrl, { params });
    }
}