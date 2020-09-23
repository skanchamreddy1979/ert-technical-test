import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Beer } from 'src/app/core/models/beer.model';

@Injectable()
export class BeerService {

    constructor(private http: HttpClient) { }

    getMany(options?: Partial<{
        name?: string,
        page?: number,
        perPage?: number
    }>): Observable<Beer[]> {
        let defaultOptions = { page: 1, perPage: 50 };
        Object.assign(defaultOptions, options);

        let requestOpts = { params: { page: defaultOptions.page.toString() , per_page: defaultOptions.perPage.toString() }};

        if (options && options.name) {
            requestOpts.params['beer_name'] = options.name;
        }

        return this.http.get<Beer[]>('/brewdog/api/beers', requestOpts);
    }

    addFavourite(beers: Beer[], userId: string): Observable<any> {
        return this.http.post<any>(`/api/beer/user/${userId}`, JSON.stringify(beers), {
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        });
    }
}