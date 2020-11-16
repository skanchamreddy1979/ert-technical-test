import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, ReplaySubject } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { Favourite } from 'src/app/shared/user/favourite/favourite.model';
import { FavouriteService } from 'src/app/shared/user/favourite/favourite.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  let userServiceStub: any;
  let favouriteServiceStub: jasmine.SpyObj<FavouriteService>;

  beforeEach(async(() => {
    userServiceStub = {
      user: new ReplaySubject<User>()
    };

    favouriteServiceStub = jasmine.createSpyObj('FavouriteService', ['addFavourite', 'deleteFavourite']);

    TestBed.configureTestingModule({
      declarations: [ ListItemComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: UserService, useValue: userServiceStub },
        { provide: FavouriteService, useValue: favouriteServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.beer = new Beer();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isSignedIn to false initially', () => {
    expect(component.isSignedIn).toBe(false);
  });

  it('should set isSignedIn to true when user is signed in', fakeAsync(() => {
    userServiceStub.user.next(new User());
    tick();
    expect(component.isSignedIn).toBe(true);
  }));

  it('should set isSignedIn to false when user is signed out', fakeAsync(() => {
    userServiceStub.user.next(null);
    tick();
    expect(component.isSignedIn).toBe(false);
  }));

  it('should set isFavourite to false initially', () => {
    expect(component.isFavourite).toBe(false);
  });

  it('should set isFavourite to true when user has beer among its favourites', fakeAsync(() => {
    const beer = new Beer();
    beer.id = 1;
    component.beer = beer;
    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 1;
    user.favourites = [ favourite ]
    userServiceStub.user.next(user);
    tick();
    expect(component.isFavourite).toBe(true);
  }));

  it('should set isFavourite to false when user has no beer among its favourites', fakeAsync(() => {
    const beer = new Beer();
    beer.id = 1;
    component.beer = beer;
    const user = new User();
    const favourite = new Favourite();
    favourite.itemId = 5;
    user.favourites = [ favourite ]
    userServiceStub.user.next(user);
    tick();
    expect(component.isFavourite).toBe(false);
  }));

  it('should set isFavourite to false when user is signed out', fakeAsync(() => {
    userServiceStub.user.next(null);
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
    var addFavouriteArguments = favouriteServiceStub.addFavourite.calls.mostRecent().args;    
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
    var deleteFavouriteArguments = favouriteServiceStub.deleteFavourite.calls.mostRecent().args;    
    expect(deleteFavouriteArguments).toBeTruthy();
    expect(deleteFavouriteArguments[0]).toBeTruthy();
    expect(deleteFavouriteArguments[0].itemId).toBe(1);
  }));
});
