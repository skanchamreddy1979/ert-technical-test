import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerSharedListComponent } from './beer-shared-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule, Router } from '@angular/router';
import { Beer } from '../../interface/beer';
import { BeerService } from '../../services/beer/beer.service';

describe('BeerListComponent', () => {
  let component: BeerSharedListComponent;
  let fixture: ComponentFixture<BeerSharedListComponent>;
  let beerService: BeerService;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      declarations: [BeerSharedListComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerSharedListComponent);
    component = fixture.componentInstance;
    beerService = TestBed.get(BeerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call intializeGetParam method', async(() => {
    const mockResponse: Beer[] = [
      { id: 0, name: '', tagline: '', first_brewed: '', description: '', image_url: '', abv: 0 }
    ];
    component.beers = mockResponse;
    component.details(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['beer-details', '1']);

  }));

  it('should call intializeGetParam method empty beer list', async(() => {
    const mockResponse: Beer[] = [];
    component.beers = mockResponse;
    component.details(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['beer-details', '1']);

  }));

});
