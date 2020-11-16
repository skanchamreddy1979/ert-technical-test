import { TestBed } from '@angular/core/testing';

import { BeerDtoMapperService } from './beer-dto-mapper.service';
import { BeerDto } from './beer-dto.model';

describe('BeerDtoMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerDtoMapperService = TestBed.get(BeerDtoMapperService);
    expect(service).toBeTruthy();
  });

  it('should create Beer instance when BeerDto is provided', () => {
    const beerDto = {
      id: 1,
      name: 'BeerName',
      tagline: 'BeerTagLine',
      first_brewed: 'BeerFirstBrewed',
      description: 'BeerDescription',
      image_url: 'BeerImageUrl',
      abv: 5.0,
    } as BeerDto;

    const service: BeerDtoMapperService = TestBed.get(BeerDtoMapperService);

    const beer = service.mapBeerDto(beerDto);
    expect(beer.id).toBe(1);
    expect(beer.name).toBe('BeerName');
    expect(beer.tagLine).toBe('BeerTagLine');
    expect(beer.firstBrewed).toBe('BeerFirstBrewed');
    expect(beer.description).toBe('BeerDescription');
    expect(beer.imageUrl).toBe('BeerImageUrl');
    expect(beer.abv).toBe(5.0);
  });
});
