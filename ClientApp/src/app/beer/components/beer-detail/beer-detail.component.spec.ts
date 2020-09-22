import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerDetailComponent } from './beer-detail.component';
import { BeerService } from '../../services/beer/beer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Beer } from '../../interface/beer';
import { of } from 'rxjs';

fdescribe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;
  let fixture: ComponentFixture<BeerDetailComponent>;
  let beerService: BeerService;

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
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call intializeGetParam method', async(() => {
    let mockResponse: Beer[] = [
      { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];

    spyOn(beerService, 'getBeerById').and.returnValue(of(mockResponse));

    component.intializeGetParam();
    component.beer = mockResponse[0];
    expect(mockResponse[0]).toEqual(mockResponse[0]);
  }));

});
