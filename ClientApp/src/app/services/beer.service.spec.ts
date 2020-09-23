import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerService } from '../services/beer.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { Beer } from '../model/beer.model';

describe('BeerService', () => {
  let service: BeerService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [BeerService]
  }));

  beforeEach(() => {
    service = TestBed.get(BeerService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const beerService: BeerService = TestBed.get(BeerService);
    expect(beerService).toBeTruthy();
  });

  it('expects service to get all beers', () => {
    const mockResponse: Beer[] = [
      { id: 0, name: '', tagLine: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];

    service.getBeers().subscribe(data => {
     expect(mockResponse.length).toEqual(1);
   });

   const req = httpMock.expectOne(`${environment.apiUrl}`);
   expect(req.request.method).toEqual('GET');
   req.flush(mockResponse);
  });

  it('expects service to get beer details by beerid', () => {
    const mockResponse: Beer = { id: 1, name: '', tagLine: '', first_brewed: '', description: '', image_url: '', abv: 0 };

    service.getBeerById(1).subscribe(data => {
     expect(mockResponse.id).toEqual(1);
   });

   const req = httpMock.expectOne(`${environment.apiUrl}/1`);
   expect(req.request.method).toEqual('GET');
   req.flush(mockResponse);
  });
  afterEach(() => {
    httpMock.verify();
  });
});
