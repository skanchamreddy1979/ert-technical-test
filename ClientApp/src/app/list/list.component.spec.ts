import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../shared/beer.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  let beerServiceStub;

  beforeEach(async(() => {
    beerServiceStub = {
      beersChanged: new ReplaySubject<Beer[]>()
    };

    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [FormsModule],
      providers: [
        BeerService,
        { provide: BeerService, useValue: beerServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no beers after initialization', () => {
    expect(component.beers).toEqual([]);
  });

  it('should update list of beers when they change', fakeAsync(() => {
    beerServiceStub.beersChanged.next([ { id: 1 } as Beer, { id: 2 } as Beer, { id: 3 } as Beer]);
    tick();
    expect(component.beers.length).toBe(3);
  }));
});
