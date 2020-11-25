import { Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, Observer, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

import { ListComponent } from './list.component';

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, RouterLinkDirectiveStub],
      providers: [
        { provide: BeerService, useClass: MockBeerService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
      })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have zero beers initially', fakeAsync(() => {
    let mockBeerService = fixture.debugElement.injector.get(BeerService);
    let stub = spyOn(mockBeerService, 'list').and.callFake(() => {
      return of([]).pipe(delay(300));
    });

    component.getBeers(1);
    tick(300);

    expect(component.beers).toEqual([]);
  }));

  it('should return beers', fakeAsync(() => {
    let mockBeerService = fixture.debugElement.injector.get(BeerService);
    spyOn(mockBeerService, 'list').and.callFake(() => {
      return of(mockBeers).pipe(delay(300));
    });

    component.getBeers(2);
    tick(300);

    expect(component.beers.length).toEqual(10);
  }));

  it('should have the correct route for first beer', () => {
    let mockBeerService = jasmine.createSpyObj(['list']);
    mockBeerService.list.and.returnValue(of(mockBeers));
    fixture.detectChanges();

    const beerElements = fixture.debugElement.queryAll(By.css('.beer'));
    let routerLink = beerElements[0].query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    beerElements[0].query(By.css('a')).triggerEventHandler('click', null);
    expect(routerLink.navigatedTo).toBe('/detail/1');
  })

});

let mockBeers = [
  { id: '1', name: 'beer 1 ', description: 'description 01', abv: '1', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '2', name: 'beer 2 ', description: 'description 02', abv: '3', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '3', name: 'beer 3 ', description: 'description 03', abv: '5', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '4', name: 'beer 4 ', description: 'description 04', abv: '7', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '5', name: 'beer 5 ', description: 'description 05', abv: '9', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '6', name: 'beer 6 ', description: 'description 06', abv: '11', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '7', name: 'beer 7 ', description: 'description 07', abv: '13', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '8', name: 'beer 8 ', description: 'description 08', abv: '15', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '9', name: 'beer 9 ', description: 'description 09', abv: '17', tagLine: '_', imgUrl: '', firstBrewed: new Date() },
  { id: '10', name: 'beer 10', description: 'description 10', abv: '19', tagLine: '_', imgUrl: '', firstBrewed: new Date() }
];

class MockBeerService {
  list() {
    return Observable.create((observer: Observer<Array<Beer>>) => {
      observer.next(mockBeers);
    })
  }
}