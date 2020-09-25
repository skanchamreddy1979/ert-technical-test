import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Beer } from 'src/app/models/beer-model';
import { BeerService } from 'src/app/services/beer.service';
import { of } from 'rxjs';

import { ListAllbeersComponent } from './list-allbeers.component';
import { AppModule } from 'src/app/app.module';

describe('ListAllbeersComponent', () => {
  let component: ListAllbeersComponent;
  let fixture: ComponentFixture<ListAllbeersComponent>;
  let beerService: BeerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllbeersComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get list', () => {
    const mockResponse: Beer[] = [
      {
        id: 0, name: '',
        tagline: '',
        first_brewed: null,
        description: '',
        image_url: '',
        abv: 0
      }
    ];

    spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));

    component.getAllbeers();
    component.beers = mockResponse;
    expect(mockResponse[0]).toEqual(mockResponse[0]);
  });

  it('should be empty list', () => {
    const mockResponse: Beer[] = [];
    spyOn(beerService, 'getBeers').and.returnValue(of(mockResponse));

    component.getAllbeers();
    component.beers = mockResponse;
    component.totalrecords = mockResponse.length;
    expect(component.totalrecords).toEqual(0);
  });


});
