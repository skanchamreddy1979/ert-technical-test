import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerDtoMapperService } from './punk-api/beer-dto-mapper.service';
import { BeerDto } from './punk-api/beer-dto.model';
import { PunkApiParamType } from './punk-api/punk-api-param-type.enum';
import { PunkApiService } from './punk-api/punk-api.service';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  public beersChanged: Subject<Beer[]> = new Subject<Beer[]>();

  constructor(
    private beerDtoMapperService: BeerDtoMapperService,
    private punkApiService: PunkApiService
  ) { }

  public loadBeers(page?: number): void {

    const parameters = new Map<PunkApiParamType, string | number>([ 
      [PunkApiParamType.PerPage, 10]
    ]);

    if (page) {
      parameters.set(PunkApiParamType.Page, page);
    }

    this.punkApiService.getBeers(parameters)
      .pipe(
        map((beerDtos: BeerDto[]) => {
          return beerDtos.map(this.beerDtoMapperService.mapBeerDto)
        }))
      .subscribe((beers: Beer[]) => {
        this.beersChanged.next(beers);
      });
  }

  public searchBeers(searchValue: string, page?: number): void {
    var parameters = new Map<PunkApiParamType, string | number>([ 
      [PunkApiParamType.PerPage, 10]
    ]);

    if (searchValue) {
      const searchValueParameterValue: string = searchValue.replace(' ', '_');
      parameters.set(PunkApiParamType.BeerName, searchValueParameterValue);
    }

    if (page) {
      parameters.set(PunkApiParamType.Page, page);
    }    

    this.punkApiService.getBeers(parameters)
      .pipe(
        map((beerDtos: BeerDto[]) => {
          return beerDtos.map(this.beerDtoMapperService.mapBeerDto)
        }))
      .subscribe((beers: Beer[]) => {
        this.beersChanged.next(beers);
      });
  }
}
