import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerDtoMapperService } from './beer-dto-mapper.service';
import { BeerDto } from './beer-dto.model';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beers: Beer[] = [];
  public beersChanged: Subject<Beer[]> = new Subject<Beer[]>();

  constructor(
    private http: HttpClient,
    private beerDtoMapperService: BeerDtoMapperService
  ) { }

  public loadBeers() {
    return this.http.get<BeerDto[]>('https://api.punkapi.com/v2/beers')
      .pipe(
        map((beerDtos: BeerDto[]) => {
          return beerDtos.map(this.beerDtoMapperService.mapBeerDto)
        }))
      .subscribe((beers: Beer[]) => {
        this.beersChanged.next(beers);
      });
  }

  public searchBeers(searchValue: string) {
    const searchValueParameterValue: string = searchValue.replace(' ', '_');
    return this.http.get<BeerDto[]>('https://api.punkapi.com/v2/beers', { params: new HttpParams().set('beer_name', searchValueParameterValue)})
      .pipe(
        map((beerDtos: BeerDto[]) => {
          return beerDtos.map(this.beerDtoMapperService.mapBeerDto)
        }))
      .subscribe((beers: Beer[]) => {
        this.beersChanged.next(beers);
      });
  }
}
