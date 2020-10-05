import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BeersService } from './beers.service';

describe('BeersService', () => {
  let injector: TestBed;
  let service: BeersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [ HttpClientTestingModule ],
     providers: [BeersService]
   });
   injector = getTestBed();
   service = injector.get(BeersService);
   httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
   httpMock.verify();
  });

  it('service instance should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have property pluckAPIRootUrl', () => {
    expect(service.plunkAPIRootUrl).toBeDefined();
    expect(service.plunkAPIRootUrl).toBe('https://api.punkapi.com/v2/');
  });

  it('getBeerById- should return the beer for the given beerId', () => {
    const mockBeer = { id: 2, name: 'test beer', tagline: 'test' };

    service.getBeerById(1).then((res) => {
      expect(res[0]).toEqual(mockBeer);
    });

    const req = httpMock.expectOne('https://api.punkapi.com/v2/beers/1');
    expect(req.request.method).toBe('GET');
    req.flush([mockBeer]);
  });

  it('getBeerByPage- should return the beers from the given page', () => {
    const mockPage = 1;
    const mockPerPage = 10;

    const mockBeers = [
      { id: 1, name: 'test beer 1', tagline: 'b1' },
      { id: 2, name: 'test beer 2', tagline: 'b2' }
    ];

    service.getBeersByPage(mockPage, mockPerPage).then((res) => {
      expect(res).toEqual(mockBeers);
    });

    const req = httpMock.expectOne(`https://api.punkapi.com/v2/beers?page=${mockPage}&per_page=${mockPerPage}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBeers);
  });

  it('searchBeers- should return the beers from search API', () => {
    const searchString = 'test beer';
    const mockBeers = [
      { id: 1, name: 'test beer 1', tagline: 'b1' },
      { id: 2, name: 'test beer 2', tagline: 'b2' }
    ];

    service.searchBeers(searchString).then((res) => {
      expect(res).toEqual(mockBeers);
    });

    const req = httpMock.expectOne(`https://api.punkapi.com/v2/beers?beer_name=${searchString}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBeers);
  });
});
