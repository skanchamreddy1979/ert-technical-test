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

  public loadBeers(page?: number, perPage?: number, searchValue?: string): void {
    var parameters = this.initializePunkApiParams(page, perPage);

    if (searchValue) {
      const searchValueParameterValue: string = searchValue.replace(' ', '_');
      parameters.set(PunkApiParamType.BeerName, searchValueParameterValue);
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

  private initializePunkApiParams(page?: number, perPage?: number): Map<PunkApiParamType, string | number> {
    const parameters = new Map<PunkApiParamType, string | number>();

    if (page) {
      parameters.set(PunkApiParamType.Page, page);
    }

    if (perPage) {
      parameters.set(PunkApiParamType.PerPage, perPage);
    } 
    
    return parameters;
  }
}
