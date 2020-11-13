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
    beer.firstBrewed = beerDto.first_brewed;
    beer.description = beerDto.description;
    beer.imageUrl = beerDto.image_url;
    beer.abv = beerDto.abv;
    return beer;
  }
}
