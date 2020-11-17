import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { Observable } from 'rxjs';
import { IBeer } from '../beer-models/beer/beer.model';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer-services/beer.service';

describe('BeerDetailsComponent',
  () => {
    const fakeBeersService = {
      getBeerDetails: () => new Observable<IBeer[]>()
    }

    let component: DetailComponent;
    let fixture: ComponentFixture<DetailComponent>;

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
        declarations: [DetailComponent],
        providers: [
          { provide: ActivatedRoute, useValue: fakeRoute },
          { provide: BeerService, useValue: fakeBeersService }
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DetailComponent);
      component = fixture.componentInstance;

      fixture.detectChanges();
    });

    it('should create',
      () => {
        expect(component).toBeTruthy();
      });
  });
