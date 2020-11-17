import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Beer } from '../beer.model';
import { BeerService } from '../services/beer.service';
import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent',
  () => {
    const fakeBeersService = {
      getBeerDetails: () => new Observable<Beer[]>()
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

      it('should be create',
        () => {
          expect(component).toBeTruthy();
        });
    });
