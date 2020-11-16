import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSortHeader, MatSortModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { Beer } from 'src/app/beer/models/beer.model';
import { BeerService } from 'src/app/beer/services/beer.service';
import { TestData } from '../test-data';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let beerService: BeerService;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  const mockResponse: Beer[] = TestData.getBeerTestData();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forRoot([])
      ],
      declarations: [ ListComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBeersData', async(() => {
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.allBeers.length).toEqual(3);
  }));

  it('should call apply filter with name', async(() => {
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));
    component.ngOnInit();
    component.applyFilter('Buzz');
    expect(component.beers.data.length).toEqual(1);
  }));

  it('should call apply filter with name not match', async(() => {
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));
    component.ngOnInit();
    component.applyFilter('Buzzra');
    expect(component.beers.data.length).toEqual(0);
  }));

  it('should call get beer by id method navigate', async(() => {
    component.allBeers = mockResponse;
    component.showDetails(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['details', '1']);

  }));

  it('should call get beer by id method navigate with empty beer list', async(() => {
    component.allBeers = mockResponse;
    component.showDetails(0);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['details', '0']);
  }));
});
