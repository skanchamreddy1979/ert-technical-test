import { TestBed } from '@angular/core/testing';

import { BrewdogBeersService } from './brewdog-beers.service';

describe('BrewdogBeersService', () => {
  let service: BrewdogBeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewdogBeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
