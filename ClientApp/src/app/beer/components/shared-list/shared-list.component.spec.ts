import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortModule, MatTableDataSource, MatTableModule } from '@angular/material';
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

  it('should call get beers', async(() => {
    component.beers = new MatTableDataSource<Beer>();
    component.beers.data = mockResponse;
    component.beersData = new MatTableDataSource<Beer>();
    component.ngDoCheck();
    expect(component.beersData.data.length).toBeGreaterThan(0);

  }));

  it('should call get beer by id method navigate', async(() => {
    component.showDetails(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['details', '1']);

  }));

  it('should call get beer by id method navigate with empty beer list', async(() => {
    component.showDetails(0);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['details', '0']);
  }));
});
