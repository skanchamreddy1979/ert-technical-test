import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerListComponent } from './beer-list.component';
import { BeerService } from '../../services/beer.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IBeer } from '../../models/beer';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { TestData } from '../../test-data';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let beerService: BeerService;
  const mockResponse: IBeer[] = TestData.getBeerTestData();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BeerListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setDisplayedBeers method', async(() => {
    spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));
    component.setDisplayedBeers();
    expect(component.filteredBeers).toEqual(mockResponse);
    expect(component.displayedBeers.length).toEqual(5);
    expect(beerService.getBeers).toHaveBeenCalled();
    expect(mockResponse.length).toEqual(5);
  }));

  it('should filter one beer', async(() => {
    spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));
    component.setDisplayedBeers();
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'Trashy';
    el.dispatchEvent(new Event('input'));
    fixture.whenStable().then(() => {
      expect(component.filteredBeers.length).toBe(1);
    });
  }));

  it('should call getAllBeer method empty beers list', async(() => {
    const mockResponse: IBeer[] = [];
    component.getAllBeer();
    component.beers = mockResponse;
    fixture.whenStable().then(() => {
      expect(component.beers.length).toBe(0);
    });
  }));

});
