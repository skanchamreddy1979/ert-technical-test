import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BeersService } from './beers.service';

describe('BeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [
        HttpClient
    ]
  }));

  it('should be created', () => {
    const service: BeersService = TestBed.get(BeersService);
    expect(service).toBeTruthy();
  });

  it('should have property pluckAPIRootUrl', () => {
    const service: BeersService = TestBed.get(BeersService);
    expect(service.plunkAPIRootUrl).toBeDefined();
  });
});
