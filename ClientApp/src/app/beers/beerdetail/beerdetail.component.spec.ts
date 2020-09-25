import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerService } from 'src/app/services/beer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

import { BeerdetailComponent } from './beerdetail.component';

describe('BeerdetailComponent', () => {
  let component: BeerdetailComponent;
  let fixture: ComponentFixture<BeerdetailComponent>;
  let beerService: BeerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeerdetailComponent],
      providers: [
        BeerService
      ],
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BeerdetailComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBeerById on ngOnInIt.', () => {
    const mockResponse = [{
      id: 0,
      name: 'testname',
      tagline: 'test tagline',
      first_brewed: new Date(),
      description: 'test description',
      image_url: 'testimg.png',
      abv: 4.7
    }];
    spyOn(beerService, 'getBeerDetail').and.returnValue(of(mockResponse));
    component.getBeerDetail(0);
    // component.beer = mockResponse[0];
    expect(component.beer).toEqual(mockResponse[0]);
  });

});
