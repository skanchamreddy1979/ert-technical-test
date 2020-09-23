import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerDetailComponent } from './beer-detail.component';
import { BeerService } from 'src/app/services/beer.service';
import { of } from 'rxjs/internal/observable/of';

import { Beer } from 'src/app/model/beer.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;
  let beerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [ BeerDetailComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ BeerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBeerById method for non existing beerid', async(() => {
    const mockResponse: Beer = null;
    spyOn(beerService, 'getBeerById').and.returnValue(of(mockResponse));
    component.getBeer(100);
    expect(mockResponse).toEqual(null);
  }));

  it('should call getBeerById method', async(() => {
    const mockResponse: Beer = { id: 1, name: '', tagLine: '', first_brewed: '', description: '', image_url: '', abv: 0 };
    spyOn(beerService, 'getBeerById').and.returnValue(of(mockResponse));
    component.getBeer(1);
    expect(mockResponse.id).toEqual(1);
  }));
});
