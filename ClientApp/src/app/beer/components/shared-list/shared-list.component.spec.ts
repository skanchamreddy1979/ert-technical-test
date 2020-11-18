import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatSortModule, MatTableDataSource, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { Beer } from '../../models/beer.model';
import { TestData } from '../test-data';

import { SharedListComponent } from './shared-list.component';

describe('SharedListComponent', () => {
  let component: SharedListComponent;
  let fixture: ComponentFixture<SharedListComponent>;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  const mockResponse = TestData.getBeerTestData();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        RouterModule.forRoot([])
      ],
      declarations: [ SharedListComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create table', () => {
    expect(fixture.nativeElement.querySelector('[data-test="beertable"]')).toBeTruthy();
  });

  it('should create paginator', () => {
    expect(fixture.nativeElement.querySelector('[data-test="paginator"]')).toBeTruthy();
  });

  it('should check default paginator size', () => {
    expect(component.paginator.pageSize).toEqual(10);
  });

  it('check beers data is getting updated properly', async(() => {
    component.beers = mockResponse;
    component.beersData = new MatTableDataSource<Beer>();
    component.ngOnChanges({beers : new SimpleChange(undefined, mockResponse, false)});
    fixture.detectChanges();
    expect(component.beersData.data.length).toBeGreaterThan(0);
  }));

  it('should call get beer by id method navigate', async(() => {
    component.showDetails(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['details', '1']);
  }));
});
