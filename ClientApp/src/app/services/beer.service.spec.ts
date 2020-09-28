import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IBeer } from '../models/beer';
import { TestData } from '../test-data';

import { BeerService } from './beer.service';

describe('BeerService', () => {
  let service: BeerService;
  let httpmock: HttpTestingController;
  const mockResponse: IBeer[] = TestData.getBeerTestData();

  beforeEach(() => TestBed.configureTestingModule(
    {
      imports: [
        HttpClientTestingModule
      ],
      providers: [BeerService]
    }
  ));

  beforeEach(() => {
    service = TestBed.inject(BeerService);
    httpmock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects service to retrieve all beers', () => {
    service.getBeers().subscribe(data => {
      expect(mockResponse.length).toEqual(5);
    });
  });

it('expects service to retrieve beer by id ', () => {
    service.getBeer(2).subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });
});
