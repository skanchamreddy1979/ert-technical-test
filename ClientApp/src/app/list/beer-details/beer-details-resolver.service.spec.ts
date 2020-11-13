import { TestBed } from '@angular/core/testing';

import { BeerDetailsResolverService } from './beer-details-resolver.service';

describe('BeerDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerDetailsResolverService = TestBed.get(BeerDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
