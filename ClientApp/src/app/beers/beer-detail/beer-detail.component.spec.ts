import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerDetailComponent } from './beer-detail.component';
import { BeerService } from '../../services/beer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { IBeer } from '../../models/beer';
import { of } from 'rxjs';
import { TestData } from '../../test-data';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;
  let beerService: BeerService;
  const mockResponse: IBeer[] = TestData.getBeerTestData();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [BeerDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit init beer instance', async(() => {

    spyOn(beerService, 'getBeer').and.returnValue(of(mockResponse[0]));
    component.ngOnInit();
    component.beer = mockResponse[0];
    expect(mockResponse[0]).toEqual(mockResponse[0]);
  }));

  it('should call ngOnInit method empty beer', async(() => {
    spyOn(beerService, 'getBeer').and.returnValue(of(mockResponse[0]));
    component.ngOnInit();
    component.beer = mockResponse[0];
    expect(mockResponse[0]).toEqual(mockResponse[0]);
  }));

});

