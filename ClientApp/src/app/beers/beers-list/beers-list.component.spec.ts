import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BeersListComponent } from './beers-list.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BeerService } from 'src/app/shared/beer.service';
import { TestData } from 'src/app/shared/testData';
import { of } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';
import { BeerModel } from 'src/app/shared/models/beer.model';



describe('BeersListComponent', () => {
  let component: BeersListComponent;
  let fixture: ComponentFixture<BeersListComponent>;
  let beerService: BeerService;
  const mockResponse: BeerModel[] = TestData.getBeerTestData();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BeersListComponent],
      imports: [
        HttpClientModule,
        DxDataGridModule,
        RouterModule.forRoot([])
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show data grid', () => {
    expect(fixture.nativeElement.querySelector('[id="datagrid"]')).toBeTruthy();
  });

  it('should call intialize GetBeers method', waitForAsync(() => {
    spyOn(beerService, 'get').and.returnValue(of(mockResponse));
    component.createDatasource();
    expect(mockResponse.length).toEqual(3);
  }));

  it('should call intialize GetBeers with zero records', waitForAsync(() => {
    const tempMock: BeerModel[] = [];
    spyOn(beerService, 'get').and.returnValue(of(tempMock));
    component.createDatasource();

    expect(tempMock.length).toEqual(0);
  }));

});
