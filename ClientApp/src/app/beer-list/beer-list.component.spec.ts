import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { of } from 'rxjs';

import { BeerService } from '../services/beer.service';
import { MaterialModule } from '../shared/material.module';
import { BeerListComponent } from './beer-list.component';
import { IBeer } from '../beer.model';

describe('BeerListComponent', () => {
  const beerListMock: IBeer[] = [
    {
      'id': 1, 'name': 'Buzz',
      'tagline': 'A Real Bitter Experience.',
      'first_brewed': '09/2007',
      'description': 'A light, crisp and bitter IPA brewed with English and American hops.' +
        ' A small batch brewed only once.',
      'image_url': 'https://images.punkapi.com/v2/keg.png',
      'abv': 4.5
    },
    {
      'id': 2,
      'name': 'Trashy Blonde',
      'tagline': 'You Know You Should not',
      'first_brewed': '04/2008',
      'description': 'A titillating, neurotic, peroxide punk of a Pale Ale.' +
        ' Combining attitude, style, substance, and a little bit of low self' +
        ' esteem for good measure; what would your mother say? The seductive lure' +
        ' of the sassy passion fruit hop proves too much to resist. All that is even' +
        ' before we get onto the fact that there are no additives, preservatives, pasteurization' +
        ' or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
      'image_url': 'https://images.punkapi.com/v2/2.png',
      'abv': 4.1
    },
  ];

  const beersServiceStub = of(beerListMock);
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        BeerListComponent
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule
      ],
      providers: [
        { provide: BeerService, useValue: beersServiceStub }
      ]
    }).compileComponents());

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
