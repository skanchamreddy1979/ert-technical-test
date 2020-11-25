import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../beer.service';


import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let mockBeerService;
  let mockBeer;

  beforeEach(async(() => {
    mockBeer = { id: '1 ', name: 'beer 1 ', description: 'description 01', abv: '1', tagLine: '_', imgUrl: '', firstBrewed: new Date() };
    mockBeerService = jasmine.createSpyObj(['getBeer']);

    TestBed.configureTestingModule({
      declarations: [DetailComponent],
      providers: [
        { provide: BeerService, useValue: mockBeerService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => { id: 1 } } } } }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    TestBed.compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DetailComponent);
        component = fixture.componentInstance;
      })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});