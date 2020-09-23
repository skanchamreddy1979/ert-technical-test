import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BeerListComponent } from './beer-list.component';
import { BeerService } from '../../services/beer/beer.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Beer } from '../../interface/beer';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let beerService: BeerService;
  const mockResponse: Beer[] = [
    { id: 0, name: 'Buz', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BeerListComponent]
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
  it('should call intializeGetParam method', async(() => {
    spyOn(beerService, 'getAllBeers').and.returnValue(of(mockResponse));
    component.getAllBeers();
    expect(component.beersFiltered).toEqual(mockResponse);
    expect(component.collectionSize).toEqual(1);
    expect(beerService.getAllBeers).toHaveBeenCalled();

    expect(mockResponse.length).toEqual(1);
  }));



  it('should call intateValueChangeSubscription method', async(() => {

    component.intateValueChangeSubscription();
    component.beersAll = mockResponse;
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'Buz';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.beers.length).toBe(1);
    });
  }));

  it('should call intateValueChangeSubscription method empty beers list', async(() => {
    const mockResponse: Beer[] = [];
    component.intateValueChangeSubscription();
    component.beersAll = mockResponse;
    const el = fixture.nativeElement.querySelector('input');
    el.value = 'Buz';
    el.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.beers.length).toBe(0);
    });
  }));

});
