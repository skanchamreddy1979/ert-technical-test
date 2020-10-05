import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';
import { BeersListComponent } from '../beers-list/beers-list.component';
import { BeersService } from '../beers.service';

import { BeersComponent } from './beers.component';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;
  // let spyBeerService = jasmine.createSpyObj('BeersService', ['getBeersByPage', 'searchBeers', 'onPagechange'])
  class BeerServiceMock {

    getBeerById(beerId) {
      return Promise.resolve([{id: '1', name: 'test beer 1'}]);
    }

    getBeersByPage(page, perPage) {
      return Promise.resolve([
        {id: '1', name: 'test beer 1'},
        {id: '2', name: 'test beer 2'},
        {id: '3', name: 'test beer 3'},
        {id: '4', name: 'test beer 4'},
      ]);
    }

    searchBeers(searchString) {
      return Promise.resolve([
          {id: '1', name: 'test beer 1'},
          {id: '2', name: 'test beer 2'}
      ]);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersListComponent, BeerDetailsComponent, BeersComponent ],
      imports: [HttpClientModule, FormsModule, NgbPaginationModule],
      providers: [{
        provide: BeersService, useValue: new BeerServiceMock()
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the variable on ngOnInit', () => {
    component.ngOnInit();
    expect(component.page).toEqual(1);
    expect(component.perPage).toEqual(10);
    expect(component.totalBeers).toEqual(0);
    expect(component.searchString).toEqual('');
    expect(component.searchResults).toEqual([]);
  });

  it('should call the get beers on ngOnInit', () => {
    const getBeersByPageSpy = spyOn(BeerServiceMock.prototype, 'getBeersByPage').and.returnValues(Promise.resolve([]));
    component.ngOnInit();
    expect(getBeersByPageSpy).toHaveBeenCalledTimes(1);
    expect(getBeersByPageSpy).toHaveBeenCalledWith(1, 10);
  });

  it('should get the beers by page from the beers service on getBeers call', () => {
    const getBeersByPageSpy = spyOn(BeerServiceMock.prototype, 'getBeersByPage').and.returnValues(Promise.resolve([]));
    component.getBeeers();
    expect(getBeersByPageSpy).toHaveBeenCalledTimes(1);
    expect(getBeersByPageSpy).toHaveBeenCalledWith(1, 10);
  });

  it('should get the beer by Id from the beers service on beer view', () => {
    const getBeerByBeerIdSpy = spyOn(BeerServiceMock.prototype, 'getBeerById').and.returnValues(Promise.resolve([]));
    const mockBeerId = 1;
    component.onView(mockBeerId);
    expect(getBeerByBeerIdSpy).toHaveBeenCalledTimes(1);
    expect(getBeerByBeerIdSpy).toHaveBeenCalledWith(mockBeerId);
  });

  it('should get the search results by beer name from the beers service on search', () => {
    const searchBeersSpy = spyOn(BeerServiceMock.prototype, 'searchBeers').and.returnValues(Promise.resolve([]));
    const mockSearchString = 'test beer';
    component.onSearch(mockSearchString);
    expect(searchBeersSpy).toHaveBeenCalledTimes(1);
    expect(searchBeersSpy).toHaveBeenCalledWith(mockSearchString);
  });
});
