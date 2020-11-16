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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger beers load with initial pagination parameters on initialization', () => {
    component.ngOnInit();
    expect(beerServiceSpy.loadBeers).toHaveBeenCalledWith(1, 10);
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

  it('should reset pagination parameters to initial values on search submit', () => {
    component.page = 3;
    component.perPage = 15;
    component.onSearchSubmit();
    expect(component.page).toBe(1);
    expect(component.perPage).toBe(10);
  });

  it('should load beers with initial pagination parameters and search value on search submit', () => {
    component.page = 3;
    component.perPage = 15;
    component.searchValue = 'Lager';
    component.onSearchSubmit();
    expect(beerServiceSpy.loadBeers).toHaveBeenCalledWith(1, 10, 'Lager');
  });

  it('should reset page to initial value on changing number of items per page', () => {
    component.page = 3;
    component.onPerPageChange();
    expect(component.page).toBe(1);
  });

  it('should load the first page of beers with specified per page number and search value on per page change', () => {
    component.page = 3;
    component.perPage = 15;
    component.searchValue = 'Lager';
    component.onPerPageChange();
    expect(beerServiceSpy.loadBeers).toHaveBeenCalledWith(1, 15, 'Lager');
  });

  it('should decrement current page on previous page click', () => {
    component.page = 3;
    component.onPreviousPageClick();
    expect(component.page).toBe(2);
  });

  it('should load the previous page of beers with specified per page number and search value on previous page click', () => {
    component.page = 3;
    component.perPage = 15;
    component.searchValue = 'Lager';
    component.onPreviousPageClick();
    expect(beerServiceSpy.loadBeers).toHaveBeenCalledWith(2, 15, 'Lager');
  });

  it('should increment current page on next page click', () => {
    component.page = 3;
    component.onNextPageClick();
    expect(component.page).toBe(4);
  });

  it('should load the previous page of beers with specified per page number and search value on previous page click', () => {
    component.page = 3;
    component.perPage = 15;
    component.searchValue = 'Lager';
    component.onNextPageClick();
    expect(beerServiceSpy.loadBeers).toHaveBeenCalledWith(4, 15, 'Lager');
  });
});
