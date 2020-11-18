import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { Beer } from 'src/app/beer/models/beer.model';
import { BeerService } from 'src/app/beer/services/beer.service';
import { TestData } from '../test-data';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let beerService: BeerService;
  const mockResponse: Beer[] = TestData.getBeerTByIdestData();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [ DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create beer details heading', () => {
    expect(fixture.nativeElement.querySelector('[data-test="heading"]')).toBeTruthy();
  });

  it('should create beer details', () => {
    expect(fixture.nativeElement.querySelector('[data-test="beerdetails"]')).toBeFalsy();
  });

  it('should create beer name', () => {
    expect(fixture.nativeElement.querySelector('[data-test="beername"]')).toBeFalsy();
  });

  it('should create beer abv', () => {
    expect(fixture.nativeElement.querySelector('[data-test="beerabv"]')).toBeFalsy();
  });

  it('should create beer description', () => {
    expect(fixture.nativeElement.querySelector('[data-test="beerdescription"]')).toBeFalsy();
  });

  it('should create goto list', () => {
    expect(fixture.nativeElement.querySelector('[data-test="gotolist"]')).toBeFalsy();
  });

  it('should call get beer by id method', async(() => {
    spyOn(beerService, 'getBeerById').and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(component.beer.name).toEqual('name');
  }));
});
