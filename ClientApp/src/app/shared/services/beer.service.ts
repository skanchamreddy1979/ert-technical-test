import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

export interface GetBeersQuery {
  page?: number;
  per_page?: number;
  search?: string;
  IsSortEnabled?: boolean;
  SortColumn?: string;
  IsDesc?: boolean;
}


export interface BeerModel {
  id: number;
  name: string;
  tagline: string;
  first_brewed: Date;
  description: string;
  image_url: string;
  abv: string;
}

export interface GetBeersResult {
  beers: BeerModel[];
}

@Injectable({
  providedIn: 'root'
})

export class BeerService {

  constructor(private apiService: ApiService) {

  }

  get(query: GetBeersQuery) {
    return this.apiService.get<GetBeersResult>(`/beers`, query);
  }

  getBeerDetails(beerId: number) {
    return this.apiService.get<BeerModel>(`/beers/${beerId}`)
  }

}
