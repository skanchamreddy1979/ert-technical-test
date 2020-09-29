import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { getBeerModelFromDto } from './../formatters/beerModelFormatter';
import { Beer } from '../models/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
    constructor(private _httpClient: HttpClient) {}

    getBeers(page: number, pageSize: number, nameFilter?: string): Observable<Beer[]> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('per_page', pageSize.toString());
        if (nameFilter) {
            params = params.set('beer_name', nameFilter);
        }

        return this._httpClient.get<Beer[]>(`${environment.beerApiUrls.baseUrl}/${environment.beerApiUrls.beerPath}`, { params })
            .pipe(map(beers => {
                return beers.map(beer => getBeerModelFromDto(beer) );
            }));
    }

    getBeerById(beerId: number): Observable<Beer> {
        const params = new HttpParams().set('ids', beerId.toString());

        return this._httpClient.get<Beer>(`${environment.beerApiUrls.baseUrl}/${environment.beerApiUrls.beerPath}`, { params })
            .pipe(map(beer => getBeerModelFromDto(beer[0]) ));
    }
}
