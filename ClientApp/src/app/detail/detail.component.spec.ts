import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        { provide: BeerService, useClass: MockBeerService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (id: number) => { id: 1 } } } } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
      })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a beer', fakeAsync(() => {
    let mockBeerService = fixture.debugElement.injector.get(BeerService);
    spyOn(mockBeerService, 'getBeer').and.callFake(() => {
      return of(mockBeer).pipe(delay(300));
    });

    component.getBeer();
    tick(300);
    expect(component.beer).toBeTruthy();
  }));

});

let mockBeer = { id: '1 ', name: 'beer 1 ', description: 'description 01', abv: '1', tagLine: '_', imgUrl: '', firstBrewed: new Date() };

class MockBeerService {
  getBeer() {
    return Observable.create((observer: Observer<Beer>) => {
      observer.next(mockBeer);
    })
  }
}