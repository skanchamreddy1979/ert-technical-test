import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { BeerModel, GetBeersQuery, GetBeersResult } from './models/beer.model';

@Injectable({
  providedIn: 'root'
})

export class BeerService {
  constructor(private apiService: ApiService) {

  }

  get = (query: GetBeersQuery): Observable<BeerModel[]> => {
    return this.apiService.get<BeerModel[]>(`/beers`, query);
  }

  getBeerDetails = (beerId: number): Observable<BeerModel> => {
    return this.apiService.get<BeerModel>(`/beers/${beerId}`);
  }

}
