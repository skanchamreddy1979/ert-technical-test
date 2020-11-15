import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { urlConfig } from "../app.config";
import { Beer } from "../beer.model";

@Injectable({
  providedIn: 'root'
})

export class BeerService {

  constructor(private http: HttpClient) {}

  getBeers(pageIndex: number, pageSize: number, filterValue?: string): Observable<Beer[]> {
    let params = new HttpParams()
      .set('page', pageIndex.toString())
      .set('per_page', pageSize.toString());

    if (filterValue != null) {
      params = params.set('beer_name', filterValue);
    }

    return this.http.get<Beer[]>(urlConfig.beerApiUrl, { params });
  }

  getBeerDetails(id: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${urlConfig.beerApiUrl}/${id}`);
  }
}
