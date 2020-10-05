import { TestBed } from '@angular/core/testing';
import { BeerService } from './beer.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Beer } from '../models/beer.model';

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
        service = TestBed.inject(BeerService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        // tslint:disable-next-line: no-shadowed-variable
        const service: BeerService = TestBed.inject(BeerService);
        expect(service).toBeTruthy();
    });

    it('expects service to fetch all bears', () => {
        const mockResponse: Beer[] = [
            { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
        ];
        service.getBeers().subscribe(data => {
            expect(mockResponse.length).toEqual(1);
        });
    });
    it('expects service to fetch bear by id ', () => {
      const mockResponse: Beer[] = [
            { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
        ];
      service.getBeerById(1).subscribe(data => {
            expect(mockResponse.length).toEqual(1);
        });
    });
});
