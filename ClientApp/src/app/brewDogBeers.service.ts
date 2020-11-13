import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Beer } from "./beer.model";
import { requestUrls } from "./app.config";

@Injectable()
export class BrewDogBeerService {

    constructor(private http: HttpClient) { }

    getBeers() : Observable<Beer[]> {
        return this.http.get<Beer[]>(requestUrls.beersUrl);
    }
}