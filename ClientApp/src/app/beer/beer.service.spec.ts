import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BeerService } from './beer.service';

const mockData = [
  { id: '1 ', name: 'beer 1 ', description: 'description 01', abv: '1', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '2 ', name: 'beer 2 ', description: 'description 02', abv: '3', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '3 ', name: 'beer 3 ', description: 'description 03', abv: '5', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '4 ', name: 'beer 4 ', description: 'description 04', abv: '7', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '5 ', name: 'beer 5 ', description: 'description 05', abv: '9', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '6 ', name: 'beer 6 ', description: 'description 06', abv: '11', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '7 ', name: 'beer 7 ', description: 'description 07', abv: '13', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '8 ', name: 'beer 8 ', description: 'description 08', abv: '15', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '9 ', name: 'beer 9 ', description: 'description 09', abv: '17', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '10', name: 'beer 10', description: 'description 10', abv: '19', tagLine: '_', imgUrl: '', firstBrewed: new Date() }
];

describe('BeerService', () => {

  let beerService: BeerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeerService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    beerService = TestBed.get(BeerService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(beerService).toBeTruthy();
  });

  describe('getBeers', () => {
    it('should return mock beers', () => {
      beerService.list().subscribe();

      const req = httpTestingController.expectOne('https://api.punkapi.com/v2/beers');
      expect(req.request.method).toEqual('GET');
      req.flush(mockData);

    });

    it('should return 404 when not found', () => {
      spyOn(beerService, 'handleError').and.callThrough();

      beerService.list().subscribe(
        beers => expect(beers).toEqual([]),
        () => expect(beerService.handleError).toHaveBeenCalledTimes(1)
      );

      const req = httpTestingController.expectOne('https://api.punkapi.com/v2/beers');
      req.flush('Invalid request parameters', { status: 404, statusText: 'Not found' });
    });
  });

  describe('getBeer', () => {

    it('should return a single mock beer', () => {
      beerService.getBeer(1).subscribe(
        response => expect(response).toEqual(mockData[0])
      );

      const req = httpTestingController.expectOne('https://api.punkapi.com/v2/beers/1');
      expect(req.request.method).toEqual('GET');
      req.flush(mockData[0]);
    });

    it('should return 404 when not found', () => {
      spyOn(beerService, 'handleError').and.callThrough();

      beerService.getBeer(1).subscribe(
        response => expect(response).toBeUndefined(),
        () => expect(beerService.handleError).toHaveBeenCalledTimes(1)
      );

      const req = httpTestingController.expectOne('https://api.punkapi.com/v2/beers/1');
      req.flush('Invalid request', { status: 404, statusText: 'Not found' });
    });
  });
});
