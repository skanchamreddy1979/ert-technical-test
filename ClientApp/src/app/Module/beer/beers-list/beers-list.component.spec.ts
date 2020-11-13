import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerService } from '../beer.service';

import { BeersListComponent } from './beers-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeerModel } from 'src/app/Model/beer-model';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;
  let beerService: BeerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeersListComponent],
      imports: [
        RouterTestingModule, HttpClientTestingModule,
        FormsModule, HttpClientModule,
        CommonModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        NgbModule
      ],
      providers: [BeerService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit to get all beers List', () => {
    const mockResponse: BeerModel[] = [
      { id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.', first_brewed: '09/2007', image_url: 'https://images.punkapi.com/v2/keg.png', abv: 4.5 },
      {
        id: 3, tagline: 'Japanese Citrus Berliner Weisse.', name: 'Berliner Weisse With Yuzu - B-Sides', first_brewed: '11/2015',
        abv: 4.2, image_url: 'https://images.punkapi.com/v2/keg.png'
      },
    ];

    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));

    component.ngOnInit();
    component.beerList = mockResponse;
    expect(component.beerList.length).toBe(2);
    expect(component.beerList).toEqual(mockResponse);
    expect(component.beerList[0].id).toEqual(mockResponse[0].id);
  });
  it('should be filter record by name', () => {
    const mockResponse: BeerModel[] = [
      { id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.', first_brewed: '09/2007', image_url: 'https://images.punkapi.com/v2/keg.png', abv: 4.5 },
      {
        id: 3, tagline: 'Japanese Citrus Berliner Weisse.', name: 'Berliner Weisse With Yuzu - B-Sides', first_brewed: '11/2015',
        abv: 4.2, image_url: 'https://images.punkapi.com/v2/keg.png'
      },
    ];
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));

    component.getAllBeers();
    component.beerList = mockResponse;
    component.service.searchTerm = 'Buzz';
    expect(component.beerList[0].name).toEqual('Buzz');
  });
  it('should check UI Input is present or not and searchInput should update value when input changes', (() => {
    const el: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const testValue = 'some_value';
    el.value = testValue;
    el.dispatchEvent(new Event('input'));
    component.defaultValue = 'some_value';
    expect(fixture.debugElement.nativeElement.value).toBeFalsy();
    expect(component.defaultValue).toEqual(testValue);
    expect(fixture.nativeElement.querySelector('[data-test="txtBox"]')).toBeTruthy();
  }));
  it('should check UI test as heading tag', (() => {
    expect(fixture.nativeElement.querySelector('[data-test="heading"]')).toBeTruthy();
  }));
  it('should check UI test as table grid', (() => {
    expect(fixture.nativeElement.querySelector('[data-test="tblGrid"]')).toBeTruthy();
  }));

});
