import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeerService', () => {
  let service: BeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
