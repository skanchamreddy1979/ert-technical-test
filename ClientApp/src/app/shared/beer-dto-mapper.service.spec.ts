import { TestBed } from '@angular/core/testing';

import { BeerDtoMapperService } from './beer-dto-mapper.service';

describe('BeerDtoMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerDtoMapperService = TestBed.get(BeerDtoMapperService);
    expect(service).toBeTruthy();
  });
});
