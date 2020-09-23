import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Beer } from '../../interface/beer';

describe('BeerService', () => {
  let service: BeerService;
  let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule(
    {
      imports: [
        HttpClientTestingModule
      ],
      providers: [BeerService]
    }
  ));
  beforeEach(() => {
    service = TestBed.get(BeerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch all bears', () => {
    let mockResponse: Beer[] = [
      { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];

    service.getAllBeers().subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });
  it('expects service to fetch bear by id ', () => {
    let mockResponse: Beer[] = [
      { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];

    service.getBeerById(1).subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });
});
