import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BeerService } from './beer.service';
import { Beer } from 'src/app/models/beer.model';
import { environment } from 'src/environments/environment';

describe('BeerService', () => {
    let injector: TestBed;
    let service: BeerService;
    let httpMock: HttpTestingController;

    const testResponce = [
        {
            id: 1,
            name: 'Beer1',
            description: 'Test description 1',
            abv: 5.1,
            first_brewed: '01/01/2020',
            image_url: 'URL1',
            tagline: 'Tagline1'
        },
        {
            id: 2,
            name: 'Beer2',
            description: 'Test description 2',
            abv: 5.2,
            first_brewed: '01/02/2020',
            image_url: 'URL2',
            tagline: 'Tagline2'
        },
        {
            id: 3,
            name: 'Beer3',
            description: 'Test description 3',
            abv: 5.3,
            first_brewed: '01/03/2020',
            image_url: 'URL3',
            tagline: 'Tagline3'
        },
    ];

    const testData: Beer[] = [
        {
            id: 1,
            name: 'Beer1',
            description: 'Test description 1',
            abv: 5.1,
            firstBrewed: '01/01/2020',
            imgUrl: 'URL1',
            tagLine: 'Tagline1'
        },
        {
            id: 2,
            name: 'Beer2',
            description: 'Test description 2',
            abv: 5.2,
            firstBrewed: '01/02/2020',
            imgUrl: 'URL2',
            tagLine: 'Tagline2'
        },
        {
            id: 3,
            name: 'Beer3',
            description: 'Test description 3',
            abv: 5.3,
            firstBrewed: '01/03/2020',
            imgUrl: 'URL3',
            tagLine: 'Tagline3'
        },
    ];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [BeerService],
      });

      injector = getTestBed();
      service = injector.get(BeerService);
      httpMock = injector.get(HttpTestingController);
    });

    it('getBeers() without filter should return data', () => {
        service.getBeers(1, 3).subscribe((responce) => {
            expect(responce).toEqual(testData);
        });

        const req = httpMock.expectOne(c => c.method === 'GET' && c.url === `${environment.beerApiUrls.baseUrl}/${environment.beerApiUrls.beerPath}`);
        req.flush(testResponce);
    });

    it('getBeerById() should return only one item', () => {
        service.getBeerById(1).subscribe((responce) => {
            expect(responce).toEqual(testData[0]);
        });

        const req = httpMock.expectOne(c => c.method === 'GET' && c.url === `${environment.beerApiUrls.baseUrl}/${environment.beerApiUrls.beerPath}`);
        req.flush(testResponce);
    });

    afterEach(() => {
        httpMock.verify();
    });
});
