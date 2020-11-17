import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { of } from 'rxjs';

import { BeerDetailsComponent } from './beer-details.component';
import { BeerService } from '../services/beer.service';
import { IBeer } from '../beer.model';



describe('BeerDetailsComponent',
  () => {
    const beerDetailsMock: IBeer[] = [
      {
        'id': 1, 'name': 'Buzz',
        'tagline': 'A Real Bitter Experience.',
        'first_brewed': '09/2007',
        'description': 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
        'image_url': 'https://images.punkapi.com/v2/keg.png',
        'abv': 4.5
      },
    ];

    const fakeBeersService = {
      getBeerDetails: () => of(beerDetailsMock),
    };

    let component: BeerDetailsComponent;
    let fixture: ComponentFixture<BeerDetailsComponent>;

    const fakeRoute = {
      snapshot: {
        paramMap: {
          get: () => 1,
        },
      }
    };

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterModule.forRoot([])
        ],
        declarations: [BeerDetailsComponent],
        providers: [
          { provide: ActivatedRoute, useValue: fakeRoute },
          { provide: BeerService, useValue: fakeBeersService }
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(BeerDetailsComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should be created',
      () => {
        expect(component).toBeTruthy();
      });
  });
