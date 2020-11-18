import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { Beer } from 'src/app/beer/models/beer.model';

describe('BeerService', () => {
  let beerService: BeerService;
  let httpMock: HttpTestingController;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [BeerService]
  }));

  beforeEach(() => {
    beerService = TestBed.get(BeerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch all bears', () => {
    const mockResponse: Beer[] = [
      { id: 1, name: 'name', tagLine: 'tagline', firstBrewed: 'firstbrewed', description: 'description', imgUrl: '', abv: 1.1 }
    ];

    beerService.getAllBeers().subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });

  it('expects service to fetch bear by id ', () => {
    const mockResponse: Beer[] = [
      { id: 1, name: 'name', tagLine: 'tagline', firstBrewed: 'firstbrewed', description: 'description', imgUrl: '', abv: 1.1 }
    ];

    beerService.getBeerById(1).subscribe(data => {
      expect(mockResponse.length).toEqual(1);
    });
  });
});
