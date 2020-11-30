import { TestBed } from '@angular/core/testing';
import { BeersService } from './beers-service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeerService', () => {
    let service: BeersService;
    let httpMock: HttpTestingController;
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
    beforeEach(() => TestBed.configureTestingModule(
        {
            imports: [
                HttpClientTestingModule
            ],
            providers: [BeersService]
        }
    ));
    beforeEach(() => {
        service = TestBed.get(BeersService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getAllBeers', () => {
        it('should return mock beers', () => {
            service.getBeerList().subscribe();
            const req = httpMock.expectOne('https://api.punkapi.com/v2/beers');
            expect(req.request.method).toEqual('GET');
            req.flush(mockData);
        });
    });
});
