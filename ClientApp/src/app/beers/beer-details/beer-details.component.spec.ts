import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeersService } from '../beers.service';

import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  class mockBeerService {
    plunkAPIRootUrl: ""
    getBeerById() { }
    getBeersByPage() { }
    searchBeers() {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent ],
      providers: [
        { provide: BeersService, useClass: mockBeerService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
