import { TestBed } from '@angular/core/testing';
import { BeersService } from './beers-service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeerService', () => {
    let service: BeersService;
    let httpMock: HttpTestingController;
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

});
