import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { BeerService } from 'src/app/shared/beer.service';

import { ListControlComponent } from './list-control.component';

describe('ListControlComponent', () => {
  let component: ListControlComponent;
  let fixture: ComponentFixture<ListControlComponent>;

  let beerServiceSpy: jasmine.SpyObj<BeerService>;

  beforeEach(async(() => {
    beerServiceSpy = {
      ...jasmine.createSpyObj('BeerService', ['loadBeers']),
      beersChanged: new ReplaySubject<Beer[]>()
    }

    TestBed.configureTestingModule({
      declarations: [ ListControlComponent ],
      imports: [FormsModule],
      providers: [
        { provide: BeerService, useValue: beerServiceSpy }
      ]
    })
    .compileComponents();

    beerServiceSpy = TestBed.get(BeerService) as jasmine.SpyObj<BeerService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect the last page if number of beers is less than page size', fakeAsync(() => {
    beerServiceSpy.beersChanged.next([ { id: 1 } as Beer, { id: 2 } as Beer, { id: 3 } as Beer]);
    tick();
    expect(component.reachedLastPage).toBe(true);
  }));

  it('should not indicate that it is the last page if number of beers is equal to page size', fakeAsync(() => {
    component.perPage = 3;
    beerServiceSpy.beersChanged.next([ { id: 1 } as Beer, { id: 2 } as Beer, { id: 3 } as Beer]);
    tick();
    expect(component.reachedLastPage).toBe(false);
  }));
});
