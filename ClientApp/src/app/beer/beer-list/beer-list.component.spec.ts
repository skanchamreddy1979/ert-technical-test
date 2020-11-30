import { NO_ERRORS_SCHEMA, Input, HostListener } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BeerListComponent } from './beer-list.component';
import { PunkAPIService } from '../../shared/punk-api.service';
import { delay } from 'rxjs/operators';
import { of, Observable, Observer } from 'rxjs';
import { Beer } from '../../beer.model';
import { MatTableModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, Router } from '@angular/router';

export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;
  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

const mockBeers = [
  { id: '1', name: 'beer1 ', description: 'descrip01', abv: '11', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '2', name: 'beer2 ', description: 'descrip02', abv: '12', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '3', name: 'beer3 ', description: 'descrip03', abv: '15', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '4', name: 'beer4 ', description: 'descrip04', abv: '17', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '5', name: 'beer5 ', description: 'descrip05', abv: '19', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '6', name: 'beer6 ', description: 'descrip06', abv: '11', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '7', name: 'beer7 ', description: 'descrip07', abv: '13', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '8', name: 'beer8 ', description: 'descrip08', abv: '15', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '9', name: 'beer9 ', description: 'descrip09', abv: '17', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() },
  { id: '10', name: 'beer10', description: 'descrip10', abv: '19', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() }
];

class MockBeerService {
  list() {
    return new Observable((observer: Observer<Array<Beer>>) => {
      observer.next(mockBeers);
    });
  }
}

describe('BeerListComponent Test Case', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let mockBeerService;
  // let MockRouter;
  let mockBeer;

  beforeEach(async(() => {
    mockBeer = { id: '1', name: 'beer1 ', description: 'descrip 01', abv: '1', tagLine: 'tb', imgUrl: './abc', firstBrewed: new Date() };
    mockBeerService = jasmine.createSpyObj(['getAllBeers']);

    TestBed.configureTestingModule({
      imports: [MatTableModule, HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [BeerListComponent],
      providers: [
        // { provide: PunkAPIService, useValue: MockBeerService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BeerListComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return beers', fakeAsync(() => {
    const injmockBeerService = fixture.debugElement.injector.get(PunkAPIService);
    spyOn(injmockBeerService, 'getAllBeers').and.callFake(() => {
      return of(mockBeers).pipe(delay(300));
    });

    component.getBeers();
    tick(300);

    expect(component.beers.length).toEqual(10);
  }));

  it('should have empty for initially', fakeAsync(() => {
    const mockEmptyBeerService = fixture.debugElement.injector.get(PunkAPIService);
    spyOn(mockEmptyBeerService, 'getAllBeers').and.callFake(() => {
      return of([]).pipe(delay(300));
    });

    component.getBeers();
    tick(300);

    expect(component.beers).toEqual([]);
  }));

});
