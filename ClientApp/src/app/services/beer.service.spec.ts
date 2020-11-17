import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { urlConfig } from '../app.config';
import { IBeer } from '../beer.model';
import { BeerService } from './beer.service';

describe('BeerService', () => {
  let http: HttpTestingController;
  let service: BeerService;
  const pageIndex = 0;
  const pageSize = 10;
  const expectedData: IBeer[] = [
    {
      'id': 1, 'name': 'Buzz',
      'tagline': 'A Real Bitter Experience.',
      'first_brewed': '09/2007',
      'description': 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
      'image_url': 'https://images.punkapi.com/v2/keg.png',
      'abv': 4.5
    },
    {
      'id': 2,
      'name': 'Trashy Blonde',
      'tagline': 'You Know You Should not',
      'first_brewed': '04/2008',
      'description': 'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      'image_url': 'https://images.punkapi.com/v2/2.png',
      'abv': 4.1
    },
    {
      'id': 3,
      'name': 'Berliner Weisse With Yuzu - B-Sides',
      'tagline': 'Japanese Citrus Berliner Weisse.',
      'first_brewed': '11/2015',
      'description': 'Japanese citrus fruit intensifies the sour nature of this German classic.',
      'image_url': 'https://images.punkapi.com/v2/keg.png',
      'abv': 4.2
    }
  ];

  const beersMock$ = new Observable<IBeer[]>();

  beersMock$.pipe(map(beerlist => {
    beerlist.push.apply(beerlist, expectedData);
    return beerlist;
  }));

  const httpClientStub = {
    get: () => beersMock$
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [BeerService, { provide: HttpClient, useValue: httpClientStub }]
    });

    service = TestBed.get(BeerService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected data', () => {
    expect(service.getBeers(pageIndex, pageSize)).toEqual(beersMock$);
  });

});
