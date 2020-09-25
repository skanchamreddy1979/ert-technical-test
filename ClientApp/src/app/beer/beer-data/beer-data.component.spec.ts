import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { BeerDataComponent } from './beer-data.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerService } from '../services/beer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { TestData } from '../test-data';
import { Beer } from '../models/Beer';
import { ComponentRef, NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('BeerDataComponent', () => {
  let component: BeerDataComponent;
  let fixture: ComponentFixture<BeerDataComponent>;
  let beerService: BeerService;
  const mockData: Beer[] = TestData.getBeerByIdTestData();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        BeerService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } },
        },
      ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([]),
      ],
      declarations: [BeerDataComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDataComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call setIdFromParam method', async(() => {
    spyOn(beerService, 'getBeerById').withArgs(1).and.returnValue(of(mockData));
    component.setIdFromParam();
    expect(component.beer.id).toEqual(mockData[0].id);
    expect(component.beer).toEqual(mockData[0]);
    expect(mockData.length).toEqual(1);
  }));
});
