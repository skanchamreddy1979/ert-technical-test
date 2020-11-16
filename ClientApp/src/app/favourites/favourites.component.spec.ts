import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';
import { BeerService } from '../shared/beer.service';
import { User } from '../shared/user/user.model';
import { UserService } from '../shared/user/user.service';

import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  let userServiceStub: any;
  let beerServiceSpy: jasmine.SpyObj<BeerService>;

  beforeEach(async(() => {
    userServiceStub = {
      user: new ReplaySubject<User>()
    };

    beerServiceSpy = jasmine.createSpyObj('BeerService', ['loadBeersByIds']);

    TestBed.configureTestingModule({
      declarations: [ FavouritesComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: UserService, useValue: userServiceStub },        
        { provide: BeerService, useValue: beerServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
