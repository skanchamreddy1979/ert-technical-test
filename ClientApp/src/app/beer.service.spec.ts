import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { Beer } from './beer.model';


const mockData = [
  { id: '1', name: 'Beer 1' },
  { id: '2', name: 'Beer 2' },
  { id: '3', name: 'Beer 3' }
] as Beer[];

describe('Beer Service', () => {

  let beerService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
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
      spyOn(beerService, 'handleError').and.callThrough();
      spyOn(beerService, 'log').and.callThrough();

      beerService.list().subscribe(
        beers => expect(beers.length).toEqual(mockData.length),
        fail
      );

      const req = httpTestingController.expectOne(beerService.endpoint);
      expect(req.request.method).toEqual('GET');

      req.flush(mockData);
    });

    it('should turn 404 into a user-friendly error', () => {
      spyOn(beerService, 'handleError').and.callThrough();
      spyOn(beerService, 'log').and.callThrough();

      const msg = 'Deliberate 404';
      beerService.list().subscribe(
        beers => expect(beers).toEqual([]),
        fail
      );

      const req = httpTestingController.expectOne(beerService.endpoint);
      req.flush('Invalid request parameters', { status: 404, statusText: 'Bad Request' });

      expect(beerService.handleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('getBeer', () => {

    it('should return a single mock beer', () => {
      spyOn(beerService, 'handleError').and.callThrough();

      beerService.getBeer(mockData[0].id).subscribe(
        response => expect(response).toEqual(mockData[0]),
        fail
      );

      const req = httpTestingController.expectOne(`${beerService.endpoint}/${mockData[0].id}`);
      expect(req.request.method).toEqual('GET');

      req.flush(mockData[0]);
    });

    it('should fail gracefully on error', () => {
      spyOn(beerService, 'handleError').and.callThrough();

      beerService.getBeer(mockData[0].id).subscribe(
        response => expect(response).toBeUndefined(),
        fail
      );

      const req = httpTestingController.expectOne(`${beerService.endpoint}/${mockData[0].id}`);
      expect(req.request.method).toEqual('GET');

      req.flush('Invalid request', { status: 404, statusText: 'Not found' });

      expect(beerService.handleError).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleError', () => {
    it('should handle error gracefully', () => {

      spyOn(beerService, 'handleError').and.callThrough();

      beerService.getBeer(mockData[0].id).subscribe(
        response => expect(response).toBeUndefined(),
        fail
      );

      const req = httpTestingController.expectOne(`${beerService.endpoint}/${mockData[0].id}`);
      expect(req.request.method).toEqual('GET');

      req.flush('Invalid request', { status: 404, statusText: 'Not found' });

      expect(beerService.handleError).toHaveBeenCalledTimes(1);
    });
  });
});
