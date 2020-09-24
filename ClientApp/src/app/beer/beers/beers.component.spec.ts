import { HttpClientTestingModule } from '@angular/common/http/testing';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BeersService } from '../services/beers.service';

import { BeersComponent } from './beers.component';
import { TestData } from '../test-data';
import { Beer } from '../beers/beers.component';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import {  MatTableDataSource } from '@angular/material/table';

describe('BeersComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;
  let beerService: BeersService;
  const mockResponse = new MatTableDataSource<Beer>();
  mockResponse.data = TestData.getBeerTestData();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeersComponent],
      providers: [BeersService],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should equal getAllBeers values', waitForAsync(() => {
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse.data));
    component.loadData();
    // component.beersDataSource.data=mockResponse.data;
    expect(component.beersDataSource.data).toEqual(mockResponse.data);
    expect(mockResponse.data.length).toEqual(3);
  }));
});
