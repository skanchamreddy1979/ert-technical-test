import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, of, ReplaySubject } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { Favourite } from 'src/app/shared/user/favourite/favourite.model';
import { FavouriteService } from 'src/app/shared/user/favourite/favourite.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

import { BeerDetailsComponent } from './beer-details.component';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  let userServiceStub: any;
  let favouriteServiceStub: jasmine.SpyObj<FavouriteService>;
  let routeStub: any;

  beforeEach(async(() => {
    userServiceStub = {
      user: new BehaviorSubject<User>(null)
    };

    favouriteServiceStub = jasmine.createSpyObj('FavouriteService', ['addFavourite', 'deleteFavourite']);

    routeStub = {
      data: new ReplaySubject<{ beer: Beer }>()
    };

    TestBed.configureTestingModule({
      declarations: [ BeerDetailsComponent ],
      // imports: [ RouterTestingModule ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        { provide: FavouriteService, useValue: favouriteServiceStub},
        { provide: ActivatedRoute, useValue: routeStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no beer initially', () => {
    expect(component.beer).toBeFalsy();
  });

  it('should update beer when it is provided by route data', fakeAsync(() => {
    const beer = new Beer();
    beer.id = 1;
    routeStub.data.next({ beer: beer });
    tick();
    expect(component.beer).toBeTruthy();
    expect(component.beer.id).toBe(1);
  }));

  it('should set isFavourite to false initially', () => {
    expect(component.isFavourite).toBe(false);
  });

  it('should set isFavourite to true if beer is among favourites of current user when beer is provided by route data', fakeAsync(() => {
    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 1;
    user.favourites = [ favourite ];
    userServiceStub.user.next(user);
    tick();

    const beer = new Beer();
    beer.id = 1;
    routeStub.data.next({ beer: beer });
    tick();

    expect(component.isFavourite).toBe(true);
  }));

  it('should set isFavourite to false if beer is not among favourites of current user when beer is provided by route data',
    fakeAsync(() => {
    component.isFavourite = true;

    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 1;
    user.favourites = [ favourite ];
    userServiceStub.user.next(user);
    tick();

    const beer = new Beer();
    beer.id = 5;
    routeStub.data.next({ beer: beer });
    tick();

    expect(component.isFavourite).toBe(false);
  }));

  it('should set isFavourite to false if user is not signed in when beer is provided by route data', fakeAsync(() => {
    component.isFavourite = true;

    userServiceStub.user.next(null);
    tick();

    const beer = new Beer();
    beer.id = 1;
    routeStub.data.next({ beer: beer });
    tick();

    expect(component.isFavourite).toBe(false);
  }));

  it('should set isSignedIn to false initially', () => {
    expect(component.isSignedIn).toBe(false);
  });

  it('should set isSignedIn to true if the user is presented', fakeAsync(() => {
    userServiceStub.user.next(new User());
    tick();
    expect(component.isSignedIn).toBe(true);
  }));

  it('should set isSignedIn to false if the user is not presented', fakeAsync(() => {
    userServiceStub.user.next(null);
    tick();
    expect(component.isSignedIn).toBe(false);
  }));

  it('should set isFavourite to true when providing a user with the current beer among favourites', fakeAsync(() => {
    const beer = new Beer();
    beer.id = 1;
    component.beer = beer;
    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 1;
    user.favourites = [ favourite ];
    userServiceStub.user.next(user);
    tick();
    expect(component.isFavourite).toBe(true);
  }));

  it('should set isFavourite to false when providing a user without the current beer among favourites', fakeAsync(() => {
    component.isFavourite = true;
    const beer = new Beer();
    beer.id = 5;
    component.beer = beer;
    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 1;
    user.favourites = [ favourite ];
    userServiceStub.user.next(user);
    tick();
    expect(component.isFavourite).toBe(false);
  }));

  it('should set isFavourite to false when there is no user provided', fakeAsync(() => {
    component.isFavourite = true;
    userServiceStub.user.next(null);
    tick();
    expect(component.isFavourite).toBe(false);
  }));

  it('should set isFavourite to false when user with favourites is provided and there is no current beer loaded', fakeAsync(() => {
    component.isFavourite = true;
    component.beer = null;
    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 1;
    user.favourites = [ favourite ];
    userServiceStub.user.next(user);
    tick();
    expect(component.isFavourite).toBe(false);
  }));

  it('should add favourite with beer id on Add Favourite click', fakeAsync(() => {
    const beer = new Beer();
    beer.id = 1;
    component.beer = beer;
    favouriteServiceStub.addFavourite.and.returnValue(of(new Favourite()));
    component.onAddFavouriteClick();
    expect(favouriteServiceStub.addFavourite).toHaveBeenCalled();
    const addFavouriteArguments = favouriteServiceStub.addFavourite.calls.mostRecent().args;
    expect(addFavouriteArguments).toBeTruthy();
    expect(addFavouriteArguments[0]).toBeTruthy();
    expect(addFavouriteArguments[0].itemId).toBe(1);
  }));

  it('should delete favourite with beer id on Delete Favourite click', fakeAsync(() => {
    const beer = new Beer();
    beer.id = 1;
    component.beer = beer;
    favouriteServiceStub.deleteFavourite.and.returnValue(of(new Favourite()));
    component.onDeleteFavouriteClick();
    expect(favouriteServiceStub.deleteFavourite).toHaveBeenCalled();
    const deleteFavouriteArguments = favouriteServiceStub.deleteFavourite.calls.mostRecent().args;
    expect(deleteFavouriteArguments).toBeTruthy();
    expect(deleteFavouriteArguments[0]).toBeTruthy();
    expect(deleteFavouriteArguments[0].itemId).toBe(1);
  }));
});
