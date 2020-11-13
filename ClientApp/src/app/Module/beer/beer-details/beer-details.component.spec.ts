import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BeerService } from '../beer.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerDetailsComponent } from './beer-details.component';
import { BeerModel } from 'src/app/Model/beer-model';
import { of } from 'rxjs';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;
  let beerService: BeerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeerDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
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
  it('should call ngOnInit to get details By Id .', () => {
    const mockResponse: BeerModel[] = [
      { id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.', first_brewed: '09/2007', image_url: 'https://images.punkapi.com/v2/keg.png', abv: 4.5 },
    ];
    spyOn(beerService, 'getBeerDetail').and.returnValue(of(mockResponse));
    component.beerId = 1;
    component.ngOnInit();
    expect(component.beerDetails).toEqual(mockResponse[0]);
  });
  it('should check UI test as heading tag', (() => {
    expect(fixture.nativeElement.querySelector('[data-test="heading"]')).toBeTruthy();
  }));
});
