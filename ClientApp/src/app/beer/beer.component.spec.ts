import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { BeerComponent } from './beer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerService } from './services/beer.service';
import { FormControl, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { of } from 'rxjs';
import { TestData } from './test-data';
import { Beer } from './models/Beer';
import { ComponentRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';

fdescribe('BeerComponent', () => {
  let component: BeerComponent;
  let fixture: ComponentFixture<BeerComponent>;
  let beerService: BeerService;
  const mockData: Beer[] = TestData.getBeerTestData();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadBeers method', async(() => {
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockData));
    component.loadBeers();
    expect(mockData.length).toEqual(3);
    expect(component.listBeers[0]).toEqual(mockData[0]);
  }));
});
