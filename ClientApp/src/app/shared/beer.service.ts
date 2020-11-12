import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerDtoMapperService } from './beer-dto-mapper.service';
import { BeerDto } from './beer-dto.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(
    private http: HttpClient,
    private beerDtoMapperService: BeerDtoMapperService
  ) { }

  public getBeers(): Observable<Beer[]> {
    return this.http.get<BeerDto[]>('https://api.punkapi.com/v2/beers')
      .pipe(
        map((beerDtos: BeerDto[]) => {
          return beerDtos.map(this.beerDtoMapperService.mapBeerDto)
        })
      );
  }
}
