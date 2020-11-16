import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Beer } from 'src/app/beer/models/beer.model';
import { RequestType } from '../RequestType';

import { HttpService } from './http.service';

describe('HttpService', () => {

  let httpService: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [ HttpService ]
  }));

  beforeEach(() => {
    httpService = TestBed.get(HttpService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('should call get', () => {
    const mockResponse: Beer[] = [
      { id: '1', name: 'name', tagLine: 'tagline', firstBrewed: 'firstbrewed', description: 'description', imgUrl: '', abv: '1.1' }
    ];
    const response = httpService.execute<Beer[]>(RequestType.GET, 'beers', null, null);
    response.subscribe(resp => {
      expect(mockResponse.length).toEqual(1);
    });
  });

  it('should call post', () => {
    const mockResponse: Beer[] = [
      { id: '1', name: 'name', tagLine: 'tagline', firstBrewed: 'firstbrewed', description: 'description', imgUrl: '', abv: '1.1' }
    ];
    const response = httpService.execute<Beer[]>(RequestType.POST, 'beers', null, mockResponse);
    response.subscribe(resp => {
      expect(mockResponse.length).toEqual(1);
    });
  });

  it('should call get', () => {
    const mockResponse: Beer[] = [
      { id: '1', name: 'name', tagLine: 'tagline', firstBrewed: 'firstbrewed', description: 'description', imgUrl: '', abv: '1.1' }
    ];
    const response = httpService.execute<Beer[]>(RequestType.PUT, 'beers', null, mockResponse);
    response.subscribe(resp => {
      expect(mockResponse.length).toEqual(1);
    });
  });

  it('should call get', () => {
    const mockResponse: Beer[] = [
      { id: '1', name: 'name', tagLine: 'tagline', firstBrewed: 'firstbrewed', description: 'description', imgUrl: '', abv: '1.1' }
    ];
    const response = httpService.execute<Beer[]>(RequestType.DELETE, 'beers/1', null, null);
    response.subscribe(resp => {
      expect(mockResponse.length).toEqual(1);
    });
  });
});
