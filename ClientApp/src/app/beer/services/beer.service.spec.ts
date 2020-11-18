import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeerService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService],
    })
  );

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  it('should have getBeer function', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service.getBeer).toBeTruthy();
  });

  it('should have getAllBeers function', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service.getAllBeers).toBeTruthy();
  });

});
