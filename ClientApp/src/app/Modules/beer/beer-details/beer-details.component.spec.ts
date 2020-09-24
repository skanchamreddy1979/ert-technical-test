import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { BeerModel } from 'src/app/Models/beer-model';
import { BeerService } from '../beer.service';

import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  let beerService: BeerService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // declarations: [BeerDetailsComponent],
      imports: [AppModule],
      providers: [BeerService, { provide: APP_BASE_HREF, useValue: '/' }]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should beer details By Id .', () => {
    const mockResponse: BeerModel[] = [{ id: 1, name: 'Amol', image_url: 'string', abv: '', tagline: 'string', first_brewed: '09/2010' }];
    spyOn(beerService, 'getBeerDetail').and.returnValue(of(mockResponse));
    component.getBeersDetail(1);
    expect(component.beerDetails).toEqual(mockResponse[0]);
  });

});
