import { Injectable } from '@angular/core';
import { Beer } from '../beer.model';
import { BeerDto } from './beer-dto.model';

@Injectable({
  providedIn: 'root'
})
export class BeerDtoMapperService {

  constructor() { }

  public mapBeerDto(beerDto: BeerDto): Beer {
    const beer: Beer = new Beer();
    beer.id = beerDto.id;
    beer.name = beerDto.name;
    beer.tagLine = beerDto.tagline;

    const brewMonth: number = +beerDto.first_brewed.match(/(\d\d)\//)[1];
    const brewYear: number = +beerDto.first_brewed.match(/\/(\d{4})/)[1];
    if (brewMonth && brewYear) {
      const brewDate = new Date(brewYear, brewMonth);
      beer.firstBrewed = brewDate;
    }

    beer.description = beerDto.description;
    beer.imageUrl = beerDto.image_url;
    beer.abv = beerDto.abv;

    return beer;
  }
}
