import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { BeerDetailsResolverService } from './beer-details-resolver.service';

describe('BeerDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule 
    ]
  }));

  it('should be created', () => {
    const service: BeerDetailsResolverService = TestBed.get(BeerDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
