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

  it('expects service to fetch all beers', () => {
    beerService.getAllBeers().subscribe(data => {
      expect(data.length).toBeGreaterThan(0);
    });
  });

  it('expects service to fetch beer by id ', () => {
    beerService.getBeerById(1).subscribe(data => {
      expect(data.length).toEqual(1);
    });
  });

  it('expects service to fetch beer with id which given as input id ', () => {
    beerService.getBeerById(5).subscribe(data => {
      expect(data[0].id).toEqual(5);
    });
  });

  it('expects service not fetch beer by id  which is not present', () => {
    beerService.getBeerById(40).subscribe(data => {
      expect(data.length).toEqual(0);
    });
  });
});
