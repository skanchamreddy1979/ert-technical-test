import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReplaySubject } from 'rxjs';
import { Beer } from 'src/app/beer.model';
import { FavouriteService } from 'src/app/shared/user/favourite/favourite.service';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  let userServiceStub: any;
  let favouriteServiceStub: any;

  beforeEach(async(() => {
    userServiceStub = {
      user: new ReplaySubject<User>()
    };

    favouriteServiceStub = { };

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
});
