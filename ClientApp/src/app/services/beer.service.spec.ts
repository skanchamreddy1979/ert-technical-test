import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Beer } from '../models/beer-model';

import { BeerService } from './beer.service';

describe('BeerService', () => {
  let service: BeerService;
  let httpmock: HttpTestingController;

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

  it('expects service to fetch all beers', () => {
    const mockResponse: Beer[] = [
      { id: 0, name: '', tagline: '', first_brewed: null, description: '', image_url: '', abv: 0 }
    ];
    service.getBeers().subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });
  it('expects service to fetch beer by id ', () => {
    const mockResponse: Beer[] = [
      { id: 0, name: '', tagline: '', first_brewed: null, description: '', image_url: '', abv: 0 }
    ];
    service.getBeerDetail(0).subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });

});
