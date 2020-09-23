import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerListComponent } from './beer-list.component';
import { BeerService } from '../../../services/beer.service';
import { of } from 'rxjs/internal/observable/of';
import { Beer } from '../../../model/beer.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let beerService: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatTableModule,
        RouterModule.forRoot([])
      ],
      declarations: [ BeerListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ BeerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBeers method empty beers list', async(() => {
    const mockResponse: Beer[] = [];
    spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));
    component.getBeers();
    expect(mockResponse.length).toEqual(0);
  }));

  it('should call getBeers method', async(() => {
    const mockResponse: Beer[] = [
      { id: 0, name: '', tagLine: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];
    spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));
    component.getBeers();
    expect(mockResponse.length).toEqual(1);
  }));
});
