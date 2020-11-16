import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, ReplaySubject } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../shared/beer.service';
import { Favourite } from '../shared/user/favourite/favourite.model';
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

  it('should set hasNoFavourites to false initially', () => {
    expect(component.hasNoFavourites).toBe(false);
  });

  it('should have empty list of beers initially', () => {
    expect(component.beers).toEqual([]);
  });

  it('should set hasNoFavourites to true when user is not provided', fakeAsync(() => 
  {
    userServiceStub.user.next(null);
    tick();
    expect(component.hasNoFavourites).toBe(true);
  }));

  it('should set hasNoFavourites to true when provided user has no favourites', fakeAsync(() => 
  {
    userServiceStub.user.next(new User());
    tick();
    expect(component.hasNoFavourites).toBe(true);
  }));

  it('should set hasNoFavourites to false when user with favourites is provided', fakeAsync(() => 
  {
    component.hasNoFavourites = true;
    beerServiceSpy.loadBeersByIds.and.returnValue(of([]));
    const user = new User();
    const favourite1 = new Favourite();
    favourite1.itemId = 1;
    const favourite2 = new Favourite();
    favourite2.itemId = 2;
    user.favourites = [ favourite1, favourite2 ];
    userServiceStub.user.next(user);
    tick();
    expect(component.hasNoFavourites).toBe(false);  
  }));

  it('should load favourite beers when user with favourites is provided', fakeAsync(() => 
  {
    component.hasNoFavourites = true;
    beerServiceSpy.loadBeersByIds.and.returnValue(of([]));
    const user = new User();
    const favourite1 = new Favourite();
    favourite1.itemId = 1;
    const favourite2 = new Favourite();
    favourite2.itemId = 2;
    user.favourites = [ favourite1, favourite2 ];
    userServiceStub.user.next(user);
    tick();
    expect(beerServiceSpy.loadBeersByIds).toHaveBeenCalledWith([1, 2]);  
  }));

  it('should update beers when they are loaded according to favourites of provided user', fakeAsync(() => 
  {
    const beer1 = new Beer();
    beer1.id = 1;
    const beer2 = new Beer();
    beer2.id = 2;
    const beers = [ beer1, beer2 ];
    beerServiceSpy.loadBeersByIds.and.returnValue(of(beers));

    const user = new User();
    const favourite1 = new Favourite();
    favourite1.itemId = 1;
    const favourite2 = new Favourite();
    favourite2.itemId = 2;
    user.favourites = [ favourite1, favourite2 ];
    userServiceStub.user.next(user);
    tick();

    expect(component.beers).toBeTruthy();
    expect(component.beers.length).toBe(2);
    expect(component.beers).toContain(beer1);
    expect(component.beers).toContain(beer2);    
  }));
});
