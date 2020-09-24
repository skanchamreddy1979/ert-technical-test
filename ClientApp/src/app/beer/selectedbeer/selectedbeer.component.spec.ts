import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentRef, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BeersService } from '../services/beers.service';
import { SelectedbeerComponent } from './selectedbeer.component';
import { TestData } from '../test-data';
import { Beer } from '../beers/beers.component';
import { of } from 'rxjs';

describe('SelectedbeerComponent', () => {
  let component: SelectedbeerComponent;
  let fixture: ComponentFixture<SelectedbeerComponent>;
  let beerService: BeersService;
  const mockResponse: Beer[] = TestData.getBeerTByIdestData();
  const mockParameter = TestData.getParameter();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectedbeerComponent],
      providers: [
        BeersService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '1' } } },
        },
      ],

      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedbeerComponent);
    component = fixture.componentInstance;
    beerService = TestBed.inject(BeersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get param', () => {
    spyOn(beerService, 'getSelectedBeer')
      .withArgs(1)
      .and.returnValue(of(mockResponse));
    component.id = mockParameter;
    component.setParameter();
    component.selectedBeer = mockResponse;
    expect(component.selectedBeer).toEqual(mockResponse);
    expect(mockResponse.length).toEqual(1);
  });

  // it('value should be equal', async(() => {
  //   spyOn(beerService, 'getSelectedBeer').withArgs(1).and.returnValue(of(mockResponse));
  //   component.getSelectedBeer(1);
  // }));
});
